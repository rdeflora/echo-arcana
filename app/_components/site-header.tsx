import { SITE } from "./site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">{SITE.name}</a>
        <nav className="hidden md:flex gap-4 text-sm">
          <a href="/map" className="hover:underline">Map</a>
          <a href="/lore" className="hover:underline">Lore</a>
          <a href="/color-hall" className="hover:underline">Color Hall</a>
          <a href="/news" className="hover:underline">News</a>
          <a href="/games" className="hover:underline">Games</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex gap-2">
          <a href="/contact" className="rounded-xl px-3 py-1.5 border shadow text-sm">Join the Goblin Council</a>
        </div>
      </div>
    </header>
  );
}
