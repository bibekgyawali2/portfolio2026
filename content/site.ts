import { certifications, identity } from "./profile";
import type { Project } from "./projects";

export const site = {
  /** Canonical origin, no trailing slash. Everything else derives from it. */
  url: "https://bibekgyawali.com.np",
  name: identity.name,
  /** Shown as the browser tab title on the front page, and in search results. */
  title: `${identity.name} | Electronics Engineer, Kathmandu`,
  description:
    "Bibek Gyawali is an Electronics Engineer from Kathmandu, Nepal, specializing in embedded systems, biomedical instrumentation, and applied machine learning.",
  locale: "en_US",
  keywords: [
    "Bibek Gyawali",
    "Electronics Engineer",
    "Communication Engineer",
    "Software Engineer",
    "Kathmandu",
    "Nepal",
    "Tribhuvan University",
    "Institute of Engineering",
    "Embedded Systems",
    "Biomedical Instrumentation",
    "PID Controller",
    "Automated Ventilator",
    "Digital Signal Processing",
    "Machine Learning",
    "PyTorch",
    "Flutter Developer",
    "Civic Technology",
    "SmartPalika",
    "Kingsoft",
    "Time Series Forecasting",
    "Electronics Engineering",
  ],
};

/**
 * Structured data for Google, Bing, and AI search engines.
 * Declares Person entity with credentials, education, and social links.
 */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: identity.name,
  givenName: "Bibek",
  familyName: "Gyawali",
  url: site.url,
  image: `${site.url}/og.png`,
  email: `mailto:${identity.email}`,
  jobTitle: "Electronics and Communication Engineer",
  description: site.description,
  gender: "https://schema.org/Male",
  nationality: {
    "@type": "Country",
    name: "Nepal",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tribhuvan University, Institute of Engineering",
    sameAs: "https://tu.edu.np",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "Kingsoft",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
    {
      "@type": "Organization",
      name: "CellApp / SmartPalika",
      url: "https://smartpalika.org",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
  ],
  hasCredential: certifications.map((cert) => ({
    "@type": "EducationalOccupationalCredential",
    name: cert.title,
    credentialCategory: "certificate",
    recognizedBy: {
      "@type": "Organization",
      name: cert.issuer,
    },
    ...(cert.href ? { url: cert.href } : {}),
  })),
  knowsAbout: [
    "Electronics and Communication Engineering",
    "Digital Signal Processing",
    "Embedded Systems",
    "Control Systems",
    "PID Controllers",
    "Machine Learning",
    "PyTorch",
    "Flutter",
    "Biomedical Instrumentation",
  ],
  sameAs: [
    ...identity.links.map((link) => link.href),
    "https://www.coursera.org/account/accomplishments/verify/ENQCHQ9R2U39",
  ],
};

/** WebSite schema for search engine identification */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: "Bibek Gyawali",
  alternateName: "Bibek Gyawali Portfolio",
  url: site.url,
  description: site.description,
  inLanguage: "en-US",
  publisher: {
    "@id": `${site.url}/#person`,
  },
};

/** ProfilePage schema for personal portfolios and expert profiles */
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: site.title,
  description: site.description,
  isPartOf: {
    "@id": `${site.url}/#website`,
  },
  about: {
    "@id": `${site.url}/#person`,
  },
  mainEntity: {
    "@id": `${site.url}/#person`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${site.url}/og.png`,
    width: "1200",
    height: "630",
  },
  dateCreated: "2024-01-01",
  dateModified: "2026-09-22",
};

/** Combined Schema.org @graph for Root Layout */
export const rootSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema, profilePageSchema],
};

/** Generates BreadcrumbList schema for enhanced SERP navigation */
export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      let resolvedUrl = item.url;
      if (!resolvedUrl.startsWith("http")) {
        resolvedUrl =
          resolvedUrl === "/" || resolvedUrl === ""
            ? site.url
            : `${site.url}${resolvedUrl.startsWith("/") ? resolvedUrl : `/${resolvedUrl}`}`;
      }
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: resolvedUrl,
      };
    }),
  };
}

/** Generates detailed CreativeWork/SoftwareApplication schema for a project */
export function createProjectSchema(project: Project) {
  const isSoftware =
    project.kind !== "Undergraduate thesis" &&
    project.kind !== "Research project";

  const base = {
    "@context": "https://schema.org",
    "@type": isSoftware ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    url: `${site.url}/projects/${project.slug}`,
    image: `${site.url}/og.png`,
    author: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: identity.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: identity.name,
    },
    datePublished: `${project.year}-01-01`,
    inLanguage: "en-US",
    keywords: [
      project.kind,
      ...project.facts.map((fact) => fact.description),
    ].join(", "),
    ...(project.repo ? { codeRepository: project.repo } : {}),
    ...(project.demo ? { installUrl: project.demo } : {}),
  };

  if (isSoftware) {
    return {
      ...base,
      applicationCategory:
        project.kind === "Civic technology"
          ? "GovernmentApplication"
          : "BusinessApplication",
      operatingSystem: "Android, iOS, Web",
    };
  }

  return base;
}
