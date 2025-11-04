export default function Hero() {
  return (
    <section className="py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Echo Arcana — Where magic gets weird
      </h1>
      <p className="mt-4 text-lg opacity-80 max-w-2xl">
        Goblins, maps, spells, and a dash of chaos. Dive in, color something,
        or break reality (responsibly).
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="/map" className="rounded-xl px-5 py-3 border shadow">Explore the Map</a>
        <a href="/color-hall" className="rounded-xl px-5 py-3 border shadow">Visit Color Hall</a>
        <a href="/shop" className="rounded-xl px-5 py-3 border shadow">Shop Relics</a>
      </div>
    </section>
  );
}
