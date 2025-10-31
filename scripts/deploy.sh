#!/usr/bin/env bash
set -euo pipefail
echo "Checkpointing..."
./scripts/checkpoint.sh "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)" >/dev/null || true
echo "Building..."
rm -rf .next
npm run build
echo "Restarting service..."
sudo systemctl restart echo-arcana
echo "Healthcheck..."
curl -fsS http://localhost:3001/ >/dev/null && echo "✅ Deployed & healthy"
