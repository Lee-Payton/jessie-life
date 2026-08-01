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

// Circular rotating-text badge echoing the mockup's "SCIENCE · STRATEGY · FREEDOM" seal.
export function CircleBadge({ className = 'h-28 w-28' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden>
      <defs>
        <path id="badge-circle" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
      </defs>
      <text fontSize="9" letterSpacing="1.5" fill="currentColor" className="font-body font-bold uppercase">
        <textPath href="#badge-circle" startOffset="0">
          {'SCIENCE · STRATEGY · FREEDOM · '}
        </textPath>
      </text>
      <g transform="translate(60,60)" stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M0,-16 C6,-8 6,8 0,16 C-6,8 -6,-8 0,-16 Z" />
        <path d="M0,-16 L0,16" opacity="0.6" />
      </g>
    </svg>
  );
}

// Clean Class C motorhome line silhouette (signature over-cab bunk + box body).
export function VanSketch({ className = 'h-16 w-32' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 104"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* soft horizon line */}
      <path d="M6 94 H214" opacity="0.35" strokeWidth={1.5} />

      {/* body outline: cab front, over-cab bunk, box */}
      <path d="M28 82 L28 52 L22 46 L24 32 Q25 26 32 26 L196 26 Q204 26 204 34 L204 74 Q204 82 196 82 Z" />

      {/* cab back / roof divider (box front) */}
      <path d="M66 82 L66 46 L28 46" />

      {/* windshield */}
      <path d="M31 52 L46 46" />

      {/* box windows + door */}
      <rect x="80" y="40" width="26" height="18" rx="2" />
      <rect x="120" y="40" width="34" height="18" rx="2" />
      <rect x="168" y="40" width="24" height="30" rx="2" />

      {/* wheels */}
      <circle cx="56" cy="82" r="10" />
      <circle cx="172" cy="82" r="10" />
    </svg>
  );
}

// Hand-drawn coral emphasis underline (stretches to fit the word above it).
export function HandUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M3 7.5 C40 3.5, 74 3, 108 5.5 C140 7.5, 168 5, 197 3.5"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
