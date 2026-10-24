# 慢慢變有錢 品牌網站（靜態）

- 產生頁面：`node build/build.js`（資料：`build/glossary-data.js` 名詞、`build/articles.js` 文章）
- 所有頁面用相對路徑，GitHub Pages 專案路徑與自訂網域都能用。
- 正式網址設定在 `build/build.js` 的 `SITE_URL`（canonical、OG、sitemap、404 用）。可用 `SITE_URL=https://example.com node build/build.js`。
- `/lead/` 與 `/lead/oneperson/` 為手動維護（非產生），其 canonical/OG 網址需手動更新。表單以 `data-magnet` 區分（`invest`、`oneperson`），共用 `lead/lead.js`。

## 自訂網域（之後）
網域確定後：1) 新增 `CNAME` 檔，內容只放網域（例如 `slowrichnotes.com`）；2) 以新網域重跑 build；3) 更新 lead/index.html 的 canonical/OG；4) DNS 設定依 GitHub Pages 文件。**目前刻意不放 CNAME 檔。**
