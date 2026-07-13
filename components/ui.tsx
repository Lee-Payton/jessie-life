import Link from 'next/link';

export function Section({
  children,
  className = '',
  bg = 'cream',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: 'cream' | 'creamLight' | 'creamDark' | 'forest' | 'sand';
  id?: string;
}) {
  const bgClass = {
    cream: 'bg-cream',
    creamLight: 'bg-cream-light',
    creamDark: 'bg-cream-dark',
    forest: 'bg-forest text-white',
    sand: 'bg-sand',
  }[bg];
  return (
    <section id={id} className={`${bgClass} scroll-mt-24 py-16 md:py-24`}>
      <div className={`container-content ${className}`}>{children}</div>
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
