export const metadata = { title: "Echo Arcana — Games" };

const cards = [
  { href: "/games/potion-panic", title: "Potion Panic", blurb: "Mix fast or boom." },
  { href: "/games/nibbler-snack-attack", title: "Nibbler’s Snack Attack", blurb: "Eat everything (except the right thing)." },
  { href: "/games/grumples-greed", title: "Grumple’s Greed", blurb: "Grab gold. Avoid Redwina." },
];

export default function GamesPage() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-6">
      <h1 className="text-3xl font-extrabold">Fun & Games</h1>
      <p className="opacity-80">Tiny chaos now. Full playable mayhem soon.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map(c => (
          <a key={c.href} href={c.href} className="rounded-xl border shadow p-4 hover:scale-[1.01] transition">
            <div className="text-lg font-bold">{c.title}</div>
            <div className="text-sm opacity-80 mt-1">{c.blurb}</div>
            <div className="text-xs mt-3 opacity-60">Prototype placeholder — Phaser/Godot build goes here later.</div>
          </a>
        ))}
      </div>
    </main>
  );
}
