"use client";

import { useState } from "react";
import { REGIONS, type Region } from "./regions";

export const metadata = {
  title: "Echo Realms — Interactive Map",
  description: "Click locations to reveal lore and links.",
};

export default function MapPage() {
  const [hover, setHover] = useState<Region | null>(null);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-extrabold tracking-wide mb-4">Echo Realms — Map (v1)</h1>

      {/* Map box */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-stone-900">
        {/* Placeholder terrain grid; replace with textured SVG or image in v2 */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
          {/* Decorative bands to imply terrain */}
          <rect x="0" y="60" width="100" height="40" fill="rgba(30,100,60,0.25)" />
          <rect x="55" y="0" width="45" height="35" fill="rgba(40,60,110,0.22)" />
        </svg>

        {/* Pins */}
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onMouseEnter={() => setHover(r)}
            onMouseLeave={() => setHover((h) => (h?.id === r.id ? null : h))}
            onClick={() => r.href && (window.location.href = r.href)}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
            aria-label={r.name}
            title={r.name}
          >
            <div className="h-4 w-4 rounded-full border border-white/70 bg-emerald-400 shadow group-hover:scale-110 transition" />
            <div className="mt-1 text-xs opacity-90">{r.name}</div>
          </button>
        ))}

        {/* Hover card */}
        {hover && (
          <div
            className="pointer-events-none absolute left-4 top-4 max-w-sm rounded-xl border border-white/10 bg-black/70 p-3 text-sm"
            role="status"
          >
            <div className="font-semibold">{hover.name}</div>
            <div className="opacity-80">{hover.blurb ?? "…"}</div>
          </div>
        )}
      </div>

      <p className="mt-3 text-sm opacity-70">
        v1: simple pins. v2: textured map + fog-of-war + per-location pages.
      </p>
    </main>
  );
}
