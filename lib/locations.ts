// Testing schedule — single source of truth for upcoming locations.
// Add entries here (or wire to a CMS later) using the shape below. Each entry renders
// as one LocationCard automatically. Empty array => the page's empty-state copy shows.
export type TestingLocation = {
  /** Location or event name, e.g. "Peak Performance Studio" */
  name: string;
  /** City and state, e.g. "Detroit, MI" */
  cityState: string;
  /** Date or date range, e.g. "August 12–13, 2026" */
  date: string;
  /** What's available at this location, e.g. "RMR", "VO₂ Max", or "RMR + VO₂ Max" */
  testingAvailable: string;
  /** Optional location-specific notes (parking, arrival instructions, etc.) */
  notes?: string;
  /** Optional Practice Better booking link for RMR testing. Button only shows if set. */
  rmrBookingUrl?: string;
  /** Optional Practice Better booking link for VO₂ Max testing. Button only shows if set. */
  vo2BookingUrl?: string;
  /** Optional Practice Better booking link for the Midlife Metabolism Audit. Button only shows if set. */
  auditBookingUrl?: string;
};

export const testingLocations: TestingLocation[] = [
  // Example — remove/replace when a location is confirmed:
  // {
  //   name: 'Peak Performance Studio',
  //   cityState: 'Detroit, MI',
  //   date: 'August 12–13, 2026',
  //   testingAvailable: 'RMR + VO₂ Max',
  //   notes: 'Parking behind the building; arrive 15 minutes early.',
  //   rmrBookingUrl: '#',
  //   vo2BookingUrl: '#',
  //   auditBookingUrl: '#',
  // },
];
