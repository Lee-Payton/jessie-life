import Link from 'next/link';

// Temporary stub for pages that are structurally wired but not yet built out.
// Keeps navigation working end-to-end during the build phase.
export default function PageStub({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="container-content py-24 md:py-32">
      <p className="font-heading text-sm font-semibold uppercase tracking-widest text-coral">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">{title}</h1>
      <p className="mt-6 max-w-2xl font-body text-lg text-neutral-600">{description}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn-primary">Back to Home</Link>
        <Link href="/reboot" className="btn-secondary">Explore the Reboot</Link>
      </div>
      <p className="mt-16 rounded-lg bg-neutral-50 px-5 py-4 font-body text-sm text-neutral-500">
        This page is scaffolded and routed. Full content from the controlling brief
        will be built in the priority build order.
      </p>
    </section>
  );
}
