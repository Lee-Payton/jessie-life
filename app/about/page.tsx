import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaButton } from '@/components/ui';
import { CircleBadge } from '@/components/icons';
import { ContourLines, SprigDoodle, MoleculeDoodle, LoopDoodle } from '@/components/decor';

export const metadata: Metadata = {
  title: 'About Jessie Faber — Jessie.Life',
  description:
    'Functional health practitioner, researcher, and educator helping women in perimenopause and menopause connect the dots between hormones, symptoms, labs, metabolism, strength, and real life.',
};

const personalParagraphs = [
  'I didn’t come to this work because menopause started getting trendy.',
  'I arrived here after spending years inside a body that did not follow the easy instructions.',
  'I have lived through stage 4 endometriosis, fibroids, adhesive disease, chronic pain, hypermobility, autoimmune issues, early perimenopause, four abdominal surgeries, a total hysterectomy with removal of both ovaries, and the abrupt menopause that followed.',
  'I know what it is like to move between conventional medicine, functional health, nutrition, alternative care, physical therapy, surgery, medications, hormone therapy, supplements, lifestyle changes, and a truly unreasonable amount of research—trying to understand which pieces mattered and which were simply adding more work.',
  'I have experienced the limits of fragmented care, the relief that comes from finally finding the right lever, and the maddening reality that something that worked beautifully last year can stop working when hormones, stress, illness, injury, or life change the rules.',
  'I also know what it feels like when every provider addresses one piece, but no one helps you understand how the pieces fit together.',
  'A symptom gets one explanation. A lab result gets another. Pain is treated separately from sleep. Hormones are discussed separately from metabolism. Nutrition is reduced to calories. Exercise advice ignores recovery, injuries, and the nervous system. Every person gives you one more thing to do, but no one helps you decide what matters most.',
  'That history does not make my experience identical to yours.',
];

const professionalParagraphs = [
  'I have worked in health and wellness since 2016, with training and experience in functional health, nutrition, lab review, hormone and menopause education, metabolism, behavior change, and client coaching.',
  'My role is to help you organize the information, understand the wider picture, identify useful patterns, and walk into medical appointments with better questions, clearer priorities, and the confidence to advocate effectively for the care you deserve so we can turn what we know into a clear and realistic health strategy.',
  'I also work behind the scenes in health-technology and practitioner-education projects, helping translate complicated laboratory and health information into insights that are clearer, more accurate, and more useful.',
  'That work matters because I do not only want to know whether a claim sounds compelling. I want to know what the research actually supports, what the available data can and cannot tell us, and whether the conclusion is appropriate for the individual woman in front of me.',
  'At the same time, evidence cannot be separated from real life.',
  'Research matters. Lab data matters. So does the person trying to sleep, eat, move, work, travel, recover, care for other people, manage symptoms, afford the plan, and make decisions inside a very imperfect world.',
  'That combination—client work, research synthesis, lived experience, and systems thinking—is what shapes the way I support women in midlife.',
];

const principles: { lead: string; body: string }[] = [
  {
    lead: 'We look for patterns instead of chasing every symptom in isolation.',
    body: 'Your sleep, hormones, blood sugar, nutrition, stress response, strength, pain, energy, and recovery are constantly influencing one another.',
  },
  {
    lead: 'We use lab work to improve decisions—not to manufacture a hundred new problems.',
    body: 'More testing is not automatically better. We look at what has already been measured, what the results can reasonably tell us, what is missing, and whether additional information would change what we do.',
  },
  {
    lead: 'We do not decide what is wrong before seeing the information.',
    body: 'I do not assume every woman has insulin resistance, a damaged metabolism, a hormone imbalance, adrenal dysfunction, or the same root cause hiding underneath every symptom.',
  },
  {
    lead: 'We approach hormone therapy as a crucial, nuanced part of the picture—not a set-it-and-forget-it solution.',
    body: 'Hormones are closely connected with symptoms, sleep, mood, bone, brain, cardiovascular health, blood-sugar regulation, body composition, sexual health, and quality of life. We help you understand why hormone therapy may or may not be appropriate for you, how timing, formulation, delivery method, dose, and individual response shape the decision, and what to discuss with your prescribing clinician so you can make informed choices with greater confidence. If hormone therapy is not appropriate, not an option, not right yet, or simply not something you want, we focus on the other strategies that can still meaningfully support how you feel, function, and age.',
  },
  {
    lead: 'We prioritize strength, function, and long-term resilience alongside symptom relief.',
    body: 'Feeling better now matters. So does maintaining the physical and metabolic capacity to keep doing what you love later.',
  },
  {
    lead: 'We build around the person who has to implement the plan.',
    body: 'Your personality, executive function, schedule, finances, food preferences, travel, relationships, responsibilities, and actual capacity are relevant health information.',
  },
  {
    lead: 'We follow up and adjust.',
    body: 'A first draft is not a moral test. Bodies change. Circumstances change. Sometimes a strategy works. Sometimes it needs to be simplified, modified, or thrown out entirely.',
  },
];

const lifeParagraphs = [
  'I didn’t fight this hard just to become better at managing symptoms.',
  'I fought for the energy, strength, stability, and freedom to build a life I actually wanted to live.',
  'For the past several years, that life has included full-time travel, working from the road, rebuilding my body after surgeries and setbacks, learning how to adapt when life refuses to stay predictable, and continuing to ask more of myself without pretending that resilience means ignoring my limits.',
  'It is not a perfectly optimized life.',
  'There are changing locations, inconvenient kitchens, limited equipment, injuries, family crises, grief and loss, deadlines, disrupted routines, hormone adjustments, and plenty of moments when the “ideal plan” is not remotely available.',
  'That is part of why I care so much about helping women build strategies that can survive real life.',
  'Your health should support your ability to work, travel, create, move, think, love people, care for yourself, experience joy, and participate in your own life.',
  'It should not require you to organize your entire existence around being a patient.',
];

const whoParagraphs = [
  'I primarily work with women in and around their 40s who are navigating perimenopause, menopause, hormone therapy, hysterectomy, changing metabolism, reduced recovery, disrupted sleep, new symptoms, or the unnerving feeling that the strategies they used for years suddenly stopped working.',
  'Some women come to me because their health has become complicated.',
  'Others are functioning fairly well but want to understand their risks, preserve their strength, improve their energy, and make informed decisions before small problems become larger ones.',
  'Many have already tried a lot.',
  'They may have changed their diet, taken supplements, exercised harder, exercised less, tracked everything, stopped tracking everything, started hormone therapy, changed hormone therapy, seen multiple practitioners, or spent years being told that their results were normal while still knowing that something felt wrong.',
  'You do not need another person automatically telling you to eat less, try harder, buy more supplements, or blame every symptom on menopause.',
  'You need someone who can look at the wider picture, explain what the information means, acknowledge what we still do not know, and help you determine what is actually worth doing next.',
];

const workOptions = [
  {
    title: 'The Midlife Reboot',
    body: 'A six-month, lab-guided health strategy for women who want the full picture, a personalized plan, and support implementing and adjusting that plan in real life.',
    href: '/reboot',
    linkLabel: 'Explore the Midlife Reboot',
  },
  {
    title: 'The Midlife Metabolism Audit',
    body: 'A focused assessment built around measured resting metabolism, your symptom picture, and the factors influencing your energy, blood sugar, body composition, recovery, and overall health.',
    href: '/audit',
    linkLabel: 'Start With the Midlife Metabolism Audit',
  },
  {
    title: 'Metabolic and VO₂ Testing',
    body: 'Objective resting-metabolism and cardiorespiratory-fitness testing for people who want better information than a generic formula, wearable estimate, or calorie-burn guess.',
    href: '/metabolism',
    linkLabel: 'View Metabolic and VO₂ Testing',
  },
  {
    title: 'The Resource Lab',
    body: 'Practical explanations of hormones, metabolism, lab testing, strength, medications, supplements, health trends, and the questions worth asking before trying the next promising thing.',
    href: '/lab',
    linkLabel: 'Enter the Resource Lab',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===================== 1 · HERO ===================== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid w-full max-w-content items-stretch md:grid-cols-[1fr_1.02fr]">
          <div className="relative z-10 flex flex-col justify-start px-6 py-14 md:py-20 md:pl-10 md:pr-14">
            <ContourLines className="pointer-events-none absolute -left-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-forest/[0.07] md:block" />
            <div className="relative">
              <p className="eyebrow text-terracotta">About Jessie</p>
              <h1 className="mt-4 font-display text-[2.2rem] leading-[1.08] md:text-4xl lg:text-[3rem] lg:leading-[1.05]">
                I help women understand what&rsquo;s happening in their bodies during midlife so they
                can feel and function better now, <em>and for the rest of their lives.</em>
              </h1>
              <div className="mt-6 max-w-md space-y-4 font-body text-base text-ink/75 md:text-lg">
                <p>
                  I&rsquo;m Jessie Faber—a functional health practitioner, researcher, educator and
                  full-time nomad.
                </p>
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
                  Because the most scientifically perfect plan in the world is useless if it does not
                  work for the person who has to live it.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center px-6 pb-14 md:px-0 md:pb-16 md:pr-10 md:pt-20">
            <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-lg">
              <Image
                src="/images/about-portrait.jpg"
                alt="Jessie Faber seated against a sunlit wall"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 46vw"
                className="object-cover object-[55%_28%]"
              />
            </div>
            <div className="mt-8 flex w-full max-w-[520px] justify-center">
              <CtaButton href="#work-with-jessie">Explore Ways to Work Together</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2 · WHY THIS WORK IS PERSONAL ============ */}
      <section className="relative overflow-hidden bg-cream-light py-14 md:py-20">
        <ContourLines className="pointer-events-none absolute -right-32 -top-16 h-96 w-96 -rotate-12 text-terracotta/[0.06]" />
        <div className="container-content relative">
          <div className="mx-auto max-w-3xl">
              <p className="eyebrow text-terracotta">Why this work is personal</p>
            <div className="mt-5 space-y-4 font-body text-lg text-ink/80">
              {personalParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-[3px] border-terracotta pl-6 font-display text-xl italic leading-snug text-ink md:text-2xl">
              It makes me very unwilling to assume that every woman has the same problem—or hand every
              woman the same plan.
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ 3 · MY PROFESSIONAL BACKGROUND ============ */}
      <section className="relative overflow-hidden bg-cream-dark py-14 md:py-20">
        <ContourLines className="pointer-events-none absolute -left-28 bottom-0 h-80 w-80 text-forest/[0.07]" />
        <div className="container-content relative">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-terracotta">My professional background</p>
            <h2 className="mt-4 font-display text-2xl leading-snug md:text-[2rem]">
              My work blends functional health, lab strategy, research, education, and real-life
              implementation.
            </h2>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              {professionalParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4 · HOW I APPROACH WOMEN'S HEALTH ============ */}
      <section className="relative overflow-hidden bg-cream py-14 md:py-20">
        <MoleculeDoodle className="pointer-events-none absolute right-8 top-10 hidden h-20 w-20 text-terracotta/12 md:block" />
        <div className="container-content relative">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">How I approach women&rsquo;s health</p>
            <h2 className="mt-4 font-display text-2xl leading-snug md:text-[2rem]">
              We connect the dots so you know what matters most.
            </h2>
            <p className="mt-5 font-body text-lg text-ink/80">
              My work is personalized, but the principles behind it are straightforward:
            </p>

            <ul className="mt-6 overflow-hidden rounded-2xl bg-cream-light p-6 ring-1 ring-ink/5 md:p-8">
              {principles.map((item, i) => (
                <li
                  key={item.lead}
                  className={`flex gap-4 py-5 first:pt-0 last:pb-0 ${
                    i === principles.length - 1 ? '' : 'border-b border-dashed border-ink/[0.12]'
                  }`}
                >
                  <BulletMark index={i} />
                  <div className="font-body text-ink/80">
                    <p className="font-display text-lg leading-snug text-ink">{item.lead}</p>
                    <p className="mt-1.5">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 font-body text-lg text-ink/80">
              <p>The goal is not to make you perfect at managing your health.</p>
              <p>
                It is to help you understand your body well enough to make better decisions, direct
                your effort where it is most useful, and stop treating every new symptom like a
                separate emergency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5 · THE LIFE I FOUGHT TO GET BACK ============ */}
      <section className="relative overflow-hidden bg-cream-light py-14 md:py-20">
        <div className="container-content relative">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <div className="order-2 flex flex-col items-center md:order-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/about-life.jpg"
                  alt="Jessie with arms raised at the end of an ocean pier"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-[center_32%]"
                />
              </div>
              <span className="mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-cream-light p-2 shadow-md ring-1 ring-ink/5 md:h-28 md:w-28">
                <CircleBadge className="h-full w-full text-forest/80" />
              </span>
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow text-terracotta">The life I fought to get back</p>
              <div className="mt-5 space-y-4 font-body text-lg text-ink/80">
                {lifeParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6 · WHO I WORK WITH ============ */}
      <section className="relative overflow-hidden bg-cream-dark py-14 md:py-20">
        <ContourLines className="pointer-events-none absolute -right-24 -bottom-16 h-80 w-80 -rotate-6 text-forest/[0.08]" />
        <div className="container-content relative">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-terracotta">Who I work with</p>
            <h2 className="mt-4 font-display text-2xl leading-snug md:text-[2rem]">
              Your health story may be complicated. Your next steps should still be clear.
            </h2>
            <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
              {whoParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7 · WAYS TO WORK WITH ME ============ */}
      <section
        id="work-with-jessie"
        className="scroll-mt-24 bg-cream py-14 md:py-20"
      >
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Ways to work with me</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Choose the level of information and support that fits where you are now.
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
            {workOptions.map((opt, i) => (
              <div
                key={opt.title}
                className="relative flex flex-col overflow-hidden rounded-2xl bg-cream-light p-8 ring-1 ring-ink/5"
              >
                {i === 0 && (
                  <SprigDoodle className="pointer-events-none absolute -right-2 -top-2 h-20 w-16 text-forest/10" />
                )}
                {i === 3 && (
                  <LoopDoodle className="pointer-events-none absolute -right-6 -bottom-2 h-12 w-44 text-terracotta/8" />
                )}
                <h3 className="relative font-display text-2xl">{opt.title}</h3>
                <p className="relative mt-3 font-body text-ink/75">{opt.body}</p>
                <div className="mt-6 flex-1" />
                <Link href={opt.href} className="link-arrow relative">
                  {opt.linkLabel}&nbsp;→
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8 · FINAL CALL TO ACTION ============ */}
      <section className="bg-sage py-14 text-center md:py-16">
        <div className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl text-forest md:text-4xl">
              Your health is not the only thing that matters. It is the vehicle through which you get
              to experience almost everything else.
            </h2>
            <p className="mt-6 font-body text-lg text-ink/75">
              You deserve to understand what may be happening in your body, what information is worth
              gathering, and which next step makes the most sense for the life you want to protect and
              build.
            </p>
          </div>
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link href="/reboot" className="btn-forest w-full whitespace-nowrap sm:w-auto">
              Explore the Midlife Reboot
            </Link>
            <Link
              href="#work-with-jessie"
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md border border-forest/40 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-forest transition-colors hover:bg-forest hover:text-white sm:w-auto"
            >
              See All Ways to Start
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/lab" className="link-arrow">
              Read the Resource Lab&nbsp;→
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Small hand-drawn coral bullet marks; alternate an imperfect ring and a short
// stroke so the list feels drawn rather than templated. Mirrors the homepage.
function BulletMark({ index }: { index: number }) {
  const isRing = index % 2 === 0;
  return (
    <svg
      className="mt-1 h-5 w-5 flex-shrink-0 text-terracotta"
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
