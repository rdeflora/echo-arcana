import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero-poster.jpg"
      />

      {/* bottom gradient for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* LOWER-THIRD OVERLAY */}
      <section className="absolute inset-x-0 bottom-10 z-10 flex justify-center px-4">
        <div className="max-w-3xl w-full rounded-2xl bg-black/55 backdrop-blur-md px-6 py-6 text-center shadow-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-sm">
            Welcome to Echo Arcana
          </h1>
          <p className="mt-2 text-white/90">where magic gets weird.</p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="/landing"
              className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-zinc-900 hover:bg-white transition shadow"
            >
              Enter the Realm
            </Link>
            <Link
              href="/map"
              className="rounded-xl border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Explore the Map
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
