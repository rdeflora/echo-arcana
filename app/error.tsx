"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => { console.error("Echo Arcana error:", error); }, [error]);
  return (
    <html>
      <body>
        <main className="mx-auto max-w-3xl p-8 text-center">
          <h1 className="text-4xl font-extrabold">Something went boom.</h1>
          <p className="mt-3 opacity-80">Chaos is fun until it crashes. Try again?</p>
          <button onClick={() => reset()} className="mt-6 rounded-xl px-5 py-3 border shadow">
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
