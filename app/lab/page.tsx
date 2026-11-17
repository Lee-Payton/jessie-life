import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Section, CheckList, CtaButton } from '@/components/ui';
import { ArticleGrid, FeaturedArticleGrid, type FeaturedArticle } from '@/components/ArticleGrid';

export const metadata: Metadata = {
  title: 'The Resource Lab: Jessie.Life',
  description:
    'Practical science for living better, longer. Free articles on menopause, hormones, metabolism, nutrition, strength, and healthy aging.',
};

// Paste the real Substack links here. Anything left empty renders as a clearly
// marked placeholder on the page instead of a broken or invented link.
const PUBLICATION_URL = 'https://jessiefaber.substack.com';

const featuredArticles: FeaturedArticle[] = [
  {
    title: 'WHAT THE HELL IS HAPPENING TO ME?',
    excerpt: 'Demystifying Perimenopause & Menopause so you can get your brain & body back.',
    url: 'https://jessiefaber.substack.com/p/what-the-hell-is-happening-to-me?r=dhpsa',
    topic: 'Menopause',
  },
  {
    title: 'From Peri to Post...',
    excerpt: 'And the \u201Cinception\u201D of your conception.',
    url: 'https://jessiefaber.substack.com/p/from-peri-to-post?r=dhpsa',
    topic: 'Perimenopause',
  },
];

// Add real topic cards here later (for example { title, description, href }).
// The grid only renders when at least one card exists.
const topicCards: { title: string; description: string; href: string }[] = [];

const subscribeUrl = PUBLICATION_URL
  ? `${PUBLICATION_URL.replace(/\/+$/, '')}/subscribe`
  : '';

export default function LabPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-cream">
        <div className="container-content py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-terracotta">Free Education Library</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">The Resource Lab</h1>
            <p className="mt-6 font-body text-lg text-ink/80">
              Practical science for living better, longer. Explore menopause, hormones, metabolism,
              nutrition, strength, and healthy aging through clear explanations and resources you
              can actually use.
            </p>
            <div className="mt-8">
              <a
                href={PUBLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Explore Free Resources
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Resources */}
      <Section id="featured" bg="creamDark">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">Featured resources</h2>
          <div className="mt-8">
            <Suspense fallback={<FeaturedArticleGrid featured={featuredArticles} />}>
              <ArticleGrid publicationUrl={PUBLICATION_URL} featured={featuredArticles} />
            </Suspense>
          </div>

          {topicCards.length > 0 && (
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {topicCards.map((topic) => (
                <a
                  key={topic.title}
                  href={topic.href}
                  className="rounded-lg bg-cream-light p-6 ring-1 ring-ink/5"
                >
                  <p className="eyebrow">Topic</p>
                  <h3 className="mt-2 font-display text-xl">{topic.title}</h3>
                  <p className="mt-2 font-body text-sm text-ink/70">{topic.description}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Section 3: What You'll Find Inside */}
      <Section bg="creamLight">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl">
            Practical context for the health topics everyone is talking about… or should be.
          </h2>
          <div className="mt-6 space-y-4 font-body text-lg text-ink/80">
            <p>
              The Resource Lab is where I share clear, grounded explanations about the science,
              trends, tests, tools, and options that come up in midlife health. You may find
              resources on:
            </p>
          </div>
          <div className="mt-4">
            <CheckList
              items={[
                'New hormone, menopause, and longevity research',
                'Medications, supplements, peptides, and popular health trends',
                'Metabolic testing, VO₂, wearables, and fitness data',
                'Lab markers and testing options',
                'Nutrition, strength, recovery, and resilience in midlife',
                'Questions worth asking before jumping into the next protocol, product, or promise',
              ]}
            />
          </div>
          <p className="mt-6 font-body text-lg text-ink/80">
            The Resource Lab is for education and context. It can help you understand the landscape,
            ask better questions, and decide what may be worth exploring further.
          </p>
          <div className="mt-8">
            <CtaButton href="/metabolism" variant="secondary">
              Explore Midlife Metabolism Testing
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* Section 4: Optional subscribe */}
      <Section id="subscribe">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl">New research, delivered when you want it</h2>
          <p className="mt-4 font-body text-sm text-ink/60">
            All articles are free to read. Subscribe if you&apos;d like new research and resources
            delivered to your inbox.
          </p>
          <div className="mt-6">
            {subscribeUrl ? (
              <a
                href={subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get New Research in Your Inbox
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <>
                <span
                  className="btn-primary pointer-events-none opacity-60"
                  aria-disabled="true"
                >
                  Get New Research in Your Inbox
                </span>
                <p className="mt-3 font-body text-sm text-ink/60">
                  Link to be added once the Substack publication URL is provided.
                </p>
              </>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
