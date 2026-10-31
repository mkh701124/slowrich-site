// 詞條頁雙語 SEO：只從 name + aliases 推 zh／en，不手改靜態 HTML。
// 推不出英文（純中文、沒有英文別名）時回傳 null，該頁維持原樣。
const HAN = /[\u4e00-\u9fff]/;

function hasHan(s) {
  return HAN.test(s);
}

function isAsciiLatin(s) {
  return /^[\x20-\x7e]+$/.test(s) && /[A-Za-z]/.test(s);
}

// 純中文別名不拿來當英文（例如「法人說明會」）。含漢字的混合字串也不是英文。
function isPureChinese(s) {
  return hasHan(s) && !/[A-Za-z]/.test(s);
}

// 英文縮寫：EPS、ETF、TE、P/E、YoY。多個單字的片語不算。
function isEnglishAbbrev(s) {
  const t = String(s || '').trim();
  if (!isAsciiLatin(t) || /\s/.test(t)) return false;
  const compact = t.replace(/[^A-Za-z0-9]/g, '');
  if (!compact || !/[A-Za-z]/.test(compact)) return false;
  if (compact.length <= 6 && compact === compact.toUpperCase()) return true;
  if (compact.length <= 5 && /[A-Z]/.test(compact) && /[a-z]/.test(compact)) return true;
  return false;
}

// 完整英文：Constituents、Tracking Error、Investor Conference。縮寫排除。
function isFullEnglish(s) {
  const t = String(s || '').trim();
  if (!isAsciiLatin(t) || isEnglishAbbrev(t)) return false;
  return /^[A-Za-z0-9][A-Za-z0-9\s/&.'-]*$/.test(t);
}

function labels(term) {
  return [term && term.name, ...((term && term.aliases) || [])]
    .map(s => String(s == null ? '' : s).trim())
    .filter(Boolean);
}

// 中文主名：name 含漢字就用 name；否則取第一個含漢字的別名（EPS → 每股盈餘）。
function deriveZh(term) {
  const name = String((term && term.name) || '').trim();
  if (hasHan(name)) return name;
  return labels(term).find(hasHan) || null;
}

// 英文主名：優先完整片語，否則常見縮寫。跳過純中文。多個同層取出現順序第一個。
function deriveEn(term) {
  const items = labels(term).filter(s => isAsciiLatin(s) && !isPureChinese(s));
  return items.find(isFullEnglish) || items.find(isEnglishAbbrev) || null;
}

const META_MAX = 120;

// 雙語前綴 + 白話。超過 META_MAX 只截 plain，保留「中文 英文：…」整段。
function termMetaDescription(line, plain, max = META_MAX) {
  const prefix = `${line}。`;
  const body = String(plain == null ? '' : plain).trim();
  if ((prefix + body).length <= max) return prefix + body;
  const room = max - prefix.length;
  if (room <= 1) return prefix;
  return prefix + body.slice(0, room - 1) + '…';
}

function termBilingual(term) {
  const zh = deriveZh(term);
  const en = deriveEn(term);
  if (!zh || !en || zh === en) return null;
  const name = String(term.name || '').trim();
  const englishPrimary = isEnglishAbbrev(name);
  // 主顯示名是英文縮寫時，標題用縮寫（EPS 中文：每股盈餘），完整片語留給 alternateName。
  const shownEn = englishPrimary ? name : en;
  const line = englishPrimary ? `${shownEn} 中文：${zh}` : `${zh} 英文：${shownEn}`;
  const alternateName = [];
  const push = (s) => {
    const v = String(s == null ? '' : s).trim();
    if (!v || v === zh || alternateName.includes(v)) return;
    alternateName.push(v);
  };
  push(shownEn);
  push(en);
  for (const a of term.aliases || []) push(a);
  push(name);
  return {
    zh,
    en,
    shownEn,
    englishPrimary,
    line,
    title: `${line}｜白話解釋`,
    alternateName,
  };
}

module.exports = {
  termBilingual,
  termMetaDescription,
  META_MAX,
  isEnglishAbbrev,
  isFullEnglish,
};
