import CouncilBox from "./_components/council";
import Hero from "./_components/hero";
import FeaturesSection from "./_components/features";
import Latest from "./_components/latest";
import LinksPortal from "./_components/links-portal";

export const metadata = {
  title: "Echo Arcana — Where magic gets weird",
  description: "Maps, lore, goblin wizardry, and community creations.",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-12">
      <Hero />
      <FeaturesSection />
      <Latest />
      <LinksPortal />
      <div className="space-y-12"></div>
</main>
  );
}

import GoblinsSection from "./_components/goblins";


{/* ——— Meet the Goblins ——— */}
<GoblinsSection />
{/* ——— Council Signup ——— */}
<CouncilBox />
