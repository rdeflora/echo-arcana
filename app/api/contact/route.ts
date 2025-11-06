import { NextResponse } from "next/server";
import Brevo from "@getbrevo/brevo";
import nodemailer from "nodemailer";
import { mkdir, appendFile } from "fs/promises";
import { join } from "path";

const FROM_EMAIL = process.env.BREVO_FROM_EMAIL!;
const FROM_NAME  = process.env.BREVO_FROM_NAME || "Echo Arcana";
const TO_EMAIL   = process.env.BREVO_TO_EMAIL!;
const TO_NAME    = process.env.BREVO_TO_NAME || "Echo Arcana";
const REPLY_TO   = process.env.BREVO_REPLY_TO || "";

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
    const { name, email, message } = await req.json();

    if (
      !name || !email || !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    // persist submission
    await logLine("contact-submissions.ndjson", {
      ts,
      ip: (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || null,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ua: req.headers.get("user-agent") || null,
    });

    // --- Brevo API first ---
    let apiOk = false;
    let apiId: string | null = null;

    if (process.env.BREVO_API_KEY) {
      try {
        const client = new (Brevo as any).TransactionalEmailsApi();
        client.setApiKey(
          (Brevo as any).TransactionalEmailsApiApiKeys.apiKey,
          process.env.BREVO_API_KEY as string
        );

        const payload = {
          sender: { email: FROM_EMAIL, name: FROM_NAME },
          to: [{ email: TO_EMAIL, name: TO_NAME }],
          subject: `Echo Arcana Contact — ${name}`,
          htmlContent: `<p><b>Name:</b> ${name}</p>
                        <p><b>Email:</b> ${email}</p>
                        <p><b>Message:</b></p><pre>${message}</pre>`,
          replyTo: REPLY_TO ? { email: REPLY_TO, name: FROM_NAME } : undefined,
          headers: { "X-Echo-Arcana": "contact" }
        };

        // SDK returns { response, body }
        const res = await client.sendTransacEmail(payload as any);
        const body: any = (res as any)?.body ?? res;

        apiId =
          (body?.messageId as string) ||
          (Array.isArray(body?.messageIds) ? String(body.messageIds[0]) : null);

        apiOk = Boolean(apiId);
      } catch (e: any) {
        await logLine("contact-errors.ndjson", { ts, via: "api", error: e?.message || String(e) });
      }
    }

    if (apiOk) {
      return NextResponse.json({ ok: true, via: "api", id: apiId });
    }

    // --- Fallback SMTP via Brevo relay (shows in Brevo Logs) ---
    try {
      const tx = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      const info = await tx.sendMail({
        from: { address: FROM_EMAIL, name: FROM_NAME },
        to: { address: TO_EMAIL, name: TO_NAME },
        subject: `Echo Arcana Contact — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b></p><pre>${message}</pre>`,
        replyTo: REPLY_TO || undefined,
        headers: { "X-Echo-Arcana": "contact" },
      });

      return NextResponse.json({ ok: true, via: "smtp", id: (info as any).messageId || null });
    } catch (e: any) {
      await logLine("contact-errors.ndjson", { ts, via: "smtp", error: e?.message || String(e) });
      return NextResponse.json(
        { ok: false, error: "Email rejected (check sender/domain verification)" },
        { status: 502 }
      );
    }
  } catch (err: any) {
    await logLine("contact-errors.ndjson", { ts, via: "server", error: err?.message || String(err) });
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
