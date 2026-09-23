import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { StructuredData } from "@/components/StructuredData";
import { identity } from "@/content/profile";
import { projects } from "@/content/projects";
import { createBreadcrumbSchema, site } from "@/content/site";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering and research projects by Bibek Gyawali in embedded systems, instrumentation, signal processing, and applied machine learning.",
  alternates: { canonical: `${site.url}/projects` },
  openGraph: {
    title: `Projects | ${identity.name}`,
    description:
      "Selected work in embedded control systems, biomedical instrumentation, applied machine learning, and time-series modeling.",
    url: `${site.url}/projects`,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${identity.name}`,
    description:
      "Selected work in embedded control systems, biomedical instrumentation, applied machine learning, and time-series modeling.",
  },
};

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
]);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/projects/#collection`,
  url: `${site.url}/projects`,
  name: `Projects | ${identity.name}`,
  description:
    "Engineering and research projects by Bibek Gyawali in embedded systems, instrumentation, signal processing, and applied machine learning.",
  isPartOf: {
    "@id": `${site.url}/#website`,
  },
  about: {
    "@id": `${site.url}/#person`,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.summary,
      url: `${site.url}/projects/${project.slug}`,
    })),
  },
};

const projectsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [collectionSchema, breadcrumbs],
};

export default function Projects() {
  return (
    <>
      <StructuredData data={projectsPageSchema} />
      <MotionFadeIn delay={0}>
        <PageHeader
          title="Projects"
          lede="Selected work in embedded control systems, biomedical instrumentation, applied machine learning, and time-series modeling."
        />
      </MotionFadeIn>
      <MotionFadeIn delay={0.08}>
        <ProjectList projects={projects} headingLevel="h2" />
      </MotionFadeIn>
    </>
  );
}

