#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

echo "Building..."
npm run build

STAGE_DIR=".next/standalone"

# "output: standalone" (next.config.mjs) traces only the runtime-needed
# files into $STAGE_DIR instead of the full node_modules. Static assets
# aren't part of that trace, so copy them in by hand.
rm -rf "$STAGE_DIR/public" "$STAGE_DIR/.next/static" "$STAGE_DIR/tmp"
cp -r public "$STAGE_DIR/public"
mkdir -p "$STAGE_DIR/.next"
cp -r .next/static "$STAGE_DIR/.next/static"

# Passenger (cPanel's Node.js app manager) restarts the app whenever this
# file's contents change, so bump it now — it'll take effect once you
# extract the zip on the server.
mkdir -p "$STAGE_DIR/tmp"
date -u +"%Y-%m-%dT%H:%M:%SZ" > "$STAGE_DIR/tmp/restart.txt"

ZIP_NAME="deploy.zip"
rm -f "$ZIP_NAME"
(cd "$STAGE_DIR" && zip -rq "../../$ZIP_NAME" .)

echo ""
echo "Done -> $ZIP_NAME ($(du -h "$ZIP_NAME" | cut -f1))"
echo ""
echo "Next steps:"
echo "  1. Upload $ZIP_NAME via cPanel File Manager into your app folder."
echo "  2. Right-click it -> Extract (overwrite existing files)."
echo "  3. In cPanel -> Setup Node.js App, click Restart."
