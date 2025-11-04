import { NextResponse } from "next/server";

export async function GET() {
  const info = {
    ok: true,
    service: "echo-arcana",
    time: new Date().toISOString(),
    buildId: process.env.BUILD_ID ?? "dev",
  };
  return NextResponse.json(info, { status: 200 });
}
