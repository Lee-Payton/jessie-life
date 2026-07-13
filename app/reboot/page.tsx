import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton } from '@/components/ui';
import { links } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Midlife Reboot — Jessie.Life',
  description:
    'A six-month, lab-guided health strategy for women navigating perimenopause, menopause, hormone therapy, metabolism changes, and burnout. $1,500. Lab fees separate.',
};

export default function RebootPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content grid items-center gap-12 py-20 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>The Flagship Program</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.1] md:text-5xl">The Midlife Reboot</h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              A six-month, lab-guided health strategy for women navigating perimenopause,
              menopause, hormone therapy, metabolism changes, burnout, and &ldquo;what the hell
              happened to my body?&rdquo;
            </p>
            <p className="mt-4 font-body text-lg text-ink/80">
              You need a clear way to understand what is happening in your body, identify what
              actually deserves attention, and build a practical strategy for hormones,
              metabolism, nutrition, strength, recovery, and long-term resilience.
            </p>
            <p className="mt-6 font-body text-sm font-bold text-forest">
              Six months • $1,500 • Lab fees are separate • Payment plan available
            </p>
            <div className="mt-8">
              <CtaButton href={links.rebootApply}>Apply for the Midlife Reboot</CtaButton>
            </div>
          </div>
          <div className="flex aspect-[4/5] items-center justify-center rounded-lg bg-cream-dark text-center font-body text-sm text-ink/40">
            Jessie — lab review / consultation
            <br />(warm, human, not stock)
          </div>
        </div>
      </section>

      {/* Section 2 — When Everything Starts Feeling Connected */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">
            Midlife has a way of turning separate issues into one bigger conversation.
          </h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Your sleep is not separate from your hormones. Your stress response is not
              separate from your blood sugar. Your energy is not separate from your thyroid,
              iron, inflammation, nutrition, recovery, or nervous system. Your strength is not
              separate from your metabolism, bone health, pain, and long-term independence.
            </p>
            <p>
              That is why generic midlife advice can feel so frustrating. It treats hormones,
              labs, symptoms, nutrition, exercise, stress, and long-term health like separate
              checklists — when in real life, they are constantly influencing each other.
            </p>
            <p>
              This does not mean everything is &ldquo;just menopause.&rdquo; It means this phase
              of life deserves a more connected strategy — one that looks at your patterns,
              priorities, history, and goals before deciding what to do next.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — A Strategy for the Whole Picture */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">You don&rsquo;t need a shortcut. You need a strategy.</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The Midlife Reboot is a six-month, one-to-one health-strategy process for women
              who want to understand their midlife biology and make more informed, sustainable
              decisions about hormones, metabolism, nutrition, strength, energy, recovery, and
              long-term health.
            </p>
            <p>
              We start with your symptoms, history, labs, hormone questions, lifestyle, stress
              load, goals, and the things you have already tried. Then we look for the patterns.
            </p>
            <p>
              The goal is not to chase every possible problem. It is to build a clear,
              prioritized plan that fits your body, your capacity, your preferences, and the
              life you are actually trying to live.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4 — What We Look At */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">What we look at</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            The Reboot looks at the pieces that influence how you feel, function, recover, and
            age — not just one symptom or one lab marker.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {[
              ['Hormones and symptoms', 'Perimenopause, menopause, hysterectomy, hormone therapy, symptom patterns, and the questions to discuss with the clinician who manages your care.'],
              ['Metabolism and cardiovascular health', 'Blood sugar, insulin, lipids, body composition, resting metabolism, cardiorespiratory fitness, and risk factors easy to miss when the conversation is reduced to weight.'],
              ['Nutrition and nutrient status', 'Protein, energy intake, food quality, nutrient gaps, digestion, absorption, and whether your current approach supports the body you are asking to function.'],
              ['Strength, bone, and physical resilience', 'Muscle, bone, mobility, stability, recovery, exercise tolerance, and the physical capacity that protects your freedom and independence.'],
              ['Energy, sleep, and nervous-system load', 'The factors that determine whether your plan is restorative and sustainable — or one more demand on an already overloaded system.'],
              ['Your real life', 'Work, travel, caregiving, relationships, schedule, personality, executive function, and the things no generic protocol bothers to ask about.'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 font-body text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 5 — How the Reboot Works */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">How the Reboot Works</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The Midlife Reboot is not a one-call lab review or a pile of recommendations you
              are supposed to figure out on your own.
            </p>
            <p>
              It is a structured six-month process that moves from assessment to strategy to
              implementation — with enough education, follow-up, and troubleshooting support to
              help the plan work in your actual life.
            </p>
          </div>

          <h3 className="mt-10 text-xl">The process</h3>
          <div className="mt-4 space-y-4 font-body text-lg text-ink/80">
            <p>
              First, we gather the right information: your symptoms, history, current labs,
              hormone questions, lifestyle, goals, and the factors that shape how you actually
              follow through.
            </p>
            <p>
              Then we decide what additional lab work or data would meaningfully improve the
              plan, without repeating testing unnecessarily.
            </p>
            <p>
              Once your information is complete, I build your <strong>Optimal Health Blueprint</strong>{' '}
              — a personalized written strategy that connects your labs, symptoms, history,
              metabolism, hormones, nutrition, strength, recovery, and long-term health
              priorities.
            </p>
            <p>
              From there, we turn the recommendations into a realistic implementation plan.
              You&rsquo;ll have time to review the blueprint, identify what feels easy, what feels
              harder, and where friction is likely to show up, so we can prioritize the next
              steps instead of pretending everything needs to happen at once.
            </p>
            <p>
              And then we follow up, troubleshoot, and adjust as your body and real life respond.
            </p>
          </div>

          <h3 className="mt-10 text-xl">What is included</h3>
          <div className="mt-4">
            <CheckList
              items={[
                'Comprehensive midlife health, symptom, hormone, medication, supplement, lifestyle, nutrition, movement, sleep, stress, and goal intake',
                'Personality and behavior-style assessments to help shape a strategy that fits how you actually operate',
                'Private intake consultation to clarify your history, priorities, and meaningful testing gaps',
                'Review of available laboratory results so useful testing is not repeated unnecessarily',
                'Access to wholesale lab ordering and pricing for recommended blood work when appropriate',
                'Curated educational resources before your results session so the blueprint is easier to understand and use',
                'Personalized Optimal Health Blueprint connecting your symptoms, history, labs, hormone questions, metabolism, nutrition, strength, recovery, and long-term health priorities',
                'Results and recommendations session to walk through the blueprint and answer questions',
                'Strategy and implementation session to prioritize recommendations, identify obstacles, and create a realistic timeline',
                'Chat support for troubleshooting, friction, questions, and real-life obstacles during the six-month program',
                'Follow-up / next-steps consultation later in the program to review progress, adjust the strategy, and decide whether follow-up labs or next-level changes make sense',
                'Practice Better client portal access for forms, scheduling, resources, communication, and program materials',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Section 6 — What Changes */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">What changes</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            The Reboot is designed to help you move from scattered effort to a more connected,
            prioritized strategy.
          </p>
          <div className="mt-6">
            <CheckList
              items={[
                'From chasing symptoms one at a time to understanding the larger pattern',
                'From "normal labs" and unanswered questions to a clearer picture of what has and has not been measured',
                'From random experiments to a strategy based on your body, history, goals, and capacity',
                'From pushing harder to using effort where it is most likely to pay off',
                'From feeling stuck or disconnected from your body to rebuilding strength, confidence, and resilience',
                'From trying to do everything at once to knowing what deserves attention now and what can wait',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Section 7 — Is This Right for You */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Is this right for you?</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg text-ink">The Midlife Reboot may be a good fit if:</h3>
              <div className="mt-4">
                <CheckList
                  items={[
                    'You want a strategy based on your current physiology, health history, and real life',
                    'You are tired of fads, conflicting advice, and figuring everything out alone',
                    'You want to understand hormone therapy without pretending hormones are the only thing that matter',
                    'You are open to lab work, tracking, and experimentation when it would be useful',
                    'You value strength, energy, function, resilience, and long-term independence',
                    'You have a complicated health history and want help organizing the moving pieces',
                    'You are ready to participate honestly and adjust the plan as we learn more',
                  ]}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg text-ink">This is probably not the right fit if:</h3>
              <div className="mt-4">
                <CheckList
                  variant="cross"
                  items={[
                    'You only want a rapid weight-loss plan or a guaranteed outcome',
                    'You are looking for diagnosis, prescribing, emergency care, or a replacement for your medical team',
                    'You want a rigid protocol to follow without discussion, testing, or adjustment',
                    'You are unwilling to complete needed forms, gather labs, or pay separate laboratory costs when appropriate',
                    'You need intensive daily coaching rather than strategic guidance and troubleshooting support',
                    'The $1,500 investment is not currently feasible',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8 — Start With the Audit Instead */}
      <Section bg="creamLight" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl">Not ready for six months of support? Start with clarity.</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The Midlife Metabolism Audit is a focused option for women who want objective
              metabolic testing, a private consultation, and a written roadmap before deciding
              what comes next.
            </p>
            <p>
              It is not the full Reboot, and it does not include ongoing implementation support.
              But it can help you understand what may deserve attention now, what questions are
              worth asking, and whether a longer strategy makes sense.
            </p>
            <p>
              Enroll in the Midlife Reboot within 14 days of your Audit consultation, and the
              full $295 Audit fee will be applied to your program investment.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href="/audit" variant="secondary">Start With the Midlife Metabolism Audit</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 9 — Investment */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">$1,500 for six months</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The Midlife Reboot includes the assessment, education, private consultations,
              Optimal Health Blueprint, implementation strategy, follow-up support, and
              troubleshooting described above.
            </p>
            <p>
              Laboratory fees and third-party testing costs are separate. This keeps the program
              from forcing every client into the same prebuilt testing package, whether they need
              it or not.
            </p>
            <p>
              We start with the labs and health information you already have, then identify what
              additional testing would meaningfully improve the strategy. When direct ordering is
              appropriate, Reboot clients receive access to my wholesale lab pricing.
            </p>
            <p>Payment plan: [INSERT FINAL PAYMENT-PLAN TERMS]</p>
            <p>
              Previous Reboot clients may return for an annual or semiannual Midlife Reboot
              Review for $595.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href={links.rebootApply}>Apply for the Midlife Reboot</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 10 — Why I Built This */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Why I built this</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              I built the Midlife Reboot because midlife health gets messy when hormones,
              symptoms, labs, metabolism, stress, sleep, strength, nutrition, and real life are
              all changing at the same time — and most advice only looks at one piece of the
              picture.
            </p>
            <p>
              My work combines functional health strategy, lab review, hormone and menopause
              education, and real-life implementation support — with a deep respect for the fact
              that the plan has to work for the person living inside the body.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href="/about" variant="secondary">Read More About Jessie</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 11 — Questions before you apply (short FAQ + link) */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Questions before you apply?</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            The most common questions — labs, existing hormone therapy, medical scope, remote
            participation, payment, the Audit, and what happens after six months — are answered
            in detail on the FAQ page.
          </p>
          <div className="mt-8">
            <CtaButton href="/faq" variant="secondary">Read All Frequently Asked Questions</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 12 — Final CTA */}
      <Section bg="creamLight" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl">You do not have to keep piecing this together alone.</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              If your body feels different, your old strategies are no longer working, or your
              health feels more complicated than it used to, the next step is not another random
              experiment.
            </p>
            <p>
              It is a clearer picture, a better strategy, and support for turning that strategy
              into something you can actually live with.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href={links.rebootApply}>Apply for the Midlife Reboot</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
