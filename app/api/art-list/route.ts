import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
export async function GET() {
  try {
    const raw = await readFile(process.cwd() + "/public/data/color-hall.json", "utf8");
    const arr = JSON.parse(raw);
    return NextResponse.json(arr);
  } catch {
    return NextResponse.json([]);
  }
}
