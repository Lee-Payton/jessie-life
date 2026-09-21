import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton, FinalCta } from '@/components/ui';
import HostForm from '@/components/HostForm';

export const metadata: Metadata = {
  title: 'Bring Jessie to Your Location: Jessie.Life',
  description:
    'Bring portable RMR and VO₂ max testing to your gym, studio, clinic, med spa, office, retreat, or wellness event.',
};

export default function HostPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>For Organizations</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              Bring useful metabolic testing to your people, right where they already are.
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Jessie brings portable resting metabolic rate and VO₂ max testing to gyms, studios,
              offices, clinics, med spas, retreats, and wellness events. Your members, employees,
              clients, or guests get objective information they can use, without being sent across
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
              something specific: a measured starting point and a reason to pay attention.
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
              ['Pilates and boutique fitness studios', 'Add a high-value assessment that supports strength, longevity, recovery, and member education, especially for midlife clients who want more than a calorie estimate.'],
              ['Med spas, wellness clinics, and hormone practices', 'Pair your existing services with objective information about resting metabolism, aerobic fitness, and fuel use without purchasing or staffing a full metabolic lab.'],
              ['Corporate offices and employee wellness programs', 'Offer a practical health event that goes beyond a lunch-and-learn and gives employees individualized information in a convenient on-site format.'],
              ['Retreats, conferences, and wellness events', 'Create a memorable, science-based experience that can stand alone or support programming around midlife health, performance, resilience, or longevity.'],
              ['Residential communities, condos, and resorts', 'Offer residents or guests a convenient, data-driven wellness service using space and fitness equipment already available on-site. Testing can be scheduled as individual appointments and can appeal to people interested in fitness, healthy aging, weight management, performance, or simply understanding their health better.'],
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
              ['RMR Testing', 'Individual resting metabolic rate appointments scheduled throughout the event. Especially useful for nutrition, weight management, body composition, muscle preservation, GLP-1 support, and midlife-health audiences.'],
              ['VO₂ Max Testing', 'Individualized active metabolic testing that provides participants with objective information about cardiorespiratory fitness, training zones, thresholds, fuel use, recovery, performance, and healthy aging.'],
              ['Combined Metabolic Testing', 'Offer both resting and active metabolic testing based on the audience, available equipment, and event schedule. Participants can book one test or both.'],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-terracotta pl-5">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-1 font-body text-ink/70">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-lg text-ink/80">
            Testing can also be incorporated into retreats, corporate wellness programs,
            healthy-aging events, women&rsquo;s health programming, and other custom events.
            Educational sessions can be added when they make sense for the audience and location.
          </p>
        </div>
      </Section>

      {/* Section 5 & 6 — What Host Gets / What Space Needs */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl">Easy to offer. Minimal extra work for your team.</h2>
            <p className="mt-4 font-body text-ink/70">
              I manage the participant testing process so your team can offer a high-value
              metabolic and fitness service without purchasing specialized equipment or learning
              how to administer and interpret the testing themselves.
            </p>
            <div className="mt-4">
              <CheckList
                items={[
                  'Participant booking and communication can be handled through my system',
                  'Participants receive test-specific preparation instructions and health and exercise screening',
                  'I bring the metabolic testing equipment, masks, accessories, and testing supplies',
                  'I administer the testing and handle cleaning and reset between appointments',
                  'Participants receive their results and follow-up directly from me',
                  'Promotional language and graphics can be coordinated with the host when useful',
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl">What I need from the location</h2>
            <div className="mt-4">
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
            <p className="mt-4 font-body text-ink/70">
              Exact space, equipment, scheduling, setup, and event logistics are worked out with
              each host based on the location and testing format.
            </p>
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

      {/* Section 7b — More Value For Existing Services */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">More value for the services you already provide</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            Metabolic testing is designed to add useful information to the relationship your
            members or clients already have with you. It gives trainers, practitioners, and
            wellness teams objective data they can use to make their existing work more precise.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">For gyms, studios, and trainers</h3>
              <p className="mt-3 font-body text-ink/70">
                VO₂ testing provides individualized training zones, ventilatory thresholds,
                cardiorespiratory-fitness data, fuel-use information, and a measurable baseline for
                retesting. RMR adds a measured energy baseline that can provide useful context
                around fueling, body composition, muscle-building, or weight-management goals.
              </p>
              <p className="mt-3 font-body text-ink/70">
                The result is more useful information for programming, recovery decisions, client
                education, and demonstrating progress over time.
              </p>
            </div>
            <div>
              <h3 className="text-lg">
                For hormone, weight-management, GLP-1, wellness, and healthy-aging practices
              </h3>
              <p className="mt-3 font-body text-ink/70">
                RMR and VO₂ testing add measured information about resting energy expenditure, fuel
                use, cardiorespiratory fitness, and exercise response to services you already
                provide, without requiring your practice to purchase specialized metabolic
                equipment or train staff to perform the testing.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
            <h3 className="text-lg">Working together</h3>
            <p className="mt-2 font-body text-ink/70">
              With the participant&rsquo;s permission, relevant testing results can be shared with
              their existing trainer, practitioner, or clinician so they can decide how best to use
              the information within the services they already provide.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 7c — Host Location Guide CTA */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">Want to know what a testing day actually requires?</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            View the Host Location Guide for space requirements, equipment options, appointment
            timing, testing flow, safety procedures, and other practical details.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/host-guide" variant="secondary">View the Host Location Guide</CtaButton>
          </div>
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
      <FinalCta
        title="Give people more than advice. Give them a measurement they can act on."
        texture="tr"
        actions={
          <a href="#host-form" className="btn-forest w-full whitespace-nowrap sm:w-auto">
            Request a Testing Event
          </a>
        }
      />
    </>
  );
}
