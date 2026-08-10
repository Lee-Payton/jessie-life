// Testing schedule — single source of truth for upcoming locations.
// Add entries here (or wire to a CMS later). Empty array => empty-state copy shows.
export type TestingLocation = {
  name: string;
  cityState: string;
  date: string;
  testing: 'RMR' | 'VO₂' | 'Both';
  appointmentType: string;
  bookingUrl: string;
  notes?: string;
  // The Midlife Metabolism Audit includes an in-person RMR breath test, so it can
  // only be purchased through a location where testing is actually scheduled.
  // Set true to show it as available and surface the Audit purchase link below.
  auditAvailable?: boolean;
  // Optional Audit-specific booking/purchase URL. Falls back to bookingUrl if omitted.
  auditBookingUrl?: string;
};

export const testingLocations: TestingLocation[] = [
  // Example (remove/replace):
  // {
  //   name: 'Peak Performance Studio',
  //   cityState: 'Detroit, MI',
  //   date: 'August 12–13, 2026',
  //   testing: 'Both',
  //   appointmentType: 'Individual appointments',
  //   bookingUrl: '#',
  //   notes: 'Parking behind the building; arrive 15 minutes early.',
  //   auditAvailable: true,
  //   auditBookingUrl: '#',
  // },
];
