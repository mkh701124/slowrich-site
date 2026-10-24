// node build/add-note.js  → 把一篇已核准的 IG 短文加進 /notes/（插在 build/notes.js 最前面）並重建。
// 不呼叫 IG API、不合併。{R} 留給 build/build.js 改寫；免責聲明也由 build 注入。
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const NOTES_PATH = path.join(__dirname, 'notes.js');
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const EXPORT_MARK = 'module.exports = [';
const MAX_COVER_BYTES = 25 * 1024 * 1024;
const FIELDS = ['slug', 'cat', 'title', 'desc', 'coverAlt', 'cover', 'body', 'w', 'h'];

const HELP = `
node build/add-note.js — 把一篇 IG 筆記加進 /notes/

在儲存庫根目錄執行。這個指令只改本機檔案並重建頁面，不會呼叫 IG、也不會合併。

用法：
  node build/add-note.js [--dry-run] --slug <slug> --cat <cat> --title <title> \\
      --desc <desc> --cover-alt <alt> --cover <image> --body <html>
  node build/add-note.js [--dry-run] < note.json

必填：slug、cat、title、desc、coverAlt、cover、body
選填：w、h。省略時從封面讀取（png 或 jpeg）。

旗標：
  --slug        ASCII kebab-case，例如 salary-split。發布後不要改。
  --cat         列表上的分類短標，例如「現金流」
  --title       筆記標題
  --desc        列表與 meta 描述
  --cover-alt   封面 alt（也可以寫 --coverAlt）
  --cover       封面圖路徑。會複製成 notes/<slug>/cover.png
  --body        已寫好的 HTML。CTA 放這裡。{R} 不要自己展開。
  --w --h       封面寬高（正整數）
  --dry-run     只驗證並列印將寫入的內容，不改檔、不跑 build
  --help, -h    顯示這段說明

stdin JSON 用同一組欄位名（coverAlt，不是 cover-alt）。
旗標若有給，會蓋過 JSON 裡的同名欄位。

body 裡的相對連結保持 {R}，例如 <a href="{R}lead/">。build/build.js 會依頁面深度改寫。
免責聲明不要寫進 body，build 會加在內文後面。

範例（不會寫入）：
  node build/add-note.js --dry-run < build/examples/add-note.example.json

  node build/add-note.js --dry-run \\
    --slug example-note-do-not-publish \\
    --cat 範例 \\
    --title '這是乾跑範例，不要發布' \\
    --desc '只做驗證，不會進 build/notes.js' \\
    --cover-alt '封面：乾跑範例' \\
    --cover build/examples/example-cover.png \\
    --body '<p>範例。<a href="{R}lead/">《投資新手入門清單》</a></p>'

寫入成功後請開預覽 PR。只有 Mike 說「可以合併上線」之後才合併。
`.trim();

function die(message) {
  console.error(message);
  process.exit(1);
}

function parseArgs(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') {
      if (flags.dryRun) die('參數重複：--dry-run');
      flags.dryRun = true;
      continue;
    }
    if (!a.startsWith('--') || a === '--') die('無法辨識的參數：' + a + '\n用 node build/add-note.js --help 看用法。');
    let key, val;
    const eq = a.indexOf('=');
    if (eq !== -1) {
      key = a.slice(2, eq);
      val = a.slice(eq + 1);
    } else {
      key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) die('參數 --' + key + ' 需要值');
      val = next;
      i++;
    }
    if (!/^[A-Za-z][A-Za-z0-9-]*$/.test(key)) die('無法辨識的參數：--' + key);
    if (Object.prototype.hasOwnProperty.call(flags, key)) die('參數重複：--' + key);
    flags[key] = val;
  }
  return flags;
}

function readJsonStdin() {
  if (process.stdin.isTTY) return {};
  const text = fs.readFileSync(0, 'utf8').replace(/^\uFEFF/, '').trim();
  if (!text) return {};
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    die('stdin 不是合法 JSON：' + e.message);
  }
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    die('stdin JSON 須為單一筆記物件，不是陣列');
  }
  const allowed = new Set(FIELDS);
  for (const key of Object.keys(data)) {
    if (!allowed.has(key)) die('JSON 有未知欄位：' + key);
  }
  return data;
}

function mergeInput(json, flags) {
  const known = new Set(['dryRun', 'slug', 'cat', 'title', 'desc', 'cover', 'body', 'w', 'h', 'cover-alt', 'coverAlt']);
  for (const key of Object.keys(flags)) {
    if (!known.has(key)) die('未知參數：--' + key + '\n用 node build/add-note.js --help 看用法。');
  }
  if (flags['cover-alt'] !== undefined && flags.coverAlt !== undefined) {
    die('請只使用 --cover-alt 或 --coverAlt 其中一個');
  }
  const input = Object.assign({}, json);
  const map = { slug: 'slug', cat: 'cat', title: 'title', desc: 'desc', cover: 'cover', body: 'body', w: 'w', h: 'h' };
  for (const [flag, field] of Object.entries(map)) {
    if (flags[flag] !== undefined) input[field] = flags[flag];
  }
  if (flags['cover-alt'] !== undefined) input.coverAlt = flags['cover-alt'];
  if (flags.coverAlt !== undefined) input.coverAlt = flags.coverAlt;
  return input;
}

function requiredString(value, name, trim) {
  if (typeof value !== 'string') die('缺少或型別錯誤：' + name + '（須為字串）。用法：node build/add-note.js --help');
  const out = trim ? value.trim() : value;
  if (!String(out).trim()) die('缺少或型別錯誤：' + name + '。用法：node build/add-note.js --help');
  return out;
}

function parseDim(value, name) {
  if (value === undefined || value === null || value === '') return undefined;
  if (typeof value === 'number') {
    if (!Number.isInteger(value) || value < 1 || value > 20000) die(name + ' 須為 1 到 20000 的整數');
    return value;
  }
  if (typeof value === 'string' && /^[1-9]\d*$/.test(value)) {
    const n = Number(value);
    if (n > 20000) die(name + ' 須為 1 到 20000 的整數');
    return n;
  }
  die(name + ' 須為正整數');
}

function startsWithBytes(buf, bytes) {
  if (buf.length < bytes.length) return false;
  for (let i = 0; i < bytes.length; i++) if (buf[i] !== bytes[i]) return false;
  return true;
}

function readPngSize(buf) {
  const sig = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (!startsWithBytes(buf, sig) || buf.length < 24) return null;
  if (buf.readUInt32BE(8) !== 13) return null;
  if (buf.toString('ascii', 12, 16) !== 'IHDR') return null;
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20), format: 'png' };
}

function readJpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  const sof = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let i = 2;
  while (i + 1 < buf.length) {
    if (buf[i] !== 0xff) return null;
    while (i < buf.length && buf[i] === 0xff) i++;
    if (i >= buf.length) return null;
    const marker = buf[i++];
    if (marker === 0xd9 || marker === 0xda) return null;
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
    if (i + 1 >= buf.length) return null;
    const len = buf.readUInt16BE(i);
    if (len < 2 || i + len > buf.length) return null;
    if (sof.has(marker)) {
      if (len < 7) return null;
      return { w: buf.readUInt16BE(i + 5), h: buf.readUInt16BE(i + 3), format: 'jpeg' };
    }
    i += len;
  }
  return null;
}

function readImageSize(buf) {
  return readPngSize(buf) || readJpegSize(buf);
}

function jsSingle(value) {
  return "'" + String(value)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029') + "'";
}

function jsTemplate(value) {
  return '`' + String(value)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029') + '`';
}

function storedBody(body) {
  if (body.startsWith('\n') || body.startsWith('\r\n')) return body;
  return '\n' + body;
}

function formatNote(note, nl) {
  const lines = [
    '{',
    '  slug:' + jsSingle(note.slug) + ',',
    '  cat:' + jsSingle(note.cat) + ',',
    '  title:' + jsSingle(note.title) + ',',
    '  desc:' + jsSingle(note.desc) + ',',
    '  coverAlt:' + jsSingle(note.coverAlt) + ',',
    '  w:' + note.w + ',h:' + note.h + ',',
    '  body:' + jsTemplate(note.body),
    '}'
  ];
  return lines.join(nl);
}

function loadNotes() {
  try {
    const resolved = require.resolve('./notes.js');
    delete require.cache[resolved];
    return require('./notes.js');
  } catch (e) {
    die('無法讀取 build/notes.js：' + e.message);
  }
}

function reloadNotes() {
  const resolved = require.resolve('./notes.js');
  delete require.cache[resolved];
  return require('./notes.js');
}

function evalNotes(source) {
  const module = { exports: {} };
  vm.runInNewContext(source, { module: module, exports: module.exports }, { filename: 'build/notes.js' });
  if (!Array.isArray(module.exports)) throw new Error('module.exports 不是陣列');
  return module.exports;
}

function sameNote(a, b) {
  return a && b && a.slug === b.slug && a.cat === b.cat && a.title === b.title && a.desc === b.desc &&
    a.coverAlt === b.coverAlt && a.w === b.w && a.h === b.h && a.body === b.body;
}

function assertExistingUntouched(before, after) {
  if (after.length !== before.length + 1) throw new Error('筆記數量不對');
  for (let i = 0; i < before.length; i++) {
    if (!sameNote(after[i + 1], before[i])) throw new Error('既有筆記被改到：' + (before[i] && before[i].slug));
  }
}

function dimLabel(note, fromImage, givenW, givenH) {
  const size = note.w + '×' + note.h;
  if (givenW === undefined && givenH === undefined) return size + '（從 ' + (fromImage ? fromImage.format : '圖片') + ' 讀取）';
  if (givenW !== undefined && givenH !== undefined) return size + '（使用傳入的 w、h）';
  if (givenW !== undefined) return size + '（w 為傳入值，h 從圖片讀取）';
  return size + '（h 為傳入值，w 從圖片讀取）';
}

function printPlan(note, block, dryRun, coverFrom, coverTo, dimText, warnings) {
  const head = dryRun
    ? 'dry-run：未寫入任何檔案，也沒有執行 build。'
    : '已新增筆記，並執行 node build/build.js。';
  const lines = [
    head,
    '',
    'slug: ' + note.slug,
    'cat: ' + note.cat,
    'title: ' + note.title,
    'desc: ' + note.desc,
    'coverAlt: ' + note.coverAlt,
    'cover: ' + coverFrom + ' → ' + coverTo,
    '尺寸: ' + dimText,
    'body: 原樣寫入（{R} 不展開，免責聲明不在 body）',
    '',
    (dryRun ? '將插入' : '已插入') + ' build/notes.js 陣列最前面：',
    '',
    block
  ];
  if (warnings.length) {
    lines.push('', '注意：');
    for (const warning of warnings) lines.push('- ' + warning);
  }
  console.log(lines.join('\n'));
}

function printNextSteps(slug) {
  console.log(`
下一步：開預覽 PR。先不要合併。
  1. 開分支並提交這次變更。git status 看 build 動到哪些檔，預期包含：
       build/notes.js
       notes/${slug}/cover.png
       notes/${slug}/index.html
       以及列表、首頁、sitemap 這類由 build 重寫的頁面
     不要提交 lead/、Apps Script、Sheet 設定，也不要改既有筆記的封面或內文。
  2. 推上遠端，開預覽 PR，讓 Mike 看預覽。
  3. 只有 Mike 說「可以合併上線」之後才合併。在那之前不要合併。

     git checkout -b notes/${slug}
     git add build/notes.js notes/${slug} notes/index.html index.html sitemap.xml
     git status
     git commit -m "Add note ${slug}"
     git push -u origin HEAD
`);
}

function buildNextSource(original, note) {
  const count = original.split(EXPORT_MARK).length - 1;
  if (count !== 1) throw new Error('build/notes.js 應恰好有一處 module.exports = [');
  const at = original.indexOf(EXPORT_MARK) + EXPORT_MARK.length;
  const nl = original.includes('\r\n') ? '\r\n' : '\n';
  const block = formatNote(note, nl);
  const next = original.slice(0, at) + nl + block + ',' + original.slice(at);
  if (!next.endsWith(original.slice(at)) || !next.startsWith(original.slice(0, at))) {
    throw new Error('插入後的檔案前後文對不上');
  }
  return { next, block };
}

function main() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(HELP);
    return;
  }
  const flags = parseArgs(process.argv.slice(2));
  const input = mergeInput(readJsonStdin(), flags);
  const slug = requiredString(input.slug, 'slug', true);
  const cat = requiredString(input.cat, 'cat', true);
  const title = requiredString(input.title, 'title', true);
  const desc = requiredString(input.desc, 'desc', true);
  const coverAlt = requiredString(input.coverAlt, 'coverAlt', true);
  const cover = requiredString(input.cover, 'cover', true);
  const body = requiredString(input.body, 'body', false);
  if (!SLUG_RE.test(slug)) die('slug 須為 ASCII kebab-case（^[a-z0-9]+(?:-[a-z0-9]+)*$）：' + slug);

  const notes = loadNotes();
  if (!Array.isArray(notes)) die('build/notes.js 不是陣列');
  if (notes.some(note => note && note.slug === slug)) die('slug 已存在於 build/notes.js：' + slug);

  const destDir = path.join(ROOT, 'notes', slug);
  const destCover = path.join(destDir, 'cover.png');
  if (fs.existsSync(destDir) && fs.readdirSync(destDir).length) {
    die('notes/' + slug + '/ 已有內容，拒絕覆寫。');
  }

  const srcCover = path.resolve(process.cwd(), cover);
  if (!fs.existsSync(srcCover) || !fs.statSync(srcCover).isFile()) die('找不到封面檔：' + cover);
  const srcStat = fs.statSync(srcCover);
  if (srcStat.size > MAX_COVER_BYTES) die('封面檔超過 25MB：' + cover);
  const image = fs.readFileSync(srcCover);
  const detected = readImageSize(image);
  let givenW = parseDim(input.w, 'w');
  let givenH = parseDim(input.h, 'h');
  const warnings = [];
  if ((givenW === undefined || givenH === undefined) && !detected) {
    die('無法從封面讀取寬高（支援 png、jpeg）。請改傳 --w 與 --h。');
  }
  if (detected) {
    if (detected.w < 1 || detected.h < 1 || detected.w > 20000 || detected.h > 20000) {
      die('封面尺寸超出範圍：' + detected.w + '×' + detected.h);
    }
    if (givenW !== undefined && givenW !== detected.w) warnings.push('傳入的 w=' + givenW + ' 與圖片寬度 ' + detected.w + ' 不同，採用傳入值。');
    if (givenH !== undefined && givenH !== detected.h) warnings.push('傳入的 h=' + givenH + ' 與圖片高度 ' + detected.h + ' 不同，採用傳入值。');
  }
  const w = givenW !== undefined ? givenW : detected.w;
  const h = givenH !== undefined ? givenH : detected.h;
  if (detected && detected.format !== 'png') {
    warnings.push('封面是 ' + detected.format + '，仍會把原始位元組複製成 notes/' + slug + '/cover.png。頁面依這個路徑取圖，請盡量改用 PNG。');
  }
  if (!detected) warnings.push('無法判斷封面是 png 或 jpeg，仍會複製成 notes/' + slug + '/cover.png，並使用傳入的 w、h。');

  const note = { slug, cat, title, desc, coverAlt, w, h, body: storedBody(body) };
  const original = fs.readFileSync(NOTES_PATH, 'utf8');
  let built;
  try {
    built = buildNextSource(original, note);
    const preview = evalNotes(built.next);
    if (!sameNote(preview[0], note)) throw new Error('新筆記讀回後與輸入不一致');
    assertExistingUntouched(notes, preview);
  } catch (e) {
    die('沒有寫入。產生的 build/notes.js 無法使用：' + e.message);
  }

  const coverTo = path.join('notes', slug, 'cover.png');
  const dimText = dimLabel(note, detected, givenW, givenH);
  if (flags.dryRun) {
    printPlan(note, built.block, true, cover, coverTo, dimText, warnings);
    console.log('下一步（這次沒有寫入）：拿掉 --dry-run 才會複製封面、更新 build/notes.js、執行 node build/build.js。完成後開預覽 PR；只有 Mike 說「可以合併上線」才合併。');
    return;
  }

  const dirExisted = fs.existsSync(destDir);
  let wroteNotes = false;
  try {
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(srcCover, destCover);
    fs.writeFileSync(NOTES_PATH, built.next);
    wroteNotes = true;
    const written = reloadNotes();
    if (!sameNote(written[0], note)) throw new Error('寫入後讀回比對失敗');
    assertExistingUntouched(notes, written);
    execFileSync(process.execPath, [path.join(ROOT, 'build', 'build.js')], { cwd: ROOT, stdio: 'inherit' });
  } catch (e) {
    if (wroteNotes) fs.writeFileSync(NOTES_PATH, original);
    if (!dirExisted) fs.rmSync(destDir, { recursive: true, force: true });
    else fs.rmSync(destCover, { force: true });
    die('寫入或建置失敗，已還原 build/notes.js 與這次的封面。若頁面寫到一半，請再執行 node build/build.js。\n' + (e && e.message ? e.message : String(e)));
  }

  printPlan(note, built.block, false, cover, coverTo, dimText, warnings);
  console.log('寫入：');
  console.log('  build/notes.js');
  console.log('  ' + coverTo);
  console.log('已執行：node build/build.js（從儲存庫根目錄）');
  printNextSteps(slug);
}

main();
