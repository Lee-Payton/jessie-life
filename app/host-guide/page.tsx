import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton, FinalCta } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Host Location Guide: Jessie.Life',
  description:
    'Space requirements, equipment options, appointment timing, testing flow, and safety procedures for hosting RMR and VO₂ Max metabolic testing.',
};

export default function HostGuidePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>For Hosts</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Host Location Guide</h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              This guide covers the practical details of hosting a metabolic testing day:
              space requirements, equipment options, appointment timing, how the testing flow
              works, and the safety procedures in place. Exact logistics are always finalized with
              each host based on the location and testing format.
            </p>
            <div className="mt-8">
              <CtaButton href="/host#host-form">Submit a Host Inquiry</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Space Requirements */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Space requirements</h2>
          <p className="mt-4 font-body text-lg text-ink/80">Here&rsquo;s what I need from the location:</p>
          <div className="mt-6">
            <CheckList
              items={[
                'A climate-controlled indoor space with access to power',
                'For RMR, a quiet area where the participant can sit, recline, or lie comfortably',
                'For VO₂ Max, access to an appropriate treadmill, stationary bike, assault bike, rower, or other agreed equipment based on participant fitness levels',
                'Enough room to safely perform and monitor the testing',
                'Basic venue access and event coordination',
              ]}
            />
          </div>
          <p className="mt-6 font-body text-ink/70">
            Exact space, equipment, scheduling, setup, and event logistics are worked out with
            each host based on the location and testing format.
          </p>
        </div>
      </Section>

      {/* Section 3 — Equipment Options */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Equipment options</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">RMR</h3>
              <p className="mt-3 font-body text-ink/70">
                A comfortable chair, recliner, or treatment table is enough. Participants sit or
                lie quietly for the measurement, so no exercise equipment is needed.
              </p>
            </div>
            <div>
              <h3 className="text-lg">VO₂ Max</h3>
              <p className="mt-3 font-body text-ink/70">
                Testing can be performed on a treadmill (with incline capability preferred), a
                stationary bike, an assault bike, or a rower. The equipment used is matched to what
                is already available on-site and to each participant&rsquo;s fitness level.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4 — Appointment Timing */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Appointment timing</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">RMR appointments</h3>
              <p className="mt-3 font-body text-ink/70">
                The breath measurement itself takes about 10 minutes. Plan approximately 30 to 40
                minutes per appointment, including setup, time to settle into a resting state,
                testing, and equipment reset.
              </p>
            </div>
            <div>
              <h3 className="text-lg">VO₂ Max appointments</h3>
              <p className="mt-3 font-body text-ink/70">
                After a short warm-up, the active testing portion generally lasts about 8 to 12
                minutes, followed by a cool-down. Plan approximately 40 to 50 minutes per
                appointment.
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-ink/70">
            When both tests are completed back-to-back, plan approximately 60 to 75 minutes per
            participant. Exact appointment spacing is set based on the event schedule and expected
            participation.
          </p>
        </div>
      </Section>

      {/* Section 5 — Testing Flow */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">How the testing flow works</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            I manage the participant testing process from start to finish:
          </p>
          <div className="mt-6">
            <CheckList
              items={[
                'Participants receive test-specific preparation instructions and a health and exercise screening before their appointment',
                'I arrive with the metabolic testing equipment, masks, accessories, and testing supplies',
                'Each appointment includes setup, the measurement itself, and a brief explanation of what to expect',
                'I handle cleaning and equipment reset between appointments',
                'Participants receive their results and follow-up directly from me',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Section 6 — Safety Procedures */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Safety procedures</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Every participant completes a short health and exercise readiness screening before
              testing. Some symptoms, medical conditions, medications, recent illness, injuries, or
              exercise limitations may affect whether testing is appropriate that day.
            </p>
            <p>
              VO₂ Max testing is a fitness and wellness assessment, not a diagnostic cardiac stress
              test. People with known or suspected heart or lung disease, unexplained chest pain,
              fainting, or significant exercise symptoms should be evaluated medically before
              participating, and testing can be declined on-site if a safety concern arises.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 7 — Final CTA */}
      <FinalCta
        title="Ready to bring testing to your location?"
        texture="tr"
        actions={
          <a href="/host#host-form" className="btn-forest w-full whitespace-nowrap sm:w-auto">
            Submit a Host Inquiry
          </a>
        }
      >
        <p>
          Submit a host inquiry with your location, audience, and preferred dates, and I&rsquo;ll
          follow up with a proposal built around your space and schedule.
        </p>
      </FinalCta>
    </>
  );
}
