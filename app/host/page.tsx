import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton } from '@/components/ui';
import HostForm from '@/components/HostForm';

export const metadata: Metadata = {
  title: 'Bring Jessie to Your Location — Jessie.Life',
  description:
    'Bring portable RMR and VO₂ max testing to your gym, studio, clinic, med spa, office, retreat, or wellness event.',
};

export default function HostPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>For Organizations</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              Bring useful metabolic testing to your people — right where they already are.
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Jessie brings portable resting metabolic rate and VO₂ max testing to gyms, studios,
              offices, clinics, med spas, retreats, and wellness events. Your members, employees,
              clients, or guests get objective information they can use — without being sent across
              town to a hospital lab.
            </p>
            <div className="mt-8">
              <a href="#host-form" className="btn-primary">Request a Testing Event</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Better Than a Generic Wellness Talk */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Better than another generic wellness talk</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Most wellness events give people broad advice they have already heard: move more, eat
              better, sleep eight hours, try not to be stressed. Metabolic testing gives them
              something specific — a measured starting point and a reason to pay attention.
            </p>
            <p>
              Depending on the event, participants can learn about their resting energy needs, fuel
              use, aerobic fitness, training zones, or the ways metabolism and cardiorespiratory
              capacity connect with health, performance, and healthy aging.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — Who This Works For */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Who this works for</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ['Gyms and performance facilities', 'Give members measurable baselines, individualized training information, and a reason to retest after a training block.'],
              ['Pilates and boutique fitness studios', 'Add a high-value assessment that supports strength, longevity, recovery, and member education — especially for midlife clients who want more than a calorie estimate.'],
              ['Med spas, wellness clinics, and hormone practices', 'Pair your existing services with objective information about resting metabolism, aerobic fitness, and fuel use without purchasing or staffing a full metabolic lab.'],
              ['Corporate offices and employee wellness programs', 'Offer a practical health event that goes beyond a lunch-and-learn and gives employees individualized information in a convenient on-site format.'],
              ['Retreats, conferences, and wellness events', 'Create a memorable, science-based experience that can stand alone or support programming around midlife health, performance, resilience, or longevity.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 font-body text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — Event Options */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Event options</h2>
          <div className="mt-8 space-y-6">
            {[
              ['RMR Testing Pop-Up', 'Individual resting metabolic rate appointments scheduled throughout the event. Best for nutrition, weight-management, body-composition, and midlife-health audiences.'],
              ['VO₂ Max Testing Day', 'Progressive active testing for healthy participants seeking fitness, performance, training-zone, or longevity information. Requires appropriate exercise equipment and screening.'],
              ['Combined Metabolic Testing Event', 'Offer both resting and active testing, either to the same participants or as separate appointment types.'],
              ['Midlife Metabolism Workshop + Testing', 'A practical educational session for women in perimenopause and menopause paired with RMR testing or a limited number of individual audits.'],
              ['Custom Retreat or Wellness-Day Format', 'A tailored mix of education, individual testing, short result orientations, and follow-up options based on the event audience and schedule.'],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-terracotta pl-5">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-1 font-body text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 5 & 6 — What Host Gets / What Space Needs */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl">What the host gets</h2>
            <div className="mt-4">
              <CheckList
                items={[
                  'A distinctive, evidence-informed wellness or performance offering',
                  'A booking process that can be handled through Jessie’s Practice Better system',
                  'Preparation instructions and participant communication',
                  'Portable testing equipment and on-site administration',
                  'Electronic report delivery to participants',
                  'Optional co-branded promotional language and graphics',
                  'A clear plan for follow-up testing or referrals when appropriate',
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl">What the space needs</h2>
            <div className="mt-4">
              <CheckList
                items={[
                  'Reliable Wi-Fi and access to power',
                  'A quiet, temperature-controlled area where RMR participants can rest undisturbed',
                  'A treadmill, stationary bike, rower, or agreed exercise setup for active testing',
                  'Enough room for safe movement, equipment, cleaning, and participant transitions',
                  'A point person for venue access and event coordination',
                  'A participant list or booking plan finalized before the event',
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7 — How Booking Works */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">How booking works</h2>
          <ol className="mt-6 space-y-4">
            {[
              'Submit the host inquiry form with your location, audience, estimated participation, and preferred dates.',
              'Jessie will review the fit, equipment, travel, and event format and provide a proposal.',
              'Once confirmed, participants receive a booking link, preparation instructions, and any required screening forms.',
              'Testing is completed on site, and reports are delivered electronically.',
              'Retesting, individual consultations, or Midlife Reboot referrals can be arranged separately when appropriate.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4 font-body text-lg text-ink/80">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-terracotta font-body text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Section 8 — Host Inquiry Form */}
      <Section id="host-form" bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Host inquiry</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            Tell Jessie about your location and audience, and she&rsquo;ll follow up with a proposal.
          </p>
          <div className="mt-8">
            <HostForm />
          </div>
        </div>
      </Section>

      {/* Section 9 — Final CTA */}
      <Section bg="forest" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-white md:text-4xl">
            Give people more than advice. Give them a measurement they can act on.
          </h2>
          <div className="mt-8">
            <a href="#host-form" className="btn-primary">Request a Testing Event</a>
          </div>
        </div>
      </Section>
    </>
  );
}
