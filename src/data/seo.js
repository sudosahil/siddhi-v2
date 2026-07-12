// Canonical site URL — the custom domain (must be connected to the Vercel
// project; vercel.app URLs are treated by Google as a separate zero-authority site).
export const SITE_URL = 'https://www.siddhiscoachingclasses.com';

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
  email: 'info@siddhiscoachingclasses.com',
  image: `${SITE_URL}/siddhi-logo.jpeg`,
  priceRange: '₹₹',
  areaServed: { '@type': 'Place', name: 'Chembur, Mumbai' },
  sameAs: ['https://www.instagram.com/siddhiscoachingclasses'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+919594345743',
      contactType: 'admissions',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+917208476547',
      contactType: 'admissions',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
  ],
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
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/#centre-1`,
      telephone: '+919594345743',
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '06:30',
          closes: '21:00',
        },
      ],
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
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}/#centre-2`,
      telephone: '+917208476547',
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '06:30',
          closes: '21:00',
        },
      ],
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
