import Hero from "./_components/hero";
import FeaturesSection from "./_components/features";
import Latest from "./_components/latest";
import Featured from "./_components/featured"; // <-- new section

export const metadata = {
  title: "Echo Arcana — Where magic gets weird",
  description: "Maps, lore, goblin wizardry, and community creations.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Artifact Section */}
      <Featured />

      {/* Latest Updates Section */}
      <Latest />
    </main>
  );
}
