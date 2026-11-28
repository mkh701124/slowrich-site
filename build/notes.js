// /notes/ 靜態短文。來源是已發布的 IG，改寫成短文，不從 build/articles.js 整段複製。
// slug 規則：ASCII kebab-case 的短英文主題 id（例如 salary-split）。
// 一旦發布就不要改 slug。一篇筆記一個資料夾 /notes/<slug>/，封面為同資料夾的 cover.png。
// 陣列順序＝列表頁順序。不含未列管主題（例如樂透）。
// 與 /learn/ 同 slug 的 15 篇已從這裡移除，權威在 /learn/<slug>/。
// 舊 /notes/<slug>/ 由 build/build.js 產生 meta refresh 殘頁，不進列表、不進 sitemap：
// before-you-invest-3-things、10-terms-for-financial-news、dca-vs-lump-sum、what-is-a-stock、
// compound-interest、5-beginner-mistakes、what-is-etf、open-brokerage-account、5-questions-before-investing、
// twd-fx-outflow、national-security-fund-what、berkshire-q3-buyback、0050-intro、0056-intro、
// pe-english。
module.exports = [
{
  slug:'ai-cds-1127',
  igUrl:'',
  cat:'新聞',
  title:'這 3 個指標先存起來，別等危機爆發才看到',
  desc:'Michael Burry 在 11/27 轉發 Groundbreaker，問的是蓋資料中心的錢怎麼借。白話說明承租、擔保與殘值支持，以及債務違約保險（CDS）在量什麼；公開事實和作者估算分開看。先存 3 個觀察指標。這是風險路徑，不是已經崩盤。',
  coverAlt:'封面主標「這 3 個指標先存起來，別等危機爆發才看到」，上方小字「慢慢變有錢｜大賣空主角」，副標「大賣空主角警告｜AI 機房借錢結構亮黃燈」。左側灰衣插畫人物，右側三張卡：CDS 違約保險費、官方信評降評風險、債市利差。底部「僅供教育參考，非投資建議」。',
  w:1080,h:1350,
  body:`
<p>《大賣空》的原型 Michael Burry，2026 年 11 月 27 日在 X 轉發 Groundbreaker 的〈Mark to Swap〉。大意是：必讀。這不是我寫的，但一定要讀。他沒有在貼文裡自己算數字，也沒有背書每一個估算。</p>
<p>重點不是先唱空「AI 沒人用」，而是問：蓋資料中心的錢怎麼借來的。原文在 11 月 20 日，講的是園區多半靠大公司的租約或擔保，才借得到比較好的條件。</p>
<h2>像買房，請富豪作保</h2>
<p>信用不夠時，銀行不太願意把成數拉很高；請富豪作保，就比較容易談到大約九成。新創或專案公司也常這樣，請大公司當承租人、擔保人，或提供設備殘值支持。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="融資結構：AI 新創或資料中心，靠大公司承租、擔保或殘值支持，再向銀行、私募信貸或債券融資；CDS 反映市場有多擔心，不是已經違約。">
<div class="flow-row">
<div class="step"><small>誰要借</small><b>AI 新創／資料中心</b><span>自己的信用常常不夠</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step"><small>誰出面</small><b>大公司</b><span>承租、擔保或殘值支持</span></div>
</div>
<div class="flow-row" style="margin-top:8px">
<div class="step"><small>錢從哪來</small><b>再去融資</b><span>銀行、私募信貸、債券</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>市場在看什麼</small><b>CDS 保險費</b><span>越貴代表越擔心</span></div>
</div>
<p class="same">有公開安排，不等於無限擔保</p>
</div>
<figcaption>結構比喻。細節與條件以各公司公告為準。</figcaption>
</figure>
<p>公開可查的有四個，細節以公告為準，不是無限擔保。甲骨文是 Stargate 的名義承租人、雲端營運方，OpenAI 是使用者。輝達為俄亥俄州 SB Energy 的 PORTS-Pike 園區提供有條件信用支持，供 OpenAI 長約使用，有上限和生效條件。谷歌經 Fluidstack、TeraWulf 提供租約信用支持，例如出問題時代付租金或付終止費，有的在承租人達到投資級後結束。博通是特殊目的公司買設備再租給 Anthropic，並做與第一優先債相關的殘值支持，不是替所有債務作保。</p>
<p>這種約定可以很大，卻不一定先出現在帳上。可以接著看<a href="{R}notes/ai-offbalance-compute/">表外算力承諾</a>。</p>
<h2>債務違約保險在量什麼</h2>
<p>CDS（信用違約交換）是怕公司還不出錢時買的保險。1 基點是 0.01%。保險費越貴，市場越擔心，但不等於已經違約，也不等於評等被調降。</p>
<h2>公開事實，和作者的估算</h2>
<p>可以獨立查到的放在第一張卡。316 基點大約等於一年保險費是債務的 3.16%，對的是 11 月中旬，不是 11 月 25 日以後的價格。輝達那一格是升評。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="公開事實：Burry 11 月 27 日轉發，原文 11 月 20 日，輝達官方 AA，甲骨文官方 BBB-，甲骨文 CDS 11 月中約 316 基點，11 月 25 日約 367.5 基點。">
<div class="fact"><span class="k">Burry 轉發</span><span class="v">11/27</span></div>
<div class="fact"><span class="k">原文日期</span><span class="v">11/20</span></div>
<div class="fact"><span class="k">輝達官方</span><span class="v">AA（6/11 升）</span></div>
<div class="fact"><span class="k">甲骨文官方</span><span class="v">BBB-（7/9 降）</span></div>
<div class="fact"><span class="k">甲骨文 CDS・11 月中</span><span class="v">約 316 基點</span></div>
<div class="fact"><span class="k">11/25 收盤</span><span class="v">約 367.5 基點</span></div>
</div>
<figcaption>公開事實。評等是標普 2026/6/11、2026/7/9 的行動；CDS 是公開行情頁。</figcaption>
</figure>
<p>下面的漲幅是作者引用、約 11 月中的數據，本站沒有重算。換成市場隱含評等、85%–95% 的貸款成數、園區可能少值 20%–50%，都是作者估算或模型，不是官方已降評，也不是已成交的跌價。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="作者引用、約 11 月中：六月底以來 CDS 漲幅，博通約 155%，輝達約 130%，甲骨文約 80%，Meta 約 60%。">
<div class="row"><span class="name">博通</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num">約 +155%</span></div>
<div class="row"><span class="name">輝達</span><span class="track"><span class="fill" style="width:84%"></span></span><span class="num">約 +130%</span></div>
<div class="row"><span class="name">甲骨文</span><span class="track"><span class="fill" style="width:52%"></span></span><span class="num">約 +80%</span></div>
<div class="row"><span class="name">Meta</span><span class="track"><span class="fill" style="width:39%"></span></span><span class="num">約 +60%</span></div>
</div>
<figcaption>作者引用，截點約 11 月中。不是官方降評。</figcaption>
</figure>
<figure class="fig">
<div class="facts" role="img" aria-label="作者估算：輝達像 BBB-，部分名字像垃圾級，貸款成數 85% 到 95%，園區可能少值 20% 到 50%。">
<div class="fact"><span class="k">輝達的市場看法</span><span class="v">像 BBB-・作者估算</span></div>
<div class="fact"><span class="k">部分名字</span><span class="v">像垃圾級・作者估算</span></div>
<div class="fact"><span class="k">貸款成數</span><span class="v">85%–95%・作者整理</span></div>
<div class="fact"><span class="k">園區估值</span><span class="v">可能少 20%–50%・作者模型</span></div>
</div>
<figcaption>作者估算或模型。評等機構沒有改成這些等級。</figcaption>
</figure>
<p>講整體時要說投資級信用違約交換指數（CDX），不要說成投資級債券指數。它的升幅比個股小，但不是完全沒動。也不要記成「這一年評等機構只動過一次」：標普降了甲骨文，也把輝達升到 AA；11 月初 Moody's、Fitch 仍維持甲骨文投資級。</p>
<h2>兩種路徑，都還不是崩盤</h2>
<p>溫和：融資變貴、變慢，新機房和晶片、建設支出的成長放慢。嚴重：擔保人信用被看壞時，估價可能先縮水；若還不出錢，虧損才可能傳到銀行、私募信貸和債券持有人。這是風險路徑，不是已經崩盤。</p>
<p>作者自己寫了證偽條件：保險費若回落並維持住，論點就不成立。</p>
<h2>先存這 3 個指標</h2>
<figure class="fig">
<div class="facts" role="img" aria-label="三個觀察指標：CDS 保險費是維持高檔還是回落，評等機構有沒有真的降評，壓力有沒有擴散到 AI 以外。">
<div class="fact"><span class="k">① 保險費</span><span class="v">高檔，還是回落</span></div>
<div class="fact"><span class="k">② 官方評等</span><span class="v">有沒有真的降</span></div>
<div class="fact"><span class="k">③ 有沒有擴散</span><span class="v">會不會超出 AI</span></div>
</div>
<figcaption>觀察清單，不是買賣訊號。回落並維持住，作者認為論點就不成立。</figcaption>
</figure>
<p>控制風險只記兩句：不要過度集中，也不要借太多錢來投資。大跌時先分清這是<a href="{R}notes/pullback-correction-bear/">回檔、修正還是空頭</a>。還沒開始投資，先處理<a href="{R}learn/before-you-invest-3-things/">緊急預備金和高利率負債</a>；想對著清單做，可以<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>
<h2>來源</h2>
<ul>
<li><a href="https://x.com/michaeljburry/status/2126150924955521043">Michael Burry 於 X 的轉發</a>（2026/11/27）</li>
<li><a href="https://www.groundbrkr.com/p/mark-to-swap-how-the-market-is-mispricing">Groundbreaker〈Mark to Swap〉</a>（2026/11/20）</li>
<li><a href="https://openai.com/index/stargate-advances-with-partnership-with-oracle/">OpenAI：Stargate 與甲骨文</a></li>
<li><a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Guarantees-SB-Energys-PORTS-Pike-Technology-Campus-in-Ohio-to-Exclusively-Host-NVIDIA-AI-Compute/default.aspx">輝達新聞稿：俄亥俄園區信用支持</a></li>
<li><a href="https://www.sec.gov/Archives/edgar/data/1045810/000104581026000069/nvda-20260817.htm">輝達 Form 8-K</a>（2026/8/17）</li>
<li><a href="https://investors.terawulf.com/news-events/press-releases/detail/148/terawulf-secures-google-credit-backstop-for-project-financing-in-support-of-19-billion-anthropic-lease-executes-definitive-fluor-epc-agreement">TeraWulf：谷歌信用支持</a>（2026/11/4）</li>
<li><a href="https://www.sec.gov/Archives/edgar/data/1083301/000162828026069810/wulf-20261104.htm">TeraWulf Form 8-K</a>（2026/11/4）</li>
<li><a href="https://investors.broadcom.com/news-releases/news-release-details/bank-america-blackstone-citi-and-morgan-stanley-announce">博通新聞稿：Anthropic 相關融資</a></li>
<li><a href="https://www.sec.gov/Archives/edgar/data/1730168/000119312526434271/d148323d8k.htm">博通 Form 8-K</a>（2026/10/27）</li>
<li><a href="https://www.spglobal.com/ratings/en/regulatory/article/-/view/type/HTML/id/3596281">標普：甲骨文降至 BBB-</a>（2026/7/9）</li>
<li><a href="https://www.investing.com/rates-bonds/oracle-corporation-cds-5-year-usd-historical-data">甲骨文五年期 CDS 歷史行情</a></li>
<li><a href="https://irates.today/credit.html">irates.today：投資級 CDX</a>（2026/11/25）</li>
</ul>
`
},
{
  slug:'bottom-signals-1123',
  igUrl:'',
  cat:'新聞',
  title:'大跌之後，止跌訊號可以看哪些？',
  desc:'11/23 收盤的止跌觀察儀表板。今天收紅 778 點，但早盤已跌破上週低點。用 8 盞燈看融資、外資、量能、恐慌指數、K 線、海外股市、新台幣和國安基金：這是觀察清單，不是買進訊號。',
  coverAlt:'封面主標「大跌之後，止跌訊號可以看哪些？」，小字「今天 +778，早盤已破前低」。8 盞燈多數是空心，量能與新台幣標問號，長下影半亮，國安基金標在場不等於見底。',
  w:1080,h:1350,
  body:`
<p>今天收盤看到紅字，心情會鬆一點，這很正常。今天收紅 778 點：加權收在 36,811.89，漲 778.60 點、漲幅 2.16%。可是早盤最低 35,442.41，已經跌破<a href="{R}notes/tw-drop-1120/">上週五大跌</a>那天的低點 35,738.68。反彈這麼大，就是止跌了嗎？先不要急。這是觀察清單，不是買進訊號。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="11/23 加權收 36,811.89，漲 778.60 點、漲幅 2.16%，最低 35,442.41，外資賣超 289 億，台指 VIX 55.36，新台幣 32.895">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 16l5-5 3 3 8-8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="k">加權收盤</span><span class="v">36,811.89</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 19V6M7 10l5-5 5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="k">漲跌</span><span class="v"><span class="fv-up">+778.60</span></span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v5l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">漲幅</span><span class="v"><span class="fv-up">+2.16%</span></span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 17h16M7 17V9M12 17V6M17 17v-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">最低</span><span class="v">35,442.41</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 12h8M13 8l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="k">外資賣超</span><span class="v"><span class="fv-down">289 億</span></span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 16a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 16l4-6" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">台指 VIX</span><span class="v">55.36</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 12h6" fill="none" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">新台幣</span><span class="v">32.895</span></div>
</div>
<figcaption>11/23 收盤。紅字是上漲，綠字是賣超。台指 VIX 升高不塗成紅。</figcaption>
</figure>
<p>用 8 盞燈一起看。狀態分成空心、問號、半亮，還有「在場≠見底」。問號只代表有一點跡象，還不能算亮。不要把任何一盞當成買進訊號。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="8 盞燈：融資、外資、恐慌指數、費半美股韓股是空心；量能與新台幣是問號；長下影與跳空回補是半亮；國安基金是在場不等於見底">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#fff" stroke="currentColor" stroke-width="1.8"/></svg></span><span class="k">1 融資／維持率</span><span class="v">空心</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#fff" stroke="currentColor" stroke-width="1.8"/></svg></span><span class="k">2 外資動向</span><span class="v">空心</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.8"/><text x="12" y="16.4" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">?</text></svg></span><span class="k">3 量能</span><span class="v">問號</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#fff" stroke="currentColor" stroke-width="1.8"/></svg></span><span class="k">4 恐慌指數</span><span class="v">空心</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#fff" stroke="currentColor" stroke-width="1.8"/><path fill="#F59E0B" d="M4 12a8 8 0 0 0 16 0z"/></svg></span><span class="k">5 長下影與回補</span><span class="v">半亮</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#fff" stroke="currentColor" stroke-width="1.8"/></svg></span><span class="k">6 費半／美股／韓股</span><span class="v">空心</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.8"/><text x="12" y="16.4" text-anchor="middle" font-size="13" font-weight="700" fill="#1E3A8A">?</text></svg></span><span class="k">7 新台幣</span><span class="v">問號</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#F59E0B"/><path d="M7.5 12h9" stroke="#1E3A8A" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">8 國安基金／限空</span><span class="v">在場≠見底</span></div>
</div>
<figcaption>空心是還沒出現，問號是只有一點跡象，半亮是有但不完整。金色只標狀態，不代表可以買。</figcaption>
</figure>
<h2>融資／維持率：空心</h2>
<p>這盞看借錢買股的賣壓有沒有減輕，維持率有沒有從低檔回升。上週五上市融資一天少 491 億，6,462 戶被追繳，還不能說見底回升。11/23 融資餘額官方尚未公布，所以是空心。被追繳時股票為什麼會被賣掉，可以看<a href="{R}notes/margin-call-what/">融資追繳</a>。</p>
<h2>外資動向：空心</h2>
<p>這盞看賣超有沒有縮小，或轉成連續買超。指數漲，外資卻賣超 289 億，比上週五的 95.11 億還多。指數紅、外資還在賣，這盞沒亮。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="11/23 外資賣超 289 億，11/20 外資賣超 95.11 億">
<div class="row"><span class="name">11/23</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num"><span class="fv-down">289 億</span></span></div>
<div class="row is-ref"><span class="name">11/20</span><span class="track"><span class="fill" style="width:32.9%"></span></span><span class="num"><span class="fv-down">95.11 億</span></span></div>
</div>
<figcaption>外資賣超，證交所。金色長條是上週五對照。綠字是賣超，不是股價下跌。</figcaption>
</figure>
<h2>量能：問號</h2>
<p>這盞看上漲時成交有沒有放大。今天上漲，成交 1兆1,066.77 億，大於上週五的 9,353.10 億，反彈有人參與，但只有一天，所以只標問號。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="11/23 成交 1兆1,066.77 億，11/20 成交 9,353.10 億">
<div class="row"><span class="name">11/23</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num">1兆1,066.77 億</span></div>
<div class="row is-ref"><span class="name">11/20</span><span class="track"><span class="fill" style="width:84.5%"></span></span><span class="num">9,353.10 億</span></div>
</div>
<figcaption>證交所成交金額，含一般、零股、盤後定價。金色是上週五。只比一天，不能叫止跌。</figcaption>
</figure>
<h2>恐慌指數：空心</h2>
<p>這盞看波動預期有沒有從高檔回落。台指 VIX 不降反升，收 55.36，比上週五的 52.13 更高。數字高，是覺得未來波動大，不是已經跌完。美股 VIX 最新收盤仍是上週五的 35.89，美股今天尚未開盤。這盞是空心。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="台指 VIX 11/23 收 55.36，11/20 收 52.13，不降反升">
<div class="row"><span class="name">11/23</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num">55.36</span></div>
<div class="row is-ref"><span class="name">11/20</span><span class="track"><span class="fill" style="width:94.2%"></span></span><span class="num">52.13</span></div>
</div>
<figcaption>期交所台指選擇權波動率指數。升高用海軍藍，不塗成上漲的紅。</figcaption>
</figure>
<h2>長下影與跳空回補：半亮</h2>
<p>這盞看盤中殺低後有沒有被買回，跳空有沒有填上。今天有下影，開盤跳空也回補了，但早盤先破前低，實體又比下影長，只算半亮。</p>
<figure class="fig">
<ol class="timeline" role="img" aria-label="11/23 開 35,899.48，低 35,442.41，高 37,108.20，收 36,811.89，漲 778.60 點">
<li><b>開盤</b><span>35,899.48</span></li>
<li><b>最低</b><span>35,442.41</span><span>跌破上週低點 35,738.68</span></li>
<li><b>最高</b><span>37,108.20</span></li>
<li><b>收盤</b><span>36,811.89</span><span class="fv-up">+778.60（+2.16%）</span></li>
</ol>
<figcaption>證交所開高低收。有下影、跳空後來填上，但早盤先破前低，只算半亮。</figcaption>
</figure>
<h2>費半／美股／韓股：空心</h2>
<p>這盞看海外有沒有先止穩。費半上週五跌 10.73%；韓股今天還收跌 3.31%；美股今天尚未開盤。海外沒亮，這盞是空心。</p>
<h2>新台幣：問號</h2>
<p>這盞看匯率有沒有止貶。銀行間收盤 32.895，比前收 32.936 升 4.1 分，短線有止貶，還不是趨勢翻轉，所以只標問號。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="新台幣前收 32.936，11/23 收 32.895，升 4.1 分，短線止貶還不是趨勢翻轉">
<div class="flow-row">
<div class="step"><small>前收</small><b>32.936</b><span>11/20</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>今天收</small><b>32.895</b><span>升 4.1 分</span></div>
</div>
<p class="same">短線止貶，還不是趨勢翻轉</p>
</div>
<figcaption>央行銀行間收盤。一天升值只標問號。</figcaption>
</figure>
<h2>國安基金與限空令：在場≠見底</h2>
<p>這盞看政策在不在場，不是底部到了沒有。<a href="{R}learn/national-security-fund-what/">國安基金</a>已經進場，今天起禁止平盤以下放空。過去 9 次，有 6 次宣布後還再跌超過 5%。標成「在場≠見底」。</p>
<h2>燈要一起看</h2>
<p>一盞亮了不夠。今天收紅，也不代表止跌完成。就算往後多數燈都亮了，仍然只是觀察清單，不是買進訊號。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="今天收紅 778 點，仍是觀察清單，不是買進訊號">
<div class="flow-row">
<div class="step"><small>今天</small><b><span class="fv-up">收紅 778 點</span></b><span>早盤已破前低</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>請把它當成</small><b>觀察清單</b><span>不是買進訊號</span></div>
</div>
</div>
<figcaption>燈要一起看。一盞亮了不夠，收紅也不代表止跌完成。</figcaption>
</figure>
<p>先顧<a href="{R}learn/before-you-invest-3-things/">緊急預備金</a>，不借錢，不 All in。生活和短期要用的錢留在旁邊，不要拿去跟這一根紅 K 對賭。</p>
<h2>來源</h2>
<ul>
<li>證交所 <a href="https://www.twse.com.tw/rwd/zh/afterTrading/FMTQIK?date=20261101&amp;response=html">FMTQIK</a>：收盤指數、成交金額。MI_INDEX 為同日收盤來源，討論稿未另附網址。</li>
<li>證交所 MI_5MINS_HIST：開、高、低。討論稿未另附網址。</li>
<li>證交所 <a href="https://www.twse.com.tw/rwd/zh/marginTrading/MI_MARGN?date=20261120&amp;selectType=MS&amp;response=html">MI_MARGN（11/20）</a>：上市融資餘額。11/23 官方尚未公布。</li>
<li>證交所 BFI82U：外資賣超。討論稿未附檔案網址，同日數字見中央社。</li>
<li>期交所 <a href="https://www.taifex.com.tw/file/taifex/Dailydownload/vix/log2data/202611new.txt">台指選擇權波動率指數檔</a>：台指 VIX。</li>
<li>美股 VIX：Yahoo Finance 日線，最新收盤為 11/20。討論稿未附網址。</li>
<li><a href="https://www.cbc.gov.tw/tw/lp-645-1-1-60.html">央行</a>：新台幣銀行間收盤。</li>
<li><a href="https://www.fsc.gov.tw/ch/home.jsp?dataserno=202611210001&amp;dtable=News&amp;id=96&amp;mcustomize=news_view.jsp&amp;parentpath=0">金管會新聞稿（2026-11-21）</a>：限空令。</li>
<li><a href="https://www.cna.com.tw/news/afe/202611230015.aspx">中央社（2026-11-23）</a>：費半、法人、國安基金。</li>
<li><a href="https://www.cna.com.tw/news/afe/202611095002.aspx">中央社（2026-11-09）</a>：國安基金前 9 次。</li>
<li><a href="https://money.udn.com/money/story/5612/9895871">經濟日報（2026-11-23）</a>：盤勢報導。</li>
<li><a href="https://en.yna.co.kr/view/AEN20261123001900320">韓聯社（賣方側車）</a>、<a href="https://cn.yna.co.kr/view/ACK20261123000900881">韓聯社（開盤）</a>。收盤跌幅取自韓聯社收盤稿，討論稿未附該則網址。</li>
</ul>`
},
{
  slug:'tw-drop-1120',
  cat:'新聞',
  title:'一周蒸發 17.5%、7,641 點！限空令擋不住，大跌日最不該做的事',
  desc:'11/20 加權收 36,033.29 點，跌 2,393.60 點、跌幅 6.23%；本周跌 7,641.83 點、約 17.5%。白話分清跌點和跌幅、算跌了要漲多少才回本，以及大跌日先看預備金、定期定額和部位，而不是恐慌賣光或融資攤平。',
  coverAlt:'封面綠色大字 17.5%，標題寫一周蒸發 17.5%、7,641 點，副標是限空令擋不住、大跌日最不該做的事',
  w:1080,h:1350,
  body:`
<p>如果你現在看著帳戶，胸口有點緊，這很正常。一天少了兩千多點、一周少了約一成七，很容易想立刻做點什麼。先停一下：這篇不猜明天漲跌，也不叫你買或賣。只把 11/20 收盤的數字拆開，看大跌日最不該做的事。</p>
<h2>今天收盤發生了什麼</h2>
<p>加權指數收 36,033.29 點，跌 2,393.60 點、跌幅 6.23%。開盤 37,646.13 就是當天最高，最低 35,738.68。從昨收 38,426.89 算到這個低點，盤中最多跌過 2,688.21 點，尾盤回到 3 萬 6 附近。證交所市場成交總計 9,323.21 億元。這是收盤數字，不是盤中暫值。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="11/20 加權收 36,033.29 點，跌 2,393.60 點，跌幅 6.23%，成交總計 9,323.21 億元">
<div class="fact"><span class="k">收盤</span><span class="v">36,033.29</span></div>
<div class="fact"><span class="k">跌點</span><span class="v"><span class="fv-down">−2,393.60</span></span></div>
<div class="fact"><span class="k">跌幅</span><span class="v"><span class="fv-down">−6.23%</span></span></div>
<div class="fact"><span class="k">成交總計</span><span class="v">9,323.21 億</span></div>
</div>
<figcaption>2026/11/20 收盤，證交所。綠字是下跌。</figcaption>
</figure>
<h2>跌點很大，不等於跌幅創紀錄</h2>
<p>跌點是少了幾點，跌幅是少了百分之幾。指數已在三、四萬點，同樣的百分比換成點數就會很大。依證交所收盤跌點，前三名是 7/17 的 2,953.71 點（收 42,671.27）、11/16 的 2,635.04 點（收 41,040.08）、以及今天的 2,393.60 點。多家媒體因此寫「史上第三大收盤跌點」。點數排第三，跌幅仍是 6.23%，兩件事不要混在一起。跌多少才叫回檔、修正或熊市，可看<a href="{R}notes/pullback-correction-bear/">回檔、修正和熊市差在哪</a>。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="收盤跌點：7/17 為 2,953.71 點，11/16 為 2,635.04 點，11/20 為 2,393.60 點">
<div class="row"><span class="name">7/17</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num"><span class="fv-down">−2,953.71</span></span></div>
<div class="row"><span class="name">11/16</span><span class="track"><span class="fill" style="width:89.2%"></span></span><span class="num"><span class="fv-down">−2,635.04</span></span></div>
<div class="row"><span class="name">11/20</span><span class="track"><span class="fill" style="width:81%"></span></span><span class="num"><span class="fv-down">−2,393.60</span></span></div>
</div>
<figcaption>證交所收盤跌點。長條只比較點數，不是跌幅。</figcaption>
</figure>
<h2>這一周：五天跌了四天</h2>
<p>跟上週五（11/13）收盤 43,675.12 比，一周少了 7,641.83 點，精確 17.50%。五個交易日跌四天，只有週三漲 102.80 點。單日點數很刺眼，這一周的百分比才看得出深度。</p>
<figure class="fig">
<ol class="timeline" role="img" aria-label="11/16 收 41,040.08 跌 2,635.04；11/17 收 40,092.11 跌 947.97；11/18 收 40,194.91 漲 102.80；11/19 收 38,426.89 跌 1,768.02；11/20 收 36,033.29 跌 2,393.60">
<li><b>11/16</b><span>41,040.08</span><span class="fv-down">−2,635.04</span></li>
<li><b>11/17</b><span>40,092.11</span><span class="fv-down">−947.97</span></li>
<li><b>11/18</b><span>40,194.91</span><span class="fv-up">+102.80</span></li>
<li><b>11/19</b><span>38,426.89</span><span class="fv-down">−1,768.02</span></li>
<li><b>11/20</b><span>36,033.29</span><span class="fv-down">−2,393.60</span></li>
</ol>
<figcaption>本周收盤，證交所。紅漲、綠跌。</figcaption>
</figure>
<figure class="fig">
<div class="stack" role="img" aria-label="五個交易日裡四天收跌、一天收漲">
<div class="stack-bar"><i class="a" style="width:80%"></i><i class="b" style="width:20%"></i></div>
<ul class="stack-key"><li><span class="fv-down">四天收跌</span></li><li class="b"><span class="fv-up">一天收漲</span></li></ul>
</div>
<figcaption>只算這五天的漲跌天數，不是後市預測。</figcaption>
</figure>
<p>上市股票 16 家上漲（漲停 4 家）、1,058 家下跌（跌停 179 家）、11 家持平。櫃買指數收 263.31，跌 22.02 點、跌幅 7.72%，成交 860.11 億元，比加權的 6.23% 更深。成交較薄的股票，急著賣時往往跌更重。權值最大的台積電收 2,000 元，跌 100 元、跌幅 4.76%，盤中最低 1,970；這裡只當指數背景，不是談這檔怎麼做。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="上市上漲 16 家、下跌 1,058 家、跌停 179 家，櫃買跌幅 7.72%">
<div class="fact"><span class="k">上漲</span><span class="v"><span class="fv-up">16 家</span></span></div>
<div class="fact"><span class="k">下跌</span><span class="v"><span class="fv-down">1,058 家</span></span></div>
<div class="fact"><span class="k">跌停</span><span class="v"><span class="fv-down">179 家</span></span></div>
<div class="fact"><span class="k">櫃買</span><span class="v"><span class="fv-down">−7.72%</span></span></div>
</div>
<figcaption>證交所上市股票家數；櫃買中心 2026/11/20。</figcaption>
</figure>
<h2>跌了 X%，要漲 X÷(100−X) 才回本</h2>
<p>報酬不是對稱的。跌了 X%，要回到原點，得再漲 X ÷ (100 − X)，不是再漲同一個 X%。今天跌 6.23%，2,393.60 ÷ 36,033.29 約 6.64%，要漲約 6.6% 才回到開跌前。本周跌 17.50%，7,641.83 ÷ 36,033.29 約 21.2%。從 10/6 收盤高點 49,822.55（盤中最高 49,968.92）算到今天，累跌 13,789.26 點、約 27.7%，漲回該收盤大約要 38.3%。這是數學，不是預測何時會漲回來，也不是叫你現在動作。</p>
<figure class="fig">
<table class="t">
<thead><tr><th>已經跌了</th><th>要漲回</th></tr></thead>
<tbody>
<tr><td>今天 6.23%</td><td>約 6.6%</td></tr>
<tr><td>本周 17.50%</td><td>約 21.2%</td></tr>
<tr><td>自 10/6 的 27.7%</td><td>約 38.3%</td></tr>
</tbody>
</table>
<figcaption>公式 X÷(100−X)，以 11/20 收盤覆核。不是預測。</figcaption>
</figure>
<figure class="fig">
<div class="flow" role="img" aria-label="本周跌 17.50%，要漲約 21.2% 才回到上週五收盤，不是再漲 17.5%">
<div class="flow-row">
<div class="step"><small>本周跌了</small><b><span class="fv-down">17.50%</span></b><span>7,641.83 點</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>打平要漲</small><b>約 21.2%</b><span>不是 17.5%</span></div>
</div>
<p class="same">跌 X%，要漲 X ÷ (100 − X)</p>
</div>
<figcaption>21.2% 是 7,641.83÷36,033.29。數學，不是預測。</figcaption>
</figure>
<h2>限空令不是安全網</h2>
<p>11/19 美股四大指數都跌超過 2%：道瓊 49,097.06（−1,101.11、−2.19%）、標普 7,175.83（−147.80、−2.02%）、那斯達克 23,879.20（−550.69、−2.25%）、費半 9,419.72（−233.07、約 −2.42%），台積電 ADR −2.90%。台股跳空開低，和隔夜走弱是同一天看到的事，不能單一一句定論，也不能保證明天。</p>
<p>金管會 11/19 宣布、11/20 上路的限空措施：個股收盤跌幅達 3.5% 以上，次一交易日不得低於前收盤放空；盤中借券賣出上限由前 30 日均量的 3% 降到 1%。規則當天有效，加權仍跌 2,393.60 點。政策改的是部分交易規則，不是保證指數不跌。</p>
<p>國安基金今天買了沒有、買多少，沒有官方當日明細，這裡不猜。先前談過<a href="{R}learn/national-security-fund-what/">國安基金是什麼</a>：授權也不等於你的部位有人托住。不要把「有人護盤」或「不能隨便放空」當成自己的安全網。</p>
<h2>大跌日先看這三件，另外三件別做</h2>
<ul>
<li>緊急預備金還在不在。生活和短期要用的錢，不要拿去跟市場對賭。</li>
<li>定期定額若本來就有計畫，照紀律走：不要因一天新聞停扣，也不要一次砸進很多個月的錢。可以看<a href="{R}learn/dca-vs-lump-sum/">定期定額和單筆投入</a>。</li>
<li>部位集中度。太壓在單一題材或少數幾檔，指數跌一截，帳戶會更有感。</li>
</ul>
<p>不要因為恐慌一次賣光。不要借錢，也不要用融資攤平：跌愈多愈補，虧損被放大，補不出錢時股票可能被券商賣掉，可看<a href="{R}notes/margin-call-what/">融資斷頭是什麼</a>。不要把「第三大跌點」當成明天一定反彈或一定再崩。</p>
<p>先分清跌了幾點、跌了幾 %，再用跌 X% 要漲 X÷(100−X) 算打平需要的漲幅。搞懂數字，比猜明天紅綠更重要。還在補基本功的話，可以<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`
},
{
  slug:'nvda-earnings',
  cat:'新聞',
  title:'一周少了約 5,730 億美元：輝達要交出沒有黃仁勳的成績單',
  desc:'輝達將在 11/17 盤後公布黃仁勳辭職後的第一場財報。用這件事看懂財報三格（營收、獲利、財測），以及為什麼一家公司的成績單，也可能牽動你的指數基金。',
  coverAlt:'輝達財報 11/17 盤後公布：沒有黃仁勳的第一張成績單',
  w:1080,h:1350,
  body:`
<h2>11/17 這場財報，為什麼特別被盯</h2>
<p>2026 年 11 月 12 日，輝達宣布黃仁勳辭去執行長、總裁與董事職務，立即生效，由財務長柯蕾絲（Colette Kress）代理執行長。這是公司正式公告的事實。接下來，美國時間 11 月 17 日盤後，輝達要公布 2027 會計年度第 3 季財報（季底為 10 月 25 日）。這是他離開後的第一場。</p>
<p>公司 10 月 28 日就排定了時程：大約美西時間下午 1:20 先公布數字（台北時間 11 月 18 日清晨 5:20），下午 2:00 舉行電話法說會（台北時間早上 6:00）。官方會先放出財務長的書面說明；媒體報導，這場法說會將由柯蕾絲以代理執行長身分主持。辭職前後的背景，可再看<a href="{R}notes/nvda-jensen/">黃仁勳風波與北士科</a>、<a href="{R}notes/jensen-petition/">連署讓他回來？</a>和<a href="{R}notes/culper-nvda/">放空報告是什麼</a>。</p>
<h2>先把「已經發生的股價」和「還沒出來的財報」分開</h2>
<p>先看這週已經發生的事。上週五（11 月 13 日）輝達收在 162.85 美元，當日跌約 2%；全周跌約 13%，市值少了約 5,730 億美元。這已是連續第 6 週下跌，是 2012 年以來最長的連跌週數。經濟日報和 CNBC 都提到，比起 10 月高點，大約跌了超過三成；CNBC 寫，這波連跌讓市值少了約 1.7 兆美元。</p>
<p>這些是股價走勢，不是財報成績。成績單要等到 11 月 17 日盤後才會公布。短線漲跌很常見，也不等於已經告訴你這季賣了多少、下一季會怎樣。</p>
<h2>新手看財報，先看 3 格</h2>
<p>面對這種新聞，不必一次吞下所有數字。先把 3 個格子分開：</p>
<ol>
<li>營收：這季賣了多少。</li>
<li>獲利：這季賺了多少。新聞常看「每股盈餘」（EPS），也就是把獲利攤到每一股來看。</li>
<li>財測：公司自己說，下一季大概會怎樣。</li>
</ol>
<p>白話記就好：財報是已經考完的成績單，發生了、改不了；財測是公司對未來的預告；分析師預期則是市場事先的猜想。三件事情不一樣。英特爾先前就出現過「成績單不差，但財測低於預期，股價仍大跌」的例子，關鍵往往在「未來」而不是「過去」。</p>
<h2>市場現在「預期」什麼，公司先前又預告了什麼</h2>
<p>截至本稿（2026 年 11 月 15 日），分析師預估這季營收約 1,087～1,089 億美元（FactSet 為 1,087 億美元，LSEG 為 1,089 億美元，年增約 91%），調整後每股盈餘約 2.47 美元（年增約 90%）。輝達自己在上一季已經預告：第 3 季營收 1,080 億美元，加減 2%；這個財測沒有假設來自中國的資料中心運算營收。下季（第 4 季）市場預估營收約 1,248 億美元、調整後每股盈餘約 2.74 美元（FactSet）。</p>
<p>請記住：這些都還不是成績單。實際數字、以及公司會不會再給新的財測，都要等 11 月 17 日盤後。</p>
<p>除了總營收，市場也常看兩個更靠近「核心生意」的數字。資料中心營收，指的是賣給雲端和 AI 機房的那一塊，是輝達現在最主要的業務；上一季（已公布）是 890 億美元，當時總營收是 962 億美元。有機構預估這季這塊約 1,018 億美元（S&amp;P Global 引述 Visible Alpha），這同樣只是預期。毛利率則是每賣 100 元、扣掉直接成本後大概留下多少；上一季是 75%，公司先前預告這季約 74%，加減 0.5 個百分點。</p>
<h2>這次大家更在意的，其實是「之後怎麼走」</h2>
<p>新聞寫，市場普遍預期這季數字可能不差，但更想聽的是之後怎麼走。經濟日報整理出幾件市場在問的事：新的財測夠不夠力、客戶訂單有沒有變、黃仁勳留下的成長預測還算不算數（例如有分析師在追問，公司是否維持 2028 會計年度營收成長 70%、以及 2030 年全球 AI 支出達 3 至 4 兆美元的判斷）。也有人關注，新管理層會不會調整對 AI 客戶的投資和融資支持——這類安排為什麼會被拿出來討論，可對照<a href="{R}notes/ai-offbalance-compute/">AI 表外算力承諾</a>。華爾街日報曾報導，柯蕾絲與黃仁勳對較積極的安排意見不同；這是媒體報導，不是公司聲明。</p>
<p>這些都是「市場在問」，不是已經發生的答案。我們不預測法說會會怎麼說，也不猜股價會漲還是跌。</p>
<h2>什麼是集中風險</h2>
<p>就算你沒有單獨買輝達的股票，也不等於沒碰到它。美股常見的指數基金，是依照公司大小來分配比重的：公司越大，在指數裡佔得越多。少數巨頭一晃，指數也可能跟著動。這就叫集中風險。</p>
<p>權重每天都會變，不能背死一個百分比。用一個有日期的快照來理解就好：2026 年 11 月 4 日，追蹤標普 500 的 SPY，持股裡輝達約佔 7.3%（Trefis 引述 State Street 的持股資料）。那是這週大跌之前的數字，跌多了佔比會變小。真正要帶走的觀念是：你以為自己買了 500 家公司，其實少數幾家就能大幅牽動大盤。台灣的 AI 供應鏈也常和輝達訂單連在一起，所以 11 月 17 日這場財報，往往不只是一家公司的事。</p>
<h2>看這類新聞，先分 3 類</h2>
<ul>
<li>已證實：黃仁勳辭職、Kress 代理執行長、財報時間已排定、這週股價跌幅、上一季已公布的營收和資料中心數字、公司先前給的第 3 季財測。</li>
<li>預期：分析師對這季營收、獲利和下季的估算，以及機構對資料中心營收的預估。</li>
<li>還不知道：這季實際數字、公司新的財測、訂單有沒有變、融資安排會不會調整。</li>
</ul>
<p>分清楚這 3 類，就比較不會被標題帶著走。這篇只教怎麼看財報，不預測漲跌，也不建議買賣任何股票或基金。</p>
<p>文中分析師數字為截稿前的預期，會隨時間變動；11/17 盤後請以公司官方公告為準。</p>`
},
{
  slug:'jensen-petition',
  cat:'新聞',
  title:'馬斯克也簽了！近 5 萬人連署要黃仁勳回輝達，連署到底有沒有用？',
  desc:'黃仁勳辭去輝達 CEO 後，Stand with Jensen 連署衝到近 5 萬人，馬斯克也親口說簽了。用這件事看懂：連署要什麼、誰才能決定 CEO 去留、新手怎麼分辨事實與主張。',
  coverAlt:'馬斯克也簽了！近 5 萬人連署要黃仁勳回輝達，連署到底有沒有用？',
  w:1080,h:1350,
  body:`
<h2>一夕之間，近 5 萬人站出來</h2>
<p>2026 年 11 月 12 日，輝達宣布黃仁勳辭去 CEO、總裁與董事職務，立即生效，由財務長 Colette Kress 代理執行長。這是公司正式公告的事實。隔天，一個獨立的連署網站 Stand with Jensen 上線，寫了一封給輝達董事會的公開信。</p>
<p>截至 11/14 13:08（台北），網站計數 48,477 人，其中自稱現任員工 3,243 人、前員工 507 人、股東 27,005 人、支持者 17,722 人。要注意：這些身分都是簽署人自己填的，網站也寫明未經查證。另外 WIRED 報導，輝達內部建議箱有 1,600 多則留言挺他，那是媒體報導，不屬於連署分類。</p>
<h2>誰簽了？誰只是「名單上有」</h2>
<p>馬斯克在 X 上親口說「我也要簽」，Replit 執行長 Amjad Masad 也轉發了這封信，這兩位算是本人證實。名單上另外列有 a16z 創辦人 Marc Andreessen、Epic 執行長 Tim Sweeney、YC 執行長 Garry Tan、老虎環球 Chase Coleman 等人，但我們沒有逐一查證是否本人。</p>
<p>名單上甚至出現 Britney Spears、the Beatles、魯夫，代表任何人都能用名人名字簽。另一封「不復職就集體跳槽」的員工信，被指幾乎照抄 2023 年 OpenAI 員工信，目前沒有可靠來源證實。</p>
<h2>連署要的是 3 件事</h2>
<p>公開信不只是喊「讓他回來」，而是提出 3 個要求：</p>
<ol>
<li>調查期間先讓黃仁勳復職；如果董事會認為不行，要拿出具體證據說明。</li>
<li>公開調查的範圍、獨立性與時程，並讓他有機會答辯。</li>
<li>盡快公開解釋做這個決定的理由與證據。</li>
</ol>
<h2>新手要懂：連署是「壓力」，不是「票」</h2>
<p>連署沒有法律效力。上市公司的 CEO 由董事會任免，股東真正的權力，是在股東會上投票選董事。所以就算有 2 萬多人自稱股東，也不等於能直接改變決定；連署能做的，是讓董事會感受到員工、股東與市場的壓力。</p>
<p>有人會拿 2023 年 OpenAI 舉例：Altman 被開除後，絕大多數員工連署揚言離職，5 天後他就回任。但當時是員工集體跳槽的真實威脅；這次還牽涉國安與出口管制調查（背景可看<a href="{R}notes/nvda-jensen/">黃仁勳風波與北士科</a>和<a href="{R}notes/culper-nvda/">放空報告是什麼</a>），情況不同，不能直接套用。</p>
<h2>看這類新聞，先分 3 類</h2>
<ul>
<li>已證實：黃仁勳辭職、Kress 代理 CEO。</li>
<li>主張：他是被迫離開、沒有正當程序。</li>
<li>未證實：間諜指控、集體跳槽信。</li>
</ul>
<p>分清楚這 3 類，就不會被情緒或標題帶著走。這也是一堂公司治理課：公司大事到底由誰決定。</p>
<p>數字為連署網站即時計數，會持續變動。</p>`
},
{
  slug:'culper-nvda',
  cat:'新聞',
  title:'他 6 個月前就說輝達有問題：放空報告是什麼？新手該怎麼看',
  desc:'放空機構 Culper Research 5 月發 40 頁報告指輝達有「中國問題」，6 個月後黃仁勳風波讓報告瘋傳。用故事看懂放空報告，以及新手該問的 3 個問題。',
  coverAlt:'他 6 個月前就說輝達有問題：放空報告是什麼？新手該怎麼看',
  w:1080,h:1350,
  body:`
<h2>一份沒人看的報告</h2>
<p>2026 年 5 月 13 日，31 歲的 Christian Lamarco 發布一份 40 頁報告。他是放空機構 Culper Research 的創辦人，平常研究的是冷門小公司，這次挑上全世界最熱門的輝達。報告第一句話就寫：「我們放空輝達，只有一個原因——它有重大的中國問題。」</p>
<p>發布那天，黃仁勳正跟著美國總統川普搭空軍一號飛往北京，輝達股價隨後創新高。這份報告，起初幾乎沒人注意。</p>
<h2>報告說了什麼</h2>
<p>Culper 的主要指控是：輝達表示 2025 年 4 月美國出口限制後，中國業務已經「歸零」；但 Culper 估計，輝達 FY2026 的算力營收仍有 2 成以上與中國需求有關，管道是東南亞中間商，重點點名新加坡的 Megaspeed。報告也寫，黃仁勳與 Megaspeed 的 Alice Huang（黃樂）關係「親密得令人不安」，並附上兩人在聚會、用餐場合同框的照片。</p>
<p>他們的查法包括訪問輝達前員工、翻閱新加坡與馬來西亞的公司登記、追蹤貿易紀錄，甚至分析一段在台灣麵店外拍到的 YouTube 影片。以上都是 Culper 的指控與估計，不是官方調查結論。</p>
<h2>6 個月後，報告突然瘋傳</h2>
<p>11 月，黃仁勳公開承認婚外情，董事會啟動獨立調查（詳見<a href="{R}notes/nvda-jensen/">黃仁勳風波與北士科</a>）。媒體報導對象就是黃樂，並報導美方懷疑她與中國情報單位有關，中國外交部已否認。那份舊報告於是被翻出來瘋傳。</p>
<p>Lamarco 受訪時說：「有時候，人們會在意你說的話；有時候不會。這次，他們是 6 個月後才開始在意。」根據 CBS 報導，輝達股價從報告發布當天的 225.83 美元，跌到 11/10 的 168.89 美元，約 -25%。</p>
<h2>新手要懂：放空報告是「有立場的研究」</h2>
<p>放空，是借股票來賣、等股價跌了再買回來，所以放空的人是股價下跌才賺錢。這代表放空報告天生帶有立場：可能挖到真問題，也可能誇大。這次的報告其實從沒提到婚外情，只說關係很近；Lamarco 也不願透露獲利多少、是否仍持有空單。</p>
<h2>看到放空報告，先問 3 件事</h2>
<ol>
<li>證據能不能被第三方查證？例如官方文件、主管機關調查、可靠媒體的獨立報導。</li>
<li>公司怎麼回應？有沒有具體反駁，還是迴避？</li>
<li>我是不是因為一份報告就急著追殺或抄底？</li>
</ol>
<p>一份報告可以讓你多想一層，但不該替你做決定。想了解 AI 公司還有哪些財報外的風險，可以看<a href="{R}notes/ai-offbalance-compute/">AI 表外算力承諾</a>。</p>`
},
{
  slug:'nvda-jensen',
  cat:'新聞',
  title:'黃仁勳風波後，輝達北士科總部會不會生變？市長說照計畫，公司自己還沒說話',
  desc:'黃仁勳承認不忠、董事會調查中之後，北士科「星艦總部」會不會生變？白話分開市長說法、業界判斷和輝達尚未表態，並提醒總部還沒動工、預計 2030 年啟用，周邊房價已先反映預期，要小心。',
  coverAlt:'淡底白卡，金色大字「2030」，主標「預計啟用」，副標「北士科總部會不會生變？先分清誰說了什麼」',
  w:1080,h:1350,
  body:`
<p>黃仁勳承認不忠、輝達董事會啟動調查之後，台灣最常被問的是：北士科的「星艦總部」會不會生變？這座台灣總部還沒動工，先前規劃預計 2030 年啟用。美國時間 11 月 8 日，輝達創辦人兼執行長發信承認對妻子不忠，並向家人與同事道歉；同日董事會因媒體報導他可能成為外國情報行動的目標，啟動獨立調查。11 月 10 日已請外部律師主持。截至本稿（台北時間 11 月 12 日上午），撤換仍是據報導，他仍是官方在任執行長。</p>
<p>先分清誰說了什麼。台北市長蔣萬安 11 月 9 日、10 日都說，目前沒有收到相關訊息，與輝達溝通順暢，會按照既定計畫繼續合作。這是市長的說法，代表北市目前沒接到生變訊息；輝達本身這段期間沒有就北士科發表聲明，不要寫成「公司已證實總部不變」。風波本身也一樣：已證實的是他承認不忠、公司正在調查；女方身分、間諜指控、第二段關係、董事會準備撤換，都還是據報導、尚未經公司證實。</p>
<p>高力國際黃舒衛、宏大國際陳益盛、第一太平戴維斯丁玟甄等認為，輝達在台至少有 150 家供應鏈廠商，選台北看的是供應鏈和人才；就算換執行長，在台布局也難大幅改掉。這是業界判斷，不是官方保證。變數仍在：調查結果還沒出來；若真的換執行長，投資時程可能重新排序。公司對外的臉若高度綁在一個人身上，市場會先擔心布局會不會動，但股價波動也不等於總部已經改了。若想對照「指數漲、個股仍可能跌」，可讀<a href="{R}notes/us-stocks-1109/">費半大漲那天，輝達卻獨自收黑</a>。</p>
<p>周邊房價已先反映預期。非凡新聞提到，北士科重劃區部分建案每坪上看 130 萬元、甚至逼近 150 萬元，北投預售屋平均每坪 112.8 萬元。總部還沒動工、距離預計啟用還有好幾年，這些價格裡已經含了一部分對未來的想像；已經跑在前面的預期，本身就是風險，要小心。這不是買賣房或進出場建議。若還在打基本功，可以先看<a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？這 10 個詞先學起來</a>，或<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>
`
},
{
  slug:'ai-offbalance-compute',
  cat:'觀念',
  title:'帳上看起來沒欠錢，附註裡卻寫了近 9,000 億的算力帳單',
  desc:'用 Anthropic 招股書揭露的約 8,954 億美元算力承諾，以及媒體報導、尚未證實的 OpenAI 約 6,650 億美元，白話說明什麼叫表外採購承諾、為什麼雲端合約常不進資產負債表，以及看這些數字時該問什麼。',
  coverAlt:'淡底白卡，金色大字「8954億」，主標「算力承諾」，副標「帳上看起來很輕，錢其實寫在附註裡」',
  w:1080,h:1350,
  body:`
<p>Anthropic（Claude 背後的公司）11 月 2 日向美國證管會遞交修正後的招股書，自己寫道：截至 2026 年 9 月 30 日當日及之後，已簽下的採購承諾和租賃合約，合計承諾支出約 8,954 億美元，絕大部分和算力、基礎設施有關。其中約 4,475 億美元預期在 2030 年底前發生，未來 12 個月到期的約 698 億美元。稍早媒體 <em>The Information</em> 也報導，OpenAI 內部財報截至 3 月 31 日有約 6,650 億美元的採購承諾、帳上借款卻是 0；這個數字 OpenAI 沒有公開證實，只能當「據報導」。寫作靈感來自 CP潘思璇的公開討論，本文依官方文件改寫，不是轉載原文。</p>
<p>這些數字比較像未來可能要付的帳單，很多不會先出現在<a href="{R}terms/financial-statements/">財務報表</a>的資產負債表正面，而是寫在附註裡。可以用檸檬汁攤來想：你沒買榨汁機，而是跟隔壁叔叔約定，十年內每天幫你榨 100 杯，不管賣不賣得出去都照付。帳本正面寫「沒欠錢、沒買機器」，看起來很乾淨；付款約定其實寫在最後一頁的小字裡。哪天客人變少，你還是得天天付錢給叔叔。</p>
<p>為什麼可以這樣記？會計規則（美國 ASC 842，國際 IFRS 16 精神相近）說，租賃要同時符合兩個條件，才會進入資產負債表：一是指定了特定設備、供應商不能隨便抽換；二是由你決定怎麼用。雲端算力多半由供應商自己調度機器，通常被當成服務合約或採購承諾，只在附註揭露。已經簽約、但還沒開始用的租約，也是先放附註。這是公開規則，不是哪一家獨有的做法，也不該說成「把帳單藏起來」。風險沒有消失：像 OpenAI 的 Stargate 機房，多半是 Crusoe 負責興建、Oracle 承租並營運，再把算力提供給 OpenAI；OpenAI 比較像房客，先扛債務的往往是蓋機房的那一邊。</p>
<p>看這類數字，重點不是標題有多大，而是承諾大概是營收的幾倍、未來一年要付多少，以及需求若放緩還付不付得起。以 Anthropic 為例，招股書寫未來 12 個月到期約 698 億美元；它跟 Google、Amazon、Microsoft 的最低消費，不管用不用都要付，三筆加起來至少約 2,762 億美元。這篇只教怎麼讀附註，不是評斷該不該買這些公司。若還在打基本功，可以先看<a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？這 10 個詞先學起來</a>，或<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`
},
{
  slug:'tsmc-dividend-9',
  cat:'新聞',
  title:'台積電季配息拉高到 9 元創新高，領到錢時股價會先被扣掉',
  desc:'台積電董事會核准 2026 年第三季每股現金股利 9 元，創單季新高，上一季為 7 元。白話說明季配息是什麼、除息時股價會先調整、填息不是保證，以及用假設股價 1,800 元怎麼算殖利率。',
  coverAlt:'海軍藍框金色大字「9元」，小字「創單季新高，上一季是 7 元」，右上今日大事角標',
  w:1080,h:1350,
  body:`
<p>台積電 11 月 10 日董事會核准，配發 2026 年第三季每股現金股利 9 元，創單季配息新高。上一季是每股 7 元，這次多了 2 元，約增加 28.6%。同一份公告也寫了這季每股盈餘 29.43 元；配出 9 元，大約是這季獲利的三成。普通股除息交易日是 2027 年 3 月 11 日，配息基準日 3 月 17 日，現金股利 4 月 8 日發放。媒體寫到股東超過 325 萬人；集保截至 11 月 6 日是 325 萬 9,221 人，這不是董事會公告裡的數字。</p>
<p>台積電採季配息，大約每三個月宣布一次要發多少<a href="{R}terms/cash-dividend/">現金股利</a>。這次的 9 元只是第三季這一筆，不是全年已經確定的總額；後面幾季要等之後的董事會才會公告。要參加這次配息，得在除息日前持有，並趕上配息基準日的股東名簿。</p>
<p>很多人以為「配息 9 元＝每股白賺 9 元」。其實<a href="{R}terms/ex-dividend/">除息</a>日當天，股價會先往下調整大約相當於股利的金額：帳戶多了現金，持股市價也會先少一截。之後如果股價回到除息前，叫做<a href="{R}terms/dividend-recovery/">填息</a>；有的會填、有的不會，沒有保證。只看到帳上進了股息就慶祝，可能忽略持股已經先少了一截。</p>
<p><a href="{R}terms/dividend-yield/">殖利率</a>可以用「現金股利 ÷ 股價」來理解。舉例：假設股價 1,800 元（假設例子，不是當天牌價），這次每股配 9 元，單季是 9 ÷ 1,800＝0.5%。1 張是 1,000 股，所以 1 張大約領 9,000 元。若用「9 元 × 4」粗估全年 36 元，對 1,800 元會得到 2%，但後三季還沒宣布，不能把 36 元當成已確定的年配息。二代健保補充保費是單筆股利達 2 萬元才按 2.11% 扣；1 張領 9,000 元、2 張領 18,000 元都還沒到門檻，大約 3 張（27,000 元）這次單筆才會跨過。這只是說明門檻，不是建議要買幾張。</p>
<p>聽這則新聞，可以先記住：配息是把公司的錢轉到你帳戶，不是憑空多出來的禮物。先搞懂除息和殖利率，比急著算自己能領多少更有用。若還在打基本功，可以先看<a href="{R}learn/what-is-a-stock/">股票到底是什麼</a>，或<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`
},
{
  slug:'us-stocks-1109',
  cat:'新聞',
  title:'費半一天漲近 7%！為什麼指數全紅，輝達卻跌超過 4%？',
  desc:'美股 11/9 道瓊漲 1,104 點、費半大漲 6.85%，標普創 4/8 以來最大單日漲幅；同一天輝達逆勢跌 4.27%，台積電 ADR 漲 3.51%。白話拆解指數與個股、ADR 與台股現股、單日反彈與跌勢結束。',
  coverAlt:'深藍底金色大字 6.85%，標題「費半一天漲近 7%」，慢慢變有錢今日大事封面',
  w:1080,h:1350,
  body:`
<p>美股 11/9（一）收盤，台北時間已是 11/10 清晨。道瓊收 52,389.75 點，漲 1,104.02 點（+2.15%）；標普 500 收 7,549.94 點，漲 173.08 點（+2.35%），是 4/8 以來最大單日漲幅；那斯達克收 25,253.14 點，漲 673.71 點（+2.74%）。最醒目的是費城半導體指數（費半）：收 10,033.93 點，大漲 643.68 點，漲幅 6.85%。上週費半才跌逾 12%，昨天一天又強彈回來。</p>
<p>可是同一天，輝達收 178.67 美元，跌 4.27%，盤中一度跌近 9%，是費半成分股裡唯一收黑的公司；超微漲 13.26%、博通漲 8.78%。背景是輝達董事會對執行長啟動獨立調查。指數漲跌是一籃子股票的平均結果，像班級平均可以很高，班上仍可能有人不及格。若還在打基本功，可先看<a href="{R}notes/what-is-a-stock/">股票到底是什麼</a>。</p>
<p>對台股更直接的參考是 ADR。台積電 ADR 收 388.62 美元，漲 3.51%；日月光 ADR 漲 8.63%、聯電 ADR 漲 7.51%。ADR 是台灣公司在美國上市的存託憑證，台灣開盤常拿來當隔夜參考，但它不是保證：開盤後還是看今天誰在買、誰在賣。若想對照台股 11/9 的大漲，可讀<a href="{R}notes/tw-stocks-1109-rally/">台股一天漲 1,960 點</a>。</p>
<p>另一條推手是油價回落：西德州原油跌 4.38%，收每桶 86.85 美元；布蘭特原油跌 5.85%，收 92.57 美元。油是運輸和很多商品的成本，市場預期通膨壓力可能減輕，買盤就容易回升。這是常見連動，不是定律。想理解油價如何碰到日常生活，可看<a href="{R}notes/oil-100/">油價破 100，你的薪水正在縮水？</a>。</p>
<p>急跌後出現單日強彈並不罕見，但不能只憑一天就認定跌勢結束。若想分清回檔、修正、空頭，可讀<a href="{R}notes/pullback-correction-bear/">回檔、修正、空頭差在哪</a>。先搞懂「指數、個股、ADR、單日反彈」各在說什麼，比猜今天台股開盤紅或綠更有用。</p>`
},
{
  slug:'tw-stocks-1109-rally',
  cat:'新聞',
  title:'台股一天漲 1,960 點！為什麼指數紅通通，外資還在賣？',
  desc:'11/9 台股大漲 1,960 點、漲幅 4.94%，創史上第二大單日收盤漲點；同一天外資現貨賣超約 900 億、台指期淨空單破 10 萬口。白話拆解漲點與漲幅、指數與買賣超、空單與避險，以及急跌後大漲常見但不代表止跌。',
  coverAlt:'深藍底金色大字 1,960點，標題「台股一天漲 1,960 點」，慢慢變有錢今日大事封面',
  w:1080,h:1350,
  body:`
<p>11/9（一）台股加權指數收在 41,661.70 點，大漲 1,960.06 點，漲幅 4.94%，成交金額 8,379.29 億元。這是台股史上第二大的單日收盤漲點（史上最大是 7/31 的 +3,186.45 點）。開盤 40,347.28 點，盤中最高一度到 42,349.36 點，收盤重新站上 4 萬 1 千點。</p>
<p>前一週台股大約跌了 5,510 點、跌幅約 12%。急跌後出現單日強彈並不罕見，但還不能單憑一根 K 線就認定跌勢結束。若想分清回檔、修正、空頭，可看<a href="{R}notes/pullback-correction-bear/">回檔、修正、空頭差在哪</a>；並對照前一波大跌日的<a href="{R}notes/tw-stocks-7th-biggest-drop/">台股史上第 7 大跌點</a>。</p>
<p>1,960 點聽起來很兇，其實要跟漲幅一起看。指數基期越高，同樣大約 5% 的漲跌，換成「點數」就會很大。所以「史上第二大漲點」很吸睛，比較不同時期時，看百分比通常比只看點數公平。</p>
<p>更讓新手困惑的，是「指數紅通通，外資卻還在賣」。當天外資及陸資現貨賣超約 900.56 億元，連續第 8 個交易日站在賣方；投信買超約 267.48 億、自營商賣超約 312.18 億，三大法人合計賣超約 945.26 億元。指數漲跌是市場整體價格結果；外資買賣超只是某一類投資人的淨買賣。有人買、有人賣，買方力道夠，指數仍可以收紅。想搞懂外資、投信、自營商分別是誰，可讀<a href="{R}notes/three-institutions-who/">三大法人到底是誰</a>。</p>
<p>期貨這邊，外資台指期未平倉淨空單來到 101,771 口，首度突破 10 萬口。淨空單是空方未平倉減多方未平倉的差額，不是當天新放空 10 萬口；也可能是避險或套利，不能直接等同「全部在押明天一定跌」。</p>
<p>大漲這天，新手可以回想：自己的持有原因還在不在、部位是不是太集中單一題材、緊急預備金夠不夠。不要把「史上第二大漲點」當成進場訊號，也不要只看點數、忽略百分比與籌碼結構。若還在打基本功，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`
},
{
  slug:'ai-ban-superintelligence',
  cat:'新聞',
  title:'美國要禁「超級 AI」？20 年刑責聽起來很兇，為什麼還沒成法律',
  desc:'美國《禁止人工超級智能法案》9 月提出，到 11 月初仍停在委員會。白話說明「20 年刑責」是如果通過才有、先進 AI 的算力門檻，以及州對資料中心踩煞車和聯邦草案是兩條線。',
  coverAlt:'海軍藍框金色大字「20 年」，小字「違反暫停規定，決策者最高刑責」，右上今日大事角標',
  w:1080,h:1350,
  body:`
<p>美國期中選舉後，民主黨拿下眾參兩院。有國會議員說，新政權第一天就該「暫停先進 AI、禁止超級智能」。標題再配上「最高 20 年刑責」，很容易讓人以為禁令已經上路。先別被嚇到：這部法案到 11 月初，都還不是法律。</p>
<p>它的正式名稱大致是《禁止人工超級智能法案》（Ban Artificial Superintelligence Act）。參議院的桑德斯與眾議院的卡薩爾在 9 月提出；眾院版是 H.R. 10538，已送委員會，截至 11 月初仍停在「已提出、待審查」，還沒表決通過。</p>
<p>草案用訓練算力當門檻：大約達到或超過 10²⁵ 次浮點或整數運算（FLOPs），就算「先進 AI」，門檻可由新設立的 AI 部門每年調整。暫停期間，這類系統原則上不能再訓練、修改或微調；還沒公開上線的，也不能直接放出來。對魯莽違反規定的決策者，最高可處約 20 年徒刑——這是「如果通過」才有的罰則，現在還在委員會。</p>
<p>為什麼短期很難變成全國法律？參議院要擋下拖延戰術，實務上常需約 60 票；民主黨即使控制參院，席次也遠低於 60。還要過總統簽署；若遭到否決，需兩院三分之二才能覆議。本屆國會大約到 2027 年 1 月 3 日結束，時間也很緊。</p>
<p>市場更在意的往往是「州」這一層。數據公司 Cleanview 估計，約 158.6 GW、占全美規劃容量約 41% 的資料中心，落在 9 個州長已暫停或承諾暫停的州；其中德州約 88.4 GW。他們也強調：這是暴露在政策風險下，不是預測全部會取消；全國約 56.7 GW 已在興建中的，受影響較小。換句話說，41% 不是「已經蓋不成」。</p>
<p>台灣新手讀這則新聞時，常會看到供應鏈被一起討論，例如 AI 晶片代工、伺服器組裝多和台灣有關。這只是在說明新聞為什麼提到台灣，不是進出場建議。比較實用的分法是：聯邦「20 年刑責」仍在委員會；但部分州對尚未接電、還在等許可的新建資料中心，已經先踩煞車。還沒成聯邦法，不等於州層級完全沒變。</p>
<p>聽新聞時先分兩層：國會草案還在走程序；州對資料中心的暫停，已經在部分地方發生。一次波動不代表長期結論，也別因為單一標題就追高殺低。想理解科技股消息為什麼常牽動台股，可以再看<a href="{R}notes/tw-stocks-7th-biggest-drop/">台股史上第 7 大跌點</a>那篇；如果是公司財報數字和市場預期對不上，可以對照<a href="{R}notes/intel-guidance-earnings/">英特爾財測</a>那篇。跌了多少才叫回檔或修正，也有一篇說明<a href="{R}notes/pullback-correction-bear/">回檔、修正和熊市差在哪</a>。</p>
<p>剛開始接觸投資的話，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`
},
{
  slug:'margin-balance-english',
  cat:'名詞',
  title:'融資餘額是什麼？英文 Margin Balance 白話一次懂',
  desc:'融資餘額英文是 Margin Balance，指投資人跟券商借錢買股、還沒還的總金額。白話說明餘額上升代表什麼、維持率不足為何會被追繳斷頭，以及新手該怎麼查、怎麼看趨勢。',
  coverAlt:'封面：融資餘額＝Margin Balance，借錢買股還沒還的總額，白話一次懂。',
  w:1080,h:1350,
  body:`
<p>融資餘額英文是 <strong>Margin Balance</strong>，意思是市場上投資人跟券商借錢買股、到現在還沒還的總金額。想先看短版定義，可以讀我們的<a href="{R}terms/margin-balance/">融資餘額名詞解釋</a>。</p>

<p>先從「融資」說起。融資就是你自己出一部分錢，其餘向券商借，用借來的錢一起買股票，買進的股票會押在券商那裡當擔保。假設你有 4 萬元（假設例子），再借 6 萬元（假設例子），就能買進 10 萬元（假設例子）的股票。這個動作的細節，可以看<a href="{R}terms/margin-purchase/">融資買進的說明</a>。每個人借了還沒還的錢加總起來，就是整個市場的融資餘額。</p>

<p>那融資餘額變高代表什麼？最直接的解讀是：<strong>散戶的槓桿變高了</strong>。越多人願意借錢買股，通常表示市場情緒偏樂觀，大家覺得還會漲。槓桿在上漲時會放大獲利，但在下跌時也會同樣放大虧損，所以餘額越高，市場對壞消息就越敏感。</p>

<p>接下來是新手最需要知道的部分：<strong>維持率、追繳和斷頭</strong>。券商會用「股票市值 ÷ 借款」算出一個維持率，低於規定門檻時，就會要求你補錢，這叫追繳。延續上面的例子，借 6 萬元（假設例子）、股票值 10 萬元（假設例子），如果股價跌了 25%（假設例子），市值剩 7.5 萬元（假設例子），維持率就可能跌破門檻。期限內補不出錢，券商會直接幫你賣掉股票，這就是斷頭。追繳的完整流程，可以讀<a href="{R}notes/margin-call-what/">追繳是什麼這篇</a>。</p>

<p>問題在於，斷頭是「不管價格、一定要賣」。當很多人同時被斷頭，賣壓會一起湧出，股價再跌，又讓更多人維持率不足，形成連鎖反應。這就是為什麼在融資餘額很高的時候遇到大跌，<strong>下跌速度往往會被加快</strong>，不是因為公司突然變差，而是借錢的人被迫賣出。</p>

<p>那新手該怎麼看這個數字？第一，去哪查：證券交易所和櫃買中心每天都會公布信用交易統計，很多財經網站也會整理成圖表。第二，看趨勢，不要只看單日：餘額是連續好幾週往上衝，還是慢慢下降，比某一天的數字更有意義；也可以把它和大盤成交量、指數漲跌放在一起比較。第三，可以搭配融券一起看，例如<a href="{R}terms/short-to-margin-ratio/">券資比</a>，了解看多和看空的力道。</p>

<p>最後一定要提醒：<strong>融資餘額不是買賣訊號</strong>。餘額高不代表明天一定跌，餘額低也不代表現在就該進場；它只是一個溫度計，告訴你市場上有多少人在用槓桿。把它當作提醒自己「現在大家很熱，我的部位是不是太大」的工具，會比拿來猜漲跌實際得多。如果你自己也在考慮用融資，先想清楚：最壞情況下，我補得出錢嗎？</p>

<p>一句話收尾：融資餘額英文是 Margin Balance，代表借錢買股還沒還的總額。它能幫你看懂市場的槓桿溫度，也能讓你理解為什麼大跌有時候會越跌越快；但它不會替你做決定，慢慢理解，比急著跟風更重要。</p>

<p>本篇為投資教育內容，僅供參考，非投資建議，亦不針對特定股票或商品。融資交易具有槓桿風險，可能損失超過原始投入，文中數字皆為假設例子，實際規定以主管機關與券商公告為準。</p>`
},
{
  slug:'default-settlement-what',
  cat:'名詞',
  title:'錢不夠還敢下單？「違約交割」後果有多重、怎麼避免',
  desc:'買股票要在 T+2 上午 10 點前備好交割款，扣不到錢就是違約交割。白話整理 7% 違約金、帳戶註銷、5 年內開戶受限、聯合徵信紀錄與情節重大時的刑責，以及新手避免違約的 4 個習慣。',
  coverAlt:'深藍底金色大字封面，標題「違約交割」，慢慢變有錢今日大事封面',
  w:1080,h:1350,
  body:`
<p>11/3 台股重挫 1,612 點、跌幅 3.59%（詳見<a href="{R}notes/tw-stocks-7th-biggest-drop/">台股史上第 7 大跌點</a>）。大跌日最怕的不只是賠錢，而是「買了股票卻付不出錢」。這件事有個正式名稱：違約交割。</p>
<p>在台股買股票，成交當天（T 日）不用馬上付錢，但要在第二個營業日（T+2）上午 10 點前，把錢存進交割帳戶。如果那時銀行扣不到足夠的款項，就是違約交割。</p>
<p>為什麼大跌或當沖失敗特別容易出事？當沖是同一天買進又賣出，只結算價差。但如果買進後股價大跌、跌停賣不掉，或來不及沖掉，就得拿出整筆買進的錢交割。原本以為只要付差價，結果要付全額，就可能付不出來。</p>
<p>後果第一項是違約金：證券商可以向違約客戶收取最高相當成交金額 7% 的違約金，並追討因違約產生的債務和費用；當沖的違約，則以沖銷後的差價金額作為違約金上限。</p>
<p>第二項是股票被處分、帳戶被註銷。券商會先代辦交割，再把股票拿到市場賣掉抵債；不夠的話，可以處分你其他的款券，甚至向你追償。申報違約後 3 個營業日內沒有清償，帳戶就會被註銷。</p>
<p>第三項是開戶受限和信用紀錄。違約未結案且未滿 5 年，各家券商都應拒絕你開戶，已開戶的也應拒絕你下單或申購。違約紀錄會留在「證券商聯合徵信系統」，結案後從註記「已結案」那天起再揭露 3 年。</p>
<p>第四項是刑責，但只限情節重大的情況。證券交易法第 155 條規定，成交後不履行交割、足以影響市場秩序者屬違法行為；證交所說明，這類情節重大的案件可能面臨 3 年以上、10 年以下的刑責。不是每一次違約都會這麼重，但風險真的存在。</p>
<p>怎麼避免？一、下單前先確認交割帳戶餘額，買多少就準備多少。二、別把當沖當成「不用本金」，賣不掉時就要付全額。三、跟券商設定自己負擔得起的交易額度。四、記得 T+2 上午 10 點就要扣款，真的發現錢不夠，立刻聯絡營業員。借錢投資的風險也很類似，可以延伸讀<a href="{R}notes/margin-call-what/">融資斷頭是什麼</a>。</p>
<p>投資最基本的規則是：買得起才買。想把基本功一步步打穩，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`
},
{
  slug:'tw-stocks-7th-biggest-drop',
  cat:'新聞',
  title:'台股史上第 7 大跌點！為什麼別人沒事、我們跌最重？',
  desc:'11/3 台股重挫 1,612 點、跌幅 3.59%，和韓股並列全球主要股市跌最重。白話拆解為什麼台韓特別傷、櫃買為何跌更兇、跌點和跌幅差在哪，以及新手大跌日該做和不該做的事。',
  coverAlt:'深藍底金色大字 -1612點，標題「台股史上第 7 大跌點」，慢慢變有錢今日大事封面',
  w:1080,h:1350,
  body:`
<p>11/3 這天，台股加權指數一路開低走低，收盤跌 1,612.60 點，收在 43,307.54 點，跌幅 3.59%，失守 44,000 點。上市股票有 1,016 家下跌、只有 59 家上漲，這是台股史上第 7 大的單日跌點。</p>
<p>把全球主要股市排一排（截至 11/3 發文時）：台股 -3.59%、韓國 KOSPI -3.59%，兩者並列跌最重，精算後台股只多跌一點點；深證成指 -1.21%、上證 -0.82%，澳洲 ASX200 +0.34%，港股恆生盤中約 +0.25%。日本休市，印度當時尚未收盤。同一天，有的市場幾乎沒事，台韓卻重摔。</p>
<p>為什麼偏偏是台灣和韓國？兩地有個共同點：指數裡科技、半導體公司占的比重非常高。前一晚美股科技股賣壓沉重，再加上美國期中選舉的不確定性，全球資金一緊張，最先賣的往往就是科技股。科技股越多的市場，受傷自然越重。</p>
<p>誰拖累了大盤？權值股幾乎全部收黑：聯發科跌 7.43%、台達電跌 6.27%、鴻海跌 2.19%，台積電也跌 1.5%，收 2,295 元。記憶體、CPO 光通訊族群多檔跌停，塑化類股也重挫 6.13%。大公司一起跌，指數很難撐住。</p>
<p>中小型股更慘：代表中小型股的櫃買指數跌了 6.42%。小型股成交量比較小，有人急著賣時股價容易被壓得更深；熱門題材股也常集中在這裡，之前漲得越快，回頭時往往跌得越快。如果有人用融資買進，下跌時還可能被迫賣出，可以參考<a href="{R}notes/margin-call-what/">融資斷頭是什麼</a>。</p>
<p>「史上第 7 大跌點」聽起來很嚇人，但要分清楚跌點和跌幅。跌點是少了幾點，跌幅是少了百分之幾。指數 1 萬點時跌 1,000 點是 10%，現在 4 萬多點跌 1,612 點是 3.59%。指數基期越高，同樣的跌幅換成點數就越大，所以比較不同時期要看百分比。至於跌多少才叫回檔、修正或空頭，可以看<a href="{R}notes/pullback-correction-bear/">回檔、修正、空頭差在哪</a>。</p>
<p>大跌這天新手可以做的事：先確認緊急預備金夠不夠，定期定額照原本計畫走，檢查自己是不是太集中在某個熱門題材。不該做的事：借錢或融資去攤平、因為恐慌一次全部賣光、急著猜哪裡是底部。新聞裡常提到的法人動向，可以先讀<a href="{R}notes/three-institutions-who/">三大法人到底是誰</a>再判斷。</p>
<p>跌最多的，常常是之前最熱門、漲最多的地方；一天的波動不等於長期的方向。剛開始投資的話，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>，把基本功打穩。</p>`
},
{
  slug:'three-institutions-who',
  cat:'名詞',
  title:'一天倒出 735 億：新聞天天講的「三大法人」到底是誰？',
  desc:'11/2 外資單日賣超約 735 億，投信卻持續買超。用白話拆解外資、投信、自營商是誰、為什麼常常反向，以及「跟著法人買就會贏」為什麼是迷思。',
  coverAlt:'深藍底金色大字 735億，標題「一天倒出 735 億：新聞天天講的三大法人到底是誰？」，慢慢變有錢三大法人觀念封面',
  w:1080,h:1350,
  body:`
<p>11/2 這天，台股跌了約 291 點，收在約 44,920 點，跌破 45,000。新聞標題寫著：外資一天賣超約 735 億。但同一天，投信卻買超約 338～361 億（各媒體數字略有不同），自營商則賣超約 153 億。一邊狂賣、一邊在買，看新聞的人難免一頭霧水：這些「法人」到底是誰？</p>
<p>而且這不是第一天。報導指出，外資 10 月以來累計賣超約 1.07 兆；投信則是連續約 15 天買超、累計約 2,587 億（單一媒體報導）。同一個市場，兩種方向，先把三個角色認清楚就不會亂。</p>
<p>第一個是外資：外國來的大型投資機構，像退休基金、國際基金。它們的錢來自全球，會看全球局勢和匯率做配置。外資賣股後可能把錢換回美元匯出，所以常和台幣轉弱一起出現，這部分可以對照<a href="{R}learn/twd-fx-outflow/">台幣為什麼會跟著貶</a>那篇。</p>
<p>第二個是投信：就是台灣的基金和 ETF 公司。它們的錢來自台灣投資人申購基金、ETF；只要有人申購，投信就得照規則買進成分股。如果還不熟 ETF 的運作，可以先看<a href="{R}learn/what-is-etf/">ETF 是什麼</a>。第三個是自營商：券商用自己的錢操作，多半是短線或避險用途，方向變化快，單日數字不用過度解讀。</p>
<p>為什麼它們常常反向？因為錢的來源不同、任務也不同。外資可能因全球配置先撤，投信則可能有申購資金要投入；季底也常聽到「作帳」的說法，但不一定每次都發生。這些都是一般性的解釋，不代表某一天的買賣一定就是這個原因。</p>
<p>最常見的迷思是「跟著法人買賣就會贏」。其實法人買賣超數字是收盤後才公布，你看到的時候已經是過去式；法人也會看錯，而且各自目的不同，彼此的方向本來就可能相反。與其跟著跑，不如先看懂新聞在說什麼。就像<a href="{R}notes/intel-guidance-earnings/">英特爾財測那篇</a>提到的，市場反映的是預期，單一數字很難告訴你全貌。想把常見名詞一次補齊，可以看<a href="{R}learn/10-terms-for-financial-news/">財經新聞常見的 10 個名詞</a>。</p>
<p>看懂別人為什麼買，比跟著買更重要。如果你剛開始接觸投資，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>，一步一步把基本功打穩。</p>
<p>※ 本文僅供教育參考，非投資建議；文中數字皆為約數，以官方公告與正式報導為準。</p>`
},
{
  slug:'constituents-english',
  cat:'名詞',
  title:'成分股英文是什麼？Constituents 白話一次懂',
  desc:'成分股英文是 Constituents，也常寫成 Holdings，指組成一個指數或 ETF 的那一籃股票。白話說明權重怎麼算、為什麼檔數多不一定等於真的分散，以及怎麼查前十大、產業分布和調整規則。',
  coverAlt:'封面：成分股英文是什麼？Constituents 白話一次懂。',
  w:1080,h:1350,
  body:`
<p>成分股英文是 <strong>Constituents</strong>，在基金資料或英文報表上也常看到 <strong>Holdings</strong>（持股）這個說法。簡單講，成分股就是「組成一個指數或一檔 ETF 的那一籃股票」；如果想先看短版定義，可以讀我們的<a href="{R}terms/constituents/">成分股名詞解釋</a>。</p>

<p>為什麼新手常查這個英文？因為很多基金月報、官網資料表直接寫 Constituents 或 Top 10 Holdings，看不懂就容易跳過。但成分股其實是最值得看的一頁：你買的不是一個名字，而是這一整籃東西。還不太確定 ETF 是什麼的話，可以先看<a href="{R}learn/what-is-etf/">ETF 是什麼的新手入門</a>，再回來讀會更順。</p>

<p>接下來是重點：<strong>權重（Weight）</strong>。籃子裡每一檔股票占的比例不一樣，常見算法有兩種。一種是「市值加權」，公司越大、占比越高；另一種是「等權重」，每檔分到差不多的比例。假設例子：一個籃子有 50 檔股票（假設例子），若用市值加權，最大的那一檔可能就占了 20%（假設例子），排在後面的 30 檔加起來可能還不到 10%（假設例子）。</p>

<p>所以權重高的成分股，影響力也大。假設最大那檔占 20%（假設例子），它某天跌 10%（假設例子），光它就會讓整個籃子少掉約 2%（假設例子）；而占 0.5%（假設例子）的小成分股，就算跌一樣多，影響只有 0.05%（假設例子）。看漲跌時，與其記檔數，不如先記「誰最重」。</p>

<p>這也帶出新手最常見的誤會：<strong>檔數多 ≠ 真的分散</strong>。一籃子寫著 100 檔（假設例子），聽起來很分散，但如果前十大就占了 60%（假設例子），或八成都集中在同一個產業，那你的命運其實主要綁在少數幾家公司、或某一個產業的景氣上。真正的分散，要看權重和產業，而不只是數量。</p>

<p>那要怎麼查？給你三個小步驟。第一，打開發行商官網或基金月報，找「前十大成分股／Top 10 Holdings」，把前十大合計占比算一下。第二，看「產業分布」，留意有沒有單一產業占比特別高。第三，讀「調整規則」：多久檢視一次（例如每季或每半年）、新增和刪除成分股的條件是什麼、單一成分股有沒有權重上限。這些規則會影響籃子的長相，也和<a href="{R}terms/tracking-error/">追蹤誤差</a>有關——換股時的成本與時間差，可能讓基金表現和指數之間出現小落差。</p>

<p>還有一個小提醒：成分股不是固定不變的。指數定期調整時，有些公司會被放進來，有些被移出去；所以你半年前查到的名單，現在可能已經不一樣。養成習慣，定期回去看一下最新名單和權重，比聽別人一句「這檔很分散」更踏實。</p>

<p>一句話收尾：成分股英文是 Constituents（也說 Holdings），它告訴你籃子裡裝了誰、誰最重。看懂權重、產業分布和調整規則，你才知道自己真正買了什麼；它不會替你決定買賣，但能幫你少一點「原來是這樣」的驚嚇。想複習基本概念，可以回到<a href="{R}terms/etf/">ETF 名詞解釋</a>慢慢看。</p>

<p>本篇為投資教育內容，僅供參考，非投資建議，亦不針對特定股票或商品。文中數字皆為假設例子，實際以發行商公告與主管機關資訊為準。</p>
`
},
{
  slug:'dividend-yield-english',
  cat:'名詞',
  title:'殖利率英文是什麼？Dividend Yield 白話一次懂',
  desc:'殖利率英文是 Dividend Yield，大致等於現金股利除以股價。白話說明怎麼算、為什麼殖利率高有時是股價已經大跌，以及過去配息不代表未來一定發，要搭配配息率和填息一起看。',
  coverAlt:'封面：殖利率英文是什麼？Dividend Yield 白話一次懂。',
  w:1080,h:1350,
  body:`
<p>殖利率英文是 <strong>Dividend Yield</strong>，中文全名是「股息殖利率」，意思是你用現在的股價買進，一年大概能領回多少比例的現金股利。想先看短版定義，可以讀我們的<a href="{R}terms/dividend-yield/">殖利率名詞解釋</a>。</p>

<p>它的算法很白話：<strong>殖利率 ≈ 現金股利 ÷ 股價</strong>。假設例子：某家公司一年發 2 元現金股利（假設例子），股價 50 元（假設例子），殖利率就是 2 ÷ 50 = 4%（假設例子）。這裡的股利指的是<a href="{R}terms/cash-dividend/">現金股利</a>，也就是真的發到你帳戶裡的錢，不是配股。</p>

<p>為什麼新手特別愛查殖利率？因為它看起來像「存款利率」，一個數字就能比較，很直覺。但正因為太直覺，也最容易被誤會。下面三個坑，建議你先記住。</p>

<p>第一個坑：<strong>殖利率高，可能是股價已經大跌</strong>。回到公式，股價在分母。假設股利一樣 2 元（假設例子），股價從 50 元跌到 25 元（假設例子），殖利率就從 4% 變成 8%（假設例子）。數字變漂亮了，但原因可能是市場擔心公司出狀況。看到特別高的殖利率，先問一句：「是股利變多，還是股價變少？」</p>

<p>第二個坑：<strong>過去配息 ≠ 未來一定發</strong>。網站上看到的殖利率，常是用「去年發的股利」除以「今天的股價」算出來的。可是今年賺得少，股利就可能減少甚至不發。假設去年發 2 元（假設例子），今年獲利腰斬只發 1 元（假設例子），你以為的 8% 其實只剩 4%（假設例子）。</p>

<p>第三個坑：<strong>只看殖利率，沒看填息</strong>。發股利那天會除息，股價通常會先扣掉股利的金額。假設股價 50 元、發 2 元（假設例子），除息後參考價大約是 48 元（假設例子）。如果之後股價漲回 50 元，叫做「填息」；如果一直沒漲回來，你等於只是把自己的錢從左口袋換到右口袋，還可能要多繳稅和手續費。所以殖利率要和<a href="{R}terms/dividend-recovery/">填息</a>一起看，才知道股利是不是真的「賺到」。</p>

<p>那怎麼看比較穩？給你三個小問題。一，這家公司的配息率（Payout Ratio）是多少？如果賺 10 元發 10 元（假設例子），配息率 100%，幾乎沒留錢給未來，能撐多久要打個問號。二，過去好幾年的股利是穩定、成長，還是忽高忽低？三，殖利率變高，是因為股利增加，還是股價下跌？想把配息率弄懂，可以看<a href="{R}terms/payout-ratio/">配息率名詞解釋</a>。</p>

<p>一句話收尾：殖利率英文是 Dividend Yield，大致等於現金股利除以股價。它是好用的比較工具，但不是保證報酬；看到漂亮的數字，先拆開分子分母，再搭配配息率和填息一起看，你會少很多「領了股利、卻賠了價差」的心痛。慢慢來，比較快。</p>

<p>本篇為投資教育內容，僅供參考，非投資建議，亦不針對特定股票或商品。文中數字皆為假設例子，實際以公司公告與主管機關資訊為準。</p>
`
},
{
  slug:'intel-guidance-earnings',
  cat:'新聞',
  title:'成績單考高分，股價卻一天跌 29%：先搞懂什麼是「財測」',
  desc:'英特爾上一季財報優於預期，股價卻單日跌約 29%。用白話拆解財報、財測與市場預期的差別，看懂為什麼「財報不差，股價也可能大跌」。',
  coverAlt:'深藍底金色大字 -29%，標題「成績單考高分，股價卻一天跌 29%」，慢慢變有錢財測觀念封面',
  w:1080,h:1350,
  body:`
<p>你可能也看到這則新聞：10/30（美東）英特爾股價一天跌了約 29%，報導稱是 40 多年來最大的單日跌幅。同一天費半跌約 7.2%，台指期夜盤也跌了約 867 點。第一次看到這種數字，很難不心慌。</p>
<p>但更讓人困惑的是：英特爾上一季的成績其實不差。調整後每股盈餘（EPS）約 0.52 美元，比市場預期的約 0.40 美元還好；營收約 165 億美元，也略優於預期。成績單考高分，股價為什麼反而大跌？答案藏在一個新手常忽略的名詞：「財測」。</p>
<p>先把兩個詞分開。財報是過去的成績單，告訴你上一季賺了多少、賣了多少，已經發生、改不了。財測（guidance）則是公司自己對未來的預告，例如「下一季營收大概落在多少」。很多公司會在<a href="{R}notes/investor-conference-english/">法說會</a>上一起公布這兩樣東西，而市場往往更在意後者。</p>
<p>這次英特爾給的下一季營收財測約 150～160 億美元、EPS 約 0.25 美元；但市場原本期待的是營收約 170 億美元、EPS 約 0.43 美元上下。報導指出主因是 PC 需求轉弱。差距一攤開，股價就開始重新定價。</p>
<p>關鍵觀念是：股價看的是未來，不是過去。大家對公司的期待，早就反映在價格裡了。當「實際預告」低於「原本期待」，就算過去成績再漂亮，價格也可能往下修正。這也是為什麼看新聞時，除了財報數字，還要看<a href="{R}learn/10-terms-for-financial-news/">財經新聞常見名詞</a>裡的「預期」與「財測」。</p>
<p>面對這種單日大跌，新手只要記得三件事：第一，不因單日新聞追高殺低；第二，不猜底；第三，先看懂「財報、財測、預期」三者的差別就夠了。市場短期的劇烈波動很常見，想了解跌多少算<a href="{R}notes/pullback-correction-bear/">回檔、修正還是熊市</a>，可以再看那篇；也可以順便對照<a href="{R}learn/5-beginner-mistakes/">新手最常犯的 5 個錯誤</a>，提醒自己別被新聞牽著走。</p>
<p>看懂名詞，就少一次被新聞嚇到。如果你剛開始接觸投資，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>，一步一步把基本功打穩。</p>
<p>※ 本文僅供教育參考，非投資建議；文中數字皆為約數，以公司官方公告與正式報導為準。</p>`
},
{
  slug:'investor-conference-english',
  cat:'名詞',
  title:'法說會英文是什麼？Investor Conference 白話一次懂',
  desc:'法說會英文是 Investor Conference（法人說明會）。公司向投資人說明營運、財報與展望；預估不是保證，怎麼聽比較不易被標題帶走。',
  seoTitle:'法說會英文怎麼說？Investor Conference 意思＋怎麼聽',
  seoDesc:'法說會英文是 Investor Conference（法人說明會）。白話說明公司在法說會講什麼、財報和展望怎麼聽，以及為什麼預估不等於保證。',
  coverAlt:'封面：法說會英文是什麼？Investor Conference 白話一次懂。',
  w:1080,h:1350,
  body:`
<p>很多人第一次看到「法說會」三個字，會先搜「法說會 英文」——法說會的英文就是 Investor Conference，也常被叫成法人說明會。名字聽起來正式，其實就是公司定期（或臨時）跟投資人、分析師開會，用白話把最近營運、財報數字，以及接下來怎麼看生意講清楚。</p>
<p>為什麼大家常查這個英文？因為新聞標題常直接寫英文縮寫或混寫，字幕、簡報上也會出現 Investor Conference、earnings call、corporate presentation 這類說法。搞懂對應的中文，讀財經新聞時比較不會卡在名詞上。若你想先看詞條定義，可先讀我們的<a href="{R}terms/investor-conference/">法說會／Investor Conference 名詞解釋</a>。</p>
<p>法說會通常由誰開？上市公司最常見，尤其是剛公布<a href="{R}terms/financial-statements/">財報</a>或有重大消息時。聽眾多半是法人（基金、投顧）、分析師，以及關心公司的一般投資人。會議裡常見三段：過去一段時間賣得怎樣、成本與獲利怎麼變、以及「展望」——管理層對下一季或明年大概怎麼估。</p>
<p>聽的時候，重點往往不是某句口號，而是數字有沒有對得上公開資訊。例如營收成長是否跟先前公布的<a href="{R}terms/monthly-revenue/">月營收</a>方向一致、毛利率有沒有突然變、展望是「維持」還是「下修」。若公司同時發了重大訊息，也可對照<a href="{R}terms/material-information/">重大訊息</a>看說法是否一致。</p>
<p>這裡有一個新手最容易踩的坑：預估 ≠ 保證。法說會裡的「展望」「指引」（guidance）是管理層當時的估計，不是合約、也不是保證報酬。市場標題常把一句展望寫成「看好／看壞」，情緒會被放大。假設例子：公司說下一季營收可能年增約 10%（假設例子），最後只成長 3%，不代表「說謊」，可能是景氣、匯率、出貨時程變了——重點是之後對照實際財報，看落差從哪來。</p>
<p>常見誤解還有兩個。一是「開法說會＝利多」：開會本身只是溝通管道，內容好壞才是重點。二是「分析師問得很兇＝公司有事」：問得細是對方的工作，不必然等於危機。比較穩的做法是：先讀公開財報與重大訊息，再看法說會簡報或逐字稿，最後才看媒體標題。</p>
<p>給新手的簡單聽法可以記三步。第一步，搞清楚這場在講「已經發生的數字」還是「還沒發生的展望」。第二步，把展望裡的數字記下來（或截圖），等下一份財報公布時對照。第三步，若聽不懂專業詞，先把名詞查清楚，再回頭聽——我們整理過<a href="{R}learn/10-terms-for-financial-news/">讀財經新聞常會遇到的 10 個詞</a>，可當小抄。</p>
<p>一句話收尾：法說會英文是 Investor Conference（法人說明會），它幫你聽公司怎麼解釋成績單與下一步；它不替你決定買賣。想釐清名詞時，回到法說會詞條；若你正在建立自己的投資學習清單，也可從<a href="{R}lead/">新手入門清單</a>開始整理筆記。</p>
<p>本篇為投資教育內容，非投資建議，亦不針對特定股票或商品。文中數字為假設例子，實際以公司公告與主管機關資訊為準。</p>`
},
{
  slug:'pullback-correction-bear',igUrl:'https://www.instagram.com/slow.rich.notes/p/DfLwPRVifuA/',
  cat:'新聞',
  title:'台股跌了 10%，這叫「回檔」還是熊市來了？',
  desc:'回檔、修正、熊市差在哪——先搞懂跌幅名詞，再決定要不要慌、要不要急著抄底。',
  coverAlt:'台股跌了 10%，這叫「回檔」還是熊市來了？｜慢慢變有錢',
  w:1080,h:1350,
  body:`
<p>刷到「黑色星期一」、心裡一沉，又聽說台股從高點跌超過 10%？先喘口氣——標題可以熱，答案可以冷靜。台股自約 10/6 高點約 49,968 跌超過約 10%，媒體稱「技術性回檔」；外資 10 月賣約 9,943 億創單月紀錄，散戶卻越跌越買，台股 ETF 淨申購仍大。（數字為約數，會變動。）</p>
<p><strong>先分清楚三個詞</strong>（市場慣用約數，不是官方硬定義）：<strong>回檔</strong>＝從高點跌約 10%，漲多休息，很常見；<strong>修正</strong>＝跌約 10%～20%，比較痛；<strong>熊市</strong>＝跌約 20% 以上，而且跌很久。名字只告訴你「跌了多少」，不告訴你「明天會怎樣」。</p>
<p>帶回去三句：不慌——先確認投入的是閒錢；不急抄底——沒人知道底在哪；定期定額——照原本紀律走，不因新聞忽然加碼或停扣。「市場短期是投票機，長期是秤重機。」</p>
<p>想把基礎補齊，可先看 <a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？先學這 10 個詞</a>，以及同在談大跌心態的 <a href="{R}notes/margin-call-what/">融資斷頭是什麼</a>（那篇講槓桿規則；這篇講跌幅名詞）。現金流怎麼排，可對照 <a href="{R}notes/salary-split/">月薪也能慢慢存起來</a>。準備好了再領 <a href="{R}lead/">《投資新手入門清單》</a>。</p>
<p>僅供教育參考，非投資建議；數字為約數、會變動；投資有風險，可能損失本金。</p>`
},
{
  slug:'margin-call-what',
  cat:'新聞',
  title:'一天跌 1,156 點，有人的股票「被賣掉」了',
  desc:'融資、維持率、130% 追繳與斷頭——大跌時新手為什麼不要借錢買股。',
  coverAlt:'一天跌 1,156 點，有人的股票「被賣掉」了｜慢慢變有錢',
  w:1080,h:1350,
  body:`
<p>刷到「一天跌一千多點」、心裡一沉，又聽到有人股票「被賣掉」？先喘口氣——標題可以聳，答案可以冷靜。10/30 台股約跌 1,156 點、盤中最多約 1,642 點，收約 45,211、跌破半年線；融資維持率報導約從 178% 掉到 172%，新聞開始講「160% 生死線」。（數字為約數，會變動。）</p>
<p><strong>融資是什麼？</strong>白話就是跟券商借錢買股票：上市股大約自備四成、借六成，賺賠都會被放大。維持率＝股票市值 ÷ 借款；剛買時多在約 166% 附近，股價跌，維持率跟著掉。跌破約 130%，券商會發追繳，要你在期限內（約兩個營業日）把維持率補回規定水準；補不出錢，就是<strong>斷頭</strong>——券商直接賣出你的股票還款，賣在低點、虧損變真的，沒有「等它漲回來」。</p>
<p>大跌時很多人一起被斷頭，賣壓更重，又可能再推低股價。還有人借信貸去買正 2——那是槓桿上再加槓桿。帶回去一句：「市場能撐得比你久。」新手第一課不是賺多少，是不被淘汰：不借錢、不用槓桿、只用閒錢。</p>
<p>想把基礎補齊，可先看 <a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？先學這 10 個詞</a>，以及同在談「錢的價錢」的 <a href="{R}notes/mortgage-secret-markup/">你的房貸，正在被偷偷加價</a>。現金流怎麼排，可對照 <a href="{R}notes/salary-split/">月薪也能慢慢存起來</a>。準備好了再領 <a href="{R}lead/">《投資新手入門清單》</a>。</p>
<p>僅供教育參考，非投資建議；數字為約數、會變動；借款與投資皆有風險，可能損失本金。</p>`
},
{
  slug:'binance-hack-freeze',igUrl:'https://www.instagram.com/slow.rich.notes/p/DfGdUqviQpC/',
  cat:'新聞',
  title:'史上最大級？幣安疑遭駭，CZ：用戶資金安全',
  desc:'官方凍結約 30 億美元 vs 鏈上估算近 60 億——先分清事實與估算，再看 CZ 與幣安怎麼說。',
  coverAlt:'史上最大級？幣安疑遭駭｜慢慢變有錢',
  w:1080,h:1350,
  body:`
<p>刷到「幣安被駭」「暫停提款」別急著跟單或恐慌——先把數字分清楚：哪些是官方確認，哪些還是鏈上估算。</p>
<p>約 2026-10-30（台北）清晨起，全球成交量最大的加密貨幣交易所 <strong>Binance</strong> 陸續公告：正在調查潛在安全事件，並暫停充值與提款。官方核實的凍結金額一度約 <strong>25.4 億美元</strong>，後更新約 <strong>30 億美元</strong>（約數，以官方最新為準）。Tether、Circle 等發行方也凍結了與事件相關的穩定幣資產（報導約數會變）。</p>
<p>鏈上與媒體估算疑似被轉移規模約 <strong>57～59 億美元</strong>（Arkham、Chainalysis 等），若屬實可能是史上最大級——但這仍是估算，幣安未必已確認最終被盜淨額。創辦人 <strong>Changpeng Zhao（CZ）</strong> 在 X 寫道：用戶資金安全；看起來確實像對 Binance 的駭客攻擊；他已不管理 Binance.com，但以股東身分預期用戶資金會被全額補足。Binance／Yi He 亦表示會 cover all hacking losses。</p>
<p>白話重點：穩定幣可被發行方「凍」住可疑地址，但 BTC、ETH 本身通常不能這樣凍；暫停出入金時，餘額可能「看得到、動不了」。官方承諾賠付重要，仍要以後續公告為準——不是叫你現在做什麼。</p>
<p>想把基礎補齊，可先看 <a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？先學這 10 個詞</a>，以及 <a href="{R}notes/ant-half-nvidia/">熱話題怎麼對照估值與敘事</a>。現金流怎麼排，可對照 <a href="{R}notes/salary-split/">月薪也能慢慢存起來</a>。準備好了再領 <a href="{R}lead/">《投資新手入門清單》</a>。</p>
<p>僅供教育參考，非投資建議。數字為報導／鏈上約數，會變動；加密資產與平台風險高，可能損失本金。</p>`
},
{
  slug:'mortgage-secret-markup',igUrl:'https://www.instagram.com/slow.rich.notes/p/DfEQzdECYKn/',
  cat:'新聞',
  title:'你的房貸，正在被偷偷加價',
  desc:'央行沒升息，首購房貸卻有人開到 3% 起？搞懂基準利率＋銀行加碼，再決定要不要重算月付。',
  coverAlt:'你的房貸，正在被偷偷加價｜慢慢變有錢',
  w:1080,h:1350,
  body:`
<p>刷到「房貸破 3%」、心裡一沉，卻還沒搞懂差在哪？先喘口氣——標題可以聳，答案可以冷靜。</p>
<p>最近新聞在說：部分民營銀行<strong>首購房貸開價已到 3% 起</strong>，市場主流首購多在約 <strong>2.6%～2.7%</strong>。央行總裁楊金龍也在立法院說：「雖然央行利率不動，但市場利率確實提高了。」（2026/10/28）</p>
<p>央行沒升息，利率怎麼自己漲？關鍵一句：<strong>房貸利率＝基準利率＋銀行加碼</strong>。基準可以不動，加碼仍會因資金成本、流動性先動。所以你看到「沒升息，房貸卻變貴」，常常是第二層在漲——不是帳戶沒錢，是錢變搶手、價格先反映。</p>
<p>假設例子（僅供理解，非你的契約條件）：貸 1,000 萬、20 年、本息攤還，利率從 1.375% 到 2.6%，每月約多繳 5,800 元。同一件事的另一面，是優利定存專案變多、雙貸族人數創新高——都在說「錢」正在被重新標價。</p>
<p>想把基礎補齊，可先看 <a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？先學這 10 個詞</a>，以及 <a href="{R}learn/twd-fx-outflow/">外資提款與台幣變薄</a>（前篇談的是匯率這把尺子；這篇談借款的價錢）。現金流怎麼排，也可對照 <a href="{R}notes/salary-split/">月薪也能慢慢存起來</a>。準備好了再領 <a href="{R}lead/">《投資新手入門清單》</a>。</p>
<p>一句話：先搞懂加碼，再決定要不要重算自己的月付。利率與試算為約數／假設例子，會變動；僅供教育參考，非投資建議；借款與投資皆有風險。</p>`
},
{
  slug:'ant-half-nvidia',igUrl:'https://www.instagram.com/slow.rich.notes/p/De-vrN0iUwV/',
  cat:'新聞',
  title:'大家都在問：ANT 是不是半個輝達',
  desc:'Anthropic（ANT）上市估值常被說成半個輝達？用私募、路演預期與 Polymarket 首日收盤市值三個錨對齊，結論是還沒到——約三分之一到四成。',
  coverAlt:'封面：大家都在問 ANT 是不是半個輝達。深藍金配色輪播封面。',
  w:1080,h:1350,
  body:`
<p>刷到 AI 公司要上市，標題一寫「幾兆」，腦裡很容易跳到「半個輝達」。Claude 背後的 Anthropic（計畫代碼 ANT）送出上市文件後，這句特別常出現。先把尺子對齊：結論是——還沒到半個輝達。</p>
<p>輝達公開市值大概約 5.1 兆美元，半個大約 2.55 兆。ANT 現在大家在談的上市情境，多半落在約 1.5～2 兆。換成比例，大概是輝達的三分之一到四成，不是一半。標題可以很衝；答案通常比標題冷靜。</p>
<p>數字從哪來？記三個錨。私募（約 2026 年 5 月）整家投後大約 9,650 億，快 1 兆——那是還沒上市時的估價。媒體與路演談的上市開價預期約 1.5～1.75 兆（從最熱時約 2 兆下修），但股數、每股都還沒定。所以現在比的是「整家大概多大」，不是你明天就能下單的價格。</p>
<p>Polymarket 常被拿來當溫度計，但要先講清楚：它賭的大致是上市第一天收盤時整家市值落在哪個區間——不是發行價，也不是私募估價。目前眾數多半在約 1.75～2.0 兆；大於等於 1.75 兆合計約七成。白話：預測市場偏「首日會比較興奮」，數字常高於招股開價預期。對上輝達大約 34%～39%；要靠近半個（約 2.55 兆）目前不是盤口主軸。</p>
<p>同業量級：OpenAI 也是私募，上次確認約 8,520 億，傳聞新一輪約 1.25 兆（未正式敲定）。差不多大的一格，大概是 ANT 上市情境、OpenAI 私募、Meta 約 1.6 兆、SpaceX 約 2 兆。再往上才是 Google 約 3.9 兆，以及 Apple、輝達約 5.1 兆——那是天花板，不是同一條線硬拼。</p>
<p>Gemini 呢？它不是獨立股票，Google 也沒公布「Gemini 營收」。別拿 Google 整家市值硬套 ANT；尺子不同就換尺子，不要硬比。</p>
<p>一句話：問「是不是半個輝達」——答案是還沒。比較像一個 SpaceX，或稍貴一點的 Meta。Polymarket 眾數約 1.75～2 兆，講的是首日收盤市值，不是開價保證。數字是約數、預期與盤口，會變；本文僅供教育參考，不是投資建議。</p>
<p>想先把基礎補齊？免費領《投資新手入門清單》：<a href="{R}lead/">慢慢變有錢｜投資新手入門清單</a></p>`
},
{
  slug:'cash-10k-to-50k',igUrl:'https://www.instagram.com/slow.rich.notes/p/De8UeIdgQYD/',
  cat:'觀念',
  title:'把普發一萬變五萬？先算這筆帳',
  desc:'一萬變五萬要多久？用 7%／10%／15% 假設例子算年數；重點是從現在開始存股。預算三讀通過才會發。',
  coverAlt:'把普發一萬變五萬？先算這筆帳',
  w:1080,h:1350,
  body:`
<p>新聞在談「普發一萬」可能的時程時，很多人第一反應是：這筆錢能不能快點變成五萬？先把話說清楚——預算三讀通過才會發；還沒三讀，就還沒定案。這篇不追會不會發、何時發，只問一件事：萬一手上有一萬（或你現在就能挪出的一萬），長期可能變成多少？</p>
<p>「財富是時間的朋友，不是刺激的朋友。」給總是想快速翻倍、卻遲遲沒開始的你。一萬變五萬，差在兩件事：你假設的年化報酬，以及你願意等多久。用單筆一萬變成五萬（五倍）當假設例子（非保證）：若年化約 7%，大概要二十四年左右；約 10% 大約十七年；約 15% 大約十二年。數字會因費用、稅、進出場而不同，過去也不等於未來。</p>
<p>所以重點不是今晚翻倍，而是從現在開始存股：把這一萬當長期種子，用可長期持有的方式，讓時間待在市場裡。晚一年開始，通常就少一年複利。新手可以先處理高利率負債與緊急預備，再用寬基、分散、長期的思路，而不是聽一句明牌就全押。波動是過程；計畫看的是長年假設，不是明天漲跌。</p>
<p>想從第一步開始？免費領<a href="{R}lead/">《投資新手入門清單》</a>。文中年化與年數皆假設例子，不保證達成；普發相關以官方為準，預算三讀通過才會發。</p>`
},
{
  slug:'line-phone-deadline',igUrl:'https://www.instagram.com/slow.rich.notes/p/De6BBlDCVAR/',
  cat:'觀念',
  title:'少做這個動作，LINE 年底可能被刪',
  desc:'只連 Facebook 且還沒設電話的 LINE，截止台灣時間 2026/12/31 23:59 前請對條件處理；通訊斷了，銀行／券商通知也可能收不到。',
  coverAlt:'封面：少做這個動作，LINE 年底可能被刪——設定電話號碼提醒。',
  w:1080,h:1350,
  body:`
<p>年底一忙，帳號設定最容易被丟到「之後再說」。可是有些通訊帳號一旦出狀況，銀行、券商、支付的通知也可能跟著斷——這跟理財有關，不是單純的 App 小設定。</p><p>最近常被提到的提醒是：若 LINE 帳號「只連結 Facebook，且尚未設定電話號碼」，請在台灣時間 2026/12/31 23:59 前完成設定。逾期「可能」被系統刪除，貼圖、代幣、聊天紀錄也可能無法恢復。重點是「可能」、也「不是所有人」——細節以 LINE 官方說明為準。</p><p>先對條件再動手。符合「只連 Facebook」＋「電話欄位還是空白」才需要趕；已經設過電話、或不是只靠 Facebook 登入的，通常不必被標題嚇到。一個門號通常只能綁一個帳號，別急著用家人朋友的手機去綁，以免影響原本那個帳號。</p><p>也請小心陌生簡訊或私訊裡的「官方／客服」連結。真正設定只在官方 App 裡完成，不必透過網頁認證；自己打開 App 檢查就好，不要被催著點連結登入。</p><p>通訊顧好之後，順便把會動到錢的路走一遍：券商 App 還登得進嗎？銀行簡訊與 Email 通知還收得到嗎？支付工具綁的門號與信箱還是現用的嗎？常用信箱的重要信會不會進垃圾匣？理財不是只有買賣，通知斷了也傷。</p><p>提醒不是嚇你——先檢查，再安心。年底前給自己十分鐘就夠。</p><p>想從投資的第一步開始，可以免費領<a href="{R}lead/">《投資新手入門清單》</a>，對著清單慢慢勾。</p>`
},
{
  slug:'etf-split',igUrl:'https://www.instagram.com/slow.rich.notes/p/De5n1iUiXoy/',
  cat:'名詞',
  title:'ETF 1 拆 8：錢會變多嗎？',
  desc:'ETF「1 拆 8」是分割：份數變多、單價變低，總額差不多。倍數多半還是預估，要等會議與淨值。',
  coverAlt:'封面：一拆八，錢會變多嗎？分割示意與思考中的慢慢。',
  w:1080,h:1350,
  body:`
<p>新聞一寫「1 拆 8」，很多人第一個反應是：單位變多了，是不是變有錢了？心動很正常，但先把「分割」講清楚，比較不會被標題帶走。</p>
<p>簡單講，分割就是把你手上的一單位，拆成好幾單位，單價也跟著變便宜。正式名稱叫受益憑證分割。看起來張數變多了，可是把「份數 × 單價」乘起來，口袋裡的總額通常差不多——先不計手續費和市場漲跌。</p>
<p>用一個假設例子：假設你持有 1 單位、價格 240 元。若以 8 倍分割（這只是假設），會變成大約 8 單位 × 約 30 元，總額仍約 240 元。分割不是白送你一筆錢，只是把同一塊餅切成比較小的塊。</p>
<p>富邦台50（006208）預計在 12/18 召開受益人會議表決要不要分割。大家常講的「1 拆 8」現在還只是市場預估；真正拆成幾份，要看會議通過當天的淨值（一單位值多少錢），大致會拆到接近發行價 30 元附近。公告裡也曾用區間舉例：淨值落在不同區間，預估倍數可能是 7、8 或 9 倍。倍數不是保證，以會議與相關公告為準。</p>
<p>也別跟另外兩件事搞混。除權息是公司發錢或配股；折溢價是市價跟淨值的差距。分割本身不會憑空創造報酬，漲跌還是看市場，成本也還在。</p>
<p>看懂這個詞，是為了少慌一下，不是為了追新聞或急著買賣。提到 006208 只是當新聞主題說明，不是推薦標的。</p>
<p>想從投資的第一步開始，可以免費領<a href="{R}lead/">《投資新手入門清單》</a>，對著清單慢慢勾。</p>`
},
{
  slug:'salary-split',igUrl:'https://www.instagram.com/slow.rich.notes/reel/De3xwNcpmUc/',
  cat:'現金流',
  title:'月薪 3 萬，也能慢慢存起來',
  desc:'發薪後餘額歸零，常常不是只差收入。用月薪 3 萬的假設例子，把錢分成生活、緊急預備、還債與保障、未來自己。',
  coverAlt:'封面：月薪 3 萬，也能慢慢存起來。暖色桌面、攤開的筆記本與咖啡杯。',
  w:1080,h:1920,
  body:`
<p>發薪隔天打開帳戶，數字常常已經不多。第一個念頭多半是賺太少。月薪三萬確實緊，可是存不到的原因，常常不是只差那一點收入，而是所有的錢都擠在同一個戶頭。帳上看起來還有餘額，卻分不出哪些能花、哪些不能動，一不留神就把下個月的生活費也花掉。</p>
<p>先把收入集中，再分成清楚的幾份，錢才聽得懂指令。下面用月薪 30,000 元當假設例子，比例請照自己的開銷改，不要當成標準答案。</p>
<p>生活大約一半，15,000 元。房租、餐費、交通、水電都從這裡出。超過這一格就是警訊，先看是哪裡超支，不要先去動其他格子。</p>
<p>緊急預備大約兩成，6,000 元。建議發薪當天就先轉走，目標是存到三到六個月的必要支出。有這筆錢，臨時出事才不用打亂後面的安排。</p>
<p>還債與保障大約一成，3,000 元。若有高利率負債，優先多還一點，不要只繳最低金額。剩下的再看基本保障夠不夠。這裡談的是順序，不是推薦任何商品。</p>
<p>未來自己大約兩成，6,000 元。中長期目標、學習，以及之後打算拿去投資的錢，先放在這裡，跟生活費分開，才不會互相干擾。</p>
<p>收入不固定、有房貸，或高利率負債還沒處理完，順序就會不一樣。可以先顧必要生活，再處理高利率負債，接著補緊急預備，最後才談長期投入。</p>
<p>發薪日也可以對一下幾個常見的漏洞：訂閱每季盤點一次、外送先訂一週上限、循環利息能多還就多還、不划算的年費就停掉、想買的東西先放進購物車等兩天。省下來的洞，往往比多賺一點更快看見。</p>
<p>下次發薪，先試著把錢分家。想從投資的第一步開始，可以免費領<a href="{R}lead/">《投資新手入門清單》</a>，對著清單慢慢勾。</p>`
},
{
  slug:'download-bots',igUrl:'https://www.instagram.com/slow.rich.notes/p/De3XmazCfhb/',
  cat:'一人公司',
  title:'不用面試，先把員工下載下來',
  desc:'一人公司也可以先把工作拆開。工具像一份可複製的工作說明書，不會替你負責；跟理財一樣，先把系統建起來。',
  coverAlt:'封面：不用面試，先把員工下載下來。戴眼鏡的女生舉著「先下載」牌子。',
  w:1080,h:1350,
  body:`
<p>一人做內容的時候，常常是自己寫、自己畫、自己回訊息，忙到沒有餘力看錢怎麼走。後來才發現，缺的不一定是再找一個人進來，而是把重複的工作先寫成可以交出去的步驟。</p>
<p>有些工具能把現成的角色放進工作流程，例如可下載的 Bot（這只是工具的名字，不是教學，也不是推薦）。它不會替你承擔結果，比較像一份可以複製的工作說明書：範圍寫清楚，它就照範圍做；範圍沒寫，它只能猜。</p>
<p>一人公司也可以先列出幾個位子。誰決定這週先做什麼，誰看社群上的留言，誰準備圖文和短片，誰顧網站，誰把早報或電子報整理成固定格式。位子先列出來，再決定哪一段交給工具，哪一段仍要自己看過才送出。下載之後，還要依每個專案改範圍，不是按一下就結束。</p>
<p>這件事跟理財很像。市場的風向不是個人控得了的，自己的流程可以先建好。投資若每天憑感覺下單，心情會被漲跌帶走；工作若每天憑感覺開工，時間也會被訊息切碎。慢慢變有錢，是用可以重複的步驟，取代一時的衝動。</p>
<p>想先把投資的第一步寫成清單，可以免費領<a href="{R}lead/">《投資新手入門清單》</a>。若你在意的是一人公司怎麼分工，也可以看<a href="{R}lead/oneperson/">《一人公司：下載員工清單》</a>。兩份都是教育整理，提到工具不代表合作或推薦。</p>`
},
{
  slug:'oil-100',igUrl:'https://www.instagram.com/slow.rich.notes/p/De28lmVElMy/',
  cat:'新聞',
  title:'油價破 100，你的薪水正在縮水？',
  desc:'油價、通膨、利率、股與債常常連成一條線。看懂是為了少慌，不是為了猜下一根漲跌。便當價格是假設例子。',
  coverAlt:'封面：油價破 100，你的薪水正在縮水？帆船與托腮思考的女生。',
  w:1080,h:1350,
  body:`
<p>標題寫著油價破百的時候，很多人會先慌一下。2026 年 10 月 24 日，鉅亨網的美股盤後報導提到：中東局勢升溫，西德州原油突破每桶 100 美元，布蘭特原油逼近 117 美元，道瓊工業指數單日下跌約 653 點。聯準會即將公布利率決策，市場擔心能源成本把通膨再推高。這些數字以當時的報導為準，這裡不預測下一根走勢。</p>
<p>慌的時候，可以先看一條比較短的線：油價、通膨、利率，然後才是股票和債券。</p>
<p>油變貴，運送和製造的成本常常跟著上去。假設一顆便當從 90 元變成 110 元，不一定是店家突然想多賺，也可能是油、包裝和租金一起上來。這只是假設例子，不是哪一間店的真實價格。物價漲得比收入快，同樣的薪水就會感覺變薄。</p>
<p>物價漲太快，央行可能升息，或把利率維持在比較高的位置，想把過熱的需求慢下來。借錢變貴，公司擴張會更謹慎，股票比較容易有壓力。已經發行、利息較低的舊債券，價格通常會下跌，因為新發行的債券給的利息比較高，舊的就沒那麼吸引人。</p>
<p>這條線是在說明新聞為什麼會連在一起，不是在建議買進或賣出。地緣政治和利率決策都不是個人調得了的風向。看懂，是為了少被標題嚇到，把緊急預備和自己的用錢時間顧好。</p>
<p>想先把投資前該檢查的事做成清單，可以免費領<a href="{R}lead/">《投資新手入門清單》</a>。</p>`
},
];
