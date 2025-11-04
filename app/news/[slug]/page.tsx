import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../posts";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default function NewsPost({ params }: Params) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <Link href="/news" className="text-sm underline">← Back to News</Link>
      <article className="space-y-3">
        <div className="text-xs opacity-60">{post.date}</div>
        <h1 className="text-3xl font-extrabold">{post.title}</h1>
        <p className="opacity-90 whitespace-pre-wrap">{post.body}</p>
      </article>
    </main>
  );
}
