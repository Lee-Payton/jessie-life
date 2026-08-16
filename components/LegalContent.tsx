import type { ReactNode } from 'react';
import { Eyebrow } from '@/components/ui';

export function LegalHero({
  eyebrow,
  title,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
}) {
  return (
    <section className="bg-cream">
      <div className="container-content py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 font-body text-sm text-ink/60">Last updated: {lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <section className="bg-cream-light">
      <div className="container-content py-14 md:py-16">
        <div className="mx-auto max-w-3xl space-y-10 font-body text-ink/80">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({
  heading,
  headingLevel = 'h2',
  children,
}: {
  heading?: string;
  headingLevel?: 'h2' | 'h3';
  children: ReactNode;
}) {
  const Heading = headingLevel;
  return (
    <div className="space-y-4">
      {heading &&
        (headingLevel === 'h2' ? (
          <Heading className="font-display text-2xl text-ink md:text-[1.75rem]">{heading}</Heading>
        ) : (
          <Heading className="font-display text-lg text-ink">{heading}</Heading>
        ))}
      {children}
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
