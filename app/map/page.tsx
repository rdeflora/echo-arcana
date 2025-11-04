"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PINS, MapPin } from "./pins";

function pinColor(type: MapPin["type"]) {
  switch (type) {
    case "city":
      return "bg-emerald-500 ring-2 ring-white/80";
    case "dungeon":
      return "bg-red-500 ring-2 ring-white/80";
    default:
      return "bg-sky-400 ring-2 ring-white/80";
  }
}

function Inner() {
  const search = useSearchParams();
  const [active, setActive] = useState<MapPin | null>(null);

  // zoom/pan
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const drag = useRef<{ dx: number; dy: number; startX: number; startY: number } | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = search.get("focus");
    if (!id) return;
    const p = PINS.find((x) => x.id === id);
    if (p) setActive(p);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const next = Math.min(3, Math.max(1, scale + (e.deltaY > 0 ? -0.15 : 0.15)));
    setScale(next);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    drag.current = { dx: tx, dy: ty, startX: e.clientX, startY: e.clientY };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current) return;
    const { dx, dy, startX, startY } = drag.current;
    setTx(dx + (e.clientX - startX));
    setTy(dy + (e.clientY - startY));
  };
  const onMouseUp = () => {
    drag.current = null;
  };

  const reset = () => {
    setScale(1);
    setTx(0);
    setTy(0);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Echo Realms — <span className="text-sky-300">Interactive Map</span>
        </h1>
        <nav className="flex gap-3 text-sm">
          <Link className="btn" href="/">Home</Link>
          <Link className="btn" href="/color-hall">Color Hall</Link>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="mb-3 flex items-center gap-2 text-sm">
          <button className="btn" onClick={() => setScale((s) => Math.min(3, s + 0.2))}>
            ＋ Zoom
          </button>
          <button className="btn" onClick={() => setScale((s) => Math.max(1, s - 0.2))}>
            － Zoom
          </button>
          <button className="btn" onClick={reset}>Reset</button>
        </div>

        <div
          ref={layerRef}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{ height: "70vh" }}
        >
          {/* background svg */}
          <img
            src="/maps/world.svg"
            alt="Echo Realms (placeholder)"
            className="pointer-events-none select-none w-full h-full object-cover"
            draggable={false}
            style={{
              transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
              transformOrigin: "50% 50%",
            }}
          />

          {/* pins */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
              transformOrigin: "0 0",
            }}
          >
            {PINS.map((p) => (
              <button
                key={p.id}
                className={`absolute -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full ring-offset-1 ${pinColor(
                  p.type
                )}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                title={p.name}
                onClick={() => setActive(p)}
              />
            ))}
          </div>
        </div>

        {active && (
          <div className="mt-4 card p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{active.name}</h2>
              <Link className="btn" href={`/locations/${active.id}`}>
                Open details →
              </Link>
            </div>
            {active.desc && <p className="mt-2 text-white/80">{active.desc}</p>}
            <p className="mt-2 text-sm text-white/60">
              Coords: {active.x.toFixed(1)}%, {active.y.toFixed(1)}%
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading map…</div>}>
      <Inner />
    </Suspense>
  );
}
