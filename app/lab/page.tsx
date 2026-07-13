import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton } from '@/components/ui';
import EmailSignup from '@/components/EmailSignup';

export const metadata: Metadata = {
  title: 'The Resource Lab — Jessie.Life',
  description:
    'A private education library for women who want better explanations about hormones, metabolism, medications, supplements, lab testing, strength, longevity, and midlife health.',
};

export default function LabPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Education Library</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">The Resource Lab</h1>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              <p>
                A private education library for women who want better explanations about hormones,
                metabolism, medications, supplements, lab testing, strength, longevity, and midlife
                health — without having to live in research mode.
              </p>
              <p>
                The Resource Lab is where I share practical breakdowns of new science, health trends,
                testing options, medications, supplements, and the questions that come up when you
                are trying to make informed decisions about your body.
              </p>
              <p>
                Some resources are free with access. Others are reserved for clients, testing
                participants, or paid resource tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What You'll Find Inside */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">
            Practical context for the health topics everyone is talking about… or should be.
          </h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Inside the Resource Lab, I share clear, grounded explanations about the science,
              trends, tests, tools, and options that come up in midlife health.
            </p>
            <p>You may find resources on:</p>
          </div>
          <div className="mt-4">
            <CheckList
              items={[
                'New hormone, menopause, and longevity research',
                'Medications, supplements, peptides, and popular health trends',
                'Metabolic testing, VO₂, wearables, and fitness data',
                'Lab markers, testing options',
                'Nutrition, strength, recovery, and resilience in midlife',
                'Questions worth asking before jumping into the next protocol, product, or promise',
              ]}
            />
          </div>
          <p className="mt-6 font-body text-lg text-ink/80">
            The Resource Lab is for education and context. It can help you understand the landscape,
            ask better questions, and decide what may be worth exploring further.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="#join">Get Free Access to the Resource Lab</CtaButton>
            <CtaButton href="/metabolism" variant="secondary">Explore Midlife Metabolism Testing</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 3 — How Access Works */}
      <Section id="join">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl">How access works</h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            Join with just your email to receive new resources, research breakdowns, and practical
            tools as they are released.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <EmailSignup source="resource-lab" buttonLabel="Get Free Access" />
          </div>
        </div>
      </Section>

      {/* Section 4 — Featured Resources */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Featured resources</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            Explore resources by topic — hormone therapy, symptom guides, lab explainers, metabolic
            health, strength, and client decision tools.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {['Hormone Therapy', 'Symptom Guides', 'Lab Explainers', 'Metabolic Health', 'Strength', 'Decision Tools'].map((topic) => (
              <div key={topic} className="rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
                <p className="eyebrow">Category</p>
                <h3 className="mt-2 font-display text-xl">{topic}</h3>
                <p className="mt-2 font-body text-sm text-ink/60">Resources coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
