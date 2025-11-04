import FeaturesSection from "../_components/features";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-10">
      <section className="py-14">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Echo Arcana — Where magic gets weird
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Goblins, maps, spells, and a dash of chaos. Dive in, color something, or break reality (responsibly).
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/map" className="rounded-xl px-5 py-3 border shadow">Explore the Map</a>
          <a href="/color-hall" className="rounded-xl px-5 py-3 border shadow">Visit Color Hall</a>
        </div>
      </section>
      <FeaturesSection />
    </main>
  );
}
