'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'>('idle');
  const [errMsg, setErrMsg] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending'); setErrMsg('');
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      message: String(fd.get('message') || '').trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const j = await res.json().catch(() => ({}));
      if (res.ok && j?.ok) setStatus('ok');
      else { setStatus('err'); setErrMsg(j?.error || 'Send failed'); }
    } catch (err: any) {
      setStatus('err'); setErrMsg(err?.message || 'Network error');
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Send a Raven</h1>
        <p className="text-neutral-300 mb-8">
          Questions, prophecies, or suspicious potion tips — drop them here.
        </p>

        <div className="rounded-2xl p-6 md:p-8 shadow-xl
                        bg-[url('/parchment-texture.png')] bg-cover bg-center
                        ring-1 ring-neutral-800/60">
          {status === 'ok' ? (
            <div className="bg-emerald-900/30 border border-emerald-600/40 rounded-lg p-4">
              <div className="font-semibold">Message sent!</div>
              <div className="text-sm opacity-80">
                Check your inbox for a goblin-stamped receipt. 🦝✨
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" required
                  className="w-full rounded-lg bg-neutral-900/70 border border-neutral-700 px-3 py-2 outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" name="email" required
                  className="w-full rounded-lg bg-neutral-900/70 border border-neutral-700 px-3 py-2 outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea name="message" rows={6} required
                  className="w-full rounded-lg bg-neutral-900/70 border border-neutral-700 px-3 py-2 outline-none focus:border-amber-400" />
              </div>

              {status === 'err' && (
                <div className="bg-rose-900/30 border border-rose-600/40 rounded-lg p-3 text-sm">
                  Oof — message fizzled. {errMsg}
                </div>
              )}

              <button
                disabled={status === 'sending'}
                className="rounded-xl px-5 py-2.5 font-semibold shadow
                           bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Casting…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <p className="text-xs mt-4 opacity-60">
          By sending, you accept that goblins may read your message aloud for entertainment.
        </p>
      </section>
    </main>
  );
}
