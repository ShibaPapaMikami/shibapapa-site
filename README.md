# SHIBAPAPA

しばぱぱ（Masafumi Mikami）の個人クリエイターポートフォリオサイト。
`shibapapa.com` / GitHub Pages でホスティング。

株式会社Gugenkaの企業サイトではなく、Gugenka Creator Program参加クリエイターの
事例として、作品を実際に体験できる個人サイトとして作っています。

ビルド不要のプレーンな HTML + CSS + 素のJavaScript。フレームワーク・lint設定なし。

## ファイル構成

```
index.html          日本語トップ（/）
work/index.html     作品（/work/）
about/index.html    プロフィール（/about/）
lab/index.html      試作（/lab/）
contact/index.html  お問い合わせ（/contact/）
en/…                上記の英語版（/en/, /en/work/, /en/about/, /en/lab/, /en/contact/）
404.html            存在しないURLに来た時のページ（日英併記）
assets/style.css    見た目。色は先頭のCSS変数で一括変更できる
assets/config.js    ★リンクとLabの内容。編集するのは基本ここだけ
assets/main.js      config.js の内容をページに反映する
assets/favicon.svg  ファビコン
CNAME               独自ドメイン設定（GitHub Pages が読む。消さないこと）
robots.txt / sitemap.xml / .nojekyll
```

**アセットの参照はすべてルート絶対パス（`/assets/...`）** です。`/en/` から
参照しても壊れないようにするためなので、相対パスに戻さないでください。

## ページ構成

メニュー項目ごとに独立したページです（1ページ完結ではありません）。

| ページ | 日本語 | 英語 | 内容 |
|---|---|---|---|
| トップ | `/` | `/en/` | Hero＋作品ティザー＋各ページへの導線 |
| 作品 | `/work/` | `/en/work/` | 金魚水槽MRアートの詳細と利用手順 |
| プロフィール | `/about/` | `/en/about/` | About＋Skills＋Process |
| 試作 | `/lab/` | `/en/lab/` | XR Experiments（config.jsから生成） |
| お問い合わせ | `/contact/` | `/en/contact/` | 個人向け／法人向けの2窓口 |

- 各ページの `<h1>` は1つだけ。現在地のメニューには `aria-current="page"` が付き、
  下線で示されます
- ヘッダー・フッターは**各HTMLに直接書いてあります**（ビルド不要の構成のため）。
  ナビゲーションやフッターを変えるときは**10ファイルすべて**を更新してください
- 言語切替は**同じページの相手言語**に飛びます（`/work/` ↔ `/en/work/`）

## 多言語対応

| 言語 | URL | ファイル |
|---|---|---|
| 日本語 | `/` ほか | `index.html` / `work/` / `about/` / `lab/` / `contact/` |
| 英語 | `/en/` ほか | `en/` 以下に同じ構成 |

- **本文は各HTMLに直接書いてあります。** 片方だけ直すと内容がずれるので、
  文言を変えるときは両方を更新してください
- **ナビゲーションはそれぞれの言語**です（日本語ページは「作品／プロフィール／
  試作／お問い合わせ」、英語ページは「Work / About / Lab / Contact」）
- ヘッダー右の言語切替は「切り替え先」を表示します
  （日本語ページには `EN`、英語ページには `日本語`）
- `hreflang` と `canonical` は両ページに設定済み。sitemap.xml にも両方を登録

### 言語を追加する場合

1. `en/` をコピーして `fr/` などを作り、`<html lang="fr">` と本文を差し替える
2. 両ページの `<link rel="alternate" hreflang="...">` に新しい言語を追加
3. `sitemap.xml` に URL を追加
4. `assets/config.js` の `LAB_ITEMS` と `UI_TEXT` に `fr:` のキーを足す

`assets/config.js` の文字列は `{ ja: '…', en: '…' }` の形で書くと、ページの
`<html lang>` に応じて自動で切り替わります。素の文字列にすると全言語共通です。

## ローカルで確認する

```bash
node .claude/dev-server.js
```

→ ブラウザで http://localhost:8010 を開く（`/en/` で英語ページ）。

ポートを変えたいときは `PORT=8020 node .claude/dev-server.js`。

## 公開

`main` ブランチに push すると GitHub Pages が自動で反映します（1〜2分）。

```bash
git add -A && git commit -m "サイトを更新" && git push
```

---

## 法人問い合わせ先URLを設定する場所

**[assets/config.js](assets/config.js) の `GUGENKA_CONTACT_URL`（1箇所のみ）**

```js
const GUGENKA_CONTACT_URL = '#corporate-contact';
```

URLが確定したらここを書き換えるだけです。Contactセクションのボタンとフッターの
Gugenkaリンクの両方に反映されます。HTMLを触る必要はありません。

- 未確定の間は `'#corporate-contact'` のままにしておくと、ページ内の法人向け
  セクションへスクロールする仮リンクとして動作します（ボタンは非表示にしません）
- `https://` で始まるURLを入れると、自動的に別タブで開き
  `rel="noopener noreferrer"` と外部リンクマークが付きます

## 画像・動画を差し替える場所

### 1. 金魚水槽MRアートのメインビジュアル

**[index.html](index.html) の `<div class="work-visual">` の中身**

現状はCSSのみの抽象的な水面表現（画像ファイル不要）です。実際の画像や動画が
用意できたら、中の `<div class="tank">…</div>` をまるごと差し替えてください。

```html
<div class="work-visual">
  <img src="assets/works/kingyo.jpg" alt="水槽から金魚が飛び出しMR空間を泳ぐ様子">
</div>
```

`aspect-ratio: 4 / 3` と角丸・枠線は `.work-visual` 側で効くので、そのまま収まります。
`role="img"` と `aria-label` は画像に置き換えたら不要なので削除してください。

### 2. Lab（XR Experiments）のカード

**[assets/config.js](assets/config.js) の `LAB_ITEMS` 配列**

HTMLを触らずに追加・変更できます。指定できるキーは以下。

```js
{
  title:  'カード見出し',          // 必須
  status: 'preparing',            // 'preparing' で Preparing バッジを表示
  text:   '説明文',                // 任意
  url:    'https://...',          // 任意。指定するとカード全体がリンクになる
  image:  'assets/works/xxx.jpg', // 任意
  alt:    '画像の説明',            // image を指定したら必ず書く
  video:  'assets/works/xxx.mp4', // 任意。自動再生はしない
  poster: 'assets/works/xxx.jpg', // 任意（video のサムネイル）
  tags:   ['WebXR', 'AR'],        // 任意
}
```

画像も動画も未指定の場合は、抽象的な水面のプレースホルダが表示されます。

画像ファイルは `assets/works/` に置くことを想定しています（ディレクトリは
実際に画像を追加するときに作成してください）。

### 3. OGP画像

**[index.html](index.html) の `og:image`**

現在はコメントアウトされていません（`assets/ogp.png` を参照する記述はまだ
入れていません）。SNSシェア用の画像を用意したら、`<head>` に追加してください。

```html
<meta property="og:image" content="https://shibapapa.com/assets/ogp.png">
```

---

## 実装上の制約（変更時に守ること）

- **実在しない受賞歴・導入実績・作品名を書かない**
- 会社の実績紹介や財務情報、CEOとしての説明を主役にしない
- 外部リンクは `target="_blank"` と `rel="noopener noreferrer"` を必ず付ける
- 重い3Dや動画の自動再生は使わない（PC・スマホ・Meta Quest Browserで軽く動くこと）
- 画像には必ず `alt` を付ける
- 文字色のコントラストは 4.5:1 以上を保つ
  （小さい文字にシアンやオレンジを使う場合は `--cyan-text` / `--fish-text` を使う。
   `--cyan` / `--fish` は図形専用で、文字に使うと基準を満たさない）
- アニメーションは `transform` / `opacity` のみ。`prefers-reduced-motion` で停止する

## 費用

ドメイン更新料以外はかかりません。GitHub Pages は公開リポジトリなら無料、
HTTPS も無料です。
