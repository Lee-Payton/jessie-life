import Link from 'next/link';
import Image from 'next/image';
import { Section, CtaButton, TopoSwirl } from '@/components/ui';
import { LeafIcon, PulseIcon, LungsIcon, VanSketch, CircleBadge } from '@/components/icons';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — matches mockup: headline+copy left, large photo bleeding right ===== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid w-full max-w-content items-stretch md:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 md:py-24 md:pl-10 md:pr-14">
            <p className="eyebrow">For the woman who knows</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] md:text-6xl lg:text-[4.25rem]">
              There has to be a{' '}
              <span className="accent-underline">better</span> way.
            </h1>
            <p className="mt-6 max-w-md font-body text-lg text-ink/75">
              Personalized midlife health strategy and metabolic testing for women who are
              ready to stop guessing and start getting answers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/reboot">Explore the Reboot</CtaButton>
              <CtaButton href="/locations" variant="secondary">Book Testing</CtaButton>
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

          <div className="relative min-h-[420px] md:min-h-full">
            <TopoSwirl className="absolute -left-16 top-1/2 z-10 hidden h-64 w-64 -translate-y-1/2 text-forest/30 md:block" />
            <Image
              src="/brand/hero-jessie.jpg"
              alt="Jessie Faber"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== 3 OFFER CARDS (mockup copy) ===== */}
      <Section bg="creamLight" id="start" className="pt-14 md:pt-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <OfferCard
            icon={<LeafIcon />}
            title="Midlife Reboot"
            body="A comprehensive, personalized health strategy that connects your labs, metabolism, hormones, and lifestyle into one clear plan."
            href="/reboot"
          />
          <OfferCard
            icon={<PulseIcon />}
            title="Midlife Metabolism Audit"
            body="A 45-minute private consultation that starts with your resting metabolic test and ends with a personalized roadmap."
            href="/audit"
          />
          <OfferCard
            icon={<LungsIcon />}
            title="Metabolic Testing"
            body="Resting metabolic rate and VO₂ max testing that reveal the data your body has been trying to tell you."
            href="/metabolism"
          />
        </div>
      </Section>

      {/* ===== ABOUT SPLIT (mockup copy) ===== */}
      <Section bg="cream">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <span className="absolute -left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-script text-2xl text-terracotta/80 lg:block">
              been there, figured it out
            </span>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/brand/about-jessie.jpg"
                alt="Jessie Faber working"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">Hi, I&rsquo;m Jessie</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              I&rsquo;ve lived the chaos.
              <br />
              Now I help women find <em className="text-terracotta">clarity.</em>
            </h2>
            <div className="mt-5 space-y-4 font-body text-ink/80">
              <p>
                After my own health fell apart in my late 30s, I refused to accept
                &ldquo;normal.&rdquo; I dug deep, questioned everything, and rebuilt my health
                using the right data and a whole-body approach.
              </p>
              <p>
                Now I help midlife women do the same — without the years of trial, error, and
                second-guessing.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <CtaButton href="/about" variant="forest">Meet Jessie</CtaButton>
              <CircleBadge className="hidden h-24 w-24 text-forest/70 sm:block" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== "I bring the lab to you" band (mockup) ===== */}
      <section className="bg-sand">
        <div className="container-content grid items-center gap-6 py-12 md:grid-cols-[auto_1fr_auto]">
          <VanSketch className="hidden h-20 w-44 text-ink/60 md:block" />
          <div>
            <h2 className="text-2xl md:text-3xl">I bring the lab to you.</h2>
            <p className="mt-2 max-w-lg font-body text-ink/75">
              See where I&rsquo;m testing next and book your metabolic test in a city near you.
            </p>
          </div>
          <CtaButton href="/locations" variant="secondary">View Testing Locations</CtaButton>
        </div>
      </section>

      {/* ================= BRIEF SECTIONS (kept verbatim, styled to match) ================= */}

      {/* Every Woman's Menopause Is Different */}
      <Section bg="creamLight">
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

      {/* What Midlife Can Affect */}
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

      {/* Resource Lab */}
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

      {/* Final CTA */}
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
  body,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <div className="flex flex-col rounded-lg bg-cream p-8 ring-1 ring-ink/5">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 text-forest">
        {icon}
      </span>
      <h3 className="mt-6 font-display text-2xl">{title}</h3>
      <p className="mt-3 font-body text-sm text-ink/70">{body}</p>
      <div className="mt-6 flex-1" />
      <Link href={href} className="link-arrow">
        Learn More →
      </Link>
    </div>
  );
}
