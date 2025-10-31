// app/locations/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { PINS, type MapPin } from "../../map/pins";

type Props = { params: { id: string } };

export default function LocationPage({ params }: Props) {
  const loc = PINS.find((p) => p.id === params.id);
  if (!loc) return notFound();

  return (
    <main className="min-h-screen bg-black text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold">{loc.name}</h1>
          <div className="flex gap-2">
            <Link
              href={`/map?focus=${loc.id}`}
              className="rounded-xl border border-gray-700 px-3 py-1 hover:bg-gray-800"
            >
              ← Back to Map
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-gray-700 px-3 py-1 hover:bg-gray-800"
            >
              Home
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-950 p-4">
          {loc.desc && <p className="opacity-90">{loc.desc}</p>}
          <p className="mt-4 text-sm opacity-70">
            Coords: {loc.x.toFixed(1)}%, {loc.y.toFixed(1)}% — edit in{" "}
            <code>app/map/pins.ts</code>.
          </p>
        </div>
      </div>
    </main>
  );
}
