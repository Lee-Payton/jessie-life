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
  // },
];
