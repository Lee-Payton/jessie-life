import type { Metadata } from 'next';
import { Section, Eyebrow, CheckList, CtaButton } from '@/components/ui';
import { links } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The Midlife Metabolism Audit — Jessie.Life',
  description:
    'A focused whole-health consultation built around objective metabolic testing, your symptom picture, and the real-life factors that influence how your body is functioning right now. $295.',
};

export default function AuditPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-cream">
        <div className="container-content grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>$295 Assessment</Eyebrow>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">The Midlife Metabolism Audit</h1>
            <h2 className="mt-3 font-display text-2xl text-ink/80 md:text-3xl">
              Stop guessing what happened to your body.
            </h2>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              <p>
                If your weight, energy, appetite, sleep, recovery, blood sugar, or response to
                dieting and exercise has changed in midlife, you probably do not need another
                generic calorie calculator telling you to &ldquo;eat less and move more.&rdquo;
              </p>
              <p>
                The Midlife Metabolism Audit is a focused whole-health consultation built around
                objective metabolic testing, your symptom picture, and the real-life factors that
                influence how your body is functioning right now.
              </p>
              <p>
                This is for the woman who knows something has shifted — but is tired of trying to
                figure out whether it is hormones, metabolism, stress, sleep, under-eating,
                overtraining, low muscle, blood sugar, recovery, or some deeply inconvenient
                combination of all of the above.
              </p>
            </div>
            <p className="mt-6 font-body text-sm font-bold text-terracotta">
              Resting metabolic rate breath test + 45-minute private consultation + written roadmap • $295
            </p>
            <div className="mt-8">
              <CtaButton href={links.practiceBetter}>Book Your Midlife Metabolism Audit</CtaButton>
            </div>
          </div>
          <div className="flex aspect-[4/5] items-center justify-center rounded-lg bg-cream-dark text-center font-body text-sm text-ink/40">
            {/* PHOTO DIRECTION: Jessie performing the resting breath test or reviewing report with a client */}
            Jessie performing the RMR breath test
          </div>
        </div>
      </section>

      {/* Section 2 — Why This Is Different */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Why this is different from another calorie calculator</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Using a PNOĒ resting metabolic rate breath test, we&rsquo;ll measure how much energy
              your body actually uses at rest, how that compares with what would be predicted for
              you, and how your body appears to be using fuel.
            </p>
            <p>Then we zoom out.</p>
            <p>Because your metabolism does not live in a spreadsheet.</p>
            <p>
              It is affected by your hormone changes, symptom load, muscle mass, diet history,
              protein intake, sleep quality, stress response, pain, digestion, exercise, recovery,
              medications, supplements, and the amount of life your body has been trying to survive
              while still being expected to &ldquo;perform.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — What We Review */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">What we review</h2>
          <p className="mt-4 font-body text-lg text-ink/80">
            During your Audit, we&rsquo;ll look at the bigger picture, including:
          </p>
          <div className="mt-6">
            <CheckList
              items={[
                'Your measured resting metabolic rate',
                'Resting fuel use and relevant breath-test findings',
                'Weight, body composition, appetite, cravings, and energy changes',
                'Perimenopause, menopause, hysterectomy, and hormone history',
                'Current symptoms and hormone-therapy questions',
                'Sleep quality, stress load, recovery, pain, and nervous-system strain',
                'Diet history, calorie restriction, fasting, under-fueling, or weight cycling',
                'Current nutrition patterns, protein intake, digestion, and nutrient concerns',
                'Strength training, cardio, daily movement, and exercise tolerance',
                'Follow-up labs, medical conversations, or additional support that may be worth considering',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Section 4 — What You Receive */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">What you receive</h2>
          <div className="mt-6">
            <CheckList
              items={[
                'A pre-appointment midlife hormone and health questionnaire',
                'A PNOĒ resting metabolic rate breath test',
                'Your electronic PNOĒ resting metabolism report',
                'A 45-minute private consultation with Jessie',
                'A personalized explanation of your measured RMR and relevant findings',
                'Education about menopause symptoms and hormone-therapy considerations within Jessie’s scope',
                'Practical nutrition, strength, movement, sleep, and recovery priorities',
                'Recommendations for follow-up labs or questions to discuss with your clinician',
                'A written roadmap summarizing your most useful next steps',
                'Relevant educational resources based on what comes up in your assessment',
              ]}
            />
          </div>
          <div className="mt-8 rounded-lg bg-cream-light p-6 ring-1 ring-ink/5">
            <p className="eyebrow mb-2">Scope Note</p>
            <p className="font-body text-ink/80">
              The Audit provides education, interpretation of wellness data, and a prioritized
              roadmap. It does not include diagnosis, medical treatment, hormone prescribing, a
              fully customized clinical protocol, or ongoing implementation support.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 5 — The Point of the Audit */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">The point of the Audit</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The goal is not to hand you a random calorie target and send you back into the
              wellness wilderness.
            </p>
            <p>The goal is to help you understand what your body may actually need next.</p>
            <p>
              For some women, that may mean eating more before cutting anything. For others, it
              may mean rebuilding muscle, improving protein, changing training, addressing sleep,
              supporting blood sugar regulation, reducing recovery debt, or getting clearer on
              hormone-related questions with their medical provider.
            </p>
            <p>
              And sometimes the biggest win is realizing your body is not broken — it has been
              adapting to the inputs, stressors, and hormone shifts it has been dealing with.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 6 — Good Fit If */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">The Audit is a good fit if</h2>
          <p className="mt-4 font-body text-lg text-ink/80">The Midlife Metabolism Audit may be a good fit if:</p>
          <div className="mt-6">
            <CheckList
              items={[
                'Your weight or body composition has changed and your old strategies no longer work',
                'You have spent years dieting and are not sure whether another calorie deficit is the smartest move',
                'You want to know your measured resting metabolism instead of relying on an estimate',
                'You are experiencing peri/menopause symptoms alongside metabolic changes',
                'You are using hormone therapy and still feel like part of the picture is missing',
                'You want more context than a standalone breath-test report can provide',
                'You need a clear next step without committing to six months of support',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Section 7 — When the Reboot Makes More Sense */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">When the Midlife Reboot makes more sense</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Choose the full Midlife Reboot instead if you already know you want comprehensive
              lab-guided strategy, personalized implementation support, and follow-up over six
              months.
            </p>
            <p>
              The Audit helps you understand where you are and what may deserve attention next.
              The Reboot gives us the time, testing, and follow-up to build the fuller plan — and
              adjust it based on how your body actually responds.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href="/reboot" variant="secondary">Explore the Midlife Reboot</CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 8 — Apply the Fee */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Apply the Audit fee to the Reboot</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              Enroll in the Midlife Reboot within 14 days of your Audit consultation, and your full
              $295 Audit fee will be applied to the $1,500 program investment.
            </p>
            <p>
              There is no pressure to continue. The Audit is designed to give you useful information
              and a practical roadmap whether you move forward on your own or decide you want deeper
              support.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 9 — Final CTA */}
      <Section bg="forest" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-white md:text-4xl">Before you cut more, measure more.</h2>
          <p className="mt-6 font-body text-lg text-white/80">
            Find out how much energy your body actually uses, what may be influencing that number,
            and which next steps make sense for the body you are living in now.
          </p>
          <p className="mt-6 font-body text-sm font-bold text-white/90">
            Resting metabolic rate breath test + 45-minute private consultation + written roadmap • $295
          </p>
          <div className="mt-8">
            <a href={links.practiceBetter} className="btn-primary">Book the Midlife Metabolism Audit</a>
          </div>
        </div>
      </Section>
    </>
  );
}
