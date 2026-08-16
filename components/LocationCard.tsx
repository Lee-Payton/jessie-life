import type { TestingLocation } from '@/lib/locations';

// Single consistent template for a confirmed testing location. Add entries in
// lib/locations.ts — this component renders each one the same way, so new
// locations never require page-level design changes.
export default function LocationCard({ location }: { location: TestingLocation }) {
  const { name, cityState, date, testingAvailable, notes, rmrBookingUrl, vo2BookingUrl, auditBookingUrl } = location;

  return (
    <div className="rounded-lg bg-cream-light p-8 ring-1 ring-ink/5">
      <h3 className="font-display text-2xl">{name}</h3>
      <div className="mt-4 grid gap-2 font-body text-ink/80 sm:grid-cols-2">
        <p><span className="font-bold">City, State:</span> {cityState}</p>
        <p><span className="font-bold">Date:</span> {date}</p>
        <p className="sm:col-span-2"><span className="font-bold">Testing available:</span> {testingAvailable}</p>
      </div>
      {notes && <p className="mt-3 font-body text-sm text-ink/60">{notes}</p>}
      {(rmrBookingUrl || vo2BookingUrl || auditBookingUrl) && (
        <div className="mt-6 flex flex-wrap gap-4">
          {rmrBookingUrl && (
            <a href={rmrBookingUrl} className="btn-primary">Book RMR Testing</a>
          )}
          {vo2BookingUrl && (
            <a href={vo2BookingUrl} className="btn-primary">Book VO₂ Max Testing</a>
          )}
          {auditBookingUrl && (
            <a href={auditBookingUrl} className="btn-forest-outline">Book the Midlife Metabolism Audit</a>
          )}
        </div>
      )}
    </div>
  );
}
