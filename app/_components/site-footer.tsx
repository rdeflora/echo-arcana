const QUOTES = [
  "Day 103 in the Fen… Nibbler still eats candles.",
  "If the dice fall off the table, fate rejected your roll.",
  "Never trust a smiling mimic.",
  "Every spell is a hypothesis. Some explode.",
];

function pick<T>(arr: T[]) { return arr[Math.floor(Math.random()*arr.length)]; }

export default function SiteFooter() {
  const quote = pick(QUOTES);
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-80">
        <div className="italic">“{quote}”</div>
        <div className="mt-2">© {new Date().getFullYear()} Echo Arcana.</div>
      </div>
    </footer>
  );
}
