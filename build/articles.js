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
{slug:'foreign-selling-1128',igUrl:'',n:15,cat:'新聞',title:'外資連賣的時候，先搞懂這三件事再緊張',desc:'11 月外資賣超約 1.12 兆，是證交所統計至 11/27 的單月金額新高。白話看三件事：占市值比例是估算、賣超的可能原因，以及買賣超是結果不是預言。',coverAlt:'封面主標「外資連賣的時候，先搞懂這三件事再緊張」，副標「11月外資賣超破兆」。三件事：看比例，不只看金額；看外資為什麼賣；買賣超是結果，不是預言。右下是托腮想事情的插畫。底部「僅供教育參考，非投資建議」。',terms:[],body:`
<figure class="coverfig"><img src="{R}notes/foreign-selling-1128/cover.png" alt="封面主標「外資連賣的時候，先搞懂這三件事再緊張」，副標「11月外資賣超破兆」。三件事：看比例，不只看金額；看外資為什麼賣；買賣超是結果，不是預言。右下是托腮想事情的插畫。底部「僅供教育參考，非投資建議」。" width="1080" height="1350"></figure>
<p>看到「外資連賣」「單月賣超破兆」，心裡緊一下，很正常。帳戶在縮、標題又很大，會想立刻做點什麼。先停一下。這篇不猜明天漲跌，也不叫你買或賣。只把 11 月這波拆開，先搞懂三件事，再決定要不要緊張。</p>
<p>11 月外資賣超台股約 1.12 兆，金額是史上單月最高。這 1.12 兆是證交所統計至 11/27，月底還沒完全算進來。加權指數從 10/6 收盤高點 49,823，跌到 11/20 收盤 36,033，跌了 27.7%。11/27 收在 39,308。跌很多，所以會慌；金額破紀錄，還不等於已經看懂。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="加權指數 10/6 收盤 49,823，11/20 收盤 36,033、跌 27.7%，11/27 收盤 39,308。11 月外資賣超約 1.12 兆，證交所統計至 11/27。">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 16l4-5 3 3 8-9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="k">10/6 收盤</span><span class="v">49,823</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 8l4 5 3-3 8 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="k">11/20 收盤</span><span class="v"><span class="fv-down">36,033</span></span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5v10M8 11l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="k">高點到 11/20</span><span class="v"><span class="fv-down">跌 27.7%</span></span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">11/27 收盤</span><span class="v">39,308</span></div>
</div>
<figcaption>加權指數收盤。紅字是上漲，綠字是下跌。11 月賣超約 1.12 兆，這 1.12 兆是證交所統計至 11/27。</figcaption>
</figure>
<figure class="fig">
<div class="flow" role="img" aria-label="先看三件事：看比例，看可能原因，買賣超是結果不是預言。">
<div class="flow-row">
<div class="step"><small>①</small><b>看比例</b><span>不只看金額</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step"><small>②</small><b>看為什麼賣</b><span>可能原因</span></div>
</div>
<div class="flow-row" style="margin-top:8px;grid-template-columns:minmax(0,1fr)">
<div class="step after"><small>③</small><b>買賣超是結果</b><span>不是預言</span></div>
</div>
</div>
<figcaption>三件事的順序。先把數字看懂，再決定緊不緊張。</figcaption>
</figure>
<h2>第一件：看比例，不只看金額</h2>
<p>1.12 兆聽起來像把市場搬走。先看台股自己變多大：上市市值從 2008 年底的 11.7 兆，長到約 118 兆。池子變大以後，同一句「賣超破兆」，占池子的比例不一定比以前更重。</p>
<figure class="fig">
<div class="flow" role="img" aria-label="上市市值從 2008 年底 11.7 兆，到 2026 年 11 月約 118 兆。">
<div class="flow-row">
<div class="step"><small>2008 年底</small><b>11.7 兆</b><span>上市市值</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>2026/11</small><b>約 118 兆</b><span>上市市值</span></div>
</div>
<p class="same">池子變大，同樣金額占得比較少</p>
</div>
<figcaption>2008 年底 11.7 兆，對到 2026 年 11 月約 118 兆。後面的市值含估算。</figcaption>
</figure>
<p>11 月這筆賣超，占市值大約 0.76%。占市值比例是估算，不是證交所直接公布的百分比。用同一套估算去比，它低於 2020 年 3 月的約 1.05%，也低於 2026 年 3 月的約 0.84%、2011 年 8 月的約 0.83%、2008 年 10 月的約 0.79%。金額最高，比例大約排第 5。市值有一部分是估的，這個名次只適合看個大概。只看「破兆」，很容易把現在想得比 2020 年 3 月更嚴重；換成占比，這次還比較小。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="賣超占市值比例（估算）：2020/3 約 1.05%，2026/3 約 0.84%，2011/8 約 0.83%，2008/10 約 0.79%，2026/11 約 0.76%。">
<div class="row"><span class="name">2020/3</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num"><span class="fv-down">約 1.05%</span></span></div>
<div class="row"><span class="name">2026/3</span><span class="track"><span class="fill" style="width:80%"></span></span><span class="num"><span class="fv-down">約 0.84%</span></span></div>
<div class="row"><span class="name">2011/8</span><span class="track"><span class="fill" style="width:79.05%"></span></span><span class="num"><span class="fv-down">約 0.83%</span></span></div>
<div class="row"><span class="name">2008/10</span><span class="track"><span class="fill" style="width:75.24%"></span></span><span class="num"><span class="fv-down">約 0.79%</span></span></div>
<div class="row is-ref"><span class="name">2026/11</span><span class="track"><span class="fill" style="width:72.38%"></span></span><span class="num"><span class="fv-down">約 0.76%</span></span></div>
</div>
<figcaption>賣超占上月底上市市值的比例，是估算。長條依 1.05% 為滿格。金色是這次 11 月。綠字是賣超占比，不是股價跌幅。</figcaption>
</figure>
<h2>第二件：看外資為什麼賣</h2>
<p>外資不是一個人，是很多家機構加總後的淨賣超。有人賣、也有人買，新聞上的數字是相減的結果。賣的理由可能是權重調整、匯率、避險，或漲多之後把部位調回來。這些是可能原因，來自券商或媒體的分析，不是賣超數字本身能證明的事實。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="可能原因：再平衡、指數權重調整、匯率、期貨避險、全球科技股降低風險。這些是券商或媒體的分析，不是確定事實。">
<div class="fact"><span class="k">可能原因</span><span class="v">比重超標，再平衡</span></div>
<div class="fact"><span class="k">可能原因</span><span class="v">指數調整權重</span></div>
<div class="fact"><span class="k">可能原因</span><span class="v">新台幣一度貶破 33</span></div>
<div class="fact"><span class="k">可能原因</span><span class="v">期貨避險</span></div>
<div class="fact"><span class="k">可能原因</span><span class="v">科技股降低風險</span></div>
</div>
<figcaption>可能原因，來自券商或媒體分析。例如有分析提到 MSCI 調權重。不是賣超數字能證明的事實。</figcaption>
</figure>
<p>2020、2021、2024、2025 這四年，外資全年都淨賣超，大盤當年卻都上漲。今年到 11/27，外資累計賣超 3 兆 4,909 億，大盤仍上漲 35.7%。這還不是完整的一年，不能拿來和那四個全年直接比誰賣比較多，只說明賣超和「看空台灣」不是同一句話。11/20 外資仍持有上市股票市值 55.6 兆，約占 47.1%。賣了很多，不代表人已經走光。</p>
<figure class="fig">
<div class="bars" role="img" aria-label="外資全年賣超：2020 年 5,395 億，2021 年 4,540 億，2024 年 6,952 億，2025 年 5,995 億。">
<div class="row"><span class="name">2020</span><span class="track"><span class="fill" style="width:77.6%"></span></span><span class="num"><span class="fv-down">5,395 億</span></span></div>
<div class="row"><span class="name">2021</span><span class="track"><span class="fill" style="width:65.3%"></span></span><span class="num"><span class="fv-down">4,540 億</span></span></div>
<div class="row"><span class="name">2024</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num"><span class="fv-down">6,952 億</span></span></div>
<div class="row"><span class="name">2025</span><span class="track"><span class="fill" style="width:86.23%"></span></span><span class="num"><span class="fv-down">5,995 億</span></span></div>
</div>
<figcaption>全年外資淨賣超，證交所月資料加總。綠字是賣超。長條依 6,952 億為滿格。</figcaption>
</figure>
<figure class="fig">
<div class="bars" role="img" aria-label="同年大盤上漲：2020 年 22.8%，2021 年 23.7%，2024 年 28.5%，2025 年 25.7%。">
<div class="row"><span class="name">2020</span><span class="track"><span class="fill" style="width:80%"></span></span><span class="num"><span class="fv-up">+22.8%</span></span></div>
<div class="row"><span class="name">2021</span><span class="track"><span class="fill" style="width:83.16%"></span></span><span class="num"><span class="fv-up">+23.7%</span></span></div>
<div class="row"><span class="name">2024</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="num"><span class="fv-up">+28.5%</span></span></div>
<div class="row"><span class="name">2025</span><span class="track"><span class="fill" style="width:90.18%"></span></span><span class="num"><span class="fv-up">+25.7%</span></span></div>
</div>
<figcaption>同一年的大盤漲跌。紅字是上漲。長條依 28.5% 為滿格。外資在賣，指數仍可以漲。</figcaption>
</figure>
<p>這波指數怎麼跌下來，可以看<a href="{R}notes/tw-drop-1120/">11/20 那一周的大跌</a>。大跌之後，<a href="{R}notes/bottom-signals-1123/">止跌訊號可以看哪些</a>，是觀察清單，不是買進訊號。<a href="{R}learn/national-security-fund-what/">國安基金</a>進場，也不等於底部到了。</p>
<h2>第三件：買賣超是結果，不是預言</h2>
<p>買賣超記的是已經成交的事。它只告訴你過去這段時間外資淨賣了多少，沒有附帶接下來一定會怎樣。</p>
<p>賣超占市值 0.4% 以上、而且 12 個月後有資料的月份，有 26 個。這 26 個月裡，12 個月後 19 次上漲、7 次下跌。漲的比較多，但後來的漲跌很散，從 −48% 到 +80% 都有，跟一般月份差不多，沒有固定劇本。過去不代表未來。</p>
<figure class="fig">
<div class="stack" role="img" aria-label="賣超占市值 0.4% 以上、有 12 個月後資料的 26 個月：19 次上漲，7 次下跌。">
<div class="stack-bar"><i class="a" style="width:73.08%"></i><i class="b" style="width:26.92%"></i></div>
<ul class="stack-key"><li><span class="fv-up">12 個月後上漲 19 次</span></li><li class="b"><span class="fv-down">下跌 7 次</span></li></ul>
</div>
<figcaption>26 個月有後續資料。紅字是上漲，綠字是下跌。長條只表示 19 和 7 的多寡。過去不代表未來。</figcaption>
</figure>
<figure class="fig">
<div class="flow" role="img" aria-label="買賣超是已經成交的結果，之後沒有固定劇本，過去不代表未來。">
<div class="flow-row">
<div class="step"><small>已經發生</small><b>買賣超</b><span>是結果</span></div>
<div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="step after"><small>不能當成</small><b>預言</b><span>沒有固定劇本</span></div>
</div>
<p class="same">過去不代表未來</p>
</div>
<figcaption>歷史上大賣超之後，有續跌，也有急殺後回升。那是事後觀察，不是預測規則。</figcaption>
</figure>
<p>之後還在跌的例子有，急殺後又回升的例子也有。那是事後才看得到的背景，不是現在可以拿來預測的規則。跌了多少才叫<a href="{R}notes/pullback-correction-bear/">回檔、修正或熊市</a>，可以另外看那一篇的分法。分法是用來認識波動，不是用來決定今天進出。</p>
<h2>先搞懂，再決定緊不緊張</h2>
<p>三件事放在一起：金額要換成占市值的比例，而且占市值比例是估算；賣超要問可能原因，不要直接當成看空；買賣超是結果，不是預言。1.12 兆是證交所統計至 11/27。看到連賣，先把這三層對一下，再看自己的預備金，和這筆錢什麼時候要用。</p>
<figure class="fig">
<div class="facts" role="img" aria-label="收尾三件事：看比例且占比是估算，賣超只是可能原因，買賣超是結果不是預言。">
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v4l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">①</span><span class="v">看比例，占比是估算</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 12h6M12 9v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">②</span><span class="v">先問可能原因</span></div>
<div class="fact"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 7h14M5 12h10M5 17h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><span class="k">③</span><span class="v">結果，不是預言</span></div>
</div>
<figcaption>三件事。不猜下一根，也不給買賣建議。</figcaption>
</figure>
<p>還沒開始投資的話，可以先<a href="{R}lead/">免費領取《投資新手入門清單》</a>，對著清單檢查，而不是跟著標題動作。</p>
<p>僅供教育參考，非投資建議。</p>
<h2>來源</h2>
<ul>
<li>證交所三大法人買賣金額統計（月，BFI82U；11 月為至 11/27）：<a href="https://www.twse.com.tw/fund/BFI82U?response=json&amp;type=month&amp;monthDate=20261101" target="_blank" rel="noopener">BFI82U</a></li>
<li>證交所市場成交資訊（核對指數）：<a href="https://www.twse.com.tw/exchangeReport/FMTQIK?response=json&amp;date=20261101" target="_blank" rel="noopener">FMTQIK</a></li>
<li><a href="https://wwwc.twse.com.tw/downloads/zh/about/company/factbook/2008/1.01.htm" target="_blank" rel="noopener">證交所 Fact Book 2008</a>（早期市值）</li>
<li><a href="https://www.twse.com.tw/downloads/zh/about/company/annual_97.pdf" target="_blank" rel="noopener">證交所 2008 年報</a>（2008 年市值）</li>
<li><a href="https://www.sfb.gov.tw/ch/home.jsp?id=1011&amp;parentpath=0%2C4%2C109" target="_blank" rel="noopener">金管會證期局：上市、櫃各年度市值</a></li>
<li><a href="https://stat.fsc.gov.tw/competitiveness" target="_blank" rel="noopener">金管會金融市場統計</a></li>
<li>加權指數月底收盤（與證交所核對）：<a href="https://query1.finance.yahoo.com/v8/finance/chart/%5ETWII" target="_blank" rel="noopener">Yahoo Finance ^TWII</a></li>
<li>賣超原因為券商或媒體分析，不是確定事實：<a href="https://www.skis.com.tw/Report/education/20261127-5.html" target="_blank" rel="noopener">新光證券</a>、<a href="https://www.moneyweekly.com.tw/ArticleData/Info/Article/263681" target="_blank" rel="noopener">理財周刊</a>、<a href="https://www.chinatimes.com/newspapers/20261128000411-260110" target="_blank" rel="noopener">中時</a></li>
<li>外資持股市值：<a href="https://www.ctee.com.tw/news/20261123701163-430201" target="_blank" rel="noopener">工商時報</a></li>
</ul>`},
];
