import type { Metadata } from 'next';
import { Section, Eyebrow } from '@/components/ui';
import RebootApplication from '@/components/RebootApplication';

export const metadata: Metadata = {
  title: 'Apply for the Midlife Reboot — Jessie.Life',
  description: 'Apply for the six-month Midlife Reboot program.',
  robots: { index: false }, // application belongs only to the Reboot journey — not main nav
};

export default function RebootApplyPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-content py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Application</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Apply for the Midlife Reboot</h1>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              <p>
                This short application helps us confirm that the Midlife Reboot matches what you
                need, that you understand the scope and investment, and that six months of
                lab-guided strategy and support is the right next step.
              </p>
              <p>
                Clear-fit applications can continue directly to enrollment. If your answers need a
                closer look, Jessie will review them before you are sent to checkout.
              </p>
            </div>
            <div className="mt-8 rounded-lg border-l-4 border-terracotta bg-cream-light p-5">
              <p className="font-body text-sm font-bold uppercase tracking-wider text-terracotta">Urgent-Care Notice</p>
              <p className="mt-2 font-body text-ink/80">
                The Midlife Reboot is not emergency or medical care. If you are experiencing urgent
                or severe symptoms, seek appropriate medical care rather than completing this
                application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <RebootApplication />
        </div>
      </Section>
    </>
  );
}
