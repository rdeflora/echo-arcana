import Hero from "./_components/hero";
import FeaturesSection from "./_components/features";

export const metadata = {
  title: "Echo Arcana — Where magic gets weird",
  description: "Maps, lore, goblin wizardry, and community creations.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-12">
      <Hero />
      <FeaturesSection />
    </main>
  );
}
