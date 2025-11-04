"use client";

import { useEffect, useMemo, useState } from "react";

const QUOTES = [
  "Day 103 in the Fen… Nibbler still eats candles.",
  "If the dice fall off the table, fate rejected your roll.",
  "Never trust a smiling mimic.",
  "Goblins don’t ‘fail’—we discover combustible alternatives.",
  "I didn’t blow up the lab. The lab explored new forms.",
];

function pick(qs: string[]) {
  // Stable daily pick by date; feels “rotating” without flicker
  const d = new Date();
  const key = d.getUTCFullYear() * 372 + (d.getUTCMonth() + 1) * 31 + d.getUTCDate();
  return qs[key % qs.length];
}

export default function FooterQuote() {
  const [quote, setQuote] = useState<string>("");
  const initial = useMemo(() => pick(QUOTES), []);
  useEffect(() => setQuote(initial), [initial]);

  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm opacity-80">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="italic">“{quote}”</p>
          <p className="opacity-60">© {new Date().getFullYear()} Echo Arcana</p>
        </div>
      </div>
    </footer>
  );
}
