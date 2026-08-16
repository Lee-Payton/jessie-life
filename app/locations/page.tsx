import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton, FinalCta } from '@/components/ui';
import EmailSignup from '@/components/EmailSignup';
import LocationCard from '@/components/LocationCard';
import { testingLocations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Upcoming Testing Locations — Jessie.Life',
  description:
    'See where metabolism and VO₂ testing is currently available, join the notification list, or request a testing day at your location.',
};

export default function LocationsPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Mobile Testing</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              Upcoming Metabolism + VO₂ Testing Locations
            </h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Jessie offers mobile metabolism and VO₂ testing through scheduled locations, pop-ups,
              and partner events.
            </p>
            <p className="mt-4 font-body text-lg text-ink/80">
              Use this page to see where testing is currently available, join the notification list
              for future locations, or request a testing day at your gym, studio, clinic, office,
              retreat, or event.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#schedule" className="btn-primary">View Upcoming Testing Dates</a>
              <CtaButton href="/host" variant="secondary">Request Testing at Your Location</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Current Testing Schedule */}
      <Section id="schedule" bg="creamLight">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Current testing opportunities</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            Each location may have different test options, appointment times, pricing, and booking
            instructions, so please review the details before scheduling.
          </p>

          {testingLocations.length > 0 ? (
            <div className="mt-10 grid gap-6">
              {testingLocations.map((loc) => (
                <LocationCard key={loc.name + loc.date} location={loc} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg bg-cream p-8 text-center ring-1 ring-ink/5">
              <p className="font-body text-lg text-ink/80">No public testing dates are currently open.</p>
              <p className="mt-2 font-body text-ink/70">
                Join the testing notification list to find out when new dates are added, or request
                a testing day at your location.
              </p>
              <div className="mx-auto mt-6 max-w-md">
                <EmailSignup source="testing-notification-list" buttonLabel="Join the List" collectLocation />
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Section 3 — Before You Book */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">A few things to know before scheduling.</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Metabolism and VO₂ testing are wellness and fitness assessments. They are not
              diagnostic medical tests and do not replace medical evaluation, cardiac testing, or
              care from your licensed healthcare team.
            </p>
            <p>
              You may be asked to complete a short screening before testing. Some symptoms, medical
              conditions, medications, recent illness, injuries, or exercise limitations may affect
              whether testing is appropriate that day.
            </p>
            <p>
              For VO₂ testing, you should be able to exercise safely at increasing intensity. If you
              have known or suspected heart or lung disease, unexplained chest pain, fainting,
              significant shortness of breath, or concerning exercise symptoms, please speak with
              your medical provider before booking.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href="/metabolism" variant="secondary">Review Testing Options</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 4 — Basic Testing Prep */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Basic testing prep</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            You&rsquo;ll receive location-specific instructions after booking, but in general:
          </p>
          <div className="mt-6">
            <CheckList
              items={[
                'Avoid food, coffee, nicotine, and other stimulants for at least three hours before testing',
                'Avoid intense exercise for 24 hours before testing',
                'Wear comfortable clothing',
                'Bring athletic shoes for VO₂ testing',
                'Arrive hydrated',
                'Give yourself time to settle before the test',
                'Follow any instructions included in your booking confirmation',
              ]}
            />
          </div>
          <p className="mt-6 font-body text-ink/70">
            If you are sick, recovering from a recent illness, injured, or unsure whether you should
            test, please reach out before your appointment.
          </p>
        </div>
      </Section>

      {/* Section 5 — Want Testing Near You */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Don&rsquo;t see a location that works?</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Jessie is mobile, and testing availability changes based on travel, partner locations,
              pop-ups, and host requests.
            </p>
            <p>
              Join the testing notification list if you want to hear when new locations open, or
              request testing at your gym, Pilates studio, clinic, wellness office, retreat,
              corporate event, or private group.
            </p>
          </div>
          <div className="mt-8 max-w-md">
            <EmailSignup source="testing-notification-list" buttonLabel="Join the List" collectLocation />
          </div>
          <div className="mt-6">
            <CtaButton href="/host" variant="secondary">Request Testing at Your Location</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 6 — Final CTA */}
      <FinalCta
        title="Ready to stop guessing?"
        texture="bl"
        actions={
          <>
            <a href="#schedule" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              View Upcoming Testing Dates
            </a>
            <a href="/host" className="btn-forest-outline w-full whitespace-nowrap sm:w-auto">
              Request Testing at Your Location
            </a>
          </>
        }
      >
        <p>
          If you want better data about your resting metabolism, cardiorespiratory fitness,
          training zones, or baseline health and fitness trends, check the current testing schedule
          or join the notification list for future dates.
        </p>
      </FinalCta>
    </>
  );
}
