import { Section, CtaButton } from '@/components/ui';
import VerticalVimeo from '@/components/VerticalVimeo';

type VideoPageProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  videoId: string;
  videoTitle: string;
  thumbnailUrl: string;
  uploadDate: string;
  ctaHref: string;
  ctaLabel: string;
};

export default function VideoPage({
  eyebrow,
  heading,
  intro,
  videoId,
  videoTitle,
  thumbnailUrl,
  uploadDate,
  ctaHref,
  ctaLabel,
}: VideoPageProps) {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: videoTitle,
    description: intro,
    thumbnailUrl,
    uploadDate,
    embedUrl: `https://player.vimeo.com/video/${videoId}?autopause=0&player_id=0&app_id=58479`,
  }).replace(/</g, '\\u003c');

  return (
    <Section bg="creamLight" spacing="compact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow text-terracotta">{eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-3xl md:text-4xl">{heading}</h1>
        <p className="mt-4 text-pretty font-body text-lg text-ink/80">{intro}</p>
        <div className="mt-8">
          <VerticalVimeo videoId={videoId} title={videoTitle} size="large" lazy={false} />
        </div>
        <div className="mt-8 flex justify-center">
          <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
        </div>
      </div>
    </Section>
  );
}
