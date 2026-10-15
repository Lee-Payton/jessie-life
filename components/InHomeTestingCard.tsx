const REQUEST_FORM_URL: string | null = null;

export default function InHomeTestingCard() {
  return (
    <div id="in-home-testing" className="rounded-lg bg-cream-light p-8 ring-1 ring-ink/5">
      <h3 className="font-display text-2xl">
        In-Home Testing &mdash; South Padre Island &amp; Port Isabel
      </h3>
      <p className="mt-3 font-body text-ink/80">
        Prefer to test at home? RMR and VO₂ Max testing are available by request in the South Padre
        Island and Port Isabel area.
      </p>
      <p className="mt-3 font-body text-ink/80">
        An additional $75 in-home service fee applies per visit. Availability and equipment
        requirements are confirmed before scheduling.
      </p>
      <div className="mt-6">
        {REQUEST_FORM_URL ? (
          <a href={REQUEST_FORM_URL} className="btn-primary">
            Request In-Home Testing
          </a>
        ) : (
          <p className="font-body font-semibold text-forest">
            Coming Soon &mdash; Check Back Shortly!
          </p>
        )}
      </div>
    </div>
  );
}
