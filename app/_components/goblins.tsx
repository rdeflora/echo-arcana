export default function GoblinsSection() {
  const folks = [
    { name: "GrizzleWhick", role: "Chaos Wizard", line: "Every spell’s a hypothesis. Some explode." },
    { name: "Redwina", role: "Alchemist (Strict)", line: "Label your potions or label your gravestone." },
    { name: "Nibbler", role: "Pet? Problem.", line: "Eats candles. Probably fine." },
  ];
  return (
    <section className="rounded-2xl border shadow p-6">
      <h2 className="text-2xl font-bold">Meet the Goblins</h2>
      <p className="opacity-80 mt-1">A charming disaster of a friend group.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {folks.map(f => (
          <div key={f.name} className="rounded-xl border p-4">
            <div className="text-lg font-semibold">{f.name}</div>
            <div className="text-sm opacity-70">{f.role}</div>
            <div className="text-sm mt-2 italic opacity-90">“{f.line}”</div>
          </div>
        ))}
      </div>
    </section>
  );
}
