'use client';

import { useEffect } from 'react';
import { isLeadFormUrl, isOutboundBookingUrl } from '@/lib/analytics';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function BookingAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      const placement = anchor.getAttribute('data-booking-placement');
      const outbound = isOutboundBookingUrl(url);
      if (!outbound && placement !== 'sticky_mobile') return;
      if (typeof window.gtag !== 'function') return;

      const params: Record<string, string> = {
        link_url: url.href,
        page_path: window.location.pathname,
      };
      if (placement) params.placement = placement;
      window.gtag('event', 'book_click', params);
      if (outbound && isLeadFormUrl(url)) {
        window.gtag('event', 'generate_lead', params);
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
