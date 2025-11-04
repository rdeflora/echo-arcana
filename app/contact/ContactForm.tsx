"use client";

export default function ContactForm() {
  return (
    <form className="space-y-3" onSubmit={async (e) => {
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const body = {
        name: (form as any).name.value,
        email: (form as any).email.value,
        message: (form as any).message.value,
      };
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      alert(r.ok ? "Sent! We’ll reply soon." : "Could not send. Try again later.");
      if (r.ok) form.reset();
    }}>
      <input name="name" placeholder="Your name" className="w-full rounded-md border bg-black/30 p-3" required />
      <input type="email" name="email" placeholder="Email" className="w-full rounded-md border bg-black/30 p-3" required />
      <textarea name="message" placeholder="Your message" className="w-full rounded-md border bg-black/30 p-3 min-h-32" required />
      <button className="rounded-lg border px-5 py-2">Send</button>
    </form>
  );
}
