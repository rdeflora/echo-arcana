import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import FooterQuote from "./_components/footer-quote";

export const metadata: Metadata = {
  title: "Echo Arcana — Where magic gets weird",
  description: "Maps, lore, goblin wizardry, and community creations.",
  metadataBase: new URL("https://echo-arcana.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-gray-100">
      <body>
        <Header />
        {children}
        <FooterQuote />
      </body>
    </html>
  );
}
