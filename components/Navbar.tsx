"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold">Echo Arcana</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/map">Map</Link>
          <Link href="/color-hall">Color Hall</Link>
          <Link href="/games">Games</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/lore">Lore</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/upload-art">Upload</Link>
        </div>
      </nav>
    </header>
  );
}
