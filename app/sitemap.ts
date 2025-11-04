export default async function sitemap() {
  const base = process.env.SITE_URL ?? "http://localhost:3001";
  const now = new Date().toISOString();
  const routes = ["", "map", "color-hall", "lore", "news", "games", "shop", "contact"];
  return routes.map((r) => ({
    url: `${base}/${r}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "" ? 1.0 : 0.6,
  }));
}
