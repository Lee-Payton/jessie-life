import { LeafIcon, PulseIcon } from '@/components/icons';
import { ContourLines, SprigDoodle, MoleculeDoodle } from '@/components/decor';

const visualStyles = [
  {
    tint: 'bg-[#e8e3d3]',
    icon: <LeafIcon />,
    decor: (
      <>
        <ContourLines className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 text-forest/[0.14]" />
        <SprigDoodle className="pointer-events-none absolute bottom-5 left-6 h-12 w-9 text-forest/25" />
      </>
    ),
  },
  {
    tint: 'bg-[#f1e2da]',
    icon: <PulseIcon />,
    decor: (
      <MoleculeDoodle className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-terracotta/20" />
    ),
  },
];

type ArticleCardProps = {
  title: string;
  excerpt: string;
  url: string;
  index: number;
  publishedAt?: string;
  topic?: string;
  image?: string;
  imageAlt?: string;
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function ArticleCard({
  title,
  excerpt,
  url,
  index,
  publishedAt,
  topic,
  image,
  imageAlt,
}: ArticleCardProps) {
  const style = visualStyles[index % visualStyles.length];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream-light ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-ink/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className={`relative aspect-[16/9] overflow-hidden ${style.tint}`}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={imageAlt ?? ''}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <>
            {style.decor}
            <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-cream/70 text-forest">
              {style.icon}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="eyebrow flex flex-wrap items-center gap-x-2 text-terracotta">
          {topic && <span>{topic}</span>}
          {topic && publishedAt && (
            <span aria-hidden="true" className="text-ink/30">
              /
            </span>
          )}
          {publishedAt && (
            <time dateTime={publishedAt} className="text-ink/60">
              {dateFormatter.format(new Date(publishedAt))}
            </time>
          )}
        </p>
        <h3 className="mt-3 text-balance font-display text-2xl leading-snug md:text-[1.75rem]">
          {title}
        </h3>
        {excerpt && <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">{excerpt}</p>}
        <div className="mt-6 flex-1" />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow after:absolute after:inset-0 after:content-['']"
        >
          Read article&nbsp;→
          <span className="sr-only"> (opens in a new tab): {title}</span>
        </a>
      </div>
    </article>
  );
}
