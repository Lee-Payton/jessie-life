// Lightweight, hand-drawn decorative SVGs echoing the mockup's topographic /
// doodle motif. All use currentColor, transparent backgrounds, thin imperfect
// strokes, sit behind content, and never capture pointer events. Vary
// position, scale, rotation, and cropping at the call site so they never look
// like the same asset pasted everywhere.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Irregular nested topographic contour lines — organic, not concentric ovals.
export function ContourLines({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      {...stroke}
      strokeWidth={1.1}
    >
      <path d="M119 26c46-4 84 24 88 63 4 40-27 74-70 80-45 6-92-20-100-61-7-38 24-77 82-82Z" opacity="0.9" />
      <path d="M120 44c36-2 66 21 70 52 3 32-22 60-58 65-37 5-76-15-83-49-6-31 22-64 71-68Z" opacity="0.75" />
      <path d="M122 62c27-1 49 17 52 41 2 25-18 47-46 51-29 4-59-11-64-37-4-24 19-51 58-55Z" opacity="0.6" />
      <path d="M124 80c19 0 34 13 36 30 1 18-14 34-33 37-21 3-42-8-46-27-3-17 14-37 43-40Z" opacity="0.45" />
      <path d="M126 98c11 0 21 9 22 20 0 11-9 21-21 23-13 2-26-6-29-17-2-11 9-24 28-26Z" opacity="0.3" />
    </svg>
  );
}

// A loose looping line detail.
export function LoopDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 70" aria-hidden {...stroke} strokeWidth={1.4}>
      <path d="M4 44C34 6 58 4 62 24c3 16-24 22-30 6-5-15 18-30 52-27 40 4 66 30 108 12" />
    </svg>
  );
}

// A simple abstract botanical sprig doodle.
export function SprigDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 72" aria-hidden {...stroke} strokeWidth={1.4}>
      <path d="M30 70C30 48 30 26 32 6" />
      <path d="M31 30C20 27 11 18 10 6c12 1 21 9 22 22Z" />
      <path d="M32 40c11-4 19-13 20-25-12 1-21 10-21 23Z" />
      <path d="M31 20c-7-3-12-9-13-17 9 1 15 7 15 15Z" opacity="0.8" />
    </svg>
  );
}

// A small science-inspired "molecule" doodle: nodes joined by loose lines.
export function MoleculeDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 70" aria-hidden {...stroke} strokeWidth={1.3}>
      <path d="M18 20 42 12M42 12 62 30M42 12 40 44M40 44 20 54M40 44 64 52" opacity="0.8" />
      <circle cx="16" cy="18" r="5" />
      <circle cx="44" cy="11" r="5" />
      <circle cx="64" cy="31" r="5" />
      <circle cx="39" cy="46" r="5" />
      <circle cx="18" cy="55" r="4" />
      <circle cx="66" cy="53" r="4" />
    </svg>
  );
}

// A loose sun doodle for the mobile-testing band.
export function SunDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" aria-hidden {...stroke} strokeWidth={1.4}>
      <circle cx="30" cy="30" r="11" />
      <path d="M30 6v6M30 48v6M6 30h6M48 30h6M13 13l4 4M43 43l4 4M47 13l-4 4M17 43l-4 4" opacity="0.85" />
    </svg>
  );
}
