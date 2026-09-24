import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton, FinalCta } from '@/components/ui';
import EmailSignup from '@/components/EmailSignup';
import LocationCard from '@/components/LocationCard';
import { testingLocations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Upcoming Testing Locations: Jessie.Life',
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

          <div className="mt-10 grid gap-6">
            <div id="island-fitness" className="rounded-lg bg-cream-light p-8 ring-1 ring-ink/5">
              <h3 className="font-display text-2xl">Island Fitness</h3>
              <p className="mt-1 font-body text-ink/70">South Padre Island, Texas</p>
              <h4 className="mt-5 text-lg">Island Fitness Member Scheduling</h4>
              <p className="mt-3 font-body text-ink/80">
                Metabolic and fitness testing is currently available for Island Fitness members
                during scheduled South Padre Island testing dates.
              </p>
              <p className="mt-3 font-body text-ink/80">
                Choose standalone RMR or VO₂ Max testing, combine both tests, or choose the Midlife
                Metabolism &amp; Hormone Audit if you want your metabolic data placed inside a
                broader look at menopause, hormones, nutrition, body composition, strength, sleep,
                and recovery.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://dotlifeoptimalhealth.practicebetter.io/#/61475f3a398033134419f352/bookings?r=6ab592a976690fd7c82cd881&step=services"
                  className="btn-primary"
                >
                  Schedule Member Testing
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <CtaButton href="/metabolism" variant="secondary">Learn About Metabolic Testing</CtaButton>
                <CtaButton href="/audit" variant="secondary">
                  Learn About the Midlife Metabolism &amp; Hormone Audit
                </CtaButton>
              </div>
            </div>

            {testingLocations.length > 0 &&
              testingLocations.map((loc) => (
                <LocationCard key={loc.name + loc.date} location={loc} />
              ))}
          </div>
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
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">RMR</h3>
              <p className="mt-3 font-body text-ink/70">
                Morning testing is preferred. Arrive after a normal overnight fast with no food,
                caffeine, stimulants, or nicotine beforehand. Water is fine. Avoid hard or
                unusually strenuous exercise for 24 hours before testing.
              </p>
            </div>
            <div>
              <h3 className="text-lg">VO₂ Max</h3>
              <p className="mt-3 font-body text-ink/70">
                Arrive normally fueled and hydrated. Finish food or caloric beverages at least 4
                hours before testing. If caffeine is part of your normal routine, a normal low
                amount earlier in the day is fine; avoid additional caffeine or stimulants for
                approximately 2 to 3 hours before testing. Avoid hard or unusually strenuous
                exercise for 24 hours.
              </p>
            </div>
          </div>
          <p className="mt-6 font-body text-ink/70">
            You&rsquo;ll receive complete instructions after booking.
          </p>
          <p className="mt-4 font-body text-ink/70">
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
