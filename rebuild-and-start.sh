#!/usr/bin/env bash
set -Eeuo pipefail

echo "PWD: $(pwd)"
if [[ "$(pwd)" != "/srv/echo-arcana" ]]; then
  echo "❌ Not in /srv/echo-arcana. Run: cd /srv/echo-arcana"
  exit 1
fi

# 0) Optional: confirm Node
node -v || { echo "❌ Node not found. Load nvm or install Node 20+."; exit 1; }

# 1) Stop the service to free the port
sudo systemctl stop echo-arcana || true

# 2) Force host/port on start script (keeps systemd simple)
npm pkg set scripts.start="next start -H 0.0.0.0 -p 3001"
echo "Scripts now:" && node -e "console.log(require('./package.json').scripts)"

# 3) Install deps (ci if lockfile exists, else install)
if [[ -f package-lock.json ]]; then npm ci; else npm install; fi

# 4) Clean old build cache and build
rm -rf .next node_modules/.cache 2>/dev/null || true
echo "▶ Building…"
npm run build

# 5) Quick foreground smoke test (auto-timeout)
echo "▶ Foreground test start… (auto-stops after 12s)"
( NODE_ENV=production npx next start -H 0.0.0.0 -p 3001 & echo $! > /tmp/ea_pid ) || true
sleep 2
# Try both / and /map, ignore failures but note them
curl -sS -I http://localhost:3001/  || echo "ℹ️ root check failed (may be fine)"
curl -sS -I http://localhost:3001/map || echo "ℹ️ /map check failed (route may not exist)"
# Stop foreground server after ~12s max
( sleep 12; kill $(cat /tmp/ea_pid) 2>/dev/null || true ) & disown
kill $(cat /tmp/ea_pid) 2>/dev/null || true
rm -f /tmp/ea_pid

# 6) Start via systemd and verify
sudo systemctl start echo-arcana
sleep 1
echo "▶ Service status (head):"
sudo systemctl status echo-arcana --no-pager -l | sed -n '1,40p'

echo "▶ curl checks"
curl -sS -I http://localhost:3001/  || true
curl -sS -I http://localhost:3001/map || true

echo "✅ Open:  http://192.168.50.27:3001/   (and /map if that route exists)"
