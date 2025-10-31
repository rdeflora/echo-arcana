const tiles = [
  { href: '/games', label: 'Games', desc: 'Mini-games & experiments' },
  { href: '/color-hall', label: 'Color Hall', desc: 'Fan art & submissions' },
  { href: '/map', label: 'Interactive Map', desc: 'Explore Echo Realms' },
  { href: '/shop', label: 'Shop', desc: 'Prints, books, goodies' },
  { href: '/lore', label: 'Lore', desc: 'Stories, characters, magic' },
  { href: '/news', label: 'News', desc: 'Updates & dev logs' },
  { href: '/upload-art', label: 'Upload Art', desc: 'Share your creations' },
  { href: '/about', label: 'About', desc: 'What Echo Arcana is' },
  { href: '/contact', label: 'Contact', desc: 'Reach the goblin desk' },
];

export default function Tiles() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tiles.map((t) => (
        <a key={t.href}
           href={t.href}
           className="block rounded-xl border border-white/10 p-4 hover:border-white/25 transition">
          <div className="text-lg font-semibold">{t.label}</div>
          <div className="text-sm opacity-80">{t.desc}</div>
        </a>
      ))}
    </div>
  );
}
