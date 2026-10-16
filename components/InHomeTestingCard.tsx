const REQUEST_FORM_URL = 'https://api.leadconnectorhq.com/widget/form/cNKeY7x7Odxc6gkS0VXH';

export default function InHomeTestingCard() {
  return (
    <div id="in-home-testing" className="min-w-0 rounded-lg bg-cream-light p-6 ring-1 ring-ink/5 sm:p-8">
      <h3 className="font-display text-2xl">
        In-Home Testing &mdash; South Padre Island &amp; Port Isabel
      </h3>
      <p className="mt-3 font-body text-ink/80">
        Prefer to test at home? RMR and VO₂ Max testing are available by request in South Padre
        Island, Port Isabel, and nearby areas. An additional $75 in-home service fee applies per
        visit. Availability and equipment requirements are confirmed before scheduling.
      </p>
      <div className="mt-6">
        <a href={REQUEST_FORM_URL} className="btn-primary w-full max-w-full text-center sm:w-auto">
          Request In-Home Testing
        </a>
      </div>
    </div>
  );
}
