import './globals.css'
import Link from 'next/link';

export const metadata = {
  title: 'Echo Arcana',
  description: 'Where magic gets weird',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900 text-zinc-100">
      <body>
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
        <main className="max-w-5xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
