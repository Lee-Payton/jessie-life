// Central site configuration — single place to manage nav, footer, and offer data.
export const siteConfig = {
  name: 'Jessie.Life',
  domain: 'jessie.life',
  tagline: 'Science. Strategy. Freedom.',
};

// Main public navigation (per controlling brief)
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Midlife Reboot', href: '/reboot' },
  { label: 'Metabolic Testing', href: '/metabolism' },
  { label: 'Resource Lab', href: '/lab' },
  { label: 'About', href: '/about' },
];

// Footer columns (per brief footer list, grouped like the design mockup)
export const footerNav = {
  navigation: [
    { label: 'Midlife Reboot', href: '/reboot' },
    { label: 'Metabolic Testing', href: '/metabolism' },
    { label: 'Resource Lab', href: '/lab' },
    { label: 'About', href: '/about' },
    { label: 'Upcoming Locations', href: '/locations' },
  ],
  more: [
    { label: 'Bring Jessie to Your Location', href: '/host' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Disclaimer', href: '/terms' },
  ],
};

// External handoff endpoints — TODO: replace placeholders with live URLs
export const links = {
  practiceBetter: '#', // Practice Better checkout/booking
  bookTesting: '/locations', // "Book Testing" routes to locations for now
  ghlResourceLab: '#', // GHL Resource Lab opt-in
  ghlLocationList: '#', // GHL location notification list
  ghlHostForm: '#', // GHL host inquiry form
  rebootApply: '/reboot/apply',
};
