#!/usr/bin/env bash
set -euo pipefail
./scripts/checkpoint.sh "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" >/dev/null || true
rm -rf .next
npm run build
sudo systemctl restart echo-arcana
# healthcheck
curl -fsS http://localhost:3001/ >/dev/null && echo "✅ Deployed & healthy" || (echo "❌ Healthcheck failed"; exit 1)
