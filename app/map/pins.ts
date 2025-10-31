// app/map/pins.ts
export type MapPin = {
  id: string;
  name: string;
  x: number;   // percent (0..100)
  y: number;   // percent (0..100)
  type?: "city" | "dungeon" | "landmark";
  desc?: string;
};

export const PINS: MapPin[] = [
  {
    id: "echo-harbor",
    name: "Echo Harbor",
    x: 42.0,
    y: 58.0,
    type: "city",
    desc: "Bustling port where weird magic meets weirder fish."
  },
  {
    id: "vault-of-nikodemous",
    name: "Vault of Nikodemous",
    x: 62.5,
    y: 44.0,
    type: "dungeon",
    desc: "A sealed reliquary stuffed with problems and profit."
  },
  {
    id: "maple-fen",
    name: "Maple Fen",
    x: 28.0,
    y: 63.5,
    type: "landmark",
    desc: "Fog, frogs, and faintly judgmental maple trees."
  }
];
