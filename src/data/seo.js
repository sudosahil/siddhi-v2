// Canonical site URL — the custom domain (must be connected to the Vercel
// project; vercel.app URLs are treated by Google as a separate zero-authority site).
export const SITE_URL = 'https://siddhiscoachingclasses.in';

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: "Siddhi's Coaching Classes",
  url: SITE_URL,
  logo: `${SITE_URL}/siddhi-logo.jpeg`,
  foundingDate: '2003',
  slogan: 'Success Begins Here',
  telephone: '+919594345743',
  email: 'info@siddhiscoachingclasses.in',
  areaServed: { '@type': 'Place', name: 'Chembur, Mumbai' },
  sameAs: ['https://www.instagram.com/siddhiscoachingclasses'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 5, 6 & 7, Veena Serene Building, B-Wing, Shell Colony, Sahakar Nagar Road No. 4',
    addressLocality: 'Chembur, Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400071',
    addressCountry: 'IN',
  },
  department: [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#centre-1`,
      name: "Siddhi's Coaching Classes — Shell Colony (Sahakar Nagar)",
      telephone: '+919594345743',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 5, 6 & 7, Veena Serene Building, B-Wing, Shell Colony, Sahakar Nagar Road No. 4',
        addressLocality: 'Chembur, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400071',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#centre-2`,
      name: "Siddhi's Coaching Classes — Shell Colony (Adarsha Vidyalaya)",
      telephone: '+917208476547',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E-30/A, Guru Krupa, Nanda Deep Everest Society, Shell Colony Road, Near Adarsha Vidyalaya',
        addressLocality: 'Chembur, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400071',
        addressCountry: 'IN',
      },
    },
  ],
};
