export const metadata = { title: "Join the Goblin Council" };

export default function Contact() {
  return (
    <main className="mx-auto max-w-xl p-6 space-y-6">
      <h1 className="text-3xl font-extrabold">Join the Goblin Council</h1>
      <p className="opacity-80">Receive secret prophecies, drops, and chaos. No spam—just goblins.</p>
      <form className="space-y-3" method="post" action="/api/subscribe">
        <input required name="email" type="email" placeholder="you@realm.com" className="w-full rounded-xl px-4 py-3 bg-black border" />
        <button className="rounded-xl px-5 py-3 border shadow">Pledge my inbox</button>
      </form>
      <p className="text-xs opacity-60">We’ll wire this to Mailchimp or a webhook in Phase 1.5.</p>
    </main>
  );
}
