"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ArtItem = {
  id: string;
  title: string;
  url: string;
  thumb?: string;
  author?: string;
};

export default function ColorHallPage() {
  const [items, setItems] = useState<ArtItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/art-list", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: unknown = await res.json();

        // Defensive parse to ArtItem[]
        const arr = Array.isArray(data) ? data : [];
        const normalized: ArtItem[] = arr
          .map((x: unknown) => {
            if (!x || typeof x !== "object") return null;
            const o = x as Record<string, unknown>;
            const id = (o.id as string) ?? (o._id as string) ?? crypto.randomUUID();
            const title = (o.title as string) ?? "Untitled";
            const url = (o.url as string) ?? "";
            const thumb = (o.thumb as string) ?? (o.thumbnail as string) ?? undefined;
            const author = (o.author as string) ?? undefined;
            if (!url) return null;
            return { id, title, url, thumb, author };
          })
          .filter(Boolean) as ArtItem[];

        if (!cancelled) setItems(normalized);
      } catch (e) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Echo Arcana — <span className="text-sky-300">Color Hall</span>
        </h1>
        <nav className="flex gap-3 text-sm">
          <Link className="btn" href="/">Home</Link>
          <Link className="btn" href="/upload-art">Upload</Link>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="mb-4">
          <Link className="btn" href="/">← Return to Main</Link>
        </div>

        {loading && <p className="opacity-80">Loading gallery…</p>}
        {error && <p className="text-red-400">❌ {error}</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <article key={it.id} className="card p-3">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-zinc-800">
                <img
                  src={it.thumb || it.url}
                  alt={it.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <h3 className="mt-2 text-sm font-medium">{it.title}</h3>
              {it.author && <p className="text-xs text-white/70">by {it.author}</p>}
              <div className="mt-2">
                <a
                  className="btn"
                  href={it.url}
                  target="_blank"
                  rel="noreferrer"
                  title="Open full image"
                >
                  Open →
                </a>
              </div>
            </article>
          ))}
        </div>

        {!loading && !error && items.length === 0 && (
          <p className="opacity-80">No submissions yet. Be the first!</p>
        )}
      </div>
    </main>
  );
}
