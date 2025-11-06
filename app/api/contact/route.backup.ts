import { NextResponse } from "next/server";
import { mkdir, appendFile } from "fs/promises";
import { join } from "path";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (
      !name || typeof name !== "string" ||
      !email || typeof email !== "string" ||
      !message || typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const dir = "/srv/echo-arcana/.data";
    await mkdir(dir, { recursive: true });
    const file = join(dir, "contact-submissions.ndjson");

    const record = {
      ts: new Date().toISOString(),
      ip: (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || null,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ua: req.headers.get("user-agent") || null,
    };

    await appendFile(file, JSON.stringify(record) + "\n", "utf8");
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
