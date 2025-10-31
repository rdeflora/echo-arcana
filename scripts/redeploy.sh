#!/usr/bin/env bash
set -euo pipefail
cd /srv/echo-arcana
echo "▶ Building…"
npm run build
echo "▶ Restarting service…"
sudo systemctl restart echo-arcana
echo "▶ Health check…"
for p in / /map /color-hall /games /shop /lore /news /about /contact /upload-art; do
  printf "%-14s " "$p"; curl -s -o /dev/null -w "%{http_code}\n" "http://localhost:3001$p";
done
