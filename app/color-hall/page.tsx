"use client";

import { useEffect, useState } from "react";

type ArtItem = { name: string; src: string };

export default function ColorHallPage() {
  const [items, setItems] = useState<ArtItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<ArtItem | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/art-list", { cache: "no-store" });
        const j = await res.json();
        if (!cancelled) {
          if (j.ok) setItems(j.items);
          else setError(j.error || "Failed to load list");
        }
      } catch (e: any) {
        if (!cancelled) setError(e.message || "Network error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Color Hall — Fan Gallery
          </h1>
          <a
            href="/"
            className="rounded-2xl border border-gray-700 px-4 py-2 hover:bg-gray-800 transition"
          >
            ← Return to Main
          </a>
        </div>

        {loading && <p className="opacity-80">Loading gallery…</p>}
        {error && <p className="text-red-400">❌ {error}</p>}

        {!loading && !error && items.length === 0 && (
          <p className="opacity-80">
            No uploads yet. Once art lands in <code>/public/uploads</code>, it appears here automatically.
          </p>
        )}

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {items.map((it) => (
            <li key={it.src}>
              <button
                onClick={() => setPreview(it)}
                className="group block w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900 hover:border-gray-600"
                title={it.name}
              >
                <img
                  src={it.src}
                  alt={it.name}
                  className="w-full h-40 md:h-48 object-cover transition-transform group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="px-2 py-1 text-xs truncate text-gray-300 border-t border-gray-800">
                  {it.name}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="max-w-5xl w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <div className="text-sm opacity-80 truncate">{preview.name}</div>
              <button
                onClick={() => setPreview(null)}
                className="rounded-xl border border-gray-700 px-3 py-1 hover:bg-gray-800"
              >
                Close
              </button>
            </div>
            <div className="max-h-[80vh] overflow-auto">
              <img src={preview.src} alt={preview.name} className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
