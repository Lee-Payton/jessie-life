import type { Metadata } from 'next';
import { Section, Eyebrow, CtaButton, FinalCta } from '@/components/ui';
import Accordion from '@/components/Accordion';
import { rebootFaqs, testingFaqs } from '@/lib/faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions: Jessie.Life',
  description:
    'Answers about program scope, labs, payment, remote participation, and metabolic testing for the Midlife Reboot and Metabolic Testing.',
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Answers to scope, lab, program, payment, remote, and testing questions, grouped by
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

      <FinalCta
        title="Still have questions?"
        texture="tl"
        actions={
          <>
            <a href="/reboot" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              Explore the Midlife Reboot
            </a>
            <a href="/audit" className="btn-forest-outline w-full whitespace-nowrap sm:w-auto">
              Start With an Audit
            </a>
          </>
        }
      >
        <p>Start with the level of support that fits where you are now.</p>
      </FinalCta>
    </>
  );
}
