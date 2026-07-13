import Link from 'next/link';
import { Section, CtaButton, TopoSwirl } from '@/components/ui';
import { LeafIcon, PulseIcon, LungsIcon, VanSketch, CircleBadge } from '@/components/icons';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — large photo right, full verbatim copy left (mockup layout) ===== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid w-full max-w-content items-stretch gap-0 md:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-10 md:pr-12">
            <p className="eyebrow">For the woman who knows</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.25rem]">
              Stop guessing what happened to your body.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-ink/75">
              If your energy, sleep, weight, strength, mood, recovery, or hormones feel like
              they changed the rules without warning, you do not need another generic plan
              telling you to eat less, push harder, or &ldquo;just be consistent.&rdquo;
            </p>
            <p className="mt-4 max-w-xl font-body text-lg text-ink/75">
              You need a better way to understand what is actually happening in your body — and
              a realistic strategy for hormones, metabolism, strength, energy, and long-term
              resilience that fits the life you are actually living.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/reboot">Explore the Midlife Reboot</CtaButton>
              <CtaButton href="/audit" variant="secondary">Start With a Midlife Metabolism Audit</CtaButton>
            </div>
            <Link href="/locations" className="mt-8 inline-flex items-center gap-3 text-ink/70 transition-colors hover:text-terracotta">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              </span>
              <span className="font-body text-sm leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-forest">Testing Locations</span>
                See where I&rsquo;m testing next →
              </span>
            </Link>
          </div>

          {/* Large photo panel with topo-swirl overlay bleeding from photo edge */}
          <div className="relative min-h-[380px] md:min-h-full">
            <TopoSwirl className="absolute -left-24 top-1/2 z-10 hidden h-72 w-72 -translate-y-1/2 text-forest/25 md:block" />
            {/* PHOTO DIRECTION: strong, current photo of Jessie — warm, direct, real (not stock) */}
            <div className="flex h-full min-h-[380px] items-center justify-center bg-cream-dark text-center font-body text-sm text-ink/40">
              Hero photo of Jessie
              <br />(warm, direct, real)
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 OFFER CARDS — directly after hero, mockup style ===== */}
      <Section bg="creamLight" id="start" className="pt-12 md:pt-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <OfferCard
            icon={<LeafIcon />}
            title="The Midlife Reboot"
            intro="A six-month, lab-guided health strategy for women navigating perimenopause, menopause, hormone therapy, metabolism changes, burnout, and “what the hell happened to my body?”"
            cta="Explore the Midlife Reboot"
            href="/reboot"
          />
          <OfferCard
            icon={<PulseIcon />}
            title="The Midlife Metabolism Audit"
            intro="A focused whole-health consultation built around measured resting metabolism, your symptom picture, and the real-life factors that influence how your body is functioning right now."
            price="$295 • fee applies to the Reboot within 14 days"
            cta="Start With an Audit"
            href="/audit"
          />
          <OfferCard
            icon={<LungsIcon />}
            title="Metabolic & Fitness Testing"
            intro="Measure your resting metabolism or cardiovascular fitness instead of relying on generic formulas, wearable estimates, or “calories burned” guesses."
            price="RMR & VO₂ testing available separately"
            cta="View Metabolic & VO₂ Testing"
            href="/metabolism"
          />
        </div>
      </Section>

      {/* ===== Every Woman's Menopause Is Different (verbatim) ===== */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4 font-body text-lg text-ink/80">
            <p>
              Every woman&rsquo;s menopause is different. Your symptoms, hormones, metabolism,
              nervous system, history, personality, stress load, and lifestyle all matter. You
              don&rsquo;t need more generic advice. You need a better way to understand what&rsquo;s
              happening in your body, identify relevant patterns, and take the next right step.
            </p>
            <p>
              Midlife has a way of making old strategies stop working — sometimes quietly,
              sometimes like your body staged a full internal coup. The things you carried into
              this transition, like poor sleep, chronic stress, under-recovery, blood-sugar
              swings, pain, nutrient gaps, dieting history, or a complicated health story, can
              become harder to ignore.
            </p>
            <p>That does not mean everything is &ldquo;just menopause.&rdquo;</p>
            <p>
              It means this is the time to stop treating your symptoms, labs, metabolism,
              hormones, and lifestyle like they are all separate conversations.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== What Midlife Can Affect (verbatim + bullets) ===== */}
      <Section bg="creamDark">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl md:text-4xl">This is not just about hot flashes.</h2>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              <p>
                Perimenopause and menopause can change more than your cycle. These hormone shifts
                can influence how you sleep, think, recover, build muscle, regulate blood sugar,
                respond to stress, use energy, store fat, maintain bone, and feel in your own body.
              </p>
              <p>That does not mean every symptom is &ldquo;just menopause.&rdquo;</p>
              <p>
                It means midlife deserves a wider lens — especially if you already have a history
                of chronic illness, autoimmune issues, thyroid changes, reproductive disorders,
                pain, burnout, dieting, or old problems that suddenly start making noise again.
              </p>
              <p>
                This is where we look beyond one symptom, one lab marker, or one generic protocol
                and start connecting the bigger picture.
              </p>
            </div>
          </div>
          <ul className="grid content-start gap-3 rounded-lg bg-cream-light p-8 font-body text-ink/80 ring-1 ring-ink/5">
            {[
              'Hormones, symptoms, and hormone-therapy questions',
              'Metabolism, blood sugar, body composition, and cardiovascular risk',
              'Energy, sleep, recovery, and nervous-system load',
              'Strength, muscle, bone, mobility, and long-term independence',
              'Nutrition, nutrient status, digestion, and the practical realities of your life',
              'Chronic illness history, autoimmune patterns, thyroid changes, reproductive disorders, pain, and unresolved health stressors',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ===== About Jessie split — photo left, script accent, circle badge (mockup) ===== */}
      <Section bg="creamLight">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <span className="absolute -left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-script text-2xl text-terracotta/80 lg:block">
              been there, figured it out
            </span>
            {/* PHOTO DIRECTION: personal image communicating expertise + adventurous life */}
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-cream-dark text-center font-body text-sm text-ink/40">
              Personal image of Jessie
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">Hi, I&rsquo;m Jessie</p>
            <div className="mt-4 space-y-4 font-body text-lg text-ink/80">
              <p>
                I became a functional health practitioner after years of living inside a body
                that did not follow the easy instructions.
              </p>
              <p>
                Chronic pain, complex hormone changes, endometriosis, autoimmune patterns, and a
                long history of trying to make sense of fragmented healthcare gave me a very
                personal education in how confusing women&rsquo;s health can feel — especially
                when your labs, symptoms, and lived experience are not being looked at together.
              </p>
              <p>That is why my work is built around both evidence and real life.</p>
              <p>
                The science matters. So does the person who has to live with the plan. My job is
                to help you understand the information, connect the patterns, and decide what is
                actually worth doing next — without turning your life into a full-time wellness
                project.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <CtaButton href="/about" variant="forest">Read My Story</CtaButton>
              <CircleBadge className="hidden h-24 w-24 text-forest/70 sm:block" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Resource Lab (verbatim) ===== */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">
            Complicated science. Useful explanations. No 47-tab spiral required.
          </h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The Resource Lab is where I turn research about hormones, metabolism, lab testing,
              strength, and midlife health into practical resources you can actually use.
            </p>
            <p>
              This is for the woman who wants to understand what is happening in her body without
              falling into a full-time research hole, a supplement rabbit trail, or another
              &ldquo;expert&rdquo; telling her the same three things she has already tried.
            </p>
            <p>
              You&rsquo;ll find articles, guides, and resources that help you ask better
              questions, make sense of your options, and understand why midlife health deserves
              more than generic advice.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton href="/lab">Enter the Resource Lab</CtaButton>
          </div>
        </div>
      </Section>

      {/* ===== "I bring the lab to you" band with van sketch (mockup) ===== */}
      <section className="bg-sand">
        <div className="container-content grid items-center gap-6 py-12 md:grid-cols-[auto_1fr_auto]">
          <VanSketch className="hidden h-20 w-40 text-ink/60 md:block" />
          <div>
            <h2 className="text-2xl md:text-3xl">I bring the lab to you.</h2>
            <p className="mt-2 max-w-xl font-body text-ink/75">
              Metabolism + VO₂ testing is offered through scheduled locations, pop-ups, and
              partner events. See where I&rsquo;m testing next and book a test in a city near you.
            </p>
          </div>
          <CtaButton href="/locations" variant="secondary">View Testing Locations</CtaButton>
        </div>
      </section>

      {/* ===== Final CTA (verbatim) ===== */}
      <Section bg="forest" className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-white md:text-4xl">
            You do not need to fix everything today. You need the right next step.
          </h2>
          <p className="mt-6 font-body text-lg text-white/80">
            If your body feels different, your old strategies stopped working, or you are tired
            of trying to piece together hormones, metabolism, labs, symptoms, and real life on
            your own, start with the level of support that fits where you are now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/reboot" className="btn-primary">Explore the Midlife Reboot</Link>
            <Link href="/audit" className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-forest">
              Start With an Audit
            </Link>
            <Link href="/locations" className="inline-flex items-center justify-center rounded-md border border-white/60 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-forest">
              Book Metabolic Testing
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function OfferCard({
  icon,
  title,
  intro,
  price,
  cta,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  intro: string;
  price?: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="flex flex-col rounded-lg bg-cream p-8 ring-1 ring-ink/5">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 text-forest">
        {icon}
      </span>
      <h3 className="mt-6 font-display text-xl">{title}</h3>
      <p className="mt-3 font-body text-sm text-ink/70">{intro}</p>
      {price && <p className="mt-4 font-body text-sm font-bold text-terracotta">{price}</p>}
      <div className="mt-6 flex-1" />
      <Link href={href} className="link-arrow">
        {cta} →
      </Link>
    </div>
  );
}
