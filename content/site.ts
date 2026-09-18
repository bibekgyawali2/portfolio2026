import { identity } from "./profile";

export const site = {
  /** Canonical origin, no trailing slash. Everything else derives from it. */
  url: "https://bibekgyawali.com.np",
  name: identity.name,
  /** Shown as the browser tab title on the front page, and in search results. */
  title: `${identity.name} — Electronics Engineer, Kathmandu`,
  description:
    "Bibek Gyawali — Electronics and Communication Engineering graduate from Tribhuvan University, Kathmandu. Computer science and 5G wireless communication, signal processing, embedded systems and machine learning.",
  locale: "en_US",
};

/**
 * Structured data. This is what lets Google associate the name, the
 * university, the GitHub account and the LinkedIn profile with one person.
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: site.url,
  email: `mailto:${identity.email}`,
  jobTitle: "Electronics and Communication Engineer",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tribhuvan University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
  },
  knowsAbout: [
    "Computer Science",
    "5G Wireless Communication",
    "Digital Signal Processing",
    "Embedded Systems",
    "Control Systems",
    "Machine Learning",
    "Biomedical Instrumentation",
  ],
  /** The links that tie the identities together. Add ORCID or Scholar when you have them. */
  sameAs: identity.links.map((link) => link.href),
};
