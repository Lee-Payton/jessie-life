// Simple line-art icons echoing the mockup's hand-drawn motif.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function LeafIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden>
      <path d="M12 21c0-6 3-11 8-13-1 8-4 12-8 13z" />
      <path d="M12 21C12 15 9 10 4 8c1 8 4 12 8 13z" />
      <path d="M12 21v-9" />
    </svg>
  );
}

export function PulseIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

export function LungsIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden>
      <path d="M12 4v8" />
      <path d="M12 8c-1 2-4 2-4 5 0 3-2 6-3 6s-1-4-1-6 1-6 4-7c2-.7 4 0 4 2z" />
      <path d="M12 8c1 2 4 2 4 5 0 3 2 6 3 6s1-4 1-6-1-6-4-7c-2-.7-4 0-4 2z" />
    </svg>
  );
}

export function VanSketch({ className = 'h-16 w-32' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 80" {...base} aria-hidden>
      {/* mountains */}
      <path d="M2 46 L28 20 L44 40 L64 14 L92 46" opacity="0.5" />
      {/* van body */}
      <path d="M20 60 h84 a6 6 0 0 0 6-6 v-16 a4 4 0 0 0-4-4 H84 l-8-10 H26 a6 6 0 0 0-6 6 z" />
      <path d="M26 30 h40 v12 H24" />
      <path d="M84 30 l6 8 h16" />
      <circle cx="40" cy="62" r="7" />
      <circle cx="92" cy="62" r="7" />
      <path d="M110 54 h44" opacity="0.6" />
    </svg>
  );
}
