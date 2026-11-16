import { LeafIcon, PulseIcon } from '@/components/icons';
import { ContourLines, SprigDoodle, MoleculeDoodle } from '@/components/decor';

const articleStyles = [
  {
    tint: 'bg-cream-light',
    icon: <LeafIcon />,
    decor: (
      <ContourLines className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 text-forest/[0.10]" />
    ),
  },
  {
    tint: 'bg-[#f1e2da]',
    icon: <PulseIcon />,
    decor: (
      <MoleculeDoodle className="pointer-events-none absolute right-5 top-6 h-16 w-16 text-terracotta/15" />
    ),
  },
];

type ArticleCardProps = {
  title: string;
  excerpt: string;
  url: string;
  index: number;
  publishedAt?: string;
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function ArticleCard({ title, excerpt, url, index, publishedAt }: ArticleCardProps) {
  const style = articleStyles[index % articleStyles.length];

  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl p-8 ring-1 ring-ink/5 ${style.tint}`}
    >
      {style.decor}
      <div className="relative flex flex-1 flex-col">
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-cream/60 text-forest">
          {style.icon}
          {index % articleStyles.length === 0 && (
            <SprigDoodle className="pointer-events-none absolute -right-5 -top-4 h-9 w-7 text-forest/30" />
          )}
        </span>
        {publishedAt && (
          <time dateTime={publishedAt} className="eyebrow mt-6 text-ink/60">
            {dateFormatter.format(new Date(publishedAt))}
          </time>
        )}
        <h3 className={`${publishedAt ? 'mt-2' : 'mt-6'} font-display text-2xl`}>{title}</h3>
        {excerpt && <p className="mt-3 font-body text-sm text-ink/70">{excerpt}</p>}
        <div className="mt-6 flex-1" />
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-arrow">
          Read on Substack&nbsp;→
          <span className="sr-only"> (opens in a new tab): {title}</span>
        </a>
      </div>
    </article>
  );
}
