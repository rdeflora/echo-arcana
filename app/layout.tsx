// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Echo Arcana — Where magic gets weird",
    template: "%s | Echo Arcana",
  },
  description: "Maps, lore, goblin wizardry, and community creations.",
  metadataBase: new URL(process.env.SITE_URL ?? "http://192.168.50.27:3001"),
  openGraph: {
    title: "Echo Arcana — Where magic gets weird",
    description: "Maps, lore, goblin wizardry, and community creations.",
    url: "/",
    siteName: "Echo Arcana",
    images: ["/og-echo-arcana.jpg"],
    type: "website",
  },
  icons: { icon: "/favicon.ico", apple: "/logo.png" },
  themeColor: "#1e1e2f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
