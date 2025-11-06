import Link from "next/link";

export default function Quiz() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-4xl font-bold mb-3">What Kind of Wizard Are You?</h1>
      <p className="opacity-80">Short chaos-friendly quiz. Results come with shareable art cards.</p>

      <div className="mt-6 rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur">
        <p className="mb-4">
          Quiz engine incoming. For now, try the{" "}
          <Link className="underline" href="/randomizer">Randomizer</Link>.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The Reckless Pyromancer</li>
          <li>The Mushroom Mystic</li>
          <li>The Goblin Who Shouldn’t Have Touched That</li>
        </ul>
      </div>
    </main>
  );
}
