'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const sparklesRef = useRef<HTMLDivElement>(null);

  // Lightweight sparkle spawn (no libs, safe for prod)
  useEffect(() => {
    const root = sparklesRef.current;
    if (!root) return;
    let id = 0;
    const make = () => {
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.style.left = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
      s.style.setProperty('--dur', (3 + Math.random() * 2).toFixed(2) + 's');
      s.dataset.id = String(++id);
      root.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    };
    const t = setInterval(make, 250);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen isolate overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(45rem_45rem_at_10%_10%,rgba(99,102,241,.25),transparent),radial-gradient(40rem_40rem_at_90%_30%,rgba(16,185,129,.2),transparent)]"></div>

      {/* Sigil (inline SVG) */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-60">
        <svg className="w-[70vmin] drop-shadow-[0_0_35px_rgba(0,0,0,.3)]"
             viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#A7F3D0"/>
              <stop offset="60%" stopColor="#60A5FA"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="70" fill="url(#g)" className="animate-pulse-slow"/>
          <circle cx="100" cy="100" r="68" fill="none" stroke="white" strokeOpacity=".25"/>
          <g className="animate-spin-slow origin-center">
            <path d="M100 35 L112 65 L145 70 L120 92 L126 125 L100 108 L74 125 L80 92 L55 70 L88 65 Z"
                  fill="none" stroke="white" strokeOpacity=".7" strokeWidth="1.4"/>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-emerald-200 to-sky-300">
            Echo Arcana
          </span>
          <span className="block text-white/80 mt-2">— where magic gets weird</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Animated wonders, goblin mischief, and a living hat with changing runes. Step inside.
        </p>

        <div className="mt-8 flex gap-3">
          <a href="/map" className="btn-primary">Explore the Map</a>
          <a href="/color-hall" className="btn-ghost">Visit the Color Hall</a>
        </div>
      </div>

      {/* Sparkles layer */}
      <div ref={sparklesRef} className="pointer-events-none absolute inset-0"></div>
    </section>
  );
}
