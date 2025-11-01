#!/usr/bin/env bash
set -euo pipefail
echo "=== Echo Doctor ==="
echo "[Node] $(node -v 2>/dev/null || echo 'not found')"
echo "[NPM ] $(npm -v 2>/dev/null || echo 'not found')"
echo

echo "— TypeScript —"
npm run -s typecheck || true
echo

echo "— ESLint —"
npm run -s lint || true
echo

echo "— Next build (no lint) —"
npx -y next build --no-lint || true
echo

echo "— Service 'echo-arcana' —"
systemctl is-active --quiet echo-arcana && echo "Service: active" || echo "Service: inactive"
journalctl -u echo-arcana -n 40 --no-pager 2>/dev/null || true
echo "=== End Doctor ==="
