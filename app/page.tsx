import Link from 'next/link';
import Image from 'next/image';
import { CtaButton } from '@/components/ui';
import { LeafIcon, PulseIcon, LungsIcon, VanSketch, CircleBadge, HandUnderline } from '@/components/icons';
import {
  ContourLines,
  LoopDoodle,
  SprigDoodle,
  MoleculeDoodle,
  SunDoodle,
} from '@/components/decor';

export default function HomePage() {
  return (
    <>
      {/* ===================== 1 · HERO ===================== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid w-full max-w-content items-stretch md:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-10 md:pr-14">
            <ContourLines className="pointer-events-none absolute -left-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-forest/[0.07] md:block" />
            <div className="relative">
              <p className="eyebrow">FOR WOMEN IN MIDLIFE</p>
              <h1 className="mt-4 font-display text-[2.4rem] leading-[1.07] md:text-5xl lg:text-[3.75rem] lg:leading-[1.04]">
                Stop{' '}
                <span className="relative inline-block italic">
                  guessing
                  <HandUnderline className="absolute -bottom-1.5 left-1/2 h-2.5 w-[72%] -translate-x-1/2 text-terracotta md:-bottom-2 md:h-3" />
                </span>{' '}
                what happened to your body.
              </h1>
              <div className="mt-6 max-w-md space-y-4 font-body text-base text-ink/75 md:text-lg">
                <p>
                  If your energy, sleep, weight, strength, mood, recovery, or hormones feel
                  like they changed the rules without warning, you do not need another generic
                  plan telling you to eat less, push harder, or &ldquo;just be consistent.&rdquo;
                </p>
                <p>
                  You need a better way to understand what is actually happening in your body
                  — and a realistic strategy for hormones, metabolism, strength, energy, and
                  long-term resilience that fits the life you are actually living.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaButton href="/reboot">Explore the Midlife Reboot</CtaButton>
                <CtaButton href="/audit" variant="secondary">
                  Start With a Midlife Metabolism Audit
                </CtaButton>
              </div>
              <Link
                href="/locations"
                className="mt-8 inline-flex items-center gap-3 text-ink/70 transition-colors hover:text-terracotta"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/25">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="font-body text-sm leading-tight">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-forest">Testing Locations</span>
                  See where I&rsquo;m testing next →
                </span>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] md:min-h-full">
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

      {/* ============ 2 · EVERY WOMAN'S MENOPAUSE IS DIFFERENT ============ */}
      <section className="relative overflow-hidden bg-cream-light py-14 md:py-20">
        <ContourLines className="pointer-events-none absolute -left-28 top-4 h-80 w-80 rotate-6 text-forest/[0.08]" />
        <ContourLines className="pointer-events-none absolute -right-32 -bottom-16 h-96 w-96 -rotate-12 text-terracotta/[0.07]" />
        <div className="container-content relative">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border-l-[3px] border-terracotta bg-cream p-8 shadow-sm ring-1 ring-ink/5 md:p-10">
              <SprigDoodle className="pointer-events-none absolute -right-2 -top-2 h-20 w-16 text-forest/10" />
              <h2 className="relative font-display text-2xl leading-tight md:text-[2rem]">
                Every woman&rsquo;s menopause is different.
              </h2>
              <div className="relative mt-5 space-y-4 font-body text-lg text-ink/80">
                <p>
                  Your symptoms, hormones, metabolism, nervous system, history, personality,
                  stress load, and lifestyle all matter. You don&rsquo;t need more generic advice.
                  You need a better way to understand what&rsquo;s happening in your body, identify
                  relevant patterns, and take the next right step.
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
          </div>
        </div>
      </section>

      {/* ============ 3 · THIS IS NOT JUST ABOUT HOT FLASHES ============ */}
      <section className="relative overflow-hidden bg-cream-dark py-14 md:py-20">
        <ContourLines className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 text-forest/[0.08]" />
        <div className="container-content relative">
          <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
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
            <div className="relative">
              <ContourLines className="pointer-events-none absolute -right-16 -top-12 h-56 w-56 text-terracotta/[0.09]" />
              <ul className="relative overflow-hidden rounded-2xl bg-cream-light p-8 font-body text-ink/80 shadow-sm ring-1 ring-ink/5">
                {[
                  'Hormones, symptoms, and hormone-therapy questions',
                  'Metabolism, blood sugar, body composition, and cardiovascular risk',
                  'Energy, sleep, recovery, and nervous-system load',
                  'Strength, muscle, bone, mobility, and long-term independence',
                  'Nutrition, nutrient status, digestion, and the practical realities of your life',
                  'Chronic illness history, autoimmune patterns, thyroid changes, reproductive disorders, pain, and unresolved health stressors',
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`flex gap-3 py-3.5 first:pt-0 last:pb-0 ${
                      i === 5 ? '' : 'border-b border-dashed'
                    } ${i % 2 === 0 ? 'border-ink/[0.12]' : 'border-ink/[0.06]'}`}
                  >
                    <BulletMark index={i} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4 · THREE OFFER CARDS ===================== */}
      <section id="start" className="scroll-mt-24 bg-cream py-12 md:py-16">
        <div className="container-content">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <OfferCard
              icon={<LeafIcon />}
              title="The Midlife Reboot"
              tint="bg-cream-light"
              accent
              decor={
                <ContourLines className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 text-forest/[0.10]" />
              }
              paragraphs={[
                'A six-month, lab-guided health strategy for women navigating perimenopause, menopause, hormone therapy, metabolism changes, burnout, and \u201cwhat the hell happened to my body?\u201d',
                'For women who want the full picture, a personalized strategy, and the support to troubleshoot and adjust that strategy until it actually works in real life.',
              ]}
              note="Six months of personalized strategy, support, and follow-through"
              href="/reboot"
              linkLabel="Explore the Midlife Reboot"
            />
            <OfferCard
              icon={<PulseIcon />}
              title="The Midlife Metabolism Audit"
              tint="bg-[#f1e2da]"
              decor={
                <MoleculeDoodle className="pointer-events-none absolute right-5 top-6 h-16 w-16 text-terracotta/15" />
              }
              paragraphs={[
                'A focused whole-health consultation built around measured resting metabolism, your symptom picture, and the real-life factors that influence how your body is functioning right now.',
                'For women who want clarity, context, and a practical next step without committing to six months of support.',
              ]}
              note="$295 • Apply the full fee to the Midlife Reboot when you enroll within 14 days"
              href="/audit"
              linkLabel="Start With an Audit"
            />
            <OfferCard
              icon={<LungsIcon />}
              title="Metabolic & Fitness Testing"
              tint="bg-[#e5e9de]"
              decor={
                <ContourLines className="pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 text-forest/[0.11]" />
              }
              paragraphs={[
                'Measure your resting metabolism or cardiovascular fitness instead of relying on generic formulas, wearable estimates, or \u201ccalories burned\u201d guesses that may or may not have anything to do with your actual body.',
                'Standalone testing is available for women, athletes, gym members, and anyone who wants objective information about how their body uses energy and oxygen.',
              ]}
              note="RMR and VO₂ testing available separately or as part of select offers"
              href="/metabolism"
              linkLabel="View Metabolic & VO₂ Testing"
            />
          </div>
        </div>
      </section>

      {/* ===================== 5 · RESOURCE LAB ===================== */}
      <section className="bg-cream-light py-14 md:py-20">
        <div className="container-content">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-cream-dark p-10 text-center ring-1 ring-ink/5 md:p-14">
            <ContourLines className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-forest/[0.09]" />
            <LoopDoodle className="pointer-events-none absolute -left-6 bottom-6 h-16 w-56 text-terracotta/15" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl">
                Complicated science. Useful explanations. No 47-tab spiral required.
              </h2>
              <div className="mx-auto mt-6 max-w-2xl space-y-4 font-body text-lg text-ink/80">
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
          </div>
        </div>
      </section>

      {/* ===================== 6 · ABOUT JESSIE ===================== */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container-content">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              {/* Vertical phrase beside the image on desktop */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-5 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 md:block"
              >
                <span className="whitespace-nowrap font-body text-[11px] font-bold uppercase tracking-[0.3em] text-terracotta">
                  Science that works in real life
                </span>
              </span>
              {/* Horizontal phrase above the image on mobile */}
              <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.28em] text-terracotta md:hidden">
                Science that works in real life
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:ml-8">
                <Image
                  src="/brand/about-jessie.jpg"
                  alt="Jessie Faber working"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Science · Strategy · Freedom seal overlapping the image corner */}
              <span className="absolute -bottom-6 right-2 flex h-24 w-24 items-center justify-center rounded-full bg-cream p-2 shadow-md ring-1 ring-ink/5 md:-right-6 md:h-28 md:w-28">
                <CircleBadge className="h-full w-full text-forest/80" />
              </span>
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow">About Jessie</p>
              <h2 className="mt-3 font-display text-2xl leading-snug md:text-[1.9rem]">
                I&rsquo;m Jessie Faber — a functional health practitioner, researcher, educator, and
                full-time nomad.
              </h2>
              <div className="mt-5 space-y-4 font-body text-ink/80">
                <p>
                  I help women in perimenopause and menopause connect the dots between their
                  hormones, symptoms, labs, metabolism, strength, energy, health history, and the
                  life they are actually trying to live.
                </p>
                <p>
                  My approach is science-heavy and human-centered. I want to know what the research
                  says, what your data shows, and whether the plan has any chance of surviving your
                  schedule, nervous system, personality, budget, responsibilities, and tolerance for
                  nonsense.
                </p>
                <p>
                  Because the most scientifically perfect plan in the world is useless if it does
                  not work for the person who has to live it.
                </p>
              </div>
              <div className="mt-8">
                <CtaButton href="/about" variant="forest">Read My Story</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 7 · I BRING THE LAB TO YOU ===================== */}
      <section className="relative overflow-hidden bg-sand py-10 md:py-14">
        <SunDoodle className="pointer-events-none absolute right-8 top-6 hidden h-14 w-14 text-terracotta/25 md:block" />
        <div className="container-content relative grid items-center gap-6 text-center md:grid-cols-[auto_1fr_auto] md:gap-10 md:text-left">
          <VanSketch className="mx-auto h-28 w-52 text-ink/70 md:mx-0" />
          <div>
            <h2 className="text-2xl md:text-3xl">I bring the lab to you.</h2>
            <p className="mx-auto mt-2 max-w-lg font-body text-ink/75 md:mx-0">
              See where I&rsquo;m testing next and book your metabolic test in a city near you.
            </p>
          </div>
          <Link
            href="/locations"
            className="mx-auto inline-flex items-center justify-center gap-2 rounded-md border border-terracotta bg-cream px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-terracotta transition-colors hover:bg-terracotta hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 md:mx-0"
          >
            View Testing Locations
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* ===================== 8 · FINAL CTA ===================== */}
      <section className="bg-sage py-14 text-center md:py-16">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl text-forest md:text-4xl">
              Your health is not the only thing that matters. It is the vehicle through which you
              get to experience almost everything else.
            </h2>
            <p className="mt-6 font-body text-lg text-ink/75">
              If your body feels different, your old strategies stopped working, or you are tired
              of trying to piece together hormones, metabolism, labs, symptoms, and real life on
              your own, start with the level of support that fits where you are now.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link href="/reboot" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              Explore the Midlife Reboot
            </Link>
            <Link href="/audit" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              Start With an Audit
            </Link>
            <Link href="/locations" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              Book Metabolic Testing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Small hand-drawn coral bullet marks; alternate an imperfect ring and a short
// stroke so the list feels drawn rather than templated.
function BulletMark({ index }: { index: number }) {
  const isRing = index % 2 === 0;
  return (
    <svg
      className="mt-1 h-4 w-4 flex-shrink-0 text-terracotta"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {isRing ? (
        <path d="M8 3.2c3 .2 5 2.3 4.7 4.9-.3 2.6-2.7 4.2-5.3 3.7C4.9 11.4 3.2 9 3.8 6.6 4.2 4.6 5.8 3.3 8 3.2Z" />
      ) : (
        <path d="M4 10c2.2-1.4 4.4-3.2 8-6" />
      )}
    </svg>
  );
}

function OfferCard({
  icon,
  title,
  paragraphs,
  note,
  href,
  linkLabel,
  tint,
  decor,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
  note?: string;
  href: string;
  linkLabel: string;
  tint: string;
  decor?: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-2xl p-8 ring-1 ring-ink/5 ${tint}`}>
      {decor}
      <div className="relative flex flex-1 flex-col">
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-cream/60 text-forest">
          {icon}
          {accent && (
            <SprigDoodle className="pointer-events-none absolute -right-5 -top-4 h-9 w-7 text-forest/30" />
          )}
        </span>
        <h3 className="mt-6 font-display text-2xl">{title}</h3>
        <div className="mt-3 space-y-3 font-body text-sm text-ink/70">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {note && <p className="mt-4 font-body text-sm font-semibold text-forest">{note}</p>}
        <div className="mt-6 flex-1" />
        <Link href={href} className="link-arrow">
          {linkLabel}&nbsp;→
        </Link>
      </div>
    </div>
  );
}
