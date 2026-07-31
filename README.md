# SHIBAPAPA

しばぱぱ（Masafumi Mikami）の個人クリエイターポートフォリオサイト。
`shibapapa.com` / **Astro** で構築し、GitHub Actions で GitHub Pages へデプロイ。

株式会社Gugenkaの企業サイトではなく、Gugenka Creator Program参加クリエイターの
事例として、作品を実際に体験できる個人サイトとして作っています。

## セットアップ

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run preview  # ビルド結果を確認
```

## ファイル構成

```
src/
  data/
    site.js        ★リンクとLabの内容（GUGENKA_CONTACT_URL など）
    content.js     ★ページ本文。日本語と英語を対で管理
    nav.js         ★メニュー項目とUIラベル
  layouts/Base.astro       <head>・ヘッダー・フッターの共通枠
  components/
    Header.astro   ナビと言語切替（★ここ1箇所で全ページに反映）
    Footer.astro
    LabCards.astro Labカード（ビルド時生成・クライアントJS不要）
    TankVisual.astro  金魚水槽のビジュアル
    pages/         各ページの中身（日英で共有し lang を受け取る）
  pages/           ルーティングのみ。中身は components/pages/ にある
    index.astro, work.astro, about.astro, lab.astro, contact.astro, 404.astro
    en/…           同じ構成の英語版
  styles/global.css  見た目。色は先頭のCSS変数で一括変更できる
public/
  CNAME          独自ドメイン設定（消さないこと）
  .nojekyll / robots.txt / sitemap.xml / assets/favicon.svg
.github/workflows/deploy.yml   push すると自動でビルド＆デプロイ
```

**ヘッダーやフッターの変更は `src/components/` の1ファイルで済みます。**
（静的HTML時代は10ファイルの更新が必要でした）

## ページ構成

| ページ | 日本語 | 英語 |
|---|---|---|
| トップ | `/` | `/en/` |
| 作品 | `/work/` | `/en/work/` |
| プロフィール | `/about/` | `/en/about/` |
| 試作 | `/lab/` | `/en/lab/` |
| お問い合わせ | `/contact/` | `/en/contact/` |

- `canonical` / `hreflang` / `og` は `Base.astro` が `path` と `lang` から自動生成
- 言語切替は**同じページの相手言語**へ飛びます（`/work/` ↔ `/en/work/`）
- 現在地のメニューには `aria-current="page"` が付き、下線で示されます

## 公開

`main` にはソースだけを置き、**ビルド結果は `gh-pages` ブランチ**に公開します。
GitHub Pages は `gh-pages` を配信しています。

```bash
git add -A && git commit -m "サイトを更新" && git push   # ソースを保存
npm run publish                                          # ビルドして公開
```

`npm run publish` がやること: `npm run build` → `dist/` を `gh-pages` へ force push
→ Pages のビルドを起動。反映まで1〜2分です。

> **push しただけでは公開されません。** 必ず `npm run publish` を実行してください。

### CI（GitHub Actions）に切り替える場合

`.github/workflows/deploy.yml` は用意済みですが、**リポジトリに入っていません**。
GitHub CLI のトークンに `workflow` スコープが無く、push が拒否されるためです。

自動デプロイに切り替えたい場合は、ターミナルで一度だけ以下を実行してください。

```bash
gh auth refresh -s workflow
```

ブラウザでの承認後、ワークフローを push し、Settings → Pages の Source を
**GitHub Actions** に変更すれば、`git push` だけで公開されるようになります。
その後は `npm run publish` は不要です。

---

## 法人問い合わせ先URLを設定する場所

**[src/data/site.js](src/data/site.js) の `GUGENKA_CONTACT_URL`（1箇所のみ）**

日英の全ページ（Contactのボタンとフッター）に反映されます。

## 画像・動画を差し替える場所

### 1. 金魚水槽のメインビジュアル

**[src/components/TankVisual.astro](src/components/TankVisual.astro)**

現状はCSSのみの抽象表現です。中身を `<img src="/assets/works/kingyo.jpg" alt="...">`
に置き換えれば、トップと作品ページの両方が同時に変わります。

### 2. Lab のカード

**[src/data/site.js](src/data/site.js) の `LAB_ITEMS`**

`image` / `video` / `url` / `tags` / `alt` を後から足せます。文字列は
`{ ja: '…', en: '…' }` の形で書くと言語に応じて切り替わります。
画像は `public/assets/works/` に置いてください。

### 3. OGP画像

`Base.astro` の `<head>` に `og:image` を追加してください。

---

## 実装上の制約（変更時に守ること）

- **実在しない受賞歴・導入実績・作品名を書かない**
- 会社の実績紹介や財務情報、CEOとしての説明を主役にしない
- 外部リンクは `target="_blank"` と `rel="noopener noreferrer"` を必ず付ける
- 重い3Dや動画の自動再生は使わない（PC・スマホ・Meta Quest Browserで軽く動くこと）
- 画像には必ず `alt` を付ける
- 文字色のコントラストは 4.5:1 以上を保つ
  （小さい文字には `--cyan-text` / `--fish-text` を使う。
   `--cyan` / `--fish` は図形専用で、文字に使うと基準を満たさない）
- アニメーションは `transform` / `opacity` のみ。`prefers-reduced-motion` で停止する

## 費用

ドメイン更新料以外はかかりません。GitHub Pages は公開リポジトリなら無料、
HTTPS も無料です。
