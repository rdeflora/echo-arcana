export default function Featured() {
  return (
    <section className="my-12 rounded-2xl border p-6 shadow">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src="/echo/featured/grizz-sticker.png"
          alt="GrizzleWhick Featured"
          className="w-full md:w-64 aspect-[4/5] object-cover rounded-xl border"
          loading="lazy"
        />
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Artifact</h2>
          <p className="mt-2 opacity-80">
            Today’s chaos: <span className="font-semibold">GrizzleWhick—Baby Wand Mishap</span>. 
            Click through for the full gallery, captions, and behind-the-scenes notes.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="/color-hall" className="rounded-xl px-5 py-3 border shadow">
              View in Color Hall
            </a>
            <a href="/lore" className="rounded-xl px-5 py-3 border shadow">
              Read the Lore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
