import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Map" },
  { href: "/color-hall", label: "Color Hall" },
  { href: "/news", label: "News" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b bg-black/30 text-gray-100">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="font-extrabold tracking-wide">Echo Arcana</Link>
        <div className="flex-1" />
        <ul className="flex items-center gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link className="hover:underline" href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
