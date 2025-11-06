"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"err">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErr(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || `HTTP ${res.status}`);
      }

      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch (e:any) {
      setStatus("err");
      setErr(e.message || "Failed to send");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-2">
        <label className="text-sm opacity-80">Name</label>
        <input
          className="rounded-md border bg-black/30 px-3 py-2 outline-none focus:ring"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          name="name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm opacity-80">Email</label>
        <input
          className="rounded-md border bg-black/30 px-3 py-2 outline-none focus:ring"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm opacity-80">Message</label>
        <textarea
          className="rounded-md border bg-black/30 px-3 py-2 outline-none focus:ring min-h-[120px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          name="message"
        />
      </div>

      <button
        className="rounded-lg border px-4 py-2 font-semibold hover:bg-white/10 disabled:opacity-50"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "ok" && (
        <p className="text-green-400">Message received. The goblins filed it under “Not a Bomb.”</p>
      )}
      {status === "err" && (
        <p className="text-red-400">Error: {err}</p>
      )}
    </form>
  );
}
