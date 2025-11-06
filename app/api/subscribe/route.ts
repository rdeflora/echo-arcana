import { NextResponse } from "next/server";
import { mkdir, appendFile } from "fs/promises";
import { join } from "path";
import nodemailer from "nodemailer";

const FROM_EMAIL = process.env.BREVO_FROM_EMAIL!;
const FROM_NAME  = process.env.BREVO_FROM_NAME || "Echo Arcana";
const TO_EMAIL   = process.env.BREVO_TO_EMAIL!;
const TO_NAME    = process.env.BREVO_TO_NAME || "Echo Arcana";

const SMTP_HOST  = process.env.BREVO_SMTP_HOST || "";
const SMTP_PORT  = Number(process.env.BREVO_SMTP_PORT || 587);
const SMTP_USER  = process.env.BREVO_SMTP_LOGIN || "";
const SMTP_PASS  = process.env.BREVO_SMTP_PASSWORD || "";

async function logLine(file: string, data: any) {
  const dir = "/srv/echo-arcana/.data";
  await mkdir(dir, { recursive: true });
  await appendFile(join(dir, file), JSON.stringify(data) + "\n", "utf8");
}

export async function POST(req: Request) {
  const ts = new Date().toISOString();
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    await logLine("subscribers.ndjson", { ts, email: email.trim() });

    // notify you
    try {
      const tx = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await tx.sendMail({
        from: { address: FROM_EMAIL, name: FROM_NAME },
        to: { address: TO_EMAIL, name: TO_NAME },
        subject: `New Echo Arcana subscriber`,
        text: `Email: ${email}`,
        html: `<p><b>New subscriber:</b> ${email}</p>`,
        replyTo: email,
        headers: { "X-Echo-Arcana": "subscribe" },
      });
    } catch (e) {
      await logLine("contact-errors.ndjson", { ts, via: "smtp", error: String(e) });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    await logLine("contact-errors.ndjson", { ts, via: "server", error: String(err) });
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
