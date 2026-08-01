import Link from 'next/link';
import Image from 'next/image';
import { CtaButton, TopoSwirl } from '@/components/ui';
import {
  LeafIcon,
  PulseIcon,
  LungsIcon,
  VanSketch,
  CircleBadge,
  HandUnderline,
} from '@/components/icons';

export default function HomePage() {
  return (
    <>
      {/* ===================== 1 · HERO ===================== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid w-full max-w-content items-stretch md:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-10 md:pr-14">
            <p className="eyebrow">FOR WOMEN IN MIDLIFE</p>
            <h1 className="mt-4 font-display text-[2.4rem] leading-[1.07] md:text-5xl lg:text-[3.75rem] lg:leading-[1.04]">
              Stop{' '}
              <span className="relative inline-block italic">
                guessing
                <HandUnderline className="absolute -bottom-1 left-0 h-2 w-full text-terracotta md:-bottom-1.5 md:h-3" />
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

      {/* ============ 2 · EVERY WOMAN'S MENOPAUSE IS DIFFERENT ============ */}
      <section className="relative overflow-hidden bg-cream-light py-16 md:py-20">
        <TopoSwirl className="pointer-events-none absolute -right-20 top-6 h-72 w-72 text-forest/10" />
        <div className="container-content">
          <div className="mx-auto max-w-3xl rounded-2xl border-l-[3px] border-terracotta/70 bg-cream/70 p-8 ring-1 ring-ink/5 md:p-10">
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
        </div>
      </section>

      {/* ============ 3 · THIS IS NOT JUST ABOUT HOT FLASHES ============ */}
      <section className="relative overflow-hidden bg-cream-dark py-16 md:py-20">
        <TopoSwirl className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 text-forest/10" />
        <div className="container-content">
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
            <ul className="grid content-start gap-0 divide-y divide-ink/5 rounded-2xl bg-cream-light p-8 font-body text-ink/80 shadow-sm ring-1 ring-ink/5">
              {[
                'Hormones, symptoms, and hormone-therapy questions',
                'Metabolism, blood sugar, body composition, and cardiovascular risk',
                'Energy, sleep, recovery, and nervous-system load',
                'Strength, muscle, bone, mobility, and long-term independence',
                'Nutrition, nutrient status, digestion, and the practical realities of your life',
                'Chronic illness history, autoimmune patterns, thyroid changes, reproductive disorders, pain, and unresolved health stressors',
              ].map((item) => (
                <li key={item} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              pattern
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
              pattern
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
      <section className="bg-cream-light py-16 md:py-20">
        <div className="container-content">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-cream-dark p-10 text-center ring-1 ring-ink/5 md:p-14">
            <TopoSwirl className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 text-forest/10" />
            <TopoSwirl className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 text-terracotta/10" />
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
      <section className="bg-cream py-16 md:py-20">
        <div className="container-content">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <span className="pointer-events-none absolute -left-3 top-1/2 hidden -translate-y-1/2 -rotate-90 md:block">
                <span className="whitespace-nowrap font-body text-[11px] font-bold uppercase tracking-[0.3em] text-terracotta">
                  Been there, figured it out
                </span>
              </span>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:ml-10">
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
                <CircleBadge className="hidden h-20 w-20 text-forest/70 sm:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 7 · I BRING THE LAB TO YOU ===================== */}
      <section className="bg-sand">
        <div className="container-content grid items-center gap-8 py-14 md:grid-cols-[auto_1fr_auto] md:gap-10">
          <VanSketch className="h-24 w-48 text-ink/65 md:h-24 md:w-52" />
          <div>
            <h2 className="text-2xl md:text-3xl">I bring the lab to you.</h2>
            <p className="mt-2 max-w-lg font-body text-ink/75">
              See where I&rsquo;m testing next and book your metabolic test in a city near you.
            </p>
          </div>
          <CtaButton href="/locations" variant="secondary">View Testing Locations</CtaButton>
        </div>
      </section>

      {/* ===================== 8 · FINAL CTA ===================== */}
      <section className="bg-sage py-16 text-center md:py-20">
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

function OfferCard({
  icon,
  title,
  paragraphs,
  note,
  href,
  linkLabel,
  tint,
  pattern = false,
}: {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
  note?: string;
  href: string;
  linkLabel: string;
  tint: string;
  pattern?: boolean;
}) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-2xl p-8 ring-1 ring-ink/5 ${tint}`}>
      {pattern && (
        <TopoSwirl className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-forest/10" />
      )}
      <div className="relative flex flex-1 flex-col">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-cream/60 text-forest">
          {icon}
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
