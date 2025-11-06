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
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center">
        <div className="rounded-2xl bg-black/40 p-6 backdrop-blur">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow">
            Welcome to Echo Arcana
          </h1>
          <p className="mt-3 text-white/90">where magic gets weird.</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
    </main>
  );
}
