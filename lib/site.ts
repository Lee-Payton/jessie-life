// Central site configuration — single place to manage nav, footer, and offer data.
export const siteConfig = {
  name: 'Jessie.Life',
  domain: 'jessie.life',
  tagline: 'Functional health strategy for midlife women.',
};

// Main public navigation (per controlling brief)
export const mainNav = [
  { label: 'Midlife Reboot', href: '/reboot' },
  { label: 'Metabolic Testing', href: '/metabolism' },
  { label: 'Resource Lab', href: '/lab' },
  { label: 'About', href: '/about' },
];

// Footer links (per brief)
export const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Midlife Reboot', href: '/reboot' },
  { label: 'Metabolic Testing', href: '/metabolism' },
  { label: 'Resource Lab', href: '/lab' },
  { label: 'About', href: '/about' },
  { label: 'Upcoming Locations', href: '/locations' },
  { label: 'Bring Jessie to Your Location', href: '/host' },
  { label: 'FAQ', href: '/faq' },
];

// External handoff endpoints — TODO: replace placeholders with live URLs
export const links = {
  practiceBetter: '#', // Practice Better checkout/booking
  ghlResourceLab: '#', // GHL Resource Lab opt-in
  ghlLocationList: '#', // GHL location notification list
  ghlHostForm: '#', // GHL host inquiry form
  rebootApply: '/reboot/apply',
};
