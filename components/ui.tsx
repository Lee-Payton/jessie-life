import Link from 'next/link';
import { ContourLines } from '@/components/decor';

export function Section({
  children,
  className = '',
  bg = 'cream',
  id,
  decor,
  spacing = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  bg?: 'cream' | 'creamLight' | 'creamDark' | 'forest' | 'sand' | 'sage';
  id?: string;
  /* Optional low-opacity decorative texture rendered behind the content.
     Provide varied glyphs/positions per call site so it never looks stamped. */
  decor?: React.ReactNode;
  spacing?: 'default' | 'compact';
}) {
  const bgClass = {
    cream: 'bg-cream',
    creamLight: 'bg-cream-light',
    creamDark: 'bg-cream-dark',
    forest: 'bg-forest text-white',
    sand: 'bg-sand',
    sage: 'bg-sage',
  }[bg];
  const spacingClass = spacing === 'compact' ? 'py-10 md:py-14' : 'py-14 md:py-20';
  return (
    <section id={id} className={`relative overflow-hidden ${bgClass} ${spacingClass} scroll-mt-24`}>
      {decor}
      <div className={`container-content relative ${className}`}>{children}</div>
    </section>
  );
}

// Shared closing call-to-action band, modeled exactly on the approved homepage
// and About page: a warm pale-sage band with a forest heading, muted intro
// copy, and forest button treatments. A single reusable topographic texture is
// dropped in behind the content and its placement is varied per call site so
// the same graphic never looks stamped. Texture is desktop-only and low-opacity
// to protect readability on small screens.
export function FinalCta({
  title,
  children,
  actions,
  texture = 'br',
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
  actions: React.ReactNode;
  texture?: 'br' | 'bl' | 'tr' | 'tl';
}) {
  const pos = {
    br: '-bottom-24 -right-16',
    bl: '-bottom-24 -left-16',
    tr: '-top-24 -right-16',
    tl: '-top-24 -left-16',
  }[texture];
  return (
    <section className="relative overflow-hidden bg-sage py-14 text-center md:py-16">
      <ContourLines
        className={`pointer-events-none absolute ${pos} hidden h-80 w-80 text-forest/[0.07] lg:block`}
      />
      <div className="container-content relative">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl text-forest md:text-4xl">{title}</h2>
          {children && (
            <div className="mt-6 space-y-4 font-body text-lg text-ink/75">{children}</div>
          )}
        </div>
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
          {actions}
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function CheckList({
  items,
  variant = 'check',
}: {
  items: string[];
  variant?: 'check' | 'cross';
}) {
  const mark = variant === 'check' ? '✓' : '✕';
  const color = variant === 'check' ? 'text-terracotta' : 'text-ink/40';
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-body text-ink/80">
          <span className={`mt-0.5 font-body font-bold ${color}`} aria-hidden>
            {mark}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaButton({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'forest';
}) {
  const cls =
    variant === 'primary' ? 'btn-primary' : variant === 'forest' ? 'btn-forest' : 'btn-secondary';
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

// Decorative hand-drawn topographic swirl (echoes the mockup's line-art motif)
export function TopoSwirl({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M20,${100 - i * 6} C60,${60 - i * 6} 140,${140 + i * 6} 180,${100 + i * 6}`}
          opacity={0.5 - i * 0.06}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={`e${i}`} cx="100" cy="100" rx={30 + i * 18} ry={20 + i * 14} opacity={0.4 - i * 0.08} />
      ))}
    </svg>
  );
}
