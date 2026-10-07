#!/usr/bin/env sh
# Renders scripts/og-image.html → public/og-image.png (1200×630) and the apple-touch-icon.
# Requires a local Chrome/Chromium; set CHROME to override the binary.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-google-chrome}"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --allow-file-access-from-files --window-size=1200,630 \
  --screenshot="$PWD/public/og-image.png" "file://$PWD/scripts/og-image.html" 2>/dev/null
echo "public/og-image.png generated"
