'use client';

import * as React from 'react';

export default function SubscribeForm() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('email') || '').trim();
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      alert(res.ok ? 'Subscribed! Watch your inbox.' : 'Subscribe failed. Try again.');
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      alert('Network error. Try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex gap-2 max-w-md">
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        className="flex-1 rounded-xl px-4 py-3 border"
      />
      <button className="rounded-xl px-4 py-3 border">Subscribe</button>
    </form>
  );
}
