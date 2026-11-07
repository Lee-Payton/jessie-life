const SCALE_MAX = 4.5;

type Bar = { label: string; value: number; color: string };

const BARS: Bar[] = [
  { label: 'Least fit, compared with most fit', value: 4.09, color: 'bg-terracotta' },
  { label: 'Low fit, compared with most fit', value: 2.88, color: 'bg-terracotta/60' },
  { label: 'Smoking', value: 1.4, color: 'bg-forest' },
  { label: 'Type 2 diabetes', value: 1.34, color: 'bg-forest' },
  { label: 'Cardiovascular disease', value: 1.28, color: 'bg-forest' },
  { label: 'High blood pressure', value: 1.15, color: 'bg-forest' },
];

const REFERENCE_PERCENT = (1 / SCALE_MAX) * 100;

const SOURCE_URL = 'https://www.jacc.org/doi/10.1016/j.jacc.2022.05.031';

const srDescription = `Bar chart of relative risk of death from any cause. ${BARS.map(
  (b) => `${b.label}: ${b.value.toFixed(2)} times the risk`,
).join('. ')}. A value of 1x means no added risk.`;

function ReferenceLine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-0 top-0 border-l border-dashed border-ink/40 sm:-inset-y-2"
      style={{ left: `${REFERENCE_PERCENT}%` }}
    />
  );
}

export default function FitnessRiskChart({ className = '' }: { className?: string }) {
  return (
    <figure
      className={`mx-auto w-full rounded-lg bg-white p-5 ring-1 ring-ink/5 sm:p-8 ${className}`}
      aria-labelledby="fitness-risk-chart-title"
    >
      <figcaption>
        <p id="fitness-risk-chart-title" className="font-display text-2xl text-ink md:text-3xl">
          Low fitness: a bigger risk than smoking or diabetes
        </p>
        <p className="mt-2 font-body text-sm text-ink/70">
          Risk of death from any cause in 750,302 adults ages 30 to 95, followed for a median of 10
          years
        </p>
      </figcaption>

      <p className="sr-only">{srDescription}</p>

      <div aria-hidden className="mt-6">
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <span className="hidden sm:block sm:w-60 sm:shrink-0" />
          <div className="relative mr-14 h-5 sm:flex-1">
            <span
              className="absolute top-0 whitespace-nowrap pl-1.5 font-body text-xs text-ink/70"
              style={{ left: `${REFERENCE_PERCENT}%` }}
            >
              1x = no added risk
            </span>
            <span
              className="absolute bottom-0 top-3 border-l border-dashed border-ink/40"
              style={{ left: `${REFERENCE_PERCENT}%` }}
            />
          </div>
        </div>

        <ul>
          {BARS.map((bar) => {
            const percent = (bar.value / SCALE_MAX) * 100;
            return (
              <li
                key={bar.label}
                className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="font-body text-sm text-ink sm:w-60 sm:shrink-0">{bar.label}</span>
                <div className="relative mr-14 h-7 sm:flex-1">
                  <ReferenceLine />
                  <span
                    className={`absolute left-0 top-0 h-full rounded-r ${bar.color}`}
                    style={{ width: `${percent}%` }}
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 font-body text-sm font-bold text-ink"
                    style={{ left: `${percent}%` }}
                  >
                    {bar.value.toFixed(2)}x
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-6 font-body text-xs leading-relaxed text-ink/60">
        Source:{' '}
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-terracotta"
        >
          Kokkinos et al.
        </a>
        , Journal of the American College of Cardiology, 2022. Fitness bars compare the least-fit
        (bottom 20%) and low-fit groups with the most-fit group. Risk-factor bars compare people
        with and without each condition.
      </p>
    </figure>
  );
}
