import "./globals.css";
import SiteHeader from "./_components/site-header";
import SiteFooter from "./_components/site-footer";

export const metadata = {
  title: "Echo Arcana — Where magic gets weird",
  description: "Maps, lore, goblin wizardry, and community creations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-gray-100">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
