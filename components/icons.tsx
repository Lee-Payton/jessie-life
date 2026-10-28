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
      {/* imperfect hand-drawn four-point compass star */}
      <g
        transform="translate(60,60)"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M0,-16 Q2.5,-3 15,-0.5 Q3,3 0.5,15.5 Q-3,2.5 -15.5,0 Q-2.5,-3 0,-16 Z" />
        <circle cx="0" cy="0" r="1.4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

// Hand-drawn Class C motorhome doodle, facing left: cab-over sleeping bunk
// projecting over the front cab, a visible windshield, a compact body, two
// wheels, plus a short road line and small motion marks. Intentionally a
// charming editorial sketch — slightly imperfect linework, not a diagram.
export function VanSketch({ className = 'h-16 w-32' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 130"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* road line */}
      <path d="M10 112c40 3 96 3 150 1" opacity="0.4" strokeDasharray="1 9" />

      {/* motion marks trailing behind (right) */}
      <path d="M196 52h18M200 66h20M198 80h15" opacity="0.4" strokeWidth={1.8} />

      {/* main body box (rear) with slightly wavy roof */}
      <path d="M80 104V44c0-3 2-5 5-5 34-2 71-2 102 0 3 0 5 2 5 5v60" />

      {/* cab-over bunk projecting forward over the cab + down the front */}
      <path d="M85 40c-9-1-18 1-26 6-4 3-9 6-15 7-4 1-6 3-6 7v10" />

      {/* cab lower front + floor line under the body */}
      <path d="M32 76v24M32 104h160" />

      {/* windshield */}
      <path d="M38 78c8-1 16-1 24 0 0 6 0 12-1 18-8 1-16 1-24 0 0-6 0-12 1-18Z" />

      {/* door / cab-box seam */}
      <path d="M80 60v44" opacity="0.7" />

      {/* box side windows */}
      <path d="M96 56h30v18H96zM140 56h34v18h-34z" opacity="0.85" />

      {/* wheels */}
      <circle cx="58" cy="104" r="11" />
      <circle cx="160" cy="104" r="11" />
      <circle cx="58" cy="104" r="3.5" opacity="0.6" />
      <circle cx="160" cy="104" r="3.5" opacity="0.6" />
    </svg>
  );
}

// Hand-drawn coral emphasis swoosh (stretches under the word without crossing
// letterforms). Slightly irregular, with a small upward flick at the end.
export function HandUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 16"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M4 9C34 4 66 3.5 98 6c28 2.2 52 4.5 96 1.5"
        stroke="currentColor"
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
