export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="text-4xl font-extrabold">404 — Lost in the Weird</h1>
      <p className="mt-3 opacity-80">That page blinked out of existence. Try the map or the homepage.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a className="rounded-xl px-5 py-3 border shadow" href="/">Home</a>
        <a className="rounded-xl px-5 py-3 border shadow" href="/map">Explore the Map</a>
      </div>
    </main>
  );
}
