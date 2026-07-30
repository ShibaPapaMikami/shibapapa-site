# SHIBAPAPA

しばぱぱ（Masafumi Mikami）の個人クリエイターポートフォリオサイト。
`shibapapa.com` / GitHub Pages でホスティング。

株式会社Gugenkaの企業サイトではなく、Gugenka Creator Program参加クリエイターの
事例として、作品を実際に体験できる個人サイトとして作っています。

ビルド不要のプレーンな HTML + CSS + 素のJavaScript。フレームワーク・lint設定なし。

## ファイル構成

```
index.html          全セクション。本文はここを編集
404.html            存在しないURLに来た時のページ
assets/style.css    見た目。色は先頭のCSS変数で一括変更できる
assets/config.js    ★リンクとLabの内容。編集するのは基本ここだけ
assets/main.js      config.js の内容をページに反映する
assets/favicon.svg  ファビコン
CNAME               独自ドメイン設定（GitHub Pages が読む。消さないこと）
robots.txt / sitemap.xml / .nojekyll
```

## ローカルで確認する

```bash
node .claude/dev-server.js
```

→ ブラウザで http://localhost:8000 を開く。

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
