import { Section, CtaButton } from '@/components/ui';
import VerticalVimeo from '@/components/VerticalVimeo';

type VideoPageProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  videoId: string;
  videoTitle: string;
  ctaHref: string;
  ctaLabel: string;
};

export default function VideoPage({
  eyebrow,
  heading,
  intro,
  videoId,
  videoTitle,
  ctaHref,
  ctaLabel,
}: VideoPageProps) {
  return (
    <Section bg="creamLight" spacing="compact">
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
