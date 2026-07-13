import type { Metadata } from 'next';
import { Section, Eyebrow, CtaButton } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { rebootFaqs, testingFaqs } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Jessie.Life',
  description:
    'Answers about program scope, labs, payment, remote participation, and metabolic testing for the Midlife Reboot and Metabolic Testing.',
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-content py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Answers to scope, lab, program, payment, remote, and testing questions — grouped by
              service.
            </p>
          </div>
        </div>
      </section>

      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl">Midlife Reboot FAQs</h2>
          <div className="mt-6">
            <Accordion items={rebootFaqs} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl">Metabolic Testing FAQs</h2>
          <div className="mt-6">
            <Accordion items={testingFaqs} />
          </div>
          <div className="mt-8">
            <CtaButton href="/host" variant="secondary">Bring Jessie to Your Location</CtaButton>
          </div>
        </div>
      </Section>

      <Section bg="forest" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-white md:text-4xl">Still have questions?</h2>
          <p className="mt-6 font-body text-lg text-white/80">
            Start with the level of support that fits where you are now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/reboot" className="btn-primary">Explore the Midlife Reboot</a>
            <a href="/audit" className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-forest">
              Start With an Audit
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
