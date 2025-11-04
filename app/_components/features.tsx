export default function FEATURESeaturesSection({
  title = "features section",
  children
}: { title?: string; children?: React.ReactNode }) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="rounded-2xl p-6 shadow">{children}</div>
      </div>
    </section>
  );
}
