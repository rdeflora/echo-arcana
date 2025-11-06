import Link from "next/link";

export default function Games() {
  const items = [
    { href: "/games/potion-panic", title: "Potion Panic", blurb: "Mix fast or boom." },
    { href: "/games/nibbler-snack-attack", title: "Nibbler’s Snack Attack", blurb: "Feed the mimic—wisely." },
    { href: "/games/grumples-greed", title: "Grumple’s Greed", blurb: "Grab gold before Redwina spots you." },
  ];
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-4xl font-bold mb-4">Echo Arcana — Games</h1>
      <p className="opacity-80 mb-6">Tiny chaotic time-wasters from the Echo Realms.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="rounded-2xl border border-white/20 bg-black/30 backdrop-blur p-5 hover:bg-black/40 transition"
          >
            <h2 className="text-2xl font-semibold">{g.title}</h2>
            <p className="opacity-80">{g.blurb}</p>
            <span className="inline-block mt-3 text-sm underline">Open</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
