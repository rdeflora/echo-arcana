export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  // Simple starter data: positions are % of the SVG/image width/height
  const markers = [
    { id: "echo-harbor", name: "Echo Harbor", x: 22, y: 58, blurb: "Bustling port of tinkerers and smugglers." },
    { id: "maple-fen",   name: "Maple Fen",   x: 41, y: 72, blurb: "Bogs, blue fireflies, and strange tea." },
    { id: "vault",       name: "Vault of Nikodemous", x: 63, y: 35, blurb: "Whispers say the doors move." },
  ];

  return NextResponse.json({ ok: true, markers }, { headers: { "Cache-Control": "no-store" } });
}
