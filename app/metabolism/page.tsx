import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Metabolism + VO₂ Testing — Jessie.Life',
  description:
    'Portable breath analysis to measure how your body uses energy at rest and oxygen during exercise. RMR ($125) and VO₂ max ($195) testing available through scheduled locations, pop-ups, and partner events.',
};

export default function MetabolismPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>Metabolic & Fitness Testing</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              Stop estimating. Measure how your body actually uses energy and oxygen.
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
          <div className="flex aspect-[4/5] items-center justify-center rounded-lg bg-cream-dark text-center font-body text-sm text-ink/40">
            {/* PHOTO DIRECTION: real photos of Jessie performing a PNOĒ test — show the mask honestly */}
            Jessie performing a PNOĒ test
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
              Those measurements help estimate how your body is producing and using energy — either
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
            <p className="eyebrow mb-2">The Science</p>
            <p className="font-body text-ink/80">
              PNOĒ measures VO₂, VCO₂, ventilation, and respiratory quotient breath by breath using
              open-circuit indirect calorimetry. A peer-reviewed comparison with a COSMED Quark CPET
              found strong agreement and repeatability in healthy, recreationally active adults under
              controlled laboratory cycling conditions. This is validated portable metabolic
              analysis — not a replacement for diagnostic hospital CPET.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — Choose Your Test */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Choose your test</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['Resting Metabolic Rate', 'Choose RMR testing if you want to understand how much energy your body uses at rest and how that compares with an estimated metabolism. This is a good starting point if you are working on nutrition, body composition, under-fueling, weight-management, metabolic health, or a baseline before making changes.'],
              ['VO₂ Max Testing', 'Choose VO₂ testing if you want to understand your cardiorespiratory fitness, aerobic capacity, training zones, and how your body uses oxygen during exercise. This is a good fit if you are training for performance, rebuilding fitness, tracking healthy aging, or want more precise information than a wearable or age-based formula can provide.'],
              ['Midlife Metabolism Audit', 'Choose the Midlife Metabolism Audit if you want resting metabolic testing placed inside a broader conversation about menopause symptoms, hormones, labs, nutrition, strength, recovery, and next steps.'],
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
          <h2 className="text-3xl md:text-4xl">Resting Metabolic Rate (RMR) — $125</h2>
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
          <p className="mt-6 font-body text-lg text-ink/80">RMR testing can help you understand:</p>
          <div className="mt-4">
            <CheckList
              items={[
                'Your measured resting energy needs',
                'How your measured metabolism compares with a predicted estimate',
                'Whether your body is relying more on fat or carbohydrate for fuel at rest',
                'Whether your current intake may be low, high, or mismatched for your goals',
                'A baseline you can retest after a meaningful change in nutrition, training, body composition, recovery, or health',
              ]}
            />
          </div>
          <p className="mt-6 font-body text-ink/70">
            This option includes the resting test and a standard electronic report. Personalized
            hormone, nutrition, supplement, or full health recommendations are not included.
          </p>
          <div className="mt-8">
            <CtaButton href="/locations">Find an RMR Testing Location</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 5 — VO2 */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">VO₂ Max Testing — $195</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              VO₂ max is the maximum amount of oxygen your body can use during hard exercise. It is
              often talked about in athletic settings, but it is not only an athlete number.
            </p>
            <p>
              VO₂ max reflects cardiorespiratory fitness — how well your lungs, heart, blood vessels,
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
                You&rsquo;ll rest quietly while the system measures your breathing. The measurement
                itself is short, but the full appointment includes setup, mask fitting, calibration,
                testing, and report delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg">For VO₂ testing</h3>
              <p className="mt-3 font-body text-ink/70">
                You&rsquo;ll exercise on the agreed equipment while intensity gradually increases. The
                test becomes progressively harder, and you can stop at any time.
              </p>
            </div>
          </div>
          <h3 className="mt-8 text-lg">Basic preparation</h3>
          <div className="mt-3">
            <CheckList
              items={[
                'Avoid food, coffee, nicotine, and other stimulants for at least three hours before testing',
                'Avoid intense exercise for 24 hours before testing',
                'Wear comfortable clothing',
                'Bring athletic shoes for active testing',
                'Arrive hydrated and early enough to settle before the test',
                'Follow any additional instructions in your confirmation email',
              ]}
            />
          </div>
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
                    'Measured resting calorie needs',
                    'Under-fueling, over-restriction, or a mismatch between intake and goals',
                    'Baseline metabolism before or after a nutrition or strength phase',
                    'Fuel use at rest',
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg">Choose VO₂ max if you want to understand:</h3>
              <div className="mt-3">
                <CheckList
                  items={[
                    'Cardiorespiratory fitness and aerobic capacity',
                    'Training zones based on your physiology rather than a generic formula',
                    'Performance, endurance, and exercise efficiency',
                    'A repeatable marker for fitness and healthy aging',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
            <h3 className="text-lg">Choose the Midlife Metabolism Audit if:</h3>
            <p className="mt-2 font-body text-ink/70">
              You want the breath data placed inside a wider conversation about menopause symptoms,
              hormones, labs, nutrition, strength, and next steps.
            </p>
            <div className="mt-4">
              <CtaButton href="/audit" variant="secondary">Compare the Midlife Metabolism Audit</CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 9 — Final CTA */}
      <Section bg="forest" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-white md:text-4xl">Better data makes better decisions easier.</h2>
          <p className="mt-6 font-body text-lg text-white/80">
            Whether you want to understand your resting metabolism, measure your cardiorespiratory
            fitness, dial in your training zones, or get a clearer baseline before your next health
            or fitness phase, metabolism and VO₂ testing can help you stop guessing.
          </p>
          <p className="mt-4 font-body text-lg text-white/80">
            Book a standalone test, find an upcoming testing location, or bring testing to your gym,
            studio, clinic, office, retreat, or event.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/locations" className="btn-primary">See Upcoming Testing Locations</a>
            <a href="/host" className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-forest">
              Bring Testing to Your Location
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
