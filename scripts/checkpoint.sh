#!/usr/bin/env bash
set -euo pipefail
msg="${1:-manual checkpoint}"
mkdir -p .checkpoints
tar --exclude='./.checkpoints' --exclude='./node_modules' -czf ".checkpoints/echo-arcana-checkpoint-$(date +%F-%H%M).tar.gz" .
echo "✅ Checkpoint saved: $msg"
