# ShibaPapa Studio

`shibapapa.com` の公式サイト（静的サイト / GitHub Pages でホスティング）。

ビルド不要のプレーンな HTML + CSS です。ファイルを編集して push するだけで公開されます。

## ファイル構成

```
index.html          トップページ（本文はここを編集）
404.html            存在しないURLに来た時のページ
assets/style.css    見た目。色は先頭の CSS 変数で一括変更できる
assets/favicon.svg  ファビコン
CNAME               独自ドメイン設定（GitHub Pages が読む。消さないこと）
robots.txt          クローラ向け
sitemap.xml         サイトマップ
.nojekyll           GitHub Pages の Jekyll 処理を無効化
```

## ローカルで確認する

```bash
python3 -m http.server 8000
```

→ ブラウザで http://localhost:8000 を開く。

## 公開の流れ

`main` ブランチに push すると GitHub Pages が自動で反映します（1〜2分）。

```bash
git add -A && git commit -m "サイトを更新" && git push
```

## 独自ドメインの DNS 設定（お名前.com 側）

お名前.com Navi → 「ネームサーバー/DNS」→ DNSレコード設定 で以下を登録します。
**ネームサーバーの変更は不要**です（お名前.comのままでOK）。

| ホスト名 | TYPE  | VALUE |
|---------|-------|-------|
| （空欄） | A     | `185.199.108.153` |
| （空欄） | A     | `185.199.109.153` |
| （空欄） | A     | `185.199.110.153` |
| （空欄） | A     | `185.199.111.153` |
| `www`   | CNAME | `<GitHubユーザー名>.github.io.` |

反映後、GitHubリポジトリの Settings → Pages で
「Enforce HTTPS」にチェックを入れると無料のSSL証明書が付きます
（証明書の発行に最大24時間かかることがあります）。

## 費用

ドメイン更新料以外はかかりません。GitHub Pages は公開リポジトリなら無料、
HTTPS も無料です。
