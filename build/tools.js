// 試算工具。頁殼走 build（導覽、canonical、文末 lead）。計算機留在原本網址，這裡只列卡片。
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const { CALC_TITLE, CALC_DESC } = require('./family.js');

const INTRO = '把站上的試算放在一起。數字是假設，用來比較，不是保證。';
const WARN = '⚠️ 本內容僅供教育參考，非投資建議，投資有風險，請自行評估。';

// href 是站內路徑，不含開頭斜線。產生頁面時會加上該頁的相對前綴。
const TOOLS = [
  {
    title: CALC_TITLE,
    href: 'family/save-to-18/',
    desc: CALC_DESC
  }
];

function card(tool) {
  return `<a class="card" href="{R}${tool.href}"><small>試算</small><br><b>${tool.title}</b><p>${tool.desc}</p><span class="more">打開試算 →</span></a>`;
}

module.exports = function addTools(ctx) {
  const { page, head, out, SITE_URL } = ctx;
  out.push(page({
    p: 'tools/',
    title: '試算工具',
    desc: INTRO,
    cssVer: '10',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: '試算工具',
      description: INTRO,
      url: SITE_URL + '/tools/',
      inLanguage: 'zh-Hant-TW'
    },
    body: head('試算工具', INTRO) + `
<section><div class="w">
<div class="grid g2">
${TOOLS.map(card).join('\n')}
</div>
</div></section>
<section style="padding-top:0"><div class="w narrow"><div class="warn">${WARN}</div></div></section>`
  }));
  verifyTools(SITE_URL);
};

function verifyTools(SITE_URL) {
  const rel = 'tools/index.html';
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const title = '試算工具｜慢慢變有錢';
  const canonical = SITE_URL + '/tools/';
  if (!html.includes('<title>' + title + '</title>')) throw new Error('title 不符：' + rel);
  if (!html.includes('<h1>試算工具</h1>')) throw new Error('h1 不符：' + rel);
  if (!html.includes('rel="canonical" href="' + canonical + '"')) throw new Error('canonical 不符：' + rel);
  if (!html.includes('property="og:title" content="' + title + '"')) throw new Error('og:title 不符：' + rel);
  if (!html.includes('property="og:url" content="' + canonical + '"')) throw new Error('og:url 不符：' + rel);
  if (!html.includes('property="og:description" content="' + INTRO + '"')) throw new Error('og:description 不符：' + rel);
  if ((html.match(/class="warn"/g) || []).length !== 1) throw new Error('免責框不是一個：' + rel);
  if (html.split('僅供教育參考，非投資建議').length - 1 !== 2) throw new Error('免責句應為內文一次、頁尾一次：' + rel);
  if (!html.includes('aria-current="page">試算工具</a>')) throw new Error('試算工具沒有標成目前頁：' + rel);
  if (!html.includes('href="../family/save-to-18/"')) throw new Error('試算卡沒有連到存到 18 歲：' + rel);
  if (!html.includes(CALC_DESC)) throw new Error('試算卡沒有沿用存到 18 歲的說明：' + rel);
  if (!html.includes('<b>' + CALC_TITLE + '</b>')) throw new Error('試算卡標題不符：' + rel);
  const notes = fs.readFileSync(path.join(ROOT, 'notes/index.html'), 'utf8');
  const nav = (notes.match(/<nav>([\s\S]*?)<\/nav>/) || [])[1] || '';
  const labels = [...nav.matchAll(/>([^<]+)<\/a>/g)].map(m => m[1]);
  const expect = ['新手入門', '筆記', '親子理財', '試算工具', '股票新手翻譯器', '慢慢推薦', '關於', '免費清單'];
  if (labels.join('|') !== expect.join('|')) throw new Error('筆記頁導覽順序不符：' + labels.join('、'));
  if (nav.includes('aria-current="page">試算工具</a>')) throw new Error('筆記頁不該把試算工具標成目前頁');
  if (!notes.includes('>親子理財</a>・<a href="../tools/">試算工具</a>・<a href="../recommend/">慢慢推薦</a>')) throw new Error('頁尾順序不符');
  checkLocalRefs(rel, html);
}

function checkLocalRefs(rel, html) {
  const dir = path.dirname(path.join(ROOT, rel));
  const urls = [];
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) urls.push(m[1]);
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    m[1].split(',').forEach(part => {
      const u = part.trim().split(/\s+/)[0];
      if (u) urls.push(u);
    });
  }
  for (const raw of urls) {
    if (/^(https?:|mailto:|#)/.test(raw)) continue;
    const clean = raw.split('#')[0].split('?')[0];
    if (!clean) continue;
    let file = clean.startsWith('/') ? path.join(ROOT, clean) : path.normalize(path.join(dir, clean));
    if (file.endsWith(path.sep)) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) throw new Error('斷開的內部連結 ' + rel + ' → ' + raw);
  }
}
