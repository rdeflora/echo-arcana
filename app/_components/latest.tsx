type Vid = { id: string; title: string };
const latest: Vid[] = [
  { id: "dQw4w9WgXcQ", title: "GrizzleWhick — Baby Wand Mishap" }, // replace with your IDs
  { id: "oHg5SJYRHA0", title: "Potion Panic Teaser" },
  { id: "9bZkp7q19f0", title: "Map Reveal: Hollow Fen" },
];

export default function Latest() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-3">Latest Spells</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {latest.map(v => (
          <div key={v.id} className="rounded-xl border shadow p-3">
            <div className="aspect-video rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="mt-2 text-sm opacity-90">{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
