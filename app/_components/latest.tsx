export default function Latest() {
  const cards = [
    {
      href: "/lore",
      title: "Lore & Worldbuilding",
      desc: "Read fresh entries from the Echo Realms—locations, factions, and whispered secrets.",
    },
    {
      href: "/color-hall",
      title: "Color Hall — Fan Gallery",
      desc: "Community art, recolors, and featured creations from goblins to grandmasters.",
    },
    {
      href: "/news",
      title: "News & Releases",
      desc: "New maps, drops, and dev logs. Peek behind the curtain (mind the tentacles).",
    },
  ];
  return (
    <section className="py-6">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Latest</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <a key={c.href} href={c.href} className="rounded-xl border p-5 shadow hover:scale-[1.01] transition">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 opacity-80">{c.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
