'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getServiceArea } from '@/lib/service-areas';

const HIDDEN_PREFIXES = ['/locations', '/host'];

function isHiddenRoute(pathname: string) {
  return HIDDEN_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export default function StickyBookBar() {
  const pathname = usePathname() || '/';
  const hiddenRoute = isHiddenRoute(pathname);
  const [covered, setCovered] = useState(false);
  const spi = getServiceArea('south-padre-island');
  const href =
    pathname === '/south-padre-island/rmr-vo2-testing' && spi?.bookingUrl
      ? spi.bookingUrl
      : '/locations';

  useEffect(() => {
    if (hiddenRoute) return;
    const strip = 88;
    const rootMargin = `-${Math.max(window.innerHeight - strip, 0)}px 0px 0px 0px`;
    const nodes = document.querySelectorAll(
      'iframe, button[type="submit"], input[type="submit"], [data-cookie-consent], [class*="cookie-banner"], [id*="cookie-banner"]',
    );
    if (nodes.length === 0) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setCovered(visible.size > 0);
      },
      { root: null, rootMargin, threshold: 0 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [hiddenRoute, pathname]);

  if (hiddenRoute) return null;

  return (
    <div
      className={`sticky-book-bar fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-cream px-4 pt-3 md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))] ${
        covered ? 'hidden' : ''
      }`}
    >
      <a href={href} className="btn-primary w-full" data-booking-placement="sticky_mobile">
        Book Testing
      </a>
    </div>
  );
}
