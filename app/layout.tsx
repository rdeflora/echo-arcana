import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Echo Arcana — Where magic gets weird",
  description: "Maps, lore, goblin wizardry, and community creations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-950 text-zinc-50 antialiased">
        <header className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex gap-4 items-center">
            <Link href="/" className="font-semibold">Echo Arcana</Link>
            <div className="flex gap-4 text-sm opacity-90">
              <Link href="/map">Map</Link>
              <Link href="/lore">Lore</Link>
              <Link href="/color-hall">Color Hall</Link>
              <Link href="/games">Games</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm opacity-80">
            “Day 103 in the Fen… Nibbler still eats candles.”
          </div>
        </footer>
      </body>
    </html>
  );
}
