# 慢慢變有錢 品牌網站（靜態）

- 產生頁面：`node build/build.js`（資料：`build/glossary-data.js` 名詞、`build/articles.js` 新手入門、`build/notes.js` 筆記）
- `/notes/<slug>/` 是 IG 短文。slug 用 ASCII kebab-case 主題 id（例如 `salary-split`），發布後不改；一篇一個資料夾，封面為該資料夾的 `cover.png`。`/learn/` 仍是入門課程，兩者分開。
- 所有頁面用相對路徑，GitHub Pages 專案路徑與自訂網域都能用。
- 正式網址設定在 `build/build.js` 的 `SITE_URL`（canonical、OG、sitemap、404 用）。可用 `SITE_URL=https://example.com node build/build.js`。
- `/lead/` 與 `/lead/oneperson/` 為手動維護（非產生），其 canonical/OG 網址需手動更新。表單以 `data-magnet` 區分（`invest`、`oneperson`），共用 `lead/lead.js`。
- 新增一篇 IG 筆記用 `node build/add-note.js`，見下方「IG → /notes/」。

## IG → /notes/

IG 貼文核准要發布之後，把 slug、分類、標題、描述、封面 alt、封面圖路徑、以及已經寫好的 HTML 交給 `node build/add-note.js`。它會新增筆記、複製封面、從儲存庫根目錄跑 `node build/build.js`，並印出開預覽 PR 的下一步。不接 IG API，也不會合併。它只在 `build/notes.js` 陣列最前面插入新物件，不改既有筆記的標題、內文或封面。

在儲存庫根目錄執行。

### 欄位

- `slug`：ASCII kebab-case 主題 id，須符合 `^[a-z0-9]+(?:-[a-z0-9]+)*$`（例如 `salary-split`）。發布後不改。一篇一個資料夾 `/notes/<slug>/`。
- `cat`：列表上的分類短標（例如 `現金流`）。
- `title`：筆記標題。
- `desc`：列表與 meta 描述。
- `coverAlt`：封面圖的 alt 文字。
- `cover`：封面圖檔路徑（png 或 jpeg）。指令把檔案複製成 `notes/<slug>/cover.png`（不重新編碼）。請用 PNG；若傳 jpeg，位元組仍會用 `.png` 這個路徑，瀏覽器可能顯示不出來。
- `w`、`h`：選填，封面寬高（正整數）。省略時從 png/jpeg 讀取。
- `body`：已經寫好的 HTML（約 400–800 字）。CTA 連結放在 body 裡。

### 內文裡什麼該寫、什麼別寫

- 相對連結保留 `{R}`，例如 `<a href="{R}lead/">《投資新手入門清單》</a>`。`build/build.js` 會依頁面深度把 `{R}` 改寫成 `../` 這類相對路徑。不要在 body 裡自己展開。
- 免責聲明由 build 注入在內文後面（「僅供教育參考，非投資建議……」）。不要寫進 body。
- 免費清單、一人公司清單這類 CTA 連結屬於 body，用 `{R}lead/`、`{R}lead/oneperson/` 這類寫法。

### 怎麼呼叫

旗標與 stdin JSON 可以分開用，也可以一起用。有給的旗標會蓋過 JSON 同名欄位。JSON 欄位名是 `coverAlt`（不是 `cover-alt`）。

```bash
node build/add-note.js --help

node build/add-note.js --dry-run < build/examples/add-note.example.json

node build/add-note.js \
  --slug example-note-do-not-publish \
  --cat 範例 \
  --title '這是乾跑範例，不要發布' \
  --desc '只做驗證，不會進 build/notes.js' \
  --cover-alt '封面：乾跑範例' \
  --cover build/examples/example-cover.png \
  --body '<p>範例。<a href="{R}lead/">《投資新手入門清單》</a></p>' \
  --dry-run
```

`build/examples/add-note.example.json` 的 slug 是 `example-note-do-not-publish`，封面是 1×1 的佔位 PNG。它只給 dry-run 示範，不要把它加進 `build/notes.js`，也不要發布。

`--dry-run` 只做驗證並列印將寫入的物件（含複製後的封面路徑與寬高），不改檔、不跑 build。

拿掉 `--dry-run` 才會：

1. 建立 `notes/<slug>/`，把封面複製成 `cover.png`
2. 在 `build/notes.js` 的 `module.exports = [ ... ]` 最前面插入一筆（最新在前）。形狀與現有筆記相同：`slug`、`cat`、`title`、`desc`、`coverAlt`、`w`、`h`，`body` 為 template string
3. 執行 `node build/build.js`

### 合併閘門

先開預覽 PR，讓 Mike 看預覽。只有 Mike 說「可以合併上線」之後才合併。在那之前不要合併、不要自動合併。

## 文章圖表元件

正文裡的圖表寫在 `build/articles.js`（或筆記 body）的 HTML，樣式在 `assets/site.css`。只用站上的深藍 `--b` 和金色 `--g`，不要用紅或綠，也不要接外部圖庫或 JavaScript 圖表套件。圖示用 inline SVG 或 emoji。每個圖包在 `<figure class="fig">`，並寫 `figcaption`（含資料日與來源簡寫）。圖本身加 `role="img"` 和 `aria-label`；表格用可讀的 `table.t` 即可。長條寬度用百分比。`.facts` 手機 2 欄、桌面約 4 到 5 欄；`.timeline` 手機直式。

```html
<figure class="fig">
  <div class="facts" role="img" aria-label="成分 50 檔，規模約 2.56 兆元">
    <div class="fact"><span class="k">成分</span><span class="v">50 檔</span></div>
    <div class="fact"><span class="k">規模約</span><span class="v">2.56 兆元</span></div>
  </div>
  <figcaption>資料日 2026/11/13，元大投信。</figcaption>
</figure>

<figure class="fig">
  <div class="bars" role="img" aria-label="台積電 58.46%，平均分每家 2%">
    <div class="row"><span class="name">台積電</span><span class="track"><span class="fill" style="width:58.46%"></span></span><span class="num">58.46%</span></div>
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

<figure class="fig">
  <ol class="timeline" role="img" aria-label="2003/6/30 上市">
    <li><b>2003/6/30</b><span>上市，台灣第一檔上市 ETF</span></li>
  </ol>
  <figcaption>資料日見各節點。來源：元大投信、證交所 ETF e添富。</figcaption>
</figure>

<figure class="fig">
  <div class="flow" role="img" aria-label="分割前 1 單位乘 188.65 元，分割後 4 單位乘 47.16 元，總價值不變">
    <div class="flow-row">
      <div class="step"><small>分割前</small><b>1 單位</b><span>× 188.65 元</span></div>
      <div class="arrow" aria-hidden="true">→</div>
      <div class="step after"><small>分割後</small><b>4 單位</b><span>× 47.16 元</span></div>
    </div>
    <p class="same">總價值不變（188.65÷4＝47.16）</p>
  </div>
  <figcaption>2025/6/18 恢復交易。來源：元大 0050 分割公告（證交所 e添富轉載）。</figcaption>
</figure>

<figure class="fig">
  <table class="t">
    <thead><tr><th>費用</th><th>級距</th><th>費率</th></tr></thead>
    <tbody><tr><td>經理費</td><td>1,000 億元以內</td><td>0.15%</td></tr></tbody>
  </table>
  <figcaption>依規模分段加總；以公開說明書為準。</figcaption>
</figure>
```

## 自訂網域（之後）
網域確定後：1) 新增 `CNAME` 檔，內容只放網域（例如 `slowrichnotes.com`）；2) 以新網域重跑 build；3) 更新 lead/index.html 的 canonical/OG；4) DNS 設定依 GitHub Pages 文件。**目前刻意不放 CNAME 檔。**
