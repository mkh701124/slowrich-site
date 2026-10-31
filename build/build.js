// node build/build.js  → 產生所有頁面（clean URL：每頁一個資料夾 index.html，全部相對路徑）
const fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'..');
// 正式網址：目前預計 GitHub Pages 專案路徑；接自訂網域時只改這行（並加 CNAME，見 README）
const SITE_URL=(process.env.SITE_URL||'https://slowrichnotes.com').replace(/\/$/,'');
global.window={};require('./glossary-data.js');const G=window.GLOSSARY;
const ARTS=require('./articles.js');
const NOTES=require('./notes.js');
const {termBilingual,termMetaDescription}=require('./term-bilingual.js');
const noteSlugOk=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;const noteSeen=new Set();
for(const n of NOTES){if(!noteSlugOk.test(n.slug)||noteSeen.has(n.slug))throw new Error('note slug 須為 ASCII kebab-case 且不可重複：'+n.slug);noteSeen.add(n.slug);if(!fs.existsSync(path.join(ROOT,'notes',n.slug,'cover.png')))throw new Error('缺少筆記封面：notes/'+n.slug+'/cover.png');}
// 與 /learn/ 重複、已從 build/notes.js 移除的舊網址。GitHub Pages 沒有 301，只留 meta refresh 殘頁。
const NOTE_REDIRECTS=['before-you-invest-3-things','10-terms-for-financial-news','dca-vs-lump-sum','what-is-a-stock','compound-interest','5-beginner-mistakes','what-is-etf','open-brokerage-account','5-questions-before-investing','twd-fx-outflow'];
const artBySlug=Object.fromEntries(ARTS.map(a=>[a.slug,a]));
for(const s of NOTE_REDIRECTS){
  if(!artBySlug[s])throw new Error('轉址目標不存在：/learn/'+s+'/');
  if(NOTES.some(n=>n.slug===s))throw new Error('與 /learn/ 重複的筆記仍在 build/notes.js：'+s);
}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// term slugs
const used=new Set(),slug={};
const kebab=s=>s.toLowerCase().replace(/\//g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
for(const t of G.terms){const asc=[t.name,...t.aliases].find(x=>/^[\x20-\x7e]+$/.test(x));let s=asc?kebab(asc):t.id;if(!s||used.has(s))s=t.id;used.add(s);slug[t.id]=s;}
const T=Object.fromEntries(G.terms.map(t=>[t.id,t]));const C=Object.fromEntries(G.categories.map(c=>[c.id,c]));
const cta=R=>`<section><div class="w"><div class="leadbox"><div><div class="tag l">免費下載</div><h2>《投資新手入門清單》</h2><p class="sub">開始投資前，你該知道的 10 件事，加上 12 個新手名詞小抄。留下 Email，清單寄到你的信箱。</p><a class="btn g" href="${R}lead/">免費領取 →</a></div><div class="prom"><div>✔ 開始投資前該知道的 10 件事</div><div>✔ 12 個新手名詞小抄</div><div>✔ 白話說明，零基礎也看得懂</div></div></div></div></section>`;
const ORG_NAME='慢慢變有錢';
const ORG_EMAIL='slowrichnotes@gmail.com';
const ORG_LOGO=SITE_URL+'/assets/og.png';
const IG_URL='https://www.instagram.com/slow.rich.notes/';
// 文章與筆記資料沒有發布日，Article 不填 datePublished，也不做 FAQ。
function articleLd({headline,description,url,image,crumbs}){
  return {'@context':'https://schema.org','@graph':[
    {'@type':'Article',headline,description,url,mainEntityOfPage:url,image:image||ORG_LOGO,inLanguage:'zh-Hant-TW',
      author:{'@type':'Organization',name:ORG_NAME,url:SITE_URL+'/'},
      publisher:{'@type':'Organization',name:ORG_NAME,url:SITE_URL+'/',logo:{'@type':'ImageObject',url:ORG_LOGO}}},
    {'@type':'BreadcrumbList',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:c.url}))}
  ]};
}
function crumbLd(sectionName,sectionUrl,title,pageUrl){
  return [{name:'首頁',url:SITE_URL+'/'},{name:sectionName,url:sectionUrl},{name:title,url:pageUrl}];
}
function definedTermLd(t,url,bi){
  const def=t&&t.plain&&String(t.plain).trim();
  if(!def)return null;
  const ld={'@context':'https://schema.org','@type':'DefinedTerm',name:bi?bi.zh:t.name,description:def,url,
    inDefinedTermSet:{'@type':'DefinedTermSet',name:'股票新手翻譯器',url:SITE_URL+'/terms/'}};
  if(bi&&bi.alternateName.length)ld.alternateName=bi.alternateName;
  return ld;
}
function websiteLd(){
  return {'@context':'https://schema.org','@graph':[
    {'@type':'Organization','@id':SITE_URL+'/#organization',name:ORG_NAME,url:SITE_URL+'/',email:ORG_EMAIL,logo:ORG_LOGO,sameAs:[IG_URL]},
    {'@type':'WebSite','@id':SITE_URL+'/#website',name:ORG_NAME,url:SITE_URL+'/',publisher:{'@id':SITE_URL+'/#organization'}}
  ]};
}
function page({p,title,desc,body,type='website',noCta=false,extraHead='',image='',canonical,ogUrl,robots,jsonLd,afterCta='',cssVer='6'}){
  const depth=p===''?0:p.split('/').filter(Boolean).length;const R='../'.repeat(depth)||'./';
  const rel=s=>s.replace(/\{R\}/g,R).replace(/\{(t\d+)\}/g,(m,id)=>slug[id]);
  const url=SITE_URL+'/'+p;const full=title.includes('慢慢變有錢')?title:title+'｜慢慢變有錢';
  // 404 不宣告 /404/ 為正規網址：noindex、og:url 指回首頁、不輸出 JSON-LD。
  if(p==='404/'){canonical=false;ogUrl=SITE_URL+'/';robots='noindex';jsonLd=null;}
  const canonHref=canonical===false?'':(canonical||url);
  const ogHref=ogUrl===false?'':(ogUrl||url);
  const ogImage=image?(String(image).startsWith('http')?image:SITE_URL+image):SITE_URL+'/assets/og.png';
  const robotsTag=robots?`<meta name="robots" content="${esc(robots)}">`:'';
  const canonTag=canonHref?`<link rel="canonical" href="${esc(canonHref)}">`:'';
  const ogUrlTag=ogHref?`<meta property="og:url" content="${esc(ogHref)}">`:'';
  const ld=jsonLd?`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g,'\\u003c')}</script>`:'';
  const html=`<!doctype html><html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(full)}</title><meta name="description" content="${esc(desc)}">${robotsTag}${canonTag}
<meta property="og:type" content="${type}"><meta property="og:site_name" content="慢慢變有錢"><meta property="og:title" content="${esc(full)}"><meta property="og:description" content="${esc(desc)}">${ogUrlTag}<meta property="og:image" content="${ogImage}"><meta property="og:locale" content="zh_TW"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#1E3A8A"><link rel="icon" href="${R}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="${R}assets/site.css?v=${cssVer}">${extraHead}${ld}</head><body>
<header class="top"><div class="w nav"><a class="logo" href="${R}">慢慢變有錢<span>.</span></a><input type="checkbox" id="navtoggle" class="navtoggle" aria-label="選單"><label class="navbtn" for="navtoggle" aria-hidden="true"><span></span></label><nav><a href="${R}learn/">新手入門</a><a href="${R}notes/">筆記</a><a href="${R}terms/">股票新手翻譯器</a><a href="${R}tools/">慢慢推薦</a><a href="${R}about/">關於</a><a class="cta" href="${R}lead/">免費清單</a></nav></div></header>
<main>${rel(body)}${noCta?'':cta(R)}${rel(afterCta)}</main>
<footer><div class="w"><b style="color:#fff">慢慢變有錢</b>｜IG <a href="https://www.instagram.com/slow.rich.notes/" rel="noopener">@slow.rich.notes</a>｜<a href="mailto:slowrichnotes@gmail.com">slowrichnotes@gmail.com</a><br><a href="${R}privacy/">隱私權政策</a>・<a href="${R}disclaimer/">免責聲明</a>・<a href="${R}tools/">慢慢推薦</a>・<a href="${R}about/">關於</a><br><span class="d">僅供教育參考，非投資建議</span>　© 2026 慢慢變有錢</div></footer></body></html>`;
  const dir=path.join(ROOT,p);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,p==='404/'?'../404.html':'index.html'),html);
  return p;
}
const out=[];const head=(h,s,crumb='')=>`<div class="pagehead"><div class="w narrow">${crumb}<h1>${h}</h1>${s?`<p>${s}</p>`:''}</div></div>`;
const artCard=a=>`<a class="card" href="{R}learn/${a.slug}/"><small>${a.cat}</small><br><b>${esc(a.title)}</b><p>${esc(a.desc)}</p><span class="more">閱讀 →</span></a>`;
const noteCard=n=>`<a class="card" href="{R}notes/${n.slug}/"><small>${esc(n.cat)}</small><br><b>${esc(n.title)}</b><p>${esc(n.desc)}</p><span class="more">閱讀 →</span></a>`;
const noteTile=n=>`<a class="card notecard" href="{R}notes/${n.slug}/"><img src="{R}notes/${n.slug}/cover.png" alt="${esc(n.coverAlt)}" width="${n.w}" height="${n.h}"><span class="pad"><small>${esc(n.cat)}</small><br><b>${esc(n.title)}</b><p>${esc(n.desc)}</p><span class="more">閱讀 →</span></span></a>`;
const termCard=t=>`<a class="card tcard" href="{R}terms/${slug[t.id]}/"><b>${esc(t.name)}</b><p>${esc(t.plain)}</p></a>`;
// HOME
out.push(page({p:'',title:'慢慢變有錢｜投資新手的白話筆記',desc:'給投資新手的白話筆記：看懂名詞、建立觀念、找到自己的步調。不報明牌，只講你真的用得到的事。',jsonLd:websiteLd(),body:`
<div class="hero"><div class="w herogrid"><div class="herotxt"><div class="tag">IG @slow.rich.notes</div><h1>投資不用急，<br><em>慢慢變有錢</em>就好。</h1><p>給投資新手的白話筆記：看懂名詞、建立觀念、找到自己的步調。<br>不報明牌，只講你真的用得到的事。</p><div class="btns"><a class="btn g" href="{R}lead/">免費領《投資新手入門清單》</a><a class="btn o" href="{R}learn/">從這裡開始</a></div><p style="margin:12px 0 0;font-size:15px">一人公司做事系統？<a href="{R}lead/oneperson/" style="color:#F59E0B;font-weight:700">領《一人公司：下載員工清單》</a></p></div><div class="mascot"><picture><source srcset="{R}assets/img/manman.webp" type="image/webp"><img src="{R}assets/img/manman.png" width="210" height="720" alt="品牌大使慢慢：綁馬尾、穿藍色上衣的女孩，微笑站著" fetchpriority="high" decoding="async"></picture></div></div></div>
<section><div class="w"><h2>第一次投資？從這三步開始</h2><p class="sub">照順序讀，先把基本觀念建立起來。</p><div class="grid g3">
<a class="card" href="{R}learn/before-you-invest-3-things/"><div class="i">①</div><b>先顧好地基</b><p>緊急預備金、高利率負債、寫下目標，投資前先做好。</p><span class="more">閱讀 →</span></a>
<a class="card" href="{R}terms/"><div class="i">②</div><b>看懂基本名詞</b><p>ETF、殖利率、本益比……用一句白話講清楚。</p><span class="more">打開股票新手翻譯器 →</span></a>
<a class="card" href="{R}learn/dca-vs-lump-sum/"><div class="i">③</div><b>選一個能持續的方法</b><p>定期定額或單筆投入，先想清楚再出發。</p><span class="more">閱讀 →</span></a></div></div></section>
<section style="padding-top:0"><div class="w"><h2>股票新手翻譯器</h2><p class="sub">看不懂財經新聞？${G.terms.length} 個術語翻成人話。</p><div class="grid g4">${['t40','t15','t8','t16'].map(id=>termCard(T[id])).join('')}</div>
<p style="text-align:center;margin-top:18px"><a class="btn b" href="{R}terms/">查更多名詞 →</a></p></div></section>
<section style="padding-top:0"><div class="w"><h2>最新筆記</h2><p class="sub">同步 IG @slow.rich.notes 圖文。</p><div class="grid g3">${ARTS.slice().reverse().slice(0,3).map(artCard).join('')}</div><p style="text-align:center;margin-top:18px"><a class="btn b" href="{R}learn/">看全部 ${ARTS.length} 篇 →</a></p></div></section>
<section style="padding-top:0"><div class="w"><h2>筆記</h2><p class="sub">同一則 IG，寫成可以慢慢讀的短文。</p><div class="grid g3">${NOTES.slice(0,3).map(noteCard).join('')}</div><p style="text-align:center;margin-top:18px"><a class="btn b" href="{R}notes/">看全部 ${NOTES.length} 篇筆記 →</a></p></div></section>
<section style="padding-top:0;padding-bottom:0"><div class="w"><div class="card" style="text-align:center"><h2>我們的承諾</h2><p>不報明牌・不帶單・不給買賣建議。只用白話，陪你慢慢建立自己的投資習慣。</p><a class="more" href="{R}about/">關於慢慢變有錢 →</a></div></div></section>`}));
// LEARN
out.push(page({p:'learn/',title:'新手入門筆記',desc:'給投資新手的白話文章：起步準備、觀念、工具與心態。',body:head('新手入門筆記','從零開始，一篇一篇慢慢讀。')+`<section><div class="w"><div class="grid g3">${ARTS.map(artCard).join('')}</div></div></section>`}));
ARTS.forEach((a,i)=>{const rel=a.terms.length?`<h2>相關名詞</h2><div class="chips">${a.terms.map(id=>`<a href="{R}terms/${slug[id]}/">${esc(T[id].name)}</a>`).join('')}</div>`:'';
 const nav=`<p style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:24px">${i>0?`<a href="{R}learn/${ARTS[i-1].slug}/">← ${esc(ARTS[i-1].title)}</a>`:'<span></span>'}${i<ARTS.length-1?`<a href="{R}learn/${ARTS[i+1].slug}/">${esc(ARTS[i+1].title)} →</a>`:''}</p>`;
 const learnUrl=SITE_URL+'/learn/'+a.slug+'/';
 out.push(page({p:`learn/${a.slug}/`,type:'article',title:a.title,desc:a.desc,jsonLd:articleLd({headline:a.title,description:a.desc,url:learnUrl,crumbs:crumbLd('新手入門',SITE_URL+'/learn/',a.title,learnUrl)}),body:head(esc(a.title),esc(a.desc),`<div class="crumb"><a href="{R}">首頁</a> › <a href="{R}learn/">新手入門</a> › ${a.cat}</div>`)+`<div class="w narrow"><article class="prose">${a.body}${rel}<div class="warn">⚠️ 本內容僅供教育參考，非投資建議，投資有風險，請自行評估。</div>${nav}</article></div>`}));});
// NOTES（IG 短文；/learn/ 課程文保持不變）
// 筆記列表只交叉連結既有 /learn/ 文章（NOTE_REDIRECTS），不寫回 build/notes.js、也不當權威筆記頁。
const learnCrossLinks=NOTE_REDIRECTS.map(s=>artCard(artBySlug[s])).join('');
out.push(page({p:'notes/',title:'投資新手筆記｜ETF、存錢與財經新聞白話',desc:'把 IG 圖文寫成可以慢慢讀的短文。數字若出現，都是假設例子，僅供教育參考，非投資建議。',body:head('投資新手筆記','把 IG 圖文寫成可以慢慢讀的短文。觀念為主，不報明牌。')+`<section><div class="w"><div class="grid g3">${NOTES.map(noteTile).join('')}</div></div></section>`+`<section style="padding-top:0"><div class="w"><h2>新手入門也有這些</h2><p class="sub">這幾篇完整版在新手入門，點進去讀——避免與筆記重複。</p><div class="grid g3">${learnCrossLinks}</div><p style="text-align:center;margin-top:18px"><a class="btn b" href="{R}learn/">看全部新手入門 →</a></p></div></section>`}));
// 相關筆記只加在 /notes/<slug>/ 正文頁。候選＝build/notes.js（陣列前面＝較新）。
// 先同 cat（維持陣列順序），不足 3 篇再依陣列順序補其他分類。排除自己與 NOTE_REDIRECTS。不讀手動 related 欄位。
const redirectSlug=new Set(NOTE_REDIRECTS);
function relatedNotes(n){
  const pool=NOTES.filter(x=>x&&x.slug!==n.slug&&!redirectSlug.has(x.slug));
  const picked=[...pool.filter(x=>x.cat===n.cat),...pool.filter(x=>x.cat!==n.cat)].slice(0,3);
  const slugs=picked.map(x=>x.slug);
  if(picked.length>3||slugs.includes(n.slug)||slugs.some(s=>redirectSlug.has(s))||new Set(slugs).size!==slugs.length||slugs.some(s=>!noteSlugOk.test(s)))throw new Error('相關筆記選取不合法：'+n.slug);
  return picked;
}
function relatedNotesHtml(n){
  const picked=relatedNotes(n);
  if(!picked.length)return '';
  const items=picked.map(x=>`<li><a href="{R}notes/${x.slug}/"><span class="relcat">${esc(x.cat)}</span>${esc(x.title)}</a></li>`).join('');
  return `<section class="related-sec"><div class="w"><nav class="related-notes" aria-labelledby="related-notes-heading"><h2 id="related-notes-heading">相關筆記</h2><ul>${items}</ul></nav></div></section>`;
}
NOTES.forEach(n=>{const noteUrl=SITE_URL+'/notes/'+n.slug+'/';const noteImage=SITE_URL+'/notes/'+n.slug+'/cover.png';const related=relatedNotesHtml(n);out.push(page({p:`notes/${n.slug}/`,type:'article',title:n.title,desc:n.desc,image:`/notes/${n.slug}/cover.png`,cssVer:related?'7':'6',afterCta:related,jsonLd:articleLd({headline:n.title,description:n.desc,url:noteUrl,image:noteImage,crumbs:crumbLd('筆記',SITE_URL+'/notes/',n.title,noteUrl)}),body:head(esc(n.title),esc(n.desc),`<div class="crumb"><a href="{R}">首頁</a> › <a href="{R}notes/">筆記</a> › ${esc(n.cat)}</div>`)+`<div class="w narrow"><article class="prose"><figure class="coverfig"><img src="{R}notes/${n.slug}/cover.png" alt="${esc(n.coverAlt)}" width="${n.w}" height="${n.h}"></figure>${n.body}<div class="warn">⚠️ 僅供教育參考，非投資建議。文中若有數字，皆為假設例子，請依自己的狀況調整。投資有風險，請自行評估。</div><p style="margin-top:18px"><a href="{R}notes/">← 回筆記</a></p></article></div>`}));});
// 舊 /notes/<slug>/：canonical 與 meta refresh 指向 /learn/<slug>/。不 push 進 out，因此不進 sitemap、也不出現在列表。
for(const slug of NOTE_REDIRECTS){const a=artBySlug[slug];const target=SITE_URL+'/learn/'+slug+'/';
 page({p:`notes/${slug}/`,title:a.title,desc:'這篇已整理到新手入門。',canonical:target,ogUrl:target,noCta:true,extraHead:`<meta http-equiv="refresh" content="0;url=${target}">`,body:`<div class="w narrow"><article class="prose"><p>這篇已整理到新手入門：<a href="{R}learn/${slug}/">${esc(a.title)}</a>。</p></article></div>`});}
// TERMS index
const cats=G.categories.map(c=>`<button data-c="${c.id}">${esc(c.name)}</button>`).join('');
const list=G.terms.map(t=>`<a class="card tcard" data-c="${t.category}" data-k="${esc([t.name,...t.aliases,t.plain].join(' ').toLowerCase())}" href="{R}terms/${slug[t.id]}/"><b>${esc(t.name)}</b> <span class="alias">${esc(t.aliases.join('・'))}</span><p>${esc(t.plain)}</p></a>`).join('');
out.push(page({p:'terms/',title:'股票新手翻譯器｜投資名詞白話查詢',desc:`${G.terms.length} 個股票、ETF、財經新聞常見名詞，用一句白話解釋，附例子與常見誤解。`,body:head('股票新手翻譯器',`把 ${G.terms.length} 個投資術語翻成人話。輸入名詞、英文或白話都能找。`)+`<section><div class="w"><input class="search" id="q" type="search" placeholder="搜尋：例如 本益比、ETF、除息…" aria-label="搜尋名詞"><div class="cats" id="cats"><button class="on" data-c="">全部</button>${cats}</div><div class="grid g3 tlist" id="list">${list}</div><p class="empty" id="empty" hidden>找不到這個名詞，換個說法試試看。</p></div></section>
<script>(function(){var q=document.getElementById('q'),cs=document.getElementById('cats'),cards=[].slice.call(document.querySelectorAll('#list .card')),cur='';function run(){var v=q.value.trim().toLowerCase(),n=0;cards.forEach(function(c){var ok=(!cur||c.dataset.c===cur)&&(!v||c.dataset.k.indexOf(v)>-1);c.hidden=!ok;if(ok)n++});document.getElementById('empty').hidden=n>0}q.addEventListener('input',run);cs.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;cur=b.dataset.c;[].forEach.call(cs.children,function(x){x.classList.toggle('on',x===b)});run()});var p=new URLSearchParams(location.search).get('q');if(p){q.value=p;run()}})();</script>`}));
for(const t of G.terms){const c=C[t.category];const rel=(t.related||[]).filter(id=>T[id]);
 const termUrl=SITE_URL+'/terms/'+slug[t.id]+'/';
 const bi=termBilingual(t);
 const title=bi?bi.title:`${t.name} 是什麼？白話解釋`;
 const desc=bi?termMetaDescription(bi.line,t.plain):`${t.name}：${t.plain}`;
 const lede=bi?`${esc(bi.line)}。${esc(t.plain)}`:esc(t.plain);
 out.push(page({p:`terms/${slug[t.id]}/`,type:'article',title,desc,jsonLd:definedTermLd(t,termUrl,bi),body:head(`${esc(t.name)} <span style="font-size:.55em;opacity:.8">${esc(t.aliases.join('・'))}</span>`,lede,`<div class="crumb"><a href="{R}">首頁</a> › <a href="{R}terms/">股票新手翻譯器</a> › ${esc(c.name)}</div>`)+`<div class="w narrow"><article class="prose"><dl class="term">
<dt>一句話白話</dt><dd>${esc(t.plain)}</dd><dt>舉個例子</dt><dd><div class="ex" style="margin:4px 0">${esc(t.example)}</div></dd><dt>怎麼算</dt><dd>${esc(t.formula)}</dd><dt>代表什麼</dt><dd>${esc(t.meaning)}</dd><dt>常見誤解</dt><dd>${esc(t.myth)}</dd><dt>怎麼判斷</dt><dd>${esc(t.judgement)}</dd></dl>
${rel.length?`<h2>相關名詞</h2><div class="chips">${rel.map(id=>`<a href="{R}terms/${slug[id]}/">${esc(T[id].name)}</a>`).join('')}</div>`:''}<div class="warn">⚠️ 名詞解釋為簡化說明，僅供教育參考，非投資建議。</div><p style="margin-top:18px"><a href="{R}terms/">← 回股票新手翻譯器</a></p></article></div>`}));}
// ABOUT / PRIVACY / DISCLAIMER
const prose=(h,s,b)=>head(h,s)+`<div class="w narrow"><article class="prose">${b}</article></div>`;
out.push(page({p:'about/',title:'關於慢慢變有錢',desc:'慢慢變有錢是給投資新手的白話筆記，不報明牌、不帶單、不給買賣建議。',body:prose('關於慢慢變有錢','投資不用急，慢慢變有錢就好。',`
<div class="hello"><picture><source srcset="{R}assets/img/manman-sign.webp" type="image/webp"><img src="{R}assets/img/manman-sign.png" width="265" height="720" alt="品牌大使慢慢舉著牌子向你打招呼" loading="lazy" decoding="async"></picture><p class="bubble">嗨，我是慢慢，陪你一起慢慢學投資。</p></div>
<h2>我們在做什麼</h2><p>「慢慢變有錢」是給投資新手的白話筆記，同步經營 IG <a href="https://www.instagram.com/slow.rich.notes/">@slow.rich.notes</a>。我們把常見的投資名詞和觀念翻成人話，幫你在花第一塊錢之前，先把基礎打好。</p>
<h2>我們的原則</h2><ul><li>不報明牌、不帶單、不推薦特定個股、ETF 或券商。</li><li>只講觀念，用白話說明；文章裡的數字都會標明是「假設例子」。</li><li>提醒風險與成本：投資會漲也會跌，過去績效不代表未來。</li></ul>
<h2>你可以從這裡開始</h2><ul><li><a href="{R}learn/">新手入門筆記</a>：從起步準備讀起。</li><li><a href="{R}notes/">筆記</a>：IG 圖文寫成短文。</li><li><a href="{R}terms/">股票新手翻譯器</a>：看不懂的名詞，查一下。</li><li><a href="{R}lead/">《投資新手入門清單》</a>：免費領取，跟著勾選。</li></ul>
<h2>聯絡我們</h2><p>Email：<a href="mailto:slowrichnotes@gmail.com">slowrichnotes@gmail.com</a><br>IG：<a href="https://www.instagram.com/slow.rich.notes/">@slow.rich.notes</a></p>`)}));
out.push(page({p:'privacy/',title:'隱私權政策',desc:'慢慢變有錢如何蒐集、使用與保存你的個人資料，以及如何查詢或刪除。',body:prose('隱私權政策','依《個人資料保護法》說明我們如何處理你的資料。',`
<p>慢慢變有錢（以下稱「本單位」）重視你的個人資料。本政策說明你在本網站領取《投資新手入門清單》或《一人公司：下載員工清單》時，我們如何蒐集、處理與利用你的資料。</p>
<h2>蒐集哪些資料</h2><ul><li>Email（必填）</li><li>稱呼（選填，不填不影響領取）</li><li>同意紀錄：同意時間、同意文字版本、來源頁面</li></ul>
<h2>蒐集目的</h2><p>寄送《投資新手入門清單》或《一人公司：下載員工清單》、教育內容電子報與相關活動通知（行銷、消費者及客戶管理與服務）。我們不會出售你的資料，也不會提供給其他第三人。</p>
<h2>如何儲存</h2><p>你送出的資料會儲存在本單位的 Google 試算表（Google Sheet），並透過 Google 服務寄送 Email。利用地區包含中華民國境內，以及 Google 雲端服務主機所在地區。利用對象為本單位及受託處理寄信、資料儲存之服務提供者。</p>
<h2>利用期間</h2><p>自你同意起，至你退訂或要求刪除為止。</p>
<h2>你的權利：查詢、更正、刪除</h2><p>依個資法第 3 條，你可以請求查詢、閱覽、製給複本、補充或更正、停止蒐集處理利用或刪除你的資料。請用你登記的 Email 寄信到 <a href="mailto:slowrichnotes@gmail.com">slowrichnotes@gmail.com</a>，說明你要查詢或刪除，我們收到後會處理並回覆你。每封信件也都附有退訂方式。</p>
<h2>不提供的影響</h2><p>Email 與同意為必要；若不提供，將無法寄送清單。</p>
<h2>網站其他技術</h2><p>本網站使用 Google Fonts 載入字型。<!-- 若日後加入流量分析或 Cookie，請更新本段 --></p>
<h2>聯絡方式</h2><p>慢慢變有錢｜<a href="mailto:slowrichnotes@gmail.com">slowrichnotes@gmail.com</a></p>
<p class="note">最後更新：2026 年 10 月</p>`)}));
out.push(page({p:'disclaimer/',title:'免責聲明',desc:'慢慢變有錢的所有內容僅供教育參考，非投資建議。',body:prose('免責聲明','僅供教育參考，非投資建議。',`
<ul><li>本網站、IG @slow.rich.notes 及《投資新手入門清單》的內容，僅供投資理財教育參考，不構成任何投資建議、要約或推薦。</li>
<li>我們不推薦特定個股、ETF、基金或券商，也不提供買賣時機建議。</li>
<li>文章中的數字與例子皆為「假設例子」，用來說明觀念，不代表實際或未來報酬；計算通常未計稅費與內扣費用。</li>
<li>投資有風險，價格會漲也會跌，可能損失本金。過去績效不代表未來。</li>
<li>名詞解釋為簡化說明，實際定義與規則請以主管機關、交易所、發行機構或券商的官方資料為準。</li>
<li>做任何投資決定前，請依自己的財務狀況、目標與風險承受度自行評估，必要時諮詢合格專業人士。</li></ul>
<p>如有內容錯誤，歡迎來信 <a href="mailto:slowrichnotes@gmail.com">slowrichnotes@gmail.com</a> 告訴我們。</p>`)}));
// TOOLS：新手理財課程推薦頁
{const card=(n,r,b)=>`<div class="card tl"><span class="ex-badge">範例</span><b>${n}</b><p>${r}</p><a class="btn g tbtn" href="#" aria-disabled="true" rel="sponsored nofollow" onclick="return false">${b}</a></div>`;
const rc=(n,by,r,pr,st,u)=>`<div class="card tl"><b>${n}</b><small class="meta">${by}</small><p>${r}</p><div class="price"><b>${pr}</b> <small>價格以平台為準</small></div><small class="meta">${st}（資料以平台為準）</small><a class="btn g tlive" href="${u}" target="_blank" rel="sponsored nofollow noopener">看課程介紹 ↗</a></div>`;
const cat=(i,h,s,cs)=>`<section class="tsec"><div class="w"><h2>${i} ${h}</h2><p class="sub">${s}</p><div class="grid g3">${cs.join('')}</div></div></section>`;
const css=`<style>.disc{background:#FEF3C7;border-bottom:2px solid #F59E0B;color:#1E3A8A;font-size:12px;line-height:1.5;padding:5px 12px;text-align:center}.tl{position:relative;display:flex;flex-direction:column;gap:6px}.tl p{flex:1}.ex-badge{position:absolute;top:12px;right:12px;background:#FEF3C7;color:#B45309;border:1px solid #F59E0B;border-radius:99px;font-size:12px;padding:1px 10px;font-weight:700}.meta{color:#64748b;font-size:12.5px}.price b{color:#1E3A8A;font-size:18px}.price small{color:#64748b;font-size:12px}.tlive{align-self:flex-start;margin-top:6px}.ex-badge.free{background:#DCFCE7;color:#166534;border-color:#22C55E}.g4c{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.tbtn{align-self:flex-start;opacity:.75;cursor:not-allowed}.tsec{padding-top:8px;padding-bottom:8px}.thead{display:flex;align-items:center;gap:18px}.thead img{width:90px;height:auto}.tcta{display:flex;align-items:center;gap:18px;background:#1E3A8A;color:#fff;border-radius:18px;padding:22px}.tcta h2{color:#fff;margin:0 0 6px}.tcta p{color:#dbe4f5;margin:0 0 12px}.tcta img{width:80px;height:auto;flex:none}@media(max-width:600px){.tcta{flex-direction:column;text-align:center}.tcta img{width:56px}.thead img{width:60px}}</style>`;
out.push(page({p:'tools/',title:'慢慢推薦',desc:'慢慢整理給投資新手的理財入門線上課程，含免費的證交所投資通識課。',extraHead:css,body:`
<div class="disc">📢 本頁含推薦連結，購買我們可能獲佣金，不影響你的價格</div>
<div class="pagehead"><div class="w narrow thead"><picture><source srcset="{R}assets/img/manman-sign.webp" type="image/webp"><img src="{R}assets/img/manman-sign.png" width="265" height="720" alt="品牌大使慢慢舉著牌子打招呼"></picture><div><h1>慢慢推薦</h1><p>想有系統地學理財，可以從這幾堂入門課開始。慢慢會持續整理更新。</p></div></div></div>
${cat('🎓','線上課程','想要有系統地學，可以從課程開始。價格、評分與人數以平台為準。',[
rc('Adam 個人理財術：從培養財務認知開始！','莫彩曦 Hailey｜Hahow','從建立財務認知開始，適合想先整理自己金錢觀的人。','NT$2,250','4.9★・5,009 人','https://shopsquare.co/3URV4'),
rc('小資族理財的第一堂入門課','李柏鋒｜Hahow','以小資族為對象的理財入門課，適合剛開始規劃的人。','NT$1,688','4.9★・3,479 人','https://joymall.co/3URV8'),
rc('動盪時代的資產配置：王伯達人生財務規劃學','王伯達｜Hahow','談資產配置與人生財務規劃，適合想看整體規劃的人。','NT$3,500','5.0★・3,025 人','https://joymall.co/3URVE'),
`<div class="card tl"><span class="ex-badge free">免費</span><b>全民投資通識課</b><small class="meta">臺灣證券交易所｜PressPlay</small><p>由證交所推出的投資通識課，免費、適合打基礎。</p><small class="meta">此為免費資源，非推薦連結</small><a class="btn b tlive" href="https://www.pressplay.cc/project/04410BD69246CB371A74D26B9778E20D/about" target="_blank" rel="noopener">免費觀看 ↗</a></div>`])}
<section class="tsec"><div class="w"><div class="tcta"><picture><source srcset="{R}assets/img/manman.webp" type="image/webp"><img src="{R}assets/img/manman.png" width="210" height="720" alt="品牌大使慢慢"></picture><div><h2>還不知道從哪開始？</h2><p>先領取免費的《投資新手入門清單》，跟著勾選，一次做一件事。</p><a class="btn g" href="{R}lead/">領取《投資新手入門清單》→</a><p style="margin:10px 0 0;font-size:14px"><a href="{R}lead/oneperson/" style="color:#F59E0B;font-weight:700">你要的是一人公司做事系統？</a></p></div></div></div></section>
<section class="tsec"><div class="w narrow"><div class="warn">⚠️ 本頁為教育性質整理，不推薦任何個股、ETF 或特定投資標的；推薦連結內容請自行評估。僅供教育參考，非投資建議。</div></div></section>`,noCta:true}));}
// 404 分支：不輸出指向 /404/ 的 canonical；noindex；og:url 為首頁；無 JSON-LD。檔案仍是根目錄 404.html。
page({p:'404/',title:'找不到這一頁',desc:'找不到這一頁。',canonical:false,ogUrl:SITE_URL+'/',robots:'noindex',body:prose('找不到這一頁','網址可能打錯了，或這一頁已經搬家。',`<p>你可以：</p><ul><li><a href="/">回首頁</a></li><li><a href="/">到股票新手翻譯器查名詞</a></li></ul>`),noCta:true});
fs.rmSync(path.join(ROOT,'404'),{recursive:true,force:true});
// sitemap / robots
// sitemap 不含 /404/，也不含與 /learn/ 重複的 /notes/ 轉址殘頁。
// lastmod：Asia/Taipei 建置日（YYYY-MM-DD）。文章／筆記若有 updated 或 date 才採用（updated 優先），且不得晚於建置日。
// 目前資料沒有日期欄位，不回推發布日。列表與靜態頁（含詞條、lead）一律用建置日，不用「最新子頁」。
function taipeiDay(d){
  return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(d||new Date());
}
const BUILD_DAY=taipeiDay();
function contentDay(entry){
  if(!entry)return BUILD_DAY;
  for(const key of ['updated','date']){
    const m=String(entry[key]??'').trim().match(/^(\d{4}-\d{2}-\d{2})/);
    if(m&&m[1]<=BUILD_DAY)return m[1];
  }
  return BUILD_DAY;
}
function lastmodFor(p){
  let m;
  if((m=/^learn\/([^/]+)\/$/.exec(p)))return contentDay(artBySlug[m[1]]);
  if((m=/^notes\/([^/]+)\/$/.exec(p)))return contentDay(NOTES.find(n=>n.slug===m[1]));
  return BUILD_DAY;
}
const all=[...out.filter(p=>p!=='404/'),'lead/','lead/oneperson/'];
fs.writeFileSync(path.join(ROOT,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.map(p=>`<url><loc>${SITE_URL}/${p}</loc><lastmod>${lastmodFor(p)}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(ROOT,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
const skippedBi=G.terms.filter(t=>!termBilingual(t));
console.log('pages',all.length,'terms',G.terms.length,'articles',ARTS.length,'notes',NOTES.length);
console.log('bilingual',G.terms.length-skippedBi.length,'skipped',skippedBi.map(t=>t.id+':'+t.name).join('、')||'none');
// 404 可能在任何深度被顯示 → 改用絕對網址
{const f=path.join(ROOT,'404.html');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace(/(href|src)="\.\.\/([^"]*)"/g,(m,a,b)=>`${a}="${SITE_URL}/${b}"`).replace(/href="\/"/g,`href="${SITE_URL}/"`).replace(`href="${SITE_URL}/">到股票`,`href="${SITE_URL}/terms/">到股票`));}
