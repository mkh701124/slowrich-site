// 親子理財。頁殼走 build（導覽、canonical、文末 lead），不進 notes / learn。
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const LANDING_DESC = '主軸仍是投資新手。這裡把「幫小孩存、幫小孩開戶」的觀念和工具放在一起。不是育兒雜誌，也不報明牌。';
const GUIDE_TITLE = '幫小孩開證券戶，爸媽先準備這 5 樣';
const GUIDE_DESC = '幫小孩開證券戶，法定代理人要準備哪些證件、印章和小孩名下的交割戶？這篇用 5 樣清單和 4 個步驟說明誰要到場、能不能線上開，以及贈與稅、股利合併申報要注意什麼。不推薦任何券商。';
const CALC_TITLE = '每月存多少，存到 18 歲有多少';
const CALC_DESC = '輸入每月金額、小孩現在幾歲，以及 0%、3%、5%、7% 或自訂的年報酬假設，試算存到 18 歲大概會有多少；也可以反過來，從目標金額倒推每月要存多少。報酬是假設，不是保證。';
const WARN = '⚠️ 本內容僅供教育參考，非投資建議，投資有風險，請自行評估。';

function crumb(tail) {
  return `<div class="crumb"><a href="{R}">首頁</a> › <a href="{R}family/">親子理財</a> › ${tail}</div>`;
}

function addFamily(ctx) {
  const { page, head, out, articleLd, crumbLd, SITE_URL } = ctx;
  const guideUrl = SITE_URL + '/family/open-child-account/';
  const calcUrl = SITE_URL + '/family/save-to-18/';

  out.push(page({
    p: 'family/',
    title: '親子理財',
    desc: LANDING_DESC,
    cssVer: '10',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: '親子理財',
      description: LANDING_DESC,
      url: SITE_URL + '/family/',
      inLanguage: 'zh-Hant-TW'
    },
    body: head('親子理財', LANDING_DESC) + `
<section><div class="w">
<div class="hello"><picture><source srcset="{R}assets/img/manman-sign.webp" type="image/webp"><img src="{R}assets/img/manman-sign.png" width="265" height="720" alt="品牌大使慢慢舉著牌子向你打招呼"></picture><p class="bubble">幫小孩存、幫小孩開戶，先把觀念和工具放在一起。</p></div>
<h2>入門必看</h2>
<p class="sub">先看已經寫好的開戶清單。還沒寫完的只標即將推出，不放連結。</p>
<div class="grid g3">
<a class="card" href="{R}family/open-child-account/"><small>開戶</small><br><b>幫小孩開證券戶，爸媽先準備這 5 樣</b><p>法定代理人要準備哪些證件、印章和小孩名下的交割戶。不推薦任何券商。</p><span class="more">閱讀 →</span></a>
<div class="card soon"><small>即將推出</small><br><b>紅包怎麼處理</b><p>紅包要花、存，還是另作打算。這篇還沒上線。</p></div>
<div class="card soon"><small>即將推出</small><br><b>幫小孩投資時的稅</b><p>贈與稅，還有小孩的所得怎麼跟爸媽一起申報。這篇還沒上線。</p></div>
</div>
</div></section>
<section style="padding-top:0"><div class="w">
<h2>試算工具</h2>
<p class="sub">報酬是假設，用來比較「只存本金」和「假設會成長」。不是保證。</p>
<div class="grid g2">
<a class="card" href="{R}family/save-to-18/"><small>試算</small><br><b>每月存多少，存到 18 歲有多少</b><p>輸入每月金額、小孩現在幾歲，以及年報酬假設。也可以從目標金額倒推每月要存多少。</p><span class="more">打開試算 →</span></a>
<div class="card"><small>預設例子</small><br><b>從出生每月 3,000 元</b><p>預設存到 18 歲。年報酬可以選 0%、3%、5%、7%，或自己填到小數一位。</p></div>
</div>
</div></section>
<section style="padding-top:0"><div class="w">
<h2>觀念教育</h2>
<p class="sub">零用錢、存錢筒、怎麼跟小孩解釋股票，這幾篇還在寫。下面三篇是已經上線的觀念文。</p>
<div class="grid g3">
<div class="card soon"><small>即將推出</small><br><b>零用錢怎麼給</b><p>這篇還沒上線。</p></div>
<div class="card soon"><small>即將推出</small><br><b>用三個存錢筒教「花、存、分享」</b><p>這篇還沒上線。</p></div>
<div class="card soon"><small>即將推出</small><br><b>怎麼跟小孩解釋股票</b><p>這篇還沒上線。</p></div>
<a class="card" href="{R}learn/what-is-a-stock/"><small>觀念</small><br><b>股票到底是什麼？用一間飲料店看懂</b><p>股票是公司的一小塊所有權。可能分到股利，股價也會跌。</p><span class="more">閱讀 →</span></a>
<a class="card" href="{R}learn/what-is-etf/"><small>工具</small><br><b>ETF 是什麼？一次看懂</b><p>ETF 是一籃子股票或債券。分散單一公司風險，但不保證賺。</p><span class="more">閱讀 →</span></a>
<a class="card" href="{R}learn/compound-interest/"><small>觀念</small><br><b>複利：時間是新手最大的優勢</b><p>時間拉長，累積的差會變大。這是觀念說明，不是報酬保證。</p><span class="more">閱讀 →</span></a>
</div>
</div></section>
<section style="padding-top:0"><div class="w narrow"><div class="warn">${WARN}</div></div></section>`
  }));

  out.push(page({
    p: 'family/open-child-account/',
    type: 'article',
    title: GUIDE_TITLE,
    desc: GUIDE_DESC,
    cssVer: '10',
    jsonLd: articleLd({
      headline: GUIDE_TITLE,
      description: GUIDE_DESC,
      url: guideUrl,
      crumbs: crumbLd('親子理財', SITE_URL + '/family/', GUIDE_TITLE, guideUrl)
    }),
    body: head(GUIDE_TITLE, GUIDE_DESC, crumb('開戶')) + `
<div class="w narrow"><article class="prose">
<p>幫小孩開證券戶，不是小孩自己去辦，而是由法定代理人（通常是父母）代理。未滿 18 歲也可以開。這篇整理要準備的 5 樣，以及建議順序。各家券商規定不完全一樣，出發前最好先打電話或線上預約確認，以券商公告為準。</p>
<h2>出發前，先準備這 5 樣</h2>
<ol>
<li><strong>小孩的身分證明</strong>，以及多數券商會要的第二證件（健保卡、護照或學生證）。還沒領身分證時（實務上常見於未滿 14 歲），可帶新式戶口名簿，或最近 3 個月內的戶籍謄本正本。</li>
<li><strong>爸媽（法定代理人）的身分證與第二證件</strong>。</li>
<li><strong>小孩和爸媽的印章</strong>。有的券商可用簽名，以券商公告為準。</li>
<li><strong>小孩名下的銀行帳戶</strong>，之後會設成交割戶：買股票從這裡扣款，賣出的錢也回到這裡。</li>
<li><strong>視情況加帶</strong>：父母一方無法到場時，多數券商要未到場那方事先填好的「法定代理人同意書」；若是單一法定代理人，要帶記事欄有載明監護權的戶口名簿或戶籍謄本，必要時加監護證明。</li>
</ol>
<h2>建議照這 4 步走</h2>
<ol>
<li><strong>先幫小孩開好銀行戶。</strong>銀行怎麼開、幾歲能線上辦，各家銀行不同，以銀行公告為準。</li>
<li><strong>備齊上面的證件和印章</strong>；需要同意書就先填好。</li>
<li><strong>由法定代理人到券商櫃台開證券戶。</strong>目前元大、凱基、永豐、玉山、國泰、群益等券商都寫：未滿 18 歲不能線上開戶，要臨櫃辦理。小孩本人要不要到場，各家券商不同，以券商公告為準。</li>
<li><strong>確認交割戶已綁定</strong>在小孩的證券戶上，再依券商說明開通下單功能。</li>
</ol>
<h2>誰要到場？</h2>
<p>證交所營業細則規定：委託人是無行為能力或限制行為能力人時，要由法定代理人、監護人親自帶本人和小孩的身分證明辦開戶，並當場簽章；小孩還沒領身分證時，可用戶口名簿代替。實務上通常是父母雙方到場；一方無法到，多數券商接受事先填好的同意書。單一監護則帶監護證明。小孩要不要一起去，請先問你選的券商。</p>
<h2>兩件稅務上要注意的事</h2>
<p><strong>贈與稅：</strong>把錢或財產給小孩，是以「贈與人」計算免稅額。民國 115 年（2026 年）每位贈與人每年可減除 244 萬元；同一年不論贈幾次、送給幾個人，就是這一個額度。爸爸和媽媽是兩位贈與人，各有自己的額度。超過時，要在超過的那次贈與後 30 日內申報。金額可能依物價調整，以財政部當年度公告為準。</p>
<p><strong>所得稅：</strong>小孩名下的股利等所得，要跟爸媽一起辦理綜合所得稅合併申報，不能讓未成年子女單獨報。</p>
<h2>常見問題</h2>
<p><strong>Q：剛出生的小孩可以開嗎？</strong><br>可以。未滿 18 歲都可由法定代理人備齊文件後臨櫃申請。剛出生能不能辦，以你選的券商公告為準。</p>
<p><strong>Q：可以線上開嗎？</strong><br>目前各大券商都寫不行，要臨櫃。線上開戶多限年滿 18 歲的本國自然人。</p>
<p><strong>Q：一定要父母都到嗎？</strong><br>通常要雙方同意。一方無法到，先問券商要不要同意書；單一監護就帶證明。</p>
<p><strong>Q：開戶後就要開始買嗎？</strong><br>不用。先搞懂股票、ETF 和定期定額是什麼，再決定要不要開始。開戶不代表要馬上投入。</p>
<h2>參考資料</h2>
<ul>
<li><a href="https://twse-regulation.twse.com.tw/TW/law/DOC01.aspx?FLCODE=FL007304&amp;FLNO=75-1" target="_blank" rel="noopener noreferrer">臺灣證券交易所營業細則第 75-1 條</a>（未成年人由法定代理人親持身分證或戶口名簿臨櫃開戶並當場簽章）</li>
<li><a href="https://twse-regulation.twse.com.tw/TW/law/DAT0202_print.aspx?FLCODE=FL007304&amp;LCC=2&amp;LCNOS=++75+++" target="_blank" rel="noopener noreferrer">同細則第 75 條</a>（法定代理人在受託契約簽章、留存印鑑或簽名樣式）</li>
<li><a href="https://www.mof.gov.tw/singlehtml/384fb3077bb349ea973e7fc6f13b6974?cntId=e4170c62974c4c7c9fa78c24c9fcb130" target="_blank" rel="noopener noreferrer">財政部北區國稅局：115 年贈與稅每年得減除免稅額 244 萬元</a></li>
<li><a href="https://www.mof.gov.tw/singlehtml/384fb3077bb349ea973e7fc6f13b6974?cntId=9ba544f1016c4b85b54960b4346b5b75" target="_blank" rel="noopener noreferrer">財政部賦稅署（2025-11-27）：115 年遺產稅、贈與稅免稅額未達調整門檻</a></li>
<li><a href="https://www.etax.nat.gov.tw/etwmain/tax-info/understanding/tax-q-and-a/national/gift-tax/exemption-calculation/JENLVwO" target="_blank" rel="noopener noreferrer">財政部稅務入口網：贈與人每年免稅額 244 萬元</a></li>
<li><a href="https://www.etax.nat.gov.tw/etwmain/tax-info/understanding/tax-q-and-a/national/individual-income-tax/file-procedure/3Jal5Nr" target="_blank" rel="noopener noreferrer">財政部稅務入口網：未成年子女有所得應合併申報</a></li>
<li><a href="https://law.moj.gov.tw/LawClass/LawContent.aspx?PCODE=G0340003" target="_blank" rel="noopener noreferrer">所得稅法第 15 條</a>（全國法規資料庫）</li>
<li><a href="https://www.ris.gov.tw/documents/html/2/3/5/388.html" target="_blank" rel="noopener noreferrer">內政部戶政司：請領國民身分證</a>（年滿 14 歲應由本人親自初領）</li>
<li><a href="https://www.esunsec.com.tw/article/post?postid=aa513b1d03034eb596da9feb4cf0b8b5" target="_blank" rel="noopener noreferrer">玉山證券〈未成年開戶懶人包〉</a></li>
<li><a href="https://www.sinotrade.com.tw/richclub/invest/guide/junior-account-opening" target="_blank" rel="noopener noreferrer">永豐金證券〈未成年開戶〉</a></li>
<li><a href="https://event.kgi.com.tw/news/event/how-to-open-brokerage-account-for-children/index.html" target="_blank" rel="noopener noreferrer">凱基證券未成年開戶頁</a></li>
<li><a href="https://www.yuanta.com.tw/file-repository/content/youth/index.html" target="_blank" rel="noopener noreferrer">元大證券未成年開戶頁</a></li>
<li><a href="https://istockapp.cathaysec.com.tw/Marketing/MinorAO" target="_blank" rel="noopener noreferrer">國泰證券未成年開戶</a></li>
<li><a href="https://iopen.capital.com.tw/eopenWeb/" target="_blank" rel="noopener noreferrer">群益金鼎證券線上開戶 FAQ</a></li>
</ul>
<div class="warn">${WARN}本篇不推薦任何券商、銀行或投資標的。</div>
</article></div>
<section class="related-sec"><div class="w"><nav class="related-notes" aria-labelledby="family-guide-related"><h2 id="family-guide-related">接著可以看</h2><ul>
<li><a href="{R}learn/open-brokerage-account/"><span class="relcat">新手入門</span>第一次開證券戶？5 步驟懶人包</a></li>
<li><a href="{R}learn/what-is-a-stock/"><span class="relcat">新手入門</span>股票到底是什麼？用一間飲料店看懂</a></li>
<li><a href="{R}learn/what-is-etf/"><span class="relcat">新手入門</span>ETF 是什麼？一次看懂</a></li>
<li><a href="{R}learn/dca-vs-lump-sum/"><span class="relcat">新手入門</span>定期定額 vs 單筆投入，新手該怎麼想？</a></li>
<li><a href="{R}family/save-to-18/"><span class="relcat">親子理財</span>每月存多少，存到 18 歲有多少</a></li>
<li><a href="{R}family/"><span class="relcat">親子理財</span>回親子理財</a></li>
</ul></nav></div></section>`
  }));

  out.push(page({
    p: 'family/save-to-18/',
    title: CALC_TITLE,
    desc: CALC_DESC,
    cssVer: '10',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', name: CALC_TITLE, description: CALC_DESC, url: calcUrl, inLanguage: 'zh-Hant-TW', isPartOf: SITE_URL + '/family/' },
        { '@type': 'BreadcrumbList', itemListElement: crumbLd('親子理財', SITE_URL + '/family/', CALC_TITLE, calcUrl).map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })) }
      ]
    },
    body: `<div class="pagehead calc-head"><div class="w narrow">${crumb('試算')}<h1>${CALC_TITLE}</h1><p>${CALC_DESC}</p></div></div>
<section class="calc-sec"><div class="w">
<div class="calc-layout">
<div class="calc-panel" id="calc-panel">
<div class="seg" role="group" aria-label="試算模式">
<button type="button" id="mode-fv" class="on" aria-pressed="true">算到期有多少</button>
<button type="button" id="mode-goal" aria-pressed="false" aria-label="我有目標金額，算每月要存多少">算每月要存多少</button>
</div>
<div class="calc-field" id="field-amount">
<label for="amount">每月金額（新台幣）</label>
<div class="stepper">
<input id="amount" inputmode="numeric" autocomplete="off" maxlength="9" aria-describedby="hint-amount" value="3000">
<button type="button" data-step="amount" data-d="-1000" aria-label="每月金額減少 1000">−1,000</button>
<button type="button" data-step="amount" data-d="-100" aria-label="每月金額減少 100">−100</button>
<button type="button" data-step="amount" data-d="100" aria-label="每月金額增加 100">+100</button>
<button type="button" data-step="amount" data-d="1000" aria-label="每月金額增加 1000">+1,000</button>
</div>
<p class="calc-hint" id="hint-amount" hidden></p>
</div>
<div class="calc-field" id="field-target" hidden>
<label for="target">目標金額（新台幣）</label>
<div class="stepper">
<input id="target" inputmode="numeric" autocomplete="off" maxlength="9" aria-describedby="hint-target" value="1000000">
<button type="button" data-step="target" data-d="-1000" aria-label="目標金額減少 1000">−1,000</button>
<button type="button" data-step="target" data-d="-100" aria-label="目標金額減少 100">−100</button>
<button type="button" data-step="target" data-d="100" aria-label="目標金額增加 100">+100</button>
<button type="button" data-step="target" data-d="1000" aria-label="目標金額增加 1000">+1,000</button>
</div>
<p class="calc-hint" id="hint-target" hidden></p>
</div>
<div class="calc-field">
<label for="age">小孩現在幾歲</label>
<div class="stepper age">
<button type="button" id="age-dec" aria-label="年齡減少 1">−1</button>
<input id="age" inputmode="numeric" autocomplete="off" maxlength="2" aria-describedby="hint-age" value="0">
<button type="button" id="age-inc" aria-label="年齡增加 1">+1</button>
</div>
<p class="calc-hint" id="hint-age">0–17 歲。存到 18 歲，不能選 18。</p>
</div>
<div class="calc-field">
<span class="calc-label" id="rate-label">年報酬假設</span>
<div class="rates" role="group" aria-labelledby="rate-label">
<button type="button" data-rate="0" aria-pressed="false">0%</button>
<button type="button" data-rate="3" aria-pressed="false">3%</button>
<button type="button" data-rate="5" class="on" aria-pressed="true">5%</button>
<button type="button" data-rate="7" aria-pressed="false">7%</button>
</div>
<div class="rate-custom">
<label for="rate-custom">自訂</label>
<input id="rate-custom" inputmode="decimal" autocomplete="off" placeholder="例如 4.5" aria-describedby="hint-rate">
<span aria-hidden="true">%</span>
</div>
<p class="calc-hint" id="hint-rate">建議範圍 −10%～15%。0% 表示只累積本金、沒有報酬。</p>
</div>
</div>
<div class="calc-results" id="calc-out" aria-live="polite">
<div id="calc-monthly-block" hidden>
<p class="calc-k">每月需存</p>
<p class="calc-num" id="calc-monthly">—</p>
</div>
<div class="calc-stats">
<div>
<p class="calc-k">到期估值</p>
<p class="calc-num" id="calc-fv">1,047,606 元</p>
</div>
<div>
<p class="calc-k">投入合計</p>
<p class="calc-num calc-num-sub" id="calc-contrib">648,000 元</p>
</div>
</div>
<p class="calc-gap fv-up" id="calc-gap">高出投入 399,606 元</p>
<p class="calc-cond" id="calc-cond">假設從 0 歲存到 18 歲，共 216 個月，年報酬 5%、按月複利、每月月底投入。</p>
<p class="calc-hint" id="calc-round" hidden></p>
</div>
</div>
<div class="calc-visual">
<p id="calc-legend" class="calc-legend"><span class="swatch fv-flat">累計投入</span><span class="swatch fv-up">年底估值（高出投入）</span></p>
<svg id="calc-chart" class="calc-chart" role="img" aria-labelledby="calc-chart-title calc-chart-desc" viewBox="0 0 640 260">
<title id="calc-chart-title">存到 18 歲的累計投入與年底估值</title>
<desc id="calc-chart-desc">預設從 0 歲每月存 3,000 元、年報酬 5%，到期估值 1,047,606 元，高出投入 399,606 元。</desc>
</svg>
<p class="calc-hint">縱軸是新台幣，超過 1 萬用「萬」標。紅色並寫「高出投入」是估值高於投入，綠色並寫「低於投入」是估值低於投入，藍色是相同，或只表示累計投入。0% 時兩條一樣高。</p>
<div class="calc-scroll"><table class="calc-table"><caption>每一年年底</caption><thead><tr><th>歲數</th><th>累計投入</th><th>年底估值</th></tr></thead><tbody id="calc-rows"></tbody></table></div>
<noscript><p class="calc-hint">瀏覽器沒開 JavaScript，沒辦法改數字或畫圖。畫面上的 1,047,606 元是預設例子：0 歲、每月 3,000 元、年報酬 5%。</p></noscript>
<div class="warn">⚠️ 這裡的年報酬是假設數字，用來比較「只存本金」和「假設會成長」的差別，不是保證，也不代表任何商品會達到這個數字。實際結果可能更高、更低，也可能虧損。試算按每月月底投入、按月複利，未計算稅費、手續費、內扣費用和通膨。<a href="{R}disclaimer/">僅供教育參考，非投資建議</a>。</div>
</div>
</div></section>
<section class="related-sec"><div class="w"><nav class="related-notes" aria-labelledby="family-calc-related"><h2 id="family-calc-related">接著可以看</h2><ul>
<li><a href="{R}learn/compound-interest/"><span class="relcat">新手入門</span>複利：時間是新手最大的優勢</a></li>
<li><a href="{R}learn/dca-vs-lump-sum/"><span class="relcat">新手入門</span>定期定額 vs 單筆投入，新手該怎麼想？</a></li>
<li><a href="{R}family/open-child-account/"><span class="relcat">親子理財</span>幫小孩開證券戶，爸媽先準備這 5 樣</a></li>
<li><a href="{R}family/"><span class="relcat">親子理財</span>回親子理財</a></li>
<li><a href="{R}calculators/"><span class="relcat">試算工具</span>更多試算工具</a></li>
</ul>
<p class="sub">想先弄懂開戶流程，看〈<a href="{R}family/open-child-account/">幫小孩開證券戶，爸媽先準備這 5 樣</a>〉。</p>
</nav></div></section>
<script src="{R}assets/save-to-18.js"></script>`
  }));

  verifyFamily(SITE_URL);
}

module.exports = addFamily;
module.exports.CALC_TITLE = CALC_TITLE;
module.exports.CALC_DESC = CALC_DESC;

function verifyFamily(SITE_URL) {
  const pages = [
    ['family/index.html', '親子理財｜慢慢變有錢', '親子理財', SITE_URL + '/family/'],
    ['family/open-child-account/index.html', GUIDE_TITLE + '｜慢慢變有錢', GUIDE_TITLE, SITE_URL + '/family/open-child-account/'],
    ['family/save-to-18/index.html', CALC_TITLE + '｜慢慢變有錢', CALC_TITLE, SITE_URL + '/family/save-to-18/']
  ];
  for (const [rel, title, h1, canonical] of pages) {
    const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    if (!html.includes('<title>' + title + '</title>')) throw new Error('title 不符：' + rel);
    if (!html.includes('<h1>' + h1 + '</h1>')) throw new Error('h1 不符：' + rel);
    if (!html.includes('rel="canonical" href="' + canonical + '"')) throw new Error('canonical 不符：' + rel);
    if ((html.match(/class="warn"/g) || []).length !== 1) throw new Error('免責框不是一個：' + rel);
    if (html.split('僅供教育參考，非投資建議').length - 1 !== 2) throw new Error('免責句應為內文一次、頁尾一次：' + rel);
    if (!html.includes('>親子理財</a>')) throw new Error('導覽沒有親子理財：' + rel);
    if (!html.includes('>試算工具</a>')) throw new Error('導覽沒有試算工具：' + rel);
    if (html.includes('aria-current="page">試算工具</a>')) throw new Error('親子理財頁不該把試算工具標成目前頁：' + rel);
    if (rel === 'family/save-to-18/index.html' && !html.includes('href="../../calculators/"><span class="relcat">試算工具</span>更多試算工具</a>')) throw new Error('試算頁沒有連回試算工具：' + rel);
    if (html.includes('查核說明') || html.includes('法規一律禁止') || html.includes('本輪未獨立核')) throw new Error('不該上頁的查核說明混進：' + rel);
    checkLocalRefs(rel, html);
  }
  const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  if (!home.includes('>親子理財</a>')) throw new Error('首頁導覽沒有親子理財');
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
