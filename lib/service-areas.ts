// Local RMR + VO2 pages. Each entry feeds the shared template,
// the footer "Service areas" list, and the sitemap.

export type ServiceAreaPlace = {
  type: 'City' | 'AdministrativeArea';
  name: string;
};

export type ServiceAreaFaq = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  /** Lowercase hyphenated city segment, e.g. "south-padre-island". */
  slug: string;
  /** Public path. One page covers both RMR and VO2. */
  path: string;
  /** Link text in the footer Service areas list. */
  footerLabel: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  servingLine: string;
  faqHeading: string;
  areaServed: ServiceAreaPlace[];
  faqs: ServiceAreaFaq[];
  /**
   * Direct booking URL for this city. Omitted when the city has no booking
   * link yet; the page then keeps the /locations path.
   */
  bookingUrl?: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'south-padre-island',
    path: '/south-padre-island/rmr-vo2-testing',
    footerLabel: 'South Padre Island',
    name: 'South Padre Island',
    h1: 'RMR and VO₂ testing in South Padre Island',
    title: 'RMR and VO₂ Testing in South Padre Island: Jessie.Life',
    description:
      'RMR and VO₂ testing in South Padre Island and the Rio Grande Valley, including Port Isabel, Brownsville, and Harlingen. Fitness and wellness assessments.',
    servingLine: 'Serving South Padre Island and the Rio Grande Valley',
    faqHeading: 'Questions about testing in South Padre Island',
    bookingUrl:
      'https://dotlifeoptimalhealth.practicebetter.io/#/61475f3a398033134419f352/bookings?r=6ab592a976690fd7c82cd881&step=services',
    areaServed: [
      { type: 'City', name: 'South Padre Island' },
      { type: 'AdministrativeArea', name: 'Rio Grande Valley' },
      { type: 'City', name: 'Port Isabel' },
      { type: 'City', name: 'Brownsville' },
      { type: 'City', name: 'Harlingen' },
    ],
    faqs: [
      {
        question: 'Is testing available in South Padre Island right now?',
        answer:
          'Jessie is testing in South Padre Island through January 12, 2027. Testing is mobile and on-site, and Jessie comes to you. Group testing days are available by request on the host page.',
      },
      {
        question: 'Which communities does this page cover?',
        answer:
          'This page covers South Padre Island and the Rio Grande Valley, including Port Isabel, Brownsville, and Harlingen.',
      },
      {
        question: 'Can RMR and VO₂ be done on the same day?',
        answer:
          'RMR is done first, in the morning, after an overnight fast. VO₂ is scheduled at least 4 hours later. Each test is about 30 minutes. The two tests are never done back-to-back.',
      },
      {
        question: 'Is this a diagnostic medical test?',
        answer:
          'No. RMR and VO₂ testing are fitness and wellness assessments, not diagnostic tests.',
      },
    ],
  },
  {
    slug: 'austin',
    path: '/austin/rmr-vo2-testing',
    footerLabel: 'Austin',
    name: 'Austin',
    h1: 'RMR and VO₂ testing in Austin',
    title: 'RMR and VO₂ Testing in Austin: Jessie.Life',
    description:
      'RMR and VO₂ testing in Austin, including Round Rock, Cedar Park, Georgetown, and Pflugerville. Fitness and wellness assessments.',
    servingLine: 'Serving Austin, Round Rock, Cedar Park, Georgetown, and Pflugerville',
    faqHeading: 'Questions about testing in Austin',
    areaServed: [
      { type: 'City', name: 'Austin' },
      { type: 'City', name: 'Round Rock' },
      { type: 'City', name: 'Cedar Park' },
      { type: 'City', name: 'Georgetown' },
      { type: 'City', name: 'Pflugerville' },
    ],
    faqs: [
      {
        question: 'Is testing available in Austin right now?',
        answer:
          'Jessie is testing in Austin from mid-January through mid-April 2027. Testing days start the week of January 18, 2027. Testing is mobile and on-site, and Jessie comes to you. Group testing days are available by request on the host page.',
      },
      {
        question: 'Which communities does this page cover?',
        answer:
          'This page covers Austin, Round Rock, Cedar Park, Georgetown, and Pflugerville.',
      },
      {
        question: 'Can RMR and VO₂ be done on the same day?',
        answer:
          'RMR is done first, in the morning, after an overnight fast. VO₂ is scheduled at least 4 hours later. Each test is about 30 minutes. The two tests are never done back-to-back.',
      },
      {
        question: 'Is this a diagnostic medical test?',
        answer:
          'No. RMR and VO₂ testing are fitness and wellness assessments, not diagnostic tests.',
      },
    ],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function serviceAreaJsonLd(area: ServiceArea, siteUrl: string) {
  const pageUrl = `${siteUrl}${area.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${pageUrl}#business`,
        name: 'Jessie.Life',
        url: siteUrl,
        email: 'contact@jessie.life',
        image: `${siteUrl}/images/PNOE.png`,
        description: area.description,
        areaServed: area.areaServed.map((place) => ({
          '@type': place.type,
          name: place.name,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: area.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
