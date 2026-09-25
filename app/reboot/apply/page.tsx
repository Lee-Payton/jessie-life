import type { Metadata } from 'next';
import Script from 'next/script';
import { Section, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Apply for the Midlife Reboot: Jessie.Life',
  description: 'Apply for the six-month Midlife Reboot program.',
  robots: { index: false }, // application belongs only to the Reboot journey — not main nav
};

export default function RebootApplyPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
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
          </div>
        </div>
      </section>

      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/Ech8l2HP8JG3ZVfEpcgH"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-Ech8l2HP8JG3ZVfEpcgH"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 1: Midlife Reboot Application"
            data-height="5088"
            data-layout-iframe-id="inline-Ech8l2HP8JG3ZVfEpcgH"
            data-form-id="Ech8l2HP8JG3ZVfEpcgH"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Form 1: Midlife Reboot Application"
          />
        </div>
      </Section>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
