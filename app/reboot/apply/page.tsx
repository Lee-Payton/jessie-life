import type { Metadata } from 'next';
import { Section, Eyebrow } from '@/components/ui';
import ApplicationForm from '@/components/ApplicationForm';

export const metadata: Metadata = {
  title: 'Apply for the Midlife Reboot — Jessie.Life',
  description: 'Apply for the six-month Midlife Reboot program.',
  robots: { index: false }, // reached only via Reboot CTAs
};

export default function RebootApplyPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-content py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Application</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Apply for the Midlife Reboot</h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Complete the application honestly. Complexity does not automatically make you a poor
              fit, but some situations require closer coordination with licensed medical
              professionals or care that is outside Jessie&rsquo;s scope. Applications that need a
              closer look will be reviewed before checkout.
            </p>
            <p className="mt-4 font-body text-sm text-ink/60">
              Six months • $1,500 • Lab fees are separate • Payment plan available
            </p>
          </div>
        </div>
      </section>

      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <ApplicationForm />
        </div>
      </Section>
    </>
  );
}
