#!/usr/bin/env bash
# ビルドして gh-pages ブランチへ公開する
#
#   npm run publish
#
# GitHub Pages は gh-pages ブランチを配信しています。
# main には Astro のソースだけが入り、ビルド結果は gh-pages に入ります。
#
# ※ 将来 GitHub Actions での自動デプロイに切り替えたら、このスクリプトは不要になります
#    （README の「CIに切り替える」を参照）

set -euo pipefail

REPO_URL="https://github.com/ShibaPapaMikami/shibapapa-site.git"
cd "$(dirname "$0")/.."

echo "▶ ビルド"
npm run build

echo "▶ gh-pages へ公開"
SHA=$(git rev-parse --short HEAD)
rm -rf dist/.git
cd dist
git init -q -b main
git add -A
git commit -q -m "Deploy ${SHA}"
git push -q -f "${REPO_URL}" main:gh-pages
cd ..
rm -rf dist/.git

echo "▶ Pages のビルドを起動"
gh api -X POST repos/ShibaPapaMikami/shibapapa-site/pages/builds >/dev/null

echo "✓ 完了。1〜2分で https://shibapapa.com/ に反映されます"
