import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, Eyebrow, CheckList, CtaButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Jessie Faber — Jessie.Life',
  description:
    'Functional health practitioner, researcher, and educator helping women in perimenopause and menopause connect the dots between hormones, symptoms, labs, metabolism, strength, and real life.',
};

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — New Opening */}
      <section className="bg-cream">
        <div className="container-content grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl">
              I help women understand their midlife body so they can make better decisions about the
              rest of their life.
            </h1>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              <p>
                I am Jessie Faber — a functional health practitioner, researcher, educator, nomad,
                and enthusiastic recreator of wheels. I help women in perimenopause and menopause
                connect the dots between hormones, symptoms, labs, metabolism, strength, energy, and
                the life they are actually trying to live.
              </p>
              <p>
                My approach is science-heavy and human-centered. I want to know what the research
                says, what your data shows, and whether the plan has any chance of surviving your
                schedule, nervous system, personality, budget, and tolerance for nonsense.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image src="/brand/hero-jessie.jpg" alt="Jessie Faber" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2 — Why This Work Is Personal */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">Why this work is personal</h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              I did not choose women&rsquo;s health because it was a neat niche. I arrived here after
              years of stage 4 endometriosis, fibroids, adhesive disease, chronic pain, autoimmune
              issues, early perimenopause, multiple abdominal surgeries, a total hysterectomy with
              bilateral salpingo-oophorectomy, and surgical menopause.
            </p>
            <p>
              I have experienced the limits of both conventional and alternative care, the relief
              that comes from finally finding the right lever, and the maddening reality that
              something that worked beautifully last year can stop working when hormones, stress,
              illness, or life change the rules.
            </p>
            <p>
              That history does not make my experience identical to yours. It makes me very
              unwilling to hand every woman the same plan.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3 — Professional Background */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">
            My work blends functional health, lab strategy, research, and real-life implementation.
          </h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              I have been working in health and wellness since 2016, with training and experience in
              functional health, nutrition, lab review, hormone education, metabolism, behavior
              change, and client coaching.
            </p>
            <p>
              My approach is evidence-informed, but not detached from real life. Research matters.
              Lab data matters. So does the person trying to sleep, eat, move, work, recover, travel,
              care for others, manage symptoms, and make decisions inside a very imperfect world.
            </p>
            <p>
              I also work behind the scenes in health-technology and practitioner-education projects,
              helping translate complex lab and health information into clearer, more useful insights.
            </p>
            <p>
              That combination — client work, research synthesis, lived experience, and systems
              thinking — is what shapes how I support women in midlife.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4 — How I Approach Women's Health */}
      <Section bg="creamDark">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">How I approach women&rsquo;s health</h2>
          <div className="mt-6">
            <CheckList
              items={[
                'We look for patterns instead of chasing each symptom in isolation.',
                'We use lab work to improve decisions, not to manufacture a hundred problems.',
                'We discuss hormone therapy as one important tool, not the whole health plan.',
                'We prioritize strength, function, and long-term resilience alongside symptom relief.',
                'We build around the person who has to implement the plan.',
                'We follow up and adjust instead of treating a first draft like a moral test.',
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Section 5 — The Life I Fought to Get Back */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">The Life I Fought to Get Back</h2>
          <p className="mt-6 font-body text-lg text-ink/80">
            The goal of health was never to become a perfect patient. It was to have the freedom,
            energy, and capacity to build a life I actually wanted to live.
          </p>
        </div>
      </Section>

      {/* Section 6 — Final CTA */}
      <Section bg="forest" className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-white md:text-4xl">
            Your health is not the only thing that matters. It is the vehicle through which you get
            to experience almost everything else.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/reboot" className="btn-primary">Explore the Midlife Reboot</a>
            <a href="/#start" className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-forest">
              See All Ways to Start
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
