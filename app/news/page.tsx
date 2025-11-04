import Link from "next/link";
import { posts } from "./posts";

export const metadata = { title: "Echo Arcana — News" };

export default function NewsIndex() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-extrabold">News</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="rounded-xl border shadow p-4">
            <div className="text-xs opacity-60">{p.date}</div>
            <div className="text-lg font-bold">{p.title}</div>
            <p className="opacity-80 mt-1">{p.blurb}</p>
            <Link className="text-sm underline mt-2 inline-block" href={`/news/${p.slug}`}>Read</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
