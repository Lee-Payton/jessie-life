import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-content grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              Stop guessing what happened to your body.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-neutral-700">
              If your energy, sleep, weight, strength, mood, recovery, or hormones feel
              like they changed the rules without warning, you do not need another generic
              plan telling you to eat less, push harder, or &ldquo;just be consistent.&rdquo;
            </p>
            <p className="mt-4 max-w-xl font-body text-lg text-neutral-700">
              You need a better way to understand what is actually happening in your body
              — and a realistic strategy for hormones, metabolism, strength, energy, and
              long-term resilience that fits the life you are actually living.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/reboot" className="btn-primary">Explore the Midlife Reboot</Link>
              <Link href="/audit" className="btn-secondary">Start With a Metabolism Audit</Link>
            </div>
          </div>
          <div className="relative">
            {/* PHOTO DIRECTION: strong, current photo of Jessie, warm and direct — not stock */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-neutral-200 text-center font-body text-sm text-neutral-500">
              Hero photo of Jessie
              <br />(warm, direct, real)
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Every Woman's Menopause Is Different */}
      <section className="container-content py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Every woman&rsquo;s menopause is different.</h2>
          <p className="mt-6 font-body text-lg text-neutral-700">
            Your symptoms, hormones, metabolism, nervous system, history, personality,
            stress load, and lifestyle all matter. You don&rsquo;t need more generic advice.
            You need a better way to understand what&rsquo;s happening in your body, identify
            relevant patterns, and take the next right step.
          </p>
          <p className="mt-4 font-body text-lg text-neutral-700">
            Midlife has a way of making old strategies stop working — sometimes quietly,
            sometimes like your body staged a full internal coup. It means this is the time
            to stop treating your symptoms, labs, metabolism, hormones, and lifestyle like
            they are all separate conversations.
          </p>
        </div>
      </section>

      {/* Section 4 — Choose Your Starting Point */}
      <section className="bg-neutral-50 py-20">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">Choose your starting point</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <StartCard
              title="The Midlife Reboot"
              body="A six-month, lab-guided health strategy for women navigating perimenopause, menopause, hormone therapy, metabolism changes, and burnout."
              cta="Explore the Midlife Reboot"
              href="/reboot"
            />
            <StartCard
              title="The Midlife Metabolism Audit"
              body="A focused whole-health consultation built around measured resting metabolism and the real-life factors affecting how your body works right now."
              cta="Start With an Audit"
              href="/audit"
              price="$295 • fee applies to the Reboot within 14 days"
            />
            <StartCard
              title="Metabolic & Fitness Testing"
              body="Measure your resting metabolism or cardiovascular fitness instead of relying on generic formulas, wearable estimates, or calorie guesses."
              cta="View Testing"
              href="/metabolism"
              price="RMR & VO₂ testing available separately"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — Resource Lab */}
      <section className="container-content py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">
            Complicated science. Useful explanations.
          </h2>
          <p className="mt-6 font-body text-lg text-neutral-700">
            The Resource Lab is where I turn research about hormones, metabolism, lab
            testing, strength, and midlife health into practical resources you can actually
            use — without falling into a full-time research hole.
          </p>
          <div className="mt-8">
            <Link href="/lab" className="btn-primary">Enter the Resource Lab</Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Final CTA */}
      <section className="bg-cream py-20">
        <div className="container-content mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">
            You do not need to fix everything today. You need the right next step.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/reboot" className="btn-primary">Explore the Midlife Reboot</Link>
            <Link href="/audit" className="btn-secondary">Start With an Audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StartCard({
  title,
  body,
  cta,
  href,
  price,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
  price?: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8">
      <h3 className="text-xl">{title}</h3>
      <p className="mt-4 flex-1 font-body text-neutral-600">{body}</p>
      {price && <p className="mt-4 font-heading text-sm font-semibold text-coral">{price}</p>}
      <div className="mt-6">
        <Link href={href} className="font-heading text-sm font-semibold uppercase tracking-wide text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral">
          {cta} →
        </Link>
      </div>
    </div>
  );
}
