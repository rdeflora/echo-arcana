import ContactForm from "./ContactForm";

export const metadata = { title: "Contact — Echo Arcana" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <ContactForm />
    </main>
  );
}
