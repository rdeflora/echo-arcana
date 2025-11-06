"use client";

const spells = [
  "Chaos Spark — harmless… probably.",
  "Goblin Grease — 30% slip, 70% regret.",
  "Temporal Whoops — you were already late.",
];
const prophecies = [
  "Never trust a smiling mimic.",
  "If the dice fall, fate rejected your roll.",
  "Beware the seventh duck.",
];
const goblin = [
  "I didn’t break it. It evolved.",
  "Fireball is just accelerated friendship.",
  "If it hisses, it’s probably magic. Or a cat.",
];

function pick<T>(arr: T[]) { return arr[Math.floor(Math.random()*arr.length)]; }

export default function Randomizer() {
  const roll = () => {
    const table = [spells, prophecies, goblin][Math.floor(Math.random()*3)];
    const kind = table===spells ? "Spell" : table===prophecies ? "Prophecy" : "Goblin Wisdom";
    return { kind, text: pick(table) };
  };

  const res = roll();
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">Echo Arcana Randomizer</h1>
      <p className="opacity-80 mb-6">Click the sigil. Accept your fate.</p>
      <button
        onClick={() => location.reload()}
        className="rounded-xl bg-white/90 text-zinc-900 font-semibold px-6 py-3 hover:bg-white"
      >
        🔮 Roll the Sigil
      </button>
      <div className="mt-8 rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur">
        <div className="text-sm opacity-70">{res.kind}</div>
        <div className="text-2xl mt-1">{res.text}</div>
      </div>
    </main>
  );
}
