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
            <a href="/" className="font-semibold">Echo Arcana</a>
            <div className="flex gap-4 text-sm">
              <a href="/map">Map</a>
              <a href="/color-hall">Color Hall</a>
              <a href="/games">Games</a>
              <a href="/shop">Shop</a>
              <a href="/lore">Lore</a>
              <a href="/news">News</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/upload-art">Upload</a>
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
