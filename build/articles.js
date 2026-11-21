// 內容改寫自已審核的 IG 第 1–9 篇（ig/ig.py 與 slow-rich-notes/posts-4-9.md）。數字皆為原文「假設例子」。
const ex = (h) => `<div class="ex"><b>舉個例子（假設例子）</b><br>${h}</div>`;
module.exports = [
{slug:'before-you-invest-3-things',n:1,cat:'起步',title:'還沒開始投資？先做好這 3 件事',desc:'存好緊急預備金、處理高利率負債、寫下目標，打好地基再學投資。',terms:[],body:`
<p>想開始投資之前，先把地基打穩。下面這 3 件事做好，之後遇到市場上下波動，心裡也比較踏實。</p>
<h2>第 1 件：存好緊急預備金</h2><p>建議存到 3–6 個月的生活費，放在隨時領得出來的地方。這樣意外發生時，你不用被迫賣掉手上的投資。</p>
<h2>第 2 件：先處理高利率負債</h2><p>信用卡循環利息動輒年利率 10% 以上。先把它還掉，等於拿到一筆確定的「報酬」。</p>
<h2>第 3 件：寫下你的目標</h2><p>先想清楚這筆錢什麼時候要用。1 年內就要用的錢，通常不適合放進波動大的資產。</p>
<h2>小總結</h2><ul><li>✓ 預備金</li><li>✓ 高利率負債</li><li>✓ 目標</li></ul><p>三項都打勾了，再來學怎麼投資。</p>`},
{slug:'10-terms-for-financial-news',n:2,cat:'名詞',title:'看不懂財經新聞？這 10 個詞先學起來',desc:'股票、債券、ETF、基金、股利、殖利率、本益比、市值、分散、波動，一句話白話說明。',terms:['t13','t15','t8','t12','t40'],body:`
<p>財經新聞常常一句話就塞好幾個名詞。先把這 10 個新手必懂的詞學起來，下次看新聞就輕鬆多了。</p>
<table class="t"><tr><th>名詞</th><th>白話說明</th></tr>
<tr><td>股票</td><td>買一小塊公司的所有權。</td></tr>
<tr><td>債券</td><td>把錢借給政府或公司，收利息。</td></tr>
<tr><td>ETF</td><td>一籃子資產打包在一起，一次買很多家。</td></tr>
<tr><td>基金</td><td>把錢交給專業經理人管理。</td></tr>
<tr><td>股利</td><td>公司把賺的錢分給股東。</td></tr>
<tr><td>殖利率</td><td>股利除以股價，但高殖利不等於一定好。</td></tr>
<tr><td>本益比（P/E）</td><td>股價是每股盈餘的幾倍，用來大致判斷貴不貴。</td></tr>
<tr><td>市值</td><td>公司在市場上的總價值。</td></tr>
<tr><td>分散</td><td>不把雞蛋放同一籃子。</td></tr>
<tr><td>波動</td><td>價格上下跳的幅度，波動越大心臟要越強。</td></tr></table>
<p>建議先收藏起來，下次看新聞就懂了。想看更多名詞，可以到<a href="{R}terms/">股票新手翻譯器</a>查。</p>`},
{slug:'dca-vs-lump-sum',n:3,cat:'方法',title:'定期定額 vs 單筆投入，新手該怎麼想？',desc:'兩種投入方式的差別、各自適合誰，以及要先想清楚的事。',terms:[],body:`
<p>手上有錢想開始投入，常見的方式有兩種：定期定額和單筆投入。兩種都有人用，重點是哪一種適合你。</p>
<h2>方法 A：定期定額</h2><p>每月在固定時間投入固定金額。價格低的時候買得多，價格高的時候買得少，進場時間點就被分散開了。</p>
<h2>方法 B：單筆投入</h2><p>一次把一筆錢放進去。資金比較早開始工作，但進場時間點對結果的影響比較大。</p>
<h2>定期定額適合誰？</h2><p>每月有固定收入、怕心情被漲跌影響、想養成投資習慣的人。</p>
<h2>單筆投入要想清楚</h2><ul><li>進場後如果短期下跌，你承受得了嗎？</li><li>這筆錢多久內不會用到？</li></ul>
<h2>重點</h2><p>兩種方式都不保證賺錢，也沒有絕對的好壞。選一個你能長期持續下去的方式。</p>`},
{slug:'what-is-a-stock',n:4,cat:'觀念',title:'股票到底是什麼？用一間飲料店看懂',desc:'股票＝公司的一小塊所有權。當股東可能分到股利、股價可能漲，也要承擔虧損風險。',terms:['t13'],body:`
<p>常聽到人說「買股票」，但股票到底是什麼？其實就是<strong>公司的一小塊所有權</strong>。</p>
<h2>想像一間飲料店</h2><p>把一間飲料店分成 100 份，你買了其中 1 份，就成了這間店的小小股東。</p>
<h2>當股東可能有的回報</h2><ul><li>✅ 公司賺錢，可能發<a href="{R}terms/{t13}/">股利</a>給股東，這是第一種回報。</li><li>✅ 大家看好公司，股價可能上漲。</li></ul>
<h2>也要一起承擔風險</h2><p>⚠️ 大家看壞時，股價也可能下跌；公司經營得不好，你甚至可能虧損。當股東有機會分享公司的成長，也要一起承擔風險。</p>
<p>先懂它是什麼，再決定要不要碰，這就是慢慢變有錢的第一步 🌱</p>`},
{slug:'compound-interest',n:5,cat:'觀念',title:'複利：時間是新手最大的優勢',desc:'錢會生錢，生出來的錢也會再生錢。同樣本金，差別在時間。',terms:[],body:`
<p>複利的意思是：錢會生錢，生出來的錢也會再生錢。（愛因斯坦有沒有說過複利是「世界第八大奇蹟」？我們不確定 😆 但複利的力量是真的。）</p>
${'EX'}
<p>從 20 年到 40 年，後面多出來的那一大截，幾乎都是「時間」幫你賺的。<strong>差別不在本金，而在時間。</strong></p>
<h2>新手最大的優勢</h2><p>新手最大的優勢不是本金多，而是越早開始越好 🌱 但要記得：報酬不會每年都穩定 6%，市場會漲也會跌。先顧好預備金再開始。</p>
<p class="note">計算方式：10 萬 ×（1＋6%）^年數，未計稅費與內扣費用；實際報酬會波動，也可能虧損。過去績效不代表未來。</p>`.replace('EX', ex('同樣投入 10 萬元，年報酬率 6%，每年滾入本金：<ul><li>10 年後 ≈ 17.9 萬</li><li>20 年後 ≈ 32.1 萬</li><li>30 年後 ≈ 57.4 萬</li><li>40 年後 ≈ 102.9 萬</li></ul>'))},
{slug:'5-beginner-mistakes',n:6,cat:'心態',title:'新手最常犯的 5 個錯，你中了幾個？',desc:'聽明牌、追高殺低、用生活費投資、All in 單一標的、只看報酬不看風險成本。',terms:['t45','t61'],body:`
<p>投資不用一開始就很厲害，先「少犯錯」就贏一半 💪 下面是新手最常見的 5 個坑。</p>
<h2>❌1 聽明牌</h2><p>別人說會漲就買，你根本不知道自己買了什麼。不懂就買，等於把錢交給運氣。</p>
<h2>❌2 追高殺低</h2><p>漲了才敢買、跌了嚇到賣，被情緒帶著走，最容易買貴賣便宜。</p>
<h2>❌3 用生活費投資</h2><p>短期要用的錢不該拿去承擔波動。一下跌就可能被迫賣出，連生活都受影響。</p>
<h2>❌4 All in 單一標的</h2><p>沒有分散，一次押錯，可能損失一大半。</p>
<h2>❌5 只看報酬，不看風險和成本</h2><p>手續費、<a href="{R}terms/{t61}/">內扣費用</a>、可能的下跌，都要一起算進去。</p>
<p>先避開這些坑，就是贏一半。</p>`},
{slug:'what-is-etf',n:7,cat:'工具',title:'ETF 是什麼？一次看懂',desc:'ETF 是一籃子股票（或債券）。分散單一公司風險，但不保證賺，也要看內扣費用。',terms:['t40','t44','t45','t61'],body:`
<p>ETF 是新手常聽到的投資工具。它到底在買什麼？這篇不推薦任何特定 ETF，只教你怎麼看懂它 💡</p>
<h2>ETF＝一籃子的股票（或債券）</h2><p>你買 1 份 <a href="{R}terms/{t40}/">ETF</a>，就等於同時買到籃子裡很多家公司的一小部分。</p>
<h2>為什麼新手常聽到 ETF？</h2><ul><li>✅ 一次分散到多家公司</li><li>✅ 規則透明，可以查到持有哪些<a href="{R}terms/{t44}/">成分</a></li><li>✅ 跟股票一樣，可以在交易時間買賣</li></ul>
${'EX1'}
<p>👉 分散能降低「單一公司」的風險，但無法避免整體市場下跌。</p>
<h2>一定要看的成本：內扣費用</h2><p>持有 ETF 期間，<a href="{R}terms/{t45}/">管理費</a>、保管費等<a href="{R}terms/{t61}/">內扣費用</a>會直接從基金資產中扣除。你不會收到帳單，但它會默默影響報酬。</p>
${'EX2'}
<h2>ETF 不是保證賺 ⚠️</h2><ul><li>市場整體下跌時，ETF 也會跟著跌。</li><li>不同 ETF 追蹤的東西差很多。買之前先看：追蹤什麼、持有哪些、內扣費用多少、規模與流動性。</li><li>沒有「適合每個人」的 ETF，要看自己的目標和風險承受度。</li></ul>
<p class="note">過去績效不代表未來。</p>`.replace('EX1', ex('只買 1 家公司：這家公司股價跌 50%，你的投資也跌 50%。<br>買一籃 50 家公司的 ETF：其中 1 家跌 50%，若其他持平，整體只少約 1%。')).replace('EX2', ex('投資 10 萬元，內扣費用每年 0.5% vs 1.5%<br>→ 每年成本約 500 元 vs 1,500 元。時間拉長，差距會越來越明顯。'))},
{slug:'open-brokerage-account',n:8,cat:'起步',title:'第一次開證券戶？5 步驟懶人包',desc:'選券商、準備證件、線上開戶、交割帳戶、先模擬小額。本篇不推薦任何券商。',terms:[],body:`
<p>開證券戶其實不難，跟著這 5 步就好。</p>
<h2>1️⃣ 選券商</h2><p>比較手續費、App 好不好用、客服服務，選適合自己的。</p>
<h2>2️⃣ 準備雙證件＋銀行帳戶</h2><p>準備身分證、第二證件，還有自己名下的銀行帳戶。</p>
<h2>3️⃣ 線上開戶</h2><p>多數券商都能線上開戶，照步驟填資料、完成身分驗證。</p>
<h2>4️⃣ 開好交割帳戶</h2><p>買股票從交割帳戶扣款，賣出的錢也匯到這裡，記得留意餘額。</p>
<h2>5️⃣ 下單前先模擬、先小額</h2><p>先用模擬或小額練習，熟悉介面，別急著下大單。</p>
<p class="note">📌 各券商流程與規定略有不同，以實際官方說明為準。本篇不推薦任何券商。</p>
<p>開完戶不代表要馬上買！先看看入門清單，確認自己準備好了。</p>`},
{slug:'5-questions-before-investing',n:9,cat:'心態',title:'投資前，先問自己這 5 個問題',desc:'預備金、資金用途時間、能否承受下跌、是否理解標的、檢視節奏。答得出來再開始也不遲。',terms:['t45','t61'],body:`
<p>開始投資之前，先跟自己對話 🤔 這 5 題答得出來，再開始也不遲。</p>
<h2>Q1 我有緊急預備金了嗎？</h2><p>建議先存好 3–6 個月生活費，並先處理高利率負債。</p>${'EXA'}
<h2>Q2 這筆錢 5 年內用不到嗎？</h2><p>買房頭期、學費等短期要用的錢，不適合放進會波動的市場。</p>
<h2>Q3 如果跌 20%，我能不賣嗎？</h2>${'EXB'}<p>如果會焦慮到想賣，代表投入比例可能太高。</p>
<h2>Q4 我真的理解自己在買什麼嗎？</h2><p>說得出它是什麼、怎麼賺錢、有哪些風險和成本（含手續費、<a href="{R}terms/{t61}/">內扣費用</a>）嗎？說不出來就先別買。</p>
<h2>Q5 我多久檢視一次？</h2><p>訂好固定節奏，例如每季或每半年看一次（假設例子），不用每天盯盤，避免被情緒牽著走。</p>
<h2>結果怎麼看</h2><ul><li>5 題都 OK ✅ → 可以開始小額、慢慢來</li><li>有任何一題卡住 ⚠️ → 先補強，不急</li></ul><p>投資是馬拉松，不是百米衝刺 🏃 慢慢來比較快 🌱</p>`.replace('EXA', ex('每月生活費 2 萬 → 預備金約 6–12 萬')).replace('EXB', ex('投入 10 萬，一度變成 8 萬，你睡得著嗎？'))},
{slug:'twd-fx-outflow',igUrl:'https://www.instagram.com/slow.rich.notes/p/DfBPWMcEmtM/',n:10,cat:'新聞',title:'外資提款 776 億美元，你的台幣變薄了？',desc:'央行報告：外資今年淨匯出約 776 億美元、新台幣貶約 3.23%。用白話講匯率＝尺子在動，對出國、美股與定期定額的影響，不預測漲跌。',terms:[],body:`
<p>刷到「新台幣重貶」「外資狂匯出」的標題，很容易先慌一下。央行總裁立法院業務報告書面資料提到：外資今年淨匯出約 776 億美元，新台幣兌美元累計貶約 3.23%；下半年匯出力道更猛，7 月至約 10 月 21 日約匯出 543 億美元，約為上半年的 2.33 倍。這些是報告揭露的約數，會隨後續更新變動，這裡不預測下一根走勢。</p>
<p>先把感覺講清楚：錢沒有從你帳戶消失，是兩種錢的交換比例在動——「尺子在動」。台幣貶，代表同樣一筆台幣，換成美金變少一點。出國、海外訂房、國外網站結帳會比較有感；若你領美金薪水或已持有美元資產，換成台幣看，有時「看起來」變多——那是匯率跟標的一起動，不是單靠標題就能決定該不該動作。</p>
<p>外資為什麼提款？常見說法包括地緣風險升溫、AI／半導體股出現賣壓、市場預期聯準會可能更緊。白話一點：錢往「覺得比較安全或比較有利」的地方跑。這是資金進出的溫度計，不是你帳戶被偷，也不是叫你今天梭哈或清倉。想把財經新聞裡的名詞先卡住，可以看<a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？這 10 個詞先學起來</a>。</p>
<p>若你關心的是「要不要買美股／海外 ETF」：台幣貶時，換成美金的成本變高，等於進場貴一點；已持有美元資產的人，用台幣看市值有時會被匯率抬高。定期定額仍是把匯率波動攤平的工具之一，但不是保證賺。方法怎麼選，可以對照<a href="{R}learn/dca-vs-lump-sum/">定期定額 vs 單筆投入</a>。物價與匯率都會讓薪水「感覺變薄」，這跟<a href="{R}notes/oil-100/">油價破 100，你的薪水正在縮水？</a>講的是同一條線：看懂新聞鏈，是為了少慌，不是為了猜下一根。</p>
<p>央行也不是沒做事。報告提到上半年為穩匯市，累計賣匯約 170.4 億美元；台灣匯市偏淺碟，過度波動不利穩定。白話：短期資金大進大出時，央行可能進場「降火候」——不是保證匯率永遠不動。</p>
<p>帶回去一句：標題可以聳，答案要冷靜。先分清你是要出國花錢，還是在做長期配置；別人在撤，你先搞懂匯率，比追情緒重要。想把投資前該檢查的事做成清單，可以免費領<a href="{R}lead/">《投資新手入門清單》</a>。僅供教育參考，非投資建議。</p>`},
{slug:'national-security-fund-what',n:11,cat:'名詞',title:'上次國安基金宣布護盤隔天，台股還再跌約 1,000 點',desc:'國安基金 11 月 6 日宣布第 10 次護盤，決議授權執行秘書視情況動用資金。白話說明它是什麼、5,000 億是上限不是一次全投入，以及為什麼宣布進場不代表已經買進、也不能跟單。',terms:[],body:`

<p>國安基金 11 月 6 日下午宣布第 10 次護盤。有人一聽到「進場」，就想問能不能跟著買。先別急：這次是第 131 次臨時會決議「授權執行秘書，視情況動用資金」。授權不等於已經開始買，更不等於隔天指數就會反彈。</p>
<p>會上提到的背景是：台股從 11 月 2 日到 6 日大約跌了 5,510 點、跌幅 12.19%；6 日盤中最低約 37,837 點，收在 39,701 點，距離今年高點約跌了 20.55%。委員會認為市場信心已有失序之虞，因此依《國家金融安定基金設置及管理條例》第 8 條啟動安定任務。</p>
<p>國安基金全名是「國家金融安定基金」，2000 年成立，主管機關是行政院。它不是日常選股的法人，而是在國內外重大事件衝擊金融市場時，穩住市場秩序和投資信心。依法可運用資金總額上限是 5,000 億元：用國庫持有的股票作擔保去借款，最多 2,000 億；借用郵政儲金、勞保、勞退、退撫等尚未投入證券的資金，最多 3,000 億。這 5,000 億是天花板，不是宣布就一次全部投入。</p>
<p>可以跟單嗎？護盤期間，國安基金不會即時公開完整買賣明細。上次買過哪些股票，是任務結束後才公布的歷史紀錄，當下沒有一份能同步跟單的名單。時間、價格不一樣，就算後來看起來買同一檔，報酬也不會一樣。</p>
<p>第九次護盤是 2025 年 4 月 8 日決議授權，4 月 9 日起執行，到 2026 年 1 月 12 日結束，共 279 天；投入約 122.5 億元，出清後加計股利、扣除費用，淨利約 99.32 億元，報酬率大約 81%。但宣布也不等於股市立刻止跌：第九次宣布隔天，台股還跌了大約 1,068 點。後來獲利，也不代表用不同時間價格買會拿到同一份成績單。</p>
<p>聽這則新聞，可以先分兩層：委員會「授權進場」不等於已經開始買，更不等於明天指數就會反彈。大跌時如果還聽到融資或法人進出的消息，可以再看<a href="{R}notes/margin-call-what/">融資斷頭是什麼</a>，以及<a href="{R}notes/three-institutions-who/">三大法人到底是誰</a>。跌了多少才叫回檔或修正，也有一篇說明<a href="{R}notes/pullback-correction-bear/">回檔、修正和熊市差在哪</a>。</p>
<p>剛開始接觸投資的話，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>
`},
{slug:'berkshire-q3-buyback',n:12,cat:'新聞',title:'巴菲特交棒後第一年，波克夏單季回購創近年新高',desc:'波克夏 2026 年第 3 季花大約 94 億美元買回自家股票，前九個月合計 144 億。白話說明回購是什麼、現金水位、為什麼外界解讀成新經營階層更願意出手，以及為什麼這不是 11 月大跌後的抄底訊號。',terms:[],body:`
<p>波克夏 11 月 7 日公布 2026 年第 3 季財報。7 到 9 月，公司花大約 94 億美元買回自家股票：7 月約 34 億、8 月約 8 億、9 月約 54 億，加總約 96.5 億美元，外界多寫成 94 億。前九個月合計買回庫藏股 144 億美元，其中包含 9 月成交、10 月才交割的部分。這不是去買別的公司，而是把流通在外的股份買回來。</p>
<p>帳上現金確實多。截至 9 月 30 日，保險等業務持有的現金、約當現金和美國短期公債約 3,523 億美元。回購規定是：執行長和董事長商量後，覺得股價低於他們保守估算的內在價值才能買，沒有上限、也沒有到期日，也不保證一定會買多少；但不能讓現金與美國短期公債掉到 300 億美元以下。</p>
<p>巴菲特已在 2025 年底卸任執行長，這份財報由 Greg Abel 以執行長身分簽署。第 2 季大約回購 45 億美元，第 3 季超過翻倍，外電多半解讀成新經營階層更願意把錢用出去，而且當時覺得自家股票偏便宜。不過回購變多，不代表這季賺更多：第 3 季營業利益約 127 億美元，年減 5.8%，保險承保獲利掉得更明顯。同期也有收購，例如年初買下 OxyChem 約 94 億美元，7 月再買 TMHC 約 68 億美元。</p>
<p>圖上有人稱之為史上最大單季回購，這季約 94 億的數字對得上財報；這說的是單季，不是全年。更重要的是時間：這筆錢花在 7 到 9 月，不是 11 月初股市大跌之後才出手。美聯社寫到，A 股後來漲過大約 87.8 萬美元之後，回購很可能又停了。股價變高，就不一定還符合「低於內在價值」才能買的條件。</p>
<p>聽這則新聞，可以先記住：回購代表當時經營階層覺得自家股票便宜，不是保證之後會漲，更不是現在該跟單的訊號。財報數字和股價不一定同向，可以再看<a href="{R}notes/intel-guidance-earnings/">英特爾財測為何股價反而大跌</a>；大跌時新聞變多，也可以回顧<a href="{R}notes/pullback-correction-bear/">回檔、修正和熊市差在哪</a>。</p>
<p>剛開始接觸投資的話，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>。</p>`},
{slug:'0050-intro',n:13,cat:'名詞',title:'台灣第一檔 ETF：0050 從 2003 走到今天，規模約 2.56 兆',desc:'0050 是台灣第一檔上市 ETF，追蹤臺灣50指數。白話看懂它怎麼選股、為什麼不是 50 家平均持有、2025 年「1 拆 4」是什麼，以及費用怎麼算。',coverAlt:'台灣第一檔 ETF：0050 從 2003 走到今天，規模約 2.56 兆（台灣 ETF 規模排名 ①）',terms:['t40','t12'],body:`
<figure class="fig">
<div class="facts" role="img" aria-label="追蹤臺灣50指數，成分 50 檔，定期調整 3、6、9、12 月，規模約 2.56 兆元，受益人次 395 萬 6,621 人">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">追蹤</span><span class="v">「臺灣50指數」</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.4" fill="currentColor"/></svg></span><span class="k">成分</span><span class="v">50 檔</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">定期調整</span><span class="v">3、6、9、12 月</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></span><span class="k">規模約</span><span class="v">2.56 兆元</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="2.4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="9" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4.5 18.5c.6-2.6 2.6-4 4.5-4s3.9 1.4 4.5 4M13 14.6c1.3-.5 2.6-.6 3.6-.2 1.6.6 2.6 2.2 3 4.1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">受益人次</span><span class="v">395 萬 6,621 人</span></div>
</div>
<figcaption>資料日 2026/11/13，元大投信、證交所 ETF e添富。</figcaption>
</figure>
<h2>規模第一，先搞懂它買了什麼</h2>
<p>很多人第一檔 ETF 就是 0050，但不一定清楚裡面到底裝了什麼。0050 的全名是「元大台灣卓越50」，2003 年 6 月 25 日成立、6 月 30 日上市，是台灣第一檔上市 ETF。截至 2026 年 11 月 13 日，規模約 2.56 兆元，是目前台灣上市櫃 ETF 裡最大的一檔；同一天的受益人次是 395 萬 6,621 人。</p>
<p>規模第一只說明這檔基金管了多少錢、有多少人持有，不是推薦。如果還不太確定 ETF 是什麼，可以先看<a href="{R}learn/what-is-etf/">ETF 是什麼？一次看懂</a>。</p>
<figure class="fig">
<ol class="timeline" role="img" aria-label="2003/6/25 成立，每單位 36.98 元。2003/6/30 上市，台灣第一檔上市 ETF。2025/6/18 「1 拆 4」恢復交易。2026/9/21 最近一次成分調整生效，1 進 1 出。2026/11/13 規模約 2.56 兆元。">
<li><b>2003/6/25</b><span>成立（每單位 36.98 元）</span></li>
<li><b>2003/6/30</b><span>上市，台灣第一檔上市 ETF</span></li>
<li><b>2025/6/18</b><span>「1 拆 4」恢復交易</span></li>
<li><b>2026/9/21</b><span>最近一次成分調整生效（1 進 1 出）</span></li>
<li><b>2026/11/13</b><span>規模約 2.56 兆元</span></li>
</ol>
<figcaption>資料日見各節點。來源：元大投信、證交所 ETF e添富。</figcaption>
</figure>
<h2>它怎麼選這 50 家公司</h2>
<p>0050 追蹤「臺灣50指數」，由證交所和富時一起編製。規則很直接：在上市股票裡，挑總市值最大的 50 家。成分股會定期調整，時點在每年 3、6、9、12 月。最近一次生效日是 2026 年 9 月 21 日，當時仍是 50 檔，有 1 檔進來、1 檔出去。誰進誰出，要以指數公司公告為準。</p>
<p>所以 0050 的持股不是經理人憑感覺挑的，而是跟著這套規則走。</p>
<h2>不是 50 家公司各拿 2%</h2>
<p>如果 50 家平均分，每家會是 2%。但 0050 是市值加權：公司越大，占的比重越高。2026 年 11 月 13 日元大官網持股：</p>
<ol>
<li>台積電 58.46%</li>
<li>聯發科 6.17%</li>
<li>鴻海 2.99%</li>
<li>台達電 2.43%</li>
<li>日月光投控 2.02%</li>
</ol>
<figure class="fig">
<div class="bars" role="img" aria-label="持股比重：台積電 58.46%，聯發科 6.17%，鴻海 2.99%，台達電 2.43%，日月光投控 2.02%。對照：平均分每家 2%。">
<div class="row"><span class="name">台積電</span><span class="track"><span class="fill" style="width:58.46%"></span></span><span class="num">58.46%</span></div>
<div class="row"><span class="name">聯發科</span><span class="track"><span class="fill" style="width:6.17%"></span></span><span class="num">6.17%</span></div>
<div class="row"><span class="name">鴻海</span><span class="track"><span class="fill" style="width:2.99%"></span></span><span class="num">2.99%</span></div>
<div class="row"><span class="name">台達電</span><span class="track"><span class="fill" style="width:2.43%"></span></span><span class="num">2.43%</span></div>
<div class="row"><span class="name">日月光投控</span><span class="track"><span class="fill" style="width:2.02%"></span></span><span class="num">2.02%</span></div>
<div class="row is-ref"><span class="name">平均分每家</span><span class="track"><span class="fill" style="width:2%"></span></span><span class="num">2%</span></div>
</div>
<figcaption>資料日 2026/11/13，元大投信持股比重；權重每天變動。</figcaption>
</figure>
<figure class="fig">
<div class="stack" role="img" aria-label="台積電 58.46%，其餘 49 檔 41.54%">
<div class="stack-bar"><i class="a" style="width:58.46%"></i><i class="b" style="width:41.54%"></i></div>
<ul class="stack-key"><li>台積電 58.46%</li><li class="b">其餘 49 檔 41.54%</li></ul>
</div>
<figcaption>資料日 2026/11/13，元大投信持股比重；權重每天變動。</figcaption>
</figure>
<p>前 5 大合計約 72%，後面還有南亞、中信金、富邦金、台光電、聯電等。光是台積電一檔就超過一半，所以 0050 的表現會很靠近籃子裡最大的那幾家。這檔指數也沒有把單一股票壓在某個百分比上限。台積電本身的配息怎麼看，可以對照<a href="{R}notes/tsmc-dividend-9/">台積電季配息拉高到 9 元</a>。權重每天都會變，看的時候請回到元大官網對最新的表。</p>
<h2>2025 年的「1 拆 4」不是大跌</h2>
<p>2025 年 6 月 18 日，0050 完成「1 拆 4」後恢復交易：1 個單位變成 4 個單位，單價約變成原來的四分之一。最後交易日收盤 188.65 元，恢復時參考價 47.16 元，剛好是 188.65÷4。單位變多、單價變低，乘起來的總價值一樣，持有人也不用自己辦手續。這是機械調整，不是股價大跌。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="分割前 1 單位乘 188.65 元，變成分割後 4 單位乘 47.16 元。總價值不變，188.65 除以 4 等於 47.16。">
<div class="flow-row">
<div class="step"><small>分割前</small><b>1 單位</b><span>× 188.65 元</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>分割後</small><b>4 單位</b><span>× 47.16 元</span></div>
</div>
<p class="same">總價值不變（188.65÷4＝47.16）</p>
</div>
<figcaption>2025/6/18 恢復交易。來源：元大 0050 分割公告（證交所 e添富轉載）。</figcaption>
</figure>
<h2>費用從淨值裡扣</h2>
<p>經理費、保管費會從淨值裡扣，不會另外寄帳單。0050 的經理費依規模分段加總：1,000 億元以內的部分 0.15%，1,000 億到 5,000 億 0.10%，5,000 億到 1 兆 0.08%，超過 1 兆的部分 0.05%。整檔平均下來，官網在 2026 年 11 月 13 日揭示經理費約 0.0676%；保管費同樣分段計算。實際以公開說明書為準。若有配息，金額會從淨值扣除，不是額外多出來的錢。</p>
<figure class="fig">
<table class="t">
<thead><tr><th>費用</th><th>級距</th><th>費率</th></tr></thead>
<tbody>
<tr><td>經理費</td><td>1,000 億元以內</td><td>0.15%</td></tr>
<tr><td>經理費</td><td>1,000 億～5,000 億</td><td>0.10%</td></tr>
<tr><td>經理費</td><td>5,000 億～1 兆</td><td>0.08%</td></tr>
<tr><td>經理費</td><td>超過 1 兆</td><td>0.05%</td></tr>
<tr><td>保管費</td><td>1 兆以內</td><td>0.03%</td></tr>
<tr><td>保管費</td><td>超過 1 兆</td><td>0.025%</td></tr>
</tbody>
</table>
<figcaption>依規模分段加總；2026/11/13 官網揭示經理費約 0.0676%；以公開說明書為準。</figcaption>
</figure>
<p>想比較 0050 這類市值型和高股息 ETF，可以看<a href="{R}family/etf-types/">市值型 vs 高股息 ETF 差在哪</a>；新聞裡常見的市值、殖利率這些詞，可以先看<a href="{R}learn/10-terms-for-financial-news/">看不懂財經新聞？先學這 10 個詞</a>。</p>
<h2>一句話記住</h2>
<p>這是「台灣 ETF 規模排名」第 1 集，之後會依規模陸續介紹每一檔，名次會變，數字請以當日官方揭露為準。搞懂 0050，先看它追蹤誰、權重怎麼分配，再看規模和費用：你買到的是「市值最大的 50 家」這套規則，不是 50 家平均的持股清單。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="一，市值型，跟著台灣最大的 50 家。二，不是平均持有，台積電一檔約占 58%。三，規模第一只是現況，不是推薦。">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V8l5-3v15M9 20V5l6 3v12M15 20V9l5 2v9M3 20h18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></span><span class="v">① 市值型，跟著台灣最大的 50 家</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 14a7 7 0 1 1 12.4-4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 12l6.2-3.2A7 7 0 0 1 12 19z" fill="currentColor"/></svg></span><span class="v">② 不是平均持有，台積電一檔約占 58%</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 11v6M12 8h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="v">③ 規模第一只是現況，不是推薦</span></div>
</div>
<figcaption>重點整理，不是推薦。持股比重資料日 2026/11/13，元大投信。</figcaption>
</figure>`},
{slug:'0056-intro',n:14,cat:'名詞',title:'0056 裡面，權重最高的不是台積電，是南亞約 10%',desc:'0056 是台灣規模第 2 大 ETF，追蹤臺灣高股息指數。白話看懂它怎麼選股、為什麼最大持股是南亞、和 0050 的權重差在哪，以及季配和費用怎麼算。',coverAlt:'0056 裡面，權重最高的不是台積電，是南亞約 10%（台灣 ETF 規模排名 ②）',terms:['t40','t15'],body:`
<figure class="fig">
<div class="facts" role="img" aria-label="規模約 8,057 億元，資料日 2026/11/13。上市 2007/12/26。成分股 50 檔。2023/7/18 起季配。">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="7" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></span><span class="k">規模約</span><span class="v">8,057 億</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">上市</span><span class="v">2007/12/26</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.4" fill="currentColor"/></svg></span><span class="k">成分股</span><span class="v">50 檔</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 4a8 8 0 0 1 8 8h-8z" fill="currentColor"/></svg></span><span class="k">季配</span><span class="v">2023/7/18 起</span></div>
</div>
<figcaption>規模資料日 2026/11/13。來源：元大投信、證交所 ETF e添富。</figcaption>
</figure>
<h2>規模第 2，先搞懂它買了什麼</h2>
<p>0056 的全名是「元大台灣高股息」，2007 年 12 月 13 日成立、12 月 26 日上市，成立價 25 元，上市價 25.33 元。截至 2026 年 11 月 13 日，規模約 8,056.99 億元，是目前台灣上市櫃 ETF 裡第 2 大；同一天證交所揭露的受益人次是 179.39 萬人。</p>
<p>規模第 2 只說明很多人把錢放在這裡，不代表它適合每一個人，也不是推薦。如果還不太確定 ETF 是什麼，可以先看<a href="{R}learn/what-is-etf/">ETF 是什麼？一次看懂</a>。</p>
<h2>幾個關鍵節點</h2>
<ul>
<li>2007/12/26：0056 上市，追蹤臺灣高股息指數。</li>
<li>2022/12/19：指數成分股從 30 檔增加到 50 檔（有 5 個交易日的過渡期）。</li>
<li>2023/7/18：由一年配一次改成每季收益分配（金管會 2023/5/26 同意）。</li>
<li>2025/12 審查起：指數新增一些資格條件，例如須在臺灣註冊、要能取得未來股利預估；選股主軸仍是預測現金股利殖利率，沒有改成看歷史殖利率。</li>
<li>2026/11/13：規模約 8,057 億元。</li>
</ul>
<figure class="fig">
<ol class="timeline" role="img" aria-label="2007/12/26 上市。2022/12/19 成分股從 30 檔增加到 50 檔。2023/7/18 改成每季收益分配。2025/12 審查起新增資格條件。2026/11/13 規模約 8,057 億元。">
<li><b>2007/12/26</b><span>上市</span></li>
<li><b>2022/12/19</b><span>成分股 30→50 檔</span></li>
<li><b>2023/7/18</b><span>改季配</span></li>
<li><b>2025/12</b><span>審查起新增<br>資格條件</span></li>
<li><b>2026/11/13</b><span>規模約 8,057 億</span></li>
</ol>
<figcaption>資料日見各節點。來源：元大投信、證交所 ETF e添富、臺灣指數公司。</figcaption>
</figure>
<p>這些是產品史上的節點，不是進出場訊號。</p>
<h2>這 50 家公司怎麼選、多久換一次</h2>
<p>臺灣高股息指數由證交所和富時一起編製。母體是臺灣50加上臺灣中型100，大約是上市股票裡總市值最大的 150 家；再從裡面選出未來 12 個月預測現金股利殖利率較高的 50 檔，權重也依這項殖利率分配，不是誰市值大就占越多。預測數字來自指數公司採用的分析師平均預估，不是 0056 經理人自己猜。</p>
<p>成分股半年調整一次，在每年 6 月、12 月，該月第 3 個星期五收盤後生效，再用 5 個交易日把權重調整到位。最近一次半年定審自 2026 年 6 月 22 日起生效，新增 5 檔、刪除 4 檔。誰進誰出，要以指數公司公告為準。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="臺灣50加臺灣中型100，約 150 家，依未來 12 個月預測現金股利殖利率排序，選出 50 檔，依殖利率加權，每年 6、12 月定審。">
<div class="flow-row">
<div class="step"><small>母體</small><b>約 150 家</b><span>臺灣50＋<br>臺灣中型100</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step"><small>排序</small><b>未來<br>12 個月</b><span>預測現金股利<br>殖利率</span></div>
</div>
<div class="flow-row" style="margin-top:8px">
<div class="step"><small>選出</small><b>50 檔</b></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>加權</small><b>依殖利率</b></div>
</div>
<p class="same">每年 6、12 月定審</p>
</div>
<figcaption>來源：臺灣指數公司臺灣高股息指數。誰進誰出，以指數公司公告為準。</figcaption>
</figure>
<h2>最新前 10 大持股</h2>
<p>2026 年 11 月 13 日元大官網持股：</p>
<ol>
<li>南亞 10.25%</li>
<li>華南金 4.82%</li>
<li>中信金 4.52%</li>
<li>永豐金 4.39%</li>
<li>華碩 4.00%</li>
<li>兆豐金 3.96%</li>
<li>緯創 3.50%</li>
<li>長榮 3.31%</li>
<li>南亞科 3.29%</li>
<li>廣達 3.07%</li>
</ol>
<figure class="fig">
<div class="bars" role="img" aria-label="持股比重：南亞 10.25%，華南金 4.82%，中信金 4.52%，永豐金 4.39%，華碩 4.00%，兆豐金 3.96%，緯創 3.50%，長榮 3.31%，南亞科 3.29%，廣達 3.07%。">
<div class="row"><span class="name">南亞</span><span class="track"><span class="fill" style="width:10.25%"></span></span><span class="num">10.25%</span></div>
<div class="row"><span class="name">華南金</span><span class="track"><span class="fill" style="width:4.82%"></span></span><span class="num">4.82%</span></div>
<div class="row"><span class="name">中信金</span><span class="track"><span class="fill" style="width:4.52%"></span></span><span class="num">4.52%</span></div>
<div class="row"><span class="name">永豐金</span><span class="track"><span class="fill" style="width:4.39%"></span></span><span class="num">4.39%</span></div>
<div class="row"><span class="name">華碩</span><span class="track"><span class="fill" style="width:4%"></span></span><span class="num">4.00%</span></div>
<div class="row"><span class="name">兆豐金</span><span class="track"><span class="fill" style="width:3.96%"></span></span><span class="num">3.96%</span></div>
<div class="row"><span class="name">緯創</span><span class="track"><span class="fill" style="width:3.5%"></span></span><span class="num">3.50%</span></div>
<div class="row"><span class="name">長榮</span><span class="track"><span class="fill" style="width:3.31%"></span></span><span class="num">3.31%</span></div>
<div class="row"><span class="name">南亞科</span><span class="track"><span class="fill" style="width:3.29%"></span></span><span class="num">3.29%</span></div>
<div class="row"><span class="name">廣達</span><span class="track"><span class="fill" style="width:3.07%"></span></span><span class="num">3.07%</span></div>
</div>
<figcaption>資料日 2026/11/13，元大投信持股比重；權重每天變動。</figcaption>
</figure>
<p>前 5 大合計約 28%，前 10 大合計約 45%，前 10 名裡就有 4 家金融控股公司。權重每天都可能變，看的時候請回到元大官網對最新的表。</p>
<h2>不是比較會配息的 0050</h2>
<p>0050 追蹤臺灣50，是市值加權：公司越大，通常占越多。同一天 0050 光是台積電就占約 58.46%，前 5 大合計約 72%（詳見<a href="{R}learn/0050-intro/">台灣第一檔 ETF：0050 從 2003 走到今天</a>）。0056 則是殖利率加權，最大持股南亞約 10.25%，前 5 大合計約 28%。</p>
<figure class="fig">
<div class="stack" role="img" aria-label="0056 南亞 10.25%，其餘 89.75%">
<div class="stack-bar"><i class="a" style="width:10.25%"></i><i class="b" style="width:89.75%"></i></div>
<ul class="stack-key"><li>0056 南亞 10.25%</li><li class="b">其餘 89.75%</li></ul>
</div>
<div class="stack" role="img" aria-label="0050 台積電 58.46%，其餘 41.54%" style="margin-top:14px">
<div class="stack-bar"><i class="a" style="width:58.46%"></i><i class="b" style="width:41.54%"></i></div>
<ul class="stack-key"><li>0050 台積電 58.46%</li><li class="b">其餘 41.54%</li></ul>
</div>
<figcaption>資料日 2026/11/13，元大投信持股比重；權重每天變動。</figcaption>
</figure>
<p>所以 0056 比較接近「用一個籃子持有預測殖利率較高的中大型股」，不是 50 家各買一份，也不是同一批大公司只是比較會配息。官方也提醒，這種 Smart Beta 指數在某些市場環境下可能落後市值加權指數，且情況可能持續很長一段時間，也可能持有較多市值較小的公司。兩種類型的差別，可以看<a href="{R}family/etf-types/">市值型 vs 高股息 ETF 差在哪</a>。</p>
<h2>現在是季配，息從淨值扣</h2>
<p>2026 年四次發放日是 2/11、5/14、8/10、11/11；最近一次除息交易日是 10/22。配息金額會從 ETF 淨值扣除，不是額外多出來的錢，來源也可能包含收益平準金。要不要配、配多少，都以投信公告為準，並無保證。看高股息 ETF，除了看配息次數，也要一起看淨值怎麼變。</p>
<h2>費用從淨值裡扣</h2>
<p>經理費分段計算：規模 100 億元以內的部分 0.40%，100 億到 300 億的部分 0.34%，超過 300 億的部分 0.30%。保管費固定 0.035%。官網沒有另外揭示「合計約多少％」的單一數字，實際以公開說明書和發行人公告為準。</p>
<figure class="fig">
<table class="t">
<thead><tr><th>費用</th><th>級距</th><th>費率</th></tr></thead>
<tbody>
<tr><td>經理費</td><td>100 億元以內</td><td>0.40%</td></tr>
<tr><td>經理費</td><td>100 億到 300 億</td><td>0.34%</td></tr>
<tr><td>經理費</td><td>超過 300 億</td><td>0.30%</td></tr>
<tr><td>保管費</td><td>固定</td><td>0.035%</td></tr>
</tbody>
</table>
<figcaption>依規模分段加總；保管費固定。以公開說明書和發行人公告為準。</figcaption>
</figure>
<h2>一句話記住</h2>
<p>這是「台灣 ETF 規模排名」第 2 集，下一集是 00878 國泰永續高股息。名次會變，數字請以當日官方揭露為準。搞懂 0056，先看它追蹤誰、權重怎麼分配：你買到的是「預測現金股利殖利率較高的 50 家」這套規則，不是 50 張平均的高息股清單。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="一，殖利率加權，預測現金股利殖利率較高的 50 家。二，最大持股是南亞約 10%，不是台積電。三，規模第 2 只是現況，不是推薦。">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V8l5-3v15M9 20V5l6 3v12M15 20V9l5 2v9M3 20h18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></span><span class="v">① 殖利率加權，預測現金股利殖利率較高的 50 家</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 14a7 7 0 1 1 12.4-4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 12l6.2-3.2A7 7 0 0 1 12 19z" fill="currentColor"/></svg></span><span class="v">② 最大持股是南亞約 10%，不是台積電</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 11v6M12 8h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="v">③ 規模第 2 只是現況，不是推薦</span></div>
</div>
<figcaption>重點整理，不是推薦。持股比重資料日 2026/11/13，元大投信。</figcaption>
</figure>
<p>來源：元大投信 0056 基本資訊與持股比重（資料日 2026/11/13）、證交所 ETF e添富 0056 商品頁、臺灣指數公司臺灣高股息指數基本規則 V4.1 與定審公告（2022/12/02、2026/06/05）、證交所 2025/10/01 基本規則更新說明、證交所 e添富〈收益平準金對ETF之功用〉。</p>`},
{slug:'ai-ban-skynet-1122',n:15,cat:'新聞',cssVer:'11',title:'美國要立法禁天網？先分清 ANI、AGI、ASI，再看法案寫了什麼',desc:'美國《禁止人工超級智能法案》2026 年 9 月提出，目前仍在委員會。白話拆解 ANI／AGI／ASI、永久禁 ASI 與 10^25 FLOPs 暫停的差別，以及為什麼這還不是法律。僅供教育參考，非投資建議。',coverAlt:'封面：美國要立法禁天網？ANI 弱 AI、AGI 通用 AI、ASI 超級 AI。消息再大聲，也先看數字。僅供教育參考，非投資建議。',terms:[],body:`
<figure class="coverfig"><img src="{R}notes/ai-ban-skynet-1122/cover.png" alt="封面：美國要立法禁天網？ANI 弱 AI、AGI 通用 AI、ASI 超級 AI。消息再大聲，也先看數字。僅供教育參考，非投資建議。" width="1080" height="1920"></figure>
<p>最近有標題把這則消息說成「美國要立法禁天網」。先講清楚：這是 2026 年 9 月提出的草案，不是已經通過的法律。「天網」只是電影裡用來比喻超級 AI 的說法，不是法案正式名稱。</p>
<p>下面用比短影片更完整的方式，把三個名詞、條文重點和立法進度分開看。先看它過了沒、禁的是哪一級。</p>
<p>同一份草案，先前有一篇較短的整理，可以先看<a href="{R}notes/ai-ban-superintelligence/">為什麼這還不是法律</a>。</p>
<h2>AI 到底分幾級？ANI、AGI、ASI</h2>
<p>這組三分法是常見科普架構，不是這份法案自己的分類。法案主攻的是「人工超級智能」（ASI），另外再用算力門檻定義「先進 AI」。先把名詞講清楚，比較不會把「禁止超級 AI」聽成「所有 AI 都要停」。</p>
<p><strong>ANI（弱 AI／窄域 AI）</strong>：只擅長一件或一類任務。電影《瓦力》裡整天壓垃圾的機器人，就是這種感覺。現實中，會下圍棋的 AlphaGo、手機上的 Siri、網站的推薦演算法，都屬這一級：單一領域可以很強，但不會自己改做完全不同的事。AlphaGo 會下棋，並不會幫你煎蛋。</p>
<p><strong>AGI（通用 AI）</strong>：要能涵蓋許多不同領域，大致接近人類那種「學會一件事，也能改學另一件事」。電影《雲端情人》的 Samantha、《機械姬》的 Ava，講的是這種想像。不少 AI 公司把 AGI 當作追求的目標，但「已經達成」或「很快就會到」都還是各方主張，沒有公認標準。本文不採用任何一家的時間表。</p>
<p><strong>ASI（超級 AI）</strong>：在多數領域都明顯超過人類。電影《魔鬼終結者》的天網、《駭客任務》的母體，就是在講這個等級。這份草案想永久禁止的，是條文裡定義的 ASI，以及它列出的某些「前兆特徵」。這是立法主張，不是在說這樣的系統已經出現。</p>
<figure class="fig">
<div class="cols c3">
<div class="col"><p class="hd">ANI 弱 AI</p><p><b>定義</b>只擅長一件或一類任務</p><p><b>電影例子</b>《瓦力》裡壓垃圾的機器人</p><p><b>現實狀態</b>AlphaGo、Siri、推薦演算法。單一領域可以很強，不會自己改做完全不同的事</p><p><b>草案怎麼處理</b>不處理</p></div>
<div class="col"><p class="hd">AGI 通用 AI</p><p><b>定義</b>要能涵蓋許多不同領域，大致接近人類那種學會一件事、也能改學另一件事</p><p><b>電影例子</b>《雲端情人》的 Samantha、《機械姬》的 Ava</p><p><b>現實狀態</b>「已經達成」或「很快就會到」仍是各方主張，沒有公認標準</p><p><b>草案怎麼處理</b>不處理（超過算力門檻的先進 AI 先暫停）</p></div>
<div class="col"><p class="hd">ASI 超級 AI</p><p><b>定義</b>在多數領域都明顯超過人類</p><p><b>電影例子</b>《魔鬼終結者》的天網、《駭客任務》的母體</p><p><b>現實狀態</b>這是立法主張，不是說這樣的系統已經出現</p><p><b>草案怎麼處理</b>永久禁止</p></div>
</div>
<figcaption>三分法是常見科普架構，不是法案自己的分類。暫停的是訓練算力達到或超過 10^25 FLOPs 的先進 AI，不是把 AGI 一律暫停。</figcaption>
</figure>
<h2>法案實際寫了什麼</h2>
<p>正式名稱是《禁止人工超級智能法案》（Ban Artificial Superintelligence Act of 2026）。眾院版 H.R.10538，2026 年 9 月 24 日提出，已送監督與政府改革委員會；參院版 S.5493，9 月 23 日提出，已送商業、科學與運輸委員會。截至 2026 年 11 月 22 日，公開紀錄上的最新動作仍是「已提案、送交委員會」，還沒通過任何一院，更還不是法律。</p>
<figure class="fig">
<ol class="timeline" role="img" aria-label="2026/9/23 參院 S.5493 提出。2026/9/24 眾院 H.R.10538 提出。2026/11/22 仍在委員會。">
<li><b>2026/9/23</b><span>參院 S.5493 提出，已送商業、科學與運輸委員會</span></li>
<li><b>2026/9/24</b><span>眾院 H.R.10538 提出，已送監督與政府改革委員會</span></li>
<li><b>2026/11/22</b><span>仍在委員會</span></li>
</ol>
<figcaption>截至 2026/11/22，公開紀錄最新動作仍是已提案、送交委員會。還沒通過任何一院。</figcaption>
</figure>
<p>條文對 ASI 的定義，是系統已表現出、或很容易被改成具備下列任一能力：在多數領域超過人類認知表現；或有足夠能力策劃並執行毀滅、削弱人類，包括推翻或破壞聯邦政府。它也列出若干「前兆特徵」，例如大幅加速 AI 自身研發、未經授權進入系統、關不掉、自行升級，或規避監管。草案禁止研發、部署、取得、持有、資助、進口或移轉 ASI，以及具備這些前兆特徵的系統。</p>
<p>這跟「先進 AI 暫停」不是同一件事。草案把「先進 AI」定義成訓練算力達到或超過 10^25 次整數或浮點運算（FLOPs）的系統；新部門上路後，門檻還可依效率每年調整。法案一旦生效，這類系統要先強制暫停：原則上不得再訓練、修改或微調，尚未公開的也不能先部署，直到新監管機關人員到位並完成安全規則。之後還要取得許可（charter），上線前先審查。永久禁的是 ASI；暫停的是過算力門檻的先進 AI，不是所有弱 AI。</p>
<figure class="fig">
<div class="cols c2">
<div class="col"><p class="hd">永久禁 ASI</p><p><b>對象</b>條文定義的 ASI，以及它列出的某些前兆特徵</p><p><b>定義</b>已表現出、或很容易被改成：在多數領域超過人類認知表現；或有足夠能力策劃並執行毀滅、削弱人類，包括推翻或破壞聯邦政府。前兆特徵例如大幅加速 AI 自身研發、未經授權進入系統、關不掉、自行升級，或規避監管</p><p><b>做法</b>禁止研發、部署、取得、持有、資助、進口或移轉</p></div>
<div class="col"><p class="hd">先進 AI 暫停</p><p><b>對象</b>訓練算力達到或超過 10^25 FLOPs 的系統</p><p><b>定義</b>訓練算力達到或超過 10^25 次整數或浮點運算。新部門上路後，門檻還可依效率每年調整</p><p><b>做法</b>生效後先強制暫停：原則上不得再訓練、修改或微調，尚未公開的也不能先部署，直到新監管機關人員到位並完成安全規則。之後還要取得許可，上線前先審查</p></div>
</div>
<figcaption>永久禁的是 ASI。暫停的是過 10^25 FLOPs 門檻的先進 AI，不是所有弱 AI，也不是 AGI 一律暫停。</figcaption>
</figure>
<p>10^25 是 1 後面 25 個 0，指訓練累計用掉的計算量，不是直接替模型打的「聰明分數」。同一個數量級也出現在歐盟《人工智慧法》（Regulation (EU) 2024/1689）第 51 條：通用 AI 模型累計訓練算力若超過 10^25 次浮點運算，會被推定具有高影響力，可能被視為具系統性風險，要承擔額外義務。兩邊數字相近，用途不同：歐盟是加強義務的推定門檻，不是暫停研發，也不是永久禁止超級 AI。</p>
<p>草案還要新設內閣級「人工智能部」，負責執行暫停與禁令。罰則上，魯莽違規的決策者，以及不屬於持許可機構的個人，最高可處 20 年有期徒刑；不是決策職的人員，則可能被禁止在 AI 產業任職 10 年。企業可能被撤銷許可；為安全銷毀相關系統與硬體，智慧財產與資產也可能被沒收。提案人新聞稿把企業這層稱為 corporate death penalty（公司死刑）。這些都要「通過並生效」才可能適用，現在還沒有這些法律效果。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="通過並生效後才適用。決策者最高 20 年有期徒刑。非決策職 10 年不得在 AI 產業任職。企業可能撤銷許可，智慧財產與資產也可能被沒收。">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 11v6M12 8h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">決策者</span><span class="v">最高 20 年</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">非決策職</span><span class="v">10 年不得任職</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 20V8l5-3v15M9 20V5l6 3v12M15 20V9l5 2v9M3 20h18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></span><span class="k">企業</span><span class="v">撤照、沒收資產</span></div>
</div>
<figcaption>通過並生效後才適用。決策者這層是魯莽違規的決策者，以及不屬於持許可機構的個人，最高 20 年有期徒刑。不是決策職的人員，條文寫的是 10 年不得在 AI 產業任職。企業可能被撤銷許可；為安全銷毀相關系統與硬體，智慧財產與資產也可能被沒收。現在還沒有這些法律效果。</figcaption>
</figure>
<p>外交與晶片方面，第 15 條把「在全球防止 ASI 發展」列為政策方向，並寫到新部門應與國務院合作，尋求國際協定與盟友協調；政策工具「可以包括」對 AI 運算基礎設施的出口管制。這是條文裡的政策主張，不是已經上路的新一輪管制。現在不宜寫成「已經開始封殺算力」。</p>
<h2>立法程序走到哪裡</h2>
<p>美國聯邦法律大致要走完這幾關：議員提案，送到委員會審查，再經參眾兩院通過，最後由總統簽署，才會成為法律。這份草案目前卡在委員會，也就是提案之後的第一關，後面都還沒走到。成為法律之前，還需總統簽署。時間表與最後結果，現在都還不明朗。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="立法流程：提案，委員會（目前在這），兩院通過，總統簽署，成為法律。">
<div class="flow-row">
<div class="step"><small>1</small><b>提案</b></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>2・目前在這</small><b>委員會</b></div>
</div>
<div class="flow-row" style="margin-top:8px">
<div class="step"><small>3</small><b>兩院通過</b></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step"><small>4</small><b>總統簽署</b></div>
</div>
<div class="flow-row" style="margin-top:8px;grid-template-columns:minmax(0,1fr)">
<div class="step"><small>5・還沒走到</small><b>成為法律</b></div>
</div>
</div>
<figcaption>目前卡在委員會。後面的兩院通過、總統簽署、成為法律都還沒走到。</figcaption>
</figure>
<h2>常見誤解</h2>
<p>「美國已經禁止 AI 了。」沒有。到 2026 年 11 月 22 日，它仍是草案。</p>
<p>「所有 AI 都要停。」不是。暫停針對達到算力門檻的先進 AI；永久禁止的是條文定義的 ASI 與特定前兆特徵。Siri、推薦演算法這類弱 AI，並不因此被一律叫停。</p>
<p>「這是選後才提出的新法。」不是。兩院版本在 2026 年 9 月 23、24 日就已經提出。選後比較準確的說法是：既有草案又被拿出來討論，不是選後才誕生。</p>
<p>「歐盟都用 10^25，所以美國也會立刻暫停。」兩邊只是用了相近的算力數量級，規則目的不同；也不能用歐盟已生效的義務，推論美國這份草案已經生效。</p>
<h2>如果只是想觀察，可以看這幾件事</h2>
<p>這一段只整理「可以留意什麼」，不是進出場建議，也不預測股價。</p>
<p>第一，看法案有沒有走出委員會、有沒有任何一院表決，比看標題上的「禁止」更關鍵。第二，看「先進 AI」和 ASI 怎麼被定義：算力門檻若調整，影響範圍就會變。第三，算力門檻談的是訓練用掉多少運算，市場因此常會連帶討論晶片與運算基礎設施需求；這是觀察題，不是現在就能下的結論。草案裡的出口管制，目前也只是政策方向。</p>
<p>消息再大聲，也先看它過了沒、定義寫得多寬。</p>
<p>消息和數字為什麼要分開看，可以對照<a href="{R}notes/intel-guidance-earnings/">英特爾財測為何股價反而大跌</a>。市場怎麼為 AI 公司定價，可以看<a href="{R}notes/ant-half-nvidia/">ANT 是不是半個輝達</a>。科技供應鏈的消息為什麼常牽動台股，可以看<a href="{R}notes/tw-stocks-7th-biggest-drop/">台股史上第 7 大跌點</a>。</p>
<h2>常見問題</h2>
<p><strong>Q：美國現在已經立法禁止超級 AI 了嗎？</strong><br>沒有。H.R.10538、S.5493 都還在委員會，尚未成為法律。</p>
<p><strong>Q：如果以後通過，現在用的聊天工具、Siri 會被關掉嗎？</strong><br>就目前條文看，不能把「禁止超級 AI」理解成日常工具全部停用。實際影響要等是否通過、規則怎麼寫才能判斷。</p>
<p><strong>Q：10^25 FLOPs 是不是等於已經是天網？</strong><br>不是。它只是訓練算力的門檻指標。歐盟用相近數字作為系統性風險的推定門檻，那是加強義務，不是這份美國草案裡的暫停或永久禁止。</p>
<p><strong>Q：公司死刑、最高 20 年，現在就會抓人嗎？</strong><br>不會。那是通過並生效後才可能適用。20 年針對魯莽違規的決策者或特定個人；不是決策職的人員，條文寫的是 10 年不得在 AI 產業任職。</p>
<p><strong>Q：這會不會立刻影響晶片出口？</strong><br>草案只是把出口管制列為可能的政策工具，不是已上路的新管制。現在沒有足夠根據去推導某個產業或價格一定會怎樣。</p>
<p>消息再大聲，也先看數字。慢慢變有錢</p>
<p>本文整理公開法案與官方說明，不構成投資、法律或稅務建議。查證截至台北時間 2026/11/22。</p>
<h2>來源</h2>
<ul>
<li>眾院 H.R.10538 法案頁與全文（Congress.gov）：<a href="https://www.congress.gov/bill/119th-congress/house-bill/10538" target="_blank" rel="noopener">法案頁</a>、<a href="https://www.congress.gov/bill/119th-congress/house-bill/10538/text" target="_blank" rel="noopener">全文</a></li>
<li><a href="https://www.govinfo.gov/content/pkg/BILLS-119hr10538ih/html/BILLS-119hr10538ih.htm" target="_blank" rel="noopener">眾院提案全文（GovInfo，Introduced in House 2026/9/24）</a></li>
<li><a href="https://www.congress.gov/bill/119th-congress/senate-bill/5493" target="_blank" rel="noopener">參院 S.5493 法案頁</a></li>
<li><a href="https://www.sanders.senate.gov/press-releases/news-sanders-casar-introduce-legislation-to-ban-artificial-superintelligence-and-temporarily-pause-advanced-ai-development/" target="_blank" rel="noopener">提案人新聞稿（Sanders，2026/9/3，預告即將提出草案，並使用 corporate death penalty 等用語）</a></li>
<li>歐盟《人工智慧法》第 51 條（系統性風險與 10^25 訓練算力推定）：官方文本 Regulation (EU) 2024/1689；<a href="https://artificialintelligenceact.eu/article/51/" target="_blank" rel="noopener">條文整理頁</a></li>
<li><a href="https://digital-strategy.ec.europa.eu/en/faqs/general-purpose-ai-models-ai-act-questions-and-answers" target="_blank" rel="noopener">歐盟執委會 FAQ（通用 AI 與系統性風險、10^25 門檻說明）</a></li>
<li><a href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/when-general-purpose-ai-model-one-systemic-risk" target="_blank" rel="noopener">歐盟 AI Act Service Desk（10^25 為推定、執委會仍可另行指定）</a></li>
</ul>`},
];
