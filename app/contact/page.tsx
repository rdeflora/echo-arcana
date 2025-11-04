export const metadata = { title: "Contact — Echo Arcana" };
export default function ContactPage() {
  async function submit(formData: FormData) {
    "use server";
  }
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <form className="space-y-3" onSubmit={async (e) => {
        e.preventDefault();
        const body = {
          name: (e.currentTarget as any).name.value,
          email: (e.currentTarget as any).email.value,
          message: (e.currentTarget as any).message.value,
        };
        const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        alert(r.ok ? "Sent! We’ll reply soon." : "Could not send. Try again later.");
        if (r.ok) (e.currentTarget as HTMLFormElement).reset();
      }}>
        <input name="name" placeholder="Your name" className="w-full rounded-md border bg-black/30 p-3" required />
        <input type="email" name="email" placeholder="Email" className="w-full rounded-md border bg-black/30 p-3" required />
        <textarea name="message" placeholder="Your message" className="w-full rounded-md border bg-black/30 p-3 min-h-32" required />
        <button className="rounded-lg border px-5 py-2">Send</button>
      </form>
    </main>
  );
}
