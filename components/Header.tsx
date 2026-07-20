'use client';

import Link from 'next/link';
import { useState } from 'react';
import { mainNav, links } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Jessie.Life home">
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-tight text-ink">
              <span className="not-italic">jessie</span><span className="italic text-terracotta">.life</span>
            </span>
            <span className="mt-0.5 font-body text-[9px] font-medium uppercase tracking-[0.24em] text-ink/60">
              Science. Strategy. Freedom.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-terracotta"
            >
              {item.label}
            </Link>
          ))}
          <Link href={links.bookTesting} className="btn-primary py-3">
            Book Testing
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/10 bg-cream lg:hidden" aria-label="Mobile">
          <div className="container-content flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-body text-sm font-bold uppercase tracking-wider text-ink hover:bg-cream-dark hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
            <Link href={links.bookTesting} onClick={() => setOpen(false)} className="btn-primary mt-2">
              Book Testing
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
