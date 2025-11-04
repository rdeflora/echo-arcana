export type Region = {
  id: string;
  name: string;
  x: number; // 0..100 (percent)
  y: number; // 0..100 (percent)
  blurb?: string;
  href?: string;
};

export const REGIONS: Region[] = [
  { id: "ashvale", name: "Ashvale", x: 28, y: 62, blurb: "Frontier town. Opening scene.", href: "/lore" },
  { id: "hollow-fen", name: "Hollow Fen", x: 42, y: 48, blurb: "Inland swamps. Trouble brews.", href: "/lore" },
  { id: "shattered-eye", name: "Monastery of the Shattered Eye", x: 46, y: 41, blurb: "Deep in the fen.", href: "/lore" },
  { id: "vault", name: "Vault of Nikodemous", x: 70, y: 22, blurb: "Whispers from the deep.", href: "/lore" },
  { id: "city-of-refuge", name: "City of Refuge", x: 18, y: 35, blurb: "Where the choir shakes stone.", href: "/news" },
];
