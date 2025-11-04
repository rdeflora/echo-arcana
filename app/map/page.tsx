import MapCanvas from "./MapCanvas";

export const metadata = {
  title: "Echo Realms — Interactive Map",
  description: "Click locations to reveal lore and links.",
};

export default function MapPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-extrabold tracking-wide mb-4">
        Echo Realms — Map (v1)
      </h1>

      <MapCanvas />

      <p className="mt-3 text-sm opacity-70">
        v1: simple pins. v2: textured map + fog-of-war + per-location pages.
      </p>
    </main>
  );
}
