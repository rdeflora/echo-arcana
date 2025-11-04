import { SITE } from "./site";
export default function LinksPortal() {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold mb-3">Portals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a className="rounded-xl px-5 py-4 border shadow text-center hover:scale-[1.01] transition" href={SITE.links.tiktok}>TikTok</a>
        <a className="rounded-xl px-5 py-4 border shadow text-center hover:scale-[1.01] transition" href={SITE.links.youtube}>YouTube</a>
        <a className="rounded-xl px-5 py-4 border shadow text-center hover:scale-[1.01] transition" href={SITE.links.instagram}>Instagram</a>
      </div>
    </section>
  );
}
