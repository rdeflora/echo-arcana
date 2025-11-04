"use client";
import { useState } from "react";
export default function CouncilBox() {
  const [email, setEmail] = useState(""); const [ok, setOk] = useState(false);
  const submit = async (e:any) => { e.preventDefault(); setOk(true); /* wire to Mailchimp later */ };
  return (
    <section className="rounded-2xl border shadow p-6">
      <h2 className="text-2xl font-bold">Join the Goblin Council</h2>
      <p className="opacity-80 mt-1">Receive secret prophecies, updates, and occasional chaos.</p>
      <form onSubmit={submit} className="mt-4 flex gap-2">
        <input value={email} onChange={e=>setEmail(e.target.value)} required
               placeholder="you@realm.com"
               className="flex-1 rounded-lg border px-3 py-2" />
        <button className="rounded-lg border px-4 py-2 shadow">Join</button>
      </form>
      {ok && <div className="text-sm mt-2">Check your scrolls (email). If nothing arrives, blame the imps.</div>}
    </section>
  );
}
