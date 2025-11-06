'use client';

export default function Page() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      alert(res.ok ? "Subscribed! Watch your inbox." : "Subscribe failed. Try again.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      alert("Network error. Try again.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl p-6 space-y-10">
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Arcane energy, chaotic results.
        </h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl">
          Goblins, maps, spells, and a dash of chaos. Dive in, color something,
          or break reality (responsibly).
        </p>

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

        <div className="mt-6 flex gap-3">
          <a href="/map" className="rounded-xl px-5 py-3 border shadow">Explore the Map</a>
          <a href="/color-hall" className="rounded-xl px-5 py-3 border shadow">Visit Color Hall</a>
        </div>
      </section>
    </main>
  );
}
