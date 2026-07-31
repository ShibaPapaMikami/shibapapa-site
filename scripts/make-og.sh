#!/usr/bin/env bash
# OGP画像（SNSシェア時のサムネイル）を生成する
#
#   bash scripts/make-og.sh
#
# scripts/og/{ja,en}.html を headless Chrome で 1200x630 に描画し、
# public/assets/og-{ja,en}.png として書き出します。
# OS標準の明朝で描画されるので、サイト本体と同じ書体になります。
#
# 文言を変えたいときは scripts/og/*.html を編集してから実行してください。

set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  echo "Google Chrome が見つかりません: $CHROME" >&2
  exit 1
fi

for L in ja en; do
  echo "▶ og-$L.png"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --default-background-color=FFFFFFFF \
    --window-size=1200,630 \
    --screenshot="$PWD/public/assets/og-$L.png" \
    "file://$PWD/scripts/og/$L.html" >/dev/null 2>&1
done

echo "✓ public/assets/ に出力しました"
