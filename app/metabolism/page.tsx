import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, CheckList, CtaButton, FinalCta } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Metabolism + VO₂ Testing: Jessie.Life',
  description:
    'Portable breath analysis to measure how your body uses energy at rest and oxygen during exercise. RMR ($125) and VO₂ max ($195) testing available through scheduled locations, pop-ups, and partner events.',
};

export default function MetabolismPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow text-terracotta">Metabolic & Fitness Testing</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              <em>Stop estimating.</em> Measure how your body actually uses energy and oxygen.
            </h1>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              <p>
                Metabolism + VO₂ testing uses portable breath analysis to measure how your body
                uses energy at rest and how efficiently your heart, lungs, and muscles use oxygen
                during exercise.
              </p>
              <p>
                Instead of relying on generic formulas, wearable estimates, or &ldquo;calories
                burned&rdquo; guesses, you get objective information about your resting metabolism,
                fuel use, cardiorespiratory fitness, and training zones.
              </p>
              <p>Testing is available through scheduled locations, pop-ups, and partner events.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/locations">See Upcoming Testing Locations</CtaButton>
              <CtaButton href="/host" variant="secondary">Bring Testing to Your Location</CtaButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/PNOE.png"
              alt="Metabolic breath testing with a PNOĒ mask, seated and on a treadmill"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 — What Is Metabolic Breath Testing */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">What is metabolic breath testing?</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Metabolic breath testing measures the oxygen you take in and the carbon dioxide you
              breathe out.
            </p>
            <p>
              Those measurements help estimate how your body is producing and using energy, either
              while you are resting quietly or while you are exercising at increasing intensity.
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">Resting metabolic testing can help show:</h3>
              <div className="mt-3">
                <CheckList
                  items={[
                    'How much energy your body uses at rest',
                    'Whether your measured metabolism is higher or lower than predicted',
                    'Whether you are relying more on fat or carbohydrate for fuel at rest',
                    'How your basic energy needs compare with your current nutrition goals',
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg">VO₂ testing can help show:</h3>
              <div className="mt-3">
                <CheckList
                  items={[
                    'How much oxygen your body can use during hard exercise',
                    'Your cardiorespiratory fitness level',
                    'Individualized heart-rate and training zones',
                    'How your body uses fuel at different exercise intensities',
                    'A baseline you can retest after a training, nutrition, or health phase',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-cream p-6 ring-1 ring-ink/5">
            <p className="eyebrow mb-2 text-terracotta">The Science</p>
            <p className="font-body text-ink/80">
              The mask measures the oxygen you breathe in and the carbon dioxide you breathe out. From
              that, the system can estimate how your body is producing and using energy. At rest, that
              can help show your resting metabolic rate and fuel use. During exercise, it can help show
              your cardiorespiratory fitness, training zones, and how your body responds as intensity
              increases. In plain English: instead of relying on formulas or wearable estimates, you
              get data based on your actual breathing.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — Choose Your Test */}
      <Section spacing="compact">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Choose your test</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              ['Resting Metabolic Rate', 'Choose RMR testing if you want to understand how much energy your body uses at rest and how that compares with an estimated metabolism. This is a good starting point if you are working on nutrition, body composition, under-fueling, weight-management, metabolic health, or a baseline before making changes.'],
              ['VO₂ Max Testing', 'Choose VO₂ testing if you want to understand your cardiorespiratory fitness, aerobic capacity, training zones, and how your body uses oxygen during exercise. This is a good fit if you are training for performance, rebuilding fitness, tracking healthy aging, or want more precise information than a wearable or age-based formula can provide.'],
              ['Midlife Metabolism & Hormone Audit', 'Choose the Midlife Metabolism & Hormone Audit if you want resting metabolic testing placed inside a broader conversation about menopause symptoms, hormones, labs, nutrition, strength, recovery, and next steps.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-3 font-body text-sm text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — RMR */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Resting Metabolic Rate (RMR): $125</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Your resting metabolic rate is the amount of energy your body uses at rest before
              exercise, errands, work, stress, or the general chaos of being a person gets added on
              top.
            </p>
            <p>
              Online calculators estimate this number from population averages. Breath testing
              measures it from your actual oxygen consumption and carbon dioxide production while you
              rest.
            </p>
          </div>
          <p className="mt-6 font-body text-lg text-ink/80">RMR testing is for you if:</p>
          <div className="mt-4">
            <CheckList
              items={[
                'Dieting has been unsuccessful or felt unsustainable',
                'You want to start, are currently taking, are coming off, or want to come off a GLP-1 medication',
                "You want to know if you're fueling appropriately for building and preserving muscle",
                'You want to support your active lifestyle with nutrition targets built around your measured energy needs rather than a generic formula',
                'Your weight, body composition, energy needs, or response to dieting seems to have changed',
                'You want a measured baseline before changing your nutrition, training, body composition, or health strategy',
                'Everything is going well and you simply want to know your actual resting metabolic rate as a baseline',
              ]}
            />
          </div>
          <p className="mt-6 font-body text-ink/70">
            You&rsquo;ll receive your complete PNOĒ results along with a personalized, plain-English
            summary from Jessie highlighting the numbers worth paying attention to and what they
            mean. Results & summary available within 72 hours after testing.
          </p>
          <p className="mt-4 font-body text-ink/70">
            Want to understand what those numbers mean in the bigger picture of your hormones,
            symptoms, nutrition, strength, recovery, and midlife health? The Midlife Metabolism &
            Hormone Audit adds that deeper assessment and strategy.
          </p>
          <div className="mt-8">
            <CtaButton href="/locations">Find an RMR Testing Location</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 5 — VO2 */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">VO₂ Max Testing: $195</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              VO₂ max is the maximum amount of oxygen your body can use during hard exercise. It is
              often talked about in athletic settings, but it is not only an athlete number.
            </p>
            <p>
              VO₂ max reflects cardiorespiratory fitness: how well your lungs, heart, blood vessels,
              and working muscles deliver and use oxygen. It can be useful for performance, training,
              endurance, healthy aging, and tracking whether your fitness is actually improving over
              time.
            </p>
            <p>
              During the test, exercise intensity increases gradually while the mask measures your
              breathing and gas exchange.
            </p>
          </div>
          <p className="mt-6 font-body text-lg text-ink/80">VO₂ testing can help you understand:</p>
          <div className="mt-4">
            <CheckList
              items={[
                'Your VO₂ max or peak oxygen uptake',
                'Individualized heart-rate and training zones',
                'How your body uses fat and carbohydrate at different exercise intensities',
                'Ventilatory thresholds and breathing efficiency',
                'A baseline for performance, fitness, and future retesting',
              ]}
            />
          </div>
          <p className="mt-8 font-body text-lg text-ink/80">This test is for you if:</p>
          <div className="mt-4">
            <CheckList
              items={[
                'Recovery is taking longer than it used to, and you want to understand what may be limiting you',
                "You exercise consistently, but the results don't seem to match the effort",
                'You keep losing and regaining the same weight or more',
                "You're focused on building and preserving muscle while also protecting cardiovascular health",
                "You're returning to exercise after a break and want to make progress with less trial and error",
                'You have insulin resistance, prediabetes, fatty liver, or another metabolic issue and want more information about how your body responds to exercise',
                "You're intentional about how well you're aging and want objective cardiorespiratory fitness data as part of the bigger picture",
                'You want to make the heart-rate and exercise data from your wearable more useful',
                "You're already highly fit and want to see where your current ceiling is, identify where you can improve, or earn some legitimate bragging rights",
              ]}
            />
          </div>
          <p className="mt-6 font-body text-ink/70">
            You do not need to be a runner or an endurance athlete. Testing can be performed on a
            bike, rower, or inclined treadmill, with the protocol matched to your current fitness
            level.
          </p>
          <p className="mt-4 font-body text-ink/70">
            You&rsquo;ll receive your complete PNOĒ results along with a personalized, plain-English
            summary from Jessie highlighting the numbers worth paying attention to and what they
            mean. Results & summary available within 72 hours after testing.
          </p>
          <p className="mt-6 rounded-lg bg-cream-dark p-5 font-body text-ink/80">
            This is a fitness and wellness assessment, not a diagnostic cardiac stress test. People
            with known or suspected heart or lung disease, unexplained chest pain, fainting, or
            significant exercise symptoms should be evaluated medically before participating.
          </p>
          <div className="mt-8">
            <CtaButton href="/locations">Find a VO₂ Testing Location</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 5b — RMR + VO2 Max Bundle */}
      <Section spacing="compact">
        <div className="mx-auto max-w-3xl rounded-lg bg-cream-light p-8 text-center ring-1 ring-ink/5">
          <h2 className="font-display text-2xl md:text-3xl">Want both?</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            Bundle your RMR + VO₂ Max testing for $275 and save $45.
          </p>
          <p className="mt-2 font-body text-ink/70">
            The tests can be scheduled separately so each can be performed under the conditions
            that give you the most useful results.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton href="/locations">Book RMR + VO₂ Max Testing</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 6 — What to Expect */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">What to expect</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Before testing, you&rsquo;ll complete a short health and readiness screening so we can
              confirm the right test and identify any safety concerns.
            </p>
            <p>
              During the appointment, you&rsquo;ll wear a fitted mask connected to the portable
              analyzer. The mask allows the system to measure your breathing and gas exchange while
              you rest or exercise.
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">For RMR testing</h3>
              <p className="mt-3 font-body text-ink/70">
                You&rsquo;ll rest quietly while the system measures your breathing. The breath
                measurement itself takes about 10 minutes, but plan approximately 30 to 40 minutes
                for the full appointment, including setup, time to settle into a true resting
                state, testing, and equipment reset.
              </p>
            </div>
            <div>
              <h3 className="text-lg">For VO₂ testing</h3>
              <p className="mt-3 font-body text-ink/70">
                You&rsquo;ll exercise on a bike, rower, or inclined treadmill while the intensity
                gradually increases based on your current fitness level. After a short warm-up,
                the active portion generally lasts about 8 to 12 minutes, followed by a cool-down
                and recovery. Plan approximately 40 to 50 minutes for the full appointment. You
                decide when you&rsquo;ve reached your maximum effort, and the test can be stopped
                at any time.
              </p>
            </div>
          </div>
          <h3 id="preparation" className="mt-8 text-lg scroll-mt-24">Basic preparation</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="font-body text-base font-bold text-ink">RMR preparation</h4>
              <div className="mt-3">
                <CheckList
                  items={[
                    'Morning testing is preferred whenever possible',
                    'Finish your last meal or caloric drink preferably 10 to 12 hours before testing and at least 7 hours beforehand. A normal overnight fast is ideal',
                    'Drink water normally and arrive comfortably hydrated',
                    'Avoid caffeine, pre-workout, stimulants, nicotine, food, and caloric supplements before testing',
                    'Avoid alcohol the evening before testing',
                    'Avoid hard, long, or unusually strenuous exercise during the 24 hours before testing',
                    'Continue normal prescribed medications unless your physician has instructed you otherwise',
                  ]}
                />
              </div>
            </div>
            <div>
              <h4 className="font-body text-base font-bold text-ink">VO₂ Max preparation</h4>
              <div className="mt-3">
                <CheckList
                  items={[
                    'Arrive fueled and normally hydrated rather than intentionally fasted',
                    'Eat normally earlier in the day and finish your last meal or caloric beverage at least 4 hours before testing',
                    'If caffeine is part of your normal routine, your normal low amount earlier in the day is fine. Avoid additional caffeine or stimulants for approximately 2 to 3 hours before testing',
                    'Use your normal routine rather than introducing a new pre-workout or stimulant on testing day',
                    'Avoid hard, long, or unusually strenuous exercise during the 24 hours before testing',
                    'Continue normal prescribed medications unless your physician has instructed you otherwise',
                    'Wear comfortable exercise clothing and the shoes you normally use for training',
                  ]}
                />
              </div>
            </div>
          </div>
          <p className="mt-6 font-body text-ink/70">
            You&rsquo;ll receive a link to these preparation instructions in your booking
            confirmation and appointment reminders.
          </p>
        </div>
      </Section>

      {/* Section 7 — Testing Locations / Host */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-cream-light p-8 ring-1 ring-ink/5">
            <h3 className="font-display text-2xl">Want to book a test?</h3>
            <p className="mt-3 font-body text-ink/70">
              Check the current testing schedule to see where Jessie is testing next and which
              appointments are available.
            </p>
            <div className="mt-6">
              <CtaButton href="/locations">See Upcoming Testing Locations</CtaButton>
            </div>
          </div>
          <div className="rounded-lg bg-cream-light p-8 ring-1 ring-ink/5">
            <h3 className="font-display text-2xl">Want to host testing?</h3>
            <p className="mt-3 font-body text-ink/70">
              If you own or manage a gym, studio, clinic, office, retreat, or wellness space, you can
              request a testing day for your members, clients, employees, or guests.
            </p>
            <div className="mt-6">
              <CtaButton href="/host" variant="secondary">Bring Testing to Your Location</CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8 — Which Test Should I Choose */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Which test should I choose?</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg">Choose RMR if you want to understand:</h3>
              <div className="mt-3">
                <CheckList
                  items={[
                    'Your measured energy needs',
                    'Nutrition and fueling needs',
                    'Weight or body-composition changes',
                    'Under-fueling or prolonged restriction',
                    'Muscle-building and muscle-preservation needs',
                    'Metabolic changes before, during, or after GLP-1 use',
                    'Your resting fuel use',
                    'Your metabolic baseline before making changes',
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg">Choose VO₂ Max if you want to understand:</h3>
              <div className="mt-3">
                <CheckList
                  items={[
                    'Cardiorespiratory fitness',
                    'Individualized training zones and thresholds',
                    'Recovery and exercise response',
                    'How your fuel use changes as intensity increases',
                    'Whether your training is producing the adaptations you expect',
                    'Fitness and healthy-aging trends',
                    'How to make your wearable data more useful',
                    'Your current performance ceiling',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
            <h3 className="text-lg">Choose the Midlife Metabolism & Hormone Audit if:</h3>
            <p className="mt-2 font-body text-ink/70">
              You want your RMR results placed inside a broader assessment of your hormones,
              symptoms, nutrition, strength, recovery, lifestyle, and the factors influencing how
              your body is functioning in midlife.
            </p>
            <p className="mt-2 font-body text-sm font-bold text-terracotta">
              Add VO₂ Max testing to your Audit for $150.
            </p>
            <div className="mt-4">
              <CtaButton href="/audit" variant="secondary">Compare the Midlife Metabolism & Hormone Audit</CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 9 — Final CTA */}
      <FinalCta
        title="Better data makes better decisions easier."
        texture="tr"
        actions={
          <>
            <a href="/locations" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              See Upcoming Testing Locations
            </a>
            <a href="/host" className="btn-forest-outline w-full whitespace-nowrap sm:w-auto">
              Bring Testing to Your Location
            </a>
          </>
        }
      >
        <p>
          Whether you want to understand your resting metabolism, measure your cardiorespiratory
          fitness, dial in your training zones, or get a clearer baseline before your next health
          or fitness phase, metabolism and VO₂ testing can help you stop guessing.
        </p>
        <p>
          Book a standalone test, find an upcoming testing location, or bring testing to your gym,
          studio, clinic, office, retreat, or event.
        </p>
      </FinalCta>
    </>
  );
}
