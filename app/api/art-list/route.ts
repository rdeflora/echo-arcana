export const dynamic = "force-dynamic";  // force fresh folder reads

import { NextResponse } from "next/server";
import path from "path";
import { readdir } from "fs/promises";

export async function GET() {
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  try {
    const entries = await readdir(uploadsDir, { withFileTypes: true });
    const items = entries
      .filter((d) => d.isFile() && /\.(png|jpe?g|gif|webp|avif)$/i.test(d.name))
      .map((d) => ({
        name: d.name,
        src: `/uploads/${encodeURIComponent(d.name)}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({ ok: true, items }, { headers: { "Cache-Control": "no-store" } });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
