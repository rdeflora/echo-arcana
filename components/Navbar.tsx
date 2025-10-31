'use client';

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="/" className="font-semibold">Echo Arcana</a>
        <div className="flex gap-4 text-sm">
          <a href="/map">Map</a>
          <a href="/color-hall">Color Hall</a>
          <a href="/shop">Shop</a>
        </div>
      </nav>
    </header>
  );
}
