export type Post = { slug: string; title: string; date: string; blurb: string; body: string };
export const posts: Post[] = [
  {
    slug: "launch-shenanigans",
    title: "Site Awakens (and Immediately Gets Weird)",
    date: "2025-11-04",
    blurb: "The portal opens. Goblins spill out. We pretend this was the plan.",
    body: "Echo Arcana is live(ish). Expect maps, lore drops, and experimental chaos. If something breaks, it was totally a test."
  },
  {
    slug: "color-hall-open",
    title: "Color Hall: Fan Gallery Opens",
    date: "2025-11-04",
    blurb: "Post your colored pages. Nibbler will definitely not eat them.",
    body: "Upload your art on the Color Hall page and brag responsibly. We’ll showcase favorites on the homepage."
  }
];
