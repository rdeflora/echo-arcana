export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-gray-100 grid place-items-center">
      <div className="text-center">
        <div className="text-3xl font-semibold mb-2">Location not found</div>
        <a href="/map" className="underline opacity-80 hover:opacity-100">Back to Map</a>
      </div>
    </main>
  );
}
