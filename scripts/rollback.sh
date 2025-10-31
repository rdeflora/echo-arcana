#!/usr/bin/env bash
set -euo pipefail
tag="${1:-}"
if [ -z "$tag" ]; then
  echo "Usage: $0 ckpt-YYYYMMDD-HHMMSS"; exit 1
fi
echo "Rolling back to $tag ..."
git branch "safety-$(date -u +%Y%m%d-%H%M%S)" || true
git reset --hard "$tag"
echo "Rolled back to $tag. Now: rm -rf .next && npm run build && sudo systemctl restart echo-arcana"
