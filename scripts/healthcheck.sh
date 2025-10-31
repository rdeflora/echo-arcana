#!/usr/bin/env bash
# Returns 0 if the site is up, non-zero if not.
curl -fsS http://localhost:3001/ >/dev/null
