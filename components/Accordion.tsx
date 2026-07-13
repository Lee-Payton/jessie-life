'use client';

import { useState } from 'react';

export type QA = { q: string; a: string[] };

export default function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-ink/10 rounded-lg bg-cream-light ring-1 ring-ink/5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-ink">{item.q}</span>
              <span className={`flex-shrink-0 text-terracotta transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            {isOpen && (
              <div className="space-y-3 px-6 pb-6 font-body text-ink/80">
                {item.a.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
