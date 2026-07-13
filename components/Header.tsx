'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { mainNav } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Jessie.Life home">
          <Image
            src="/brand/jf-icon.png"
            alt="Jessie Faber"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span className="hidden font-serif text-xl text-ink sm:block">Jessie Faber</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/reboot" className="btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-neutral-100 bg-white md:hidden" aria-label="Mobile">
          <div className="container-content flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-ink hover:bg-neutral-50 hover:text-coral"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/reboot" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
