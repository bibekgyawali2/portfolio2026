import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DataList } from "@/components/DataList";
import { ProjectBody } from "@/components/ProjectBody";
import { PageHeader } from "@/components/PageHeader";
import { StructuredData } from "@/components/StructuredData";
import { identity } from "@/content/profile";
import { createBreadcrumbSchema, createProjectSchema, site } from "@/content/site";
import { projectBySlug, projects } from "@/content/projects";
import { ArrowUpIcon } from "@/components/Icons";
import { ProjectActionLink } from "@/components/ProjectActionLink";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = projectBySlug((await params).slug);

  if (!project) return {};

  const pageTitle = `${project.title} | ${identity.name}`;
  const keywords = [
    project.title,
    project.kind,
    ...project.facts.map((f) => f.description),
    "Bibek Gyawali",
    "Electronics Engineer",
    "Kathmandu",
  ];

  return {
    title: project.title,
    description: project.summary,
    keywords,
    alternates: { canonical: `${site.url}/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: pageTitle,
      description: project.summary,
      url: `${site.url}/projects/${project.slug}`,
      siteName: site.name,
      locale: site.locale,
      publishedTime: `${project.year}-01-01T00:00:00Z`,
      authors: [site.url],
      tags: [project.kind, ...project.facts.map((f) => f.description)],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const project = projectBySlug((await params).slug);

  if (!project) notFound();

  const projectSchema = createProjectSchema(project);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.title, url: `/projects/${project.slug}` },
  ]);

  const pageSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [projectSchema, breadcrumbSchema],
  };

  return (
    <article>
      <StructuredData data={pageSchemaGraph} />
      <MotionFadeIn delay={0}>
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 font-mono text-[0.75rem] font-medium text-ink-faint list-none p-0 m-0">
            <li>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 no-underline hover:text-accent transition-colors duration-140 group"
              >
                <span
                  className="transition-transform duration-140 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                >
                  ←
                </span>
                <span>All projects</span>
              </Link>
            </li>
            <li aria-hidden="true" className="text-rule select-none">/</li>
            <li aria-current="page" className="text-ink-soft truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </li>
          </ol>
        </nav>

        <PageHeader
          title={project.title}
          meta={`${project.kind} · ${project.year}`}
          lede={project.lede}
        />
      </MotionFadeIn>

      <MotionFadeIn delay={0.06}>
        <div className="border-t border-b border-rule py-7 mb-14">
          <DataList items={project.facts} />
          {project.repo || project.demo ? (
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-rule/60">
              {project.demo ? (
                <ProjectActionLink
                  href={project.demo}
                  label={
                    project.demoLabel ||
                    (project.demo.includes("play.google.com")
                      ? "View on Google Play"
                      : "Live deployment")
                  }
                />
              ) : null}
              {project.repo ? (
                <ProjectActionLink
                  href={project.repo}
                  label="View on GitHub"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </MotionFadeIn>

      {project.sections.length ? (
        <MotionFadeIn delay={0.12}>
          <ProjectBody sections={project.sections} />
        </MotionFadeIn>
      ) : null}

      <nav
        aria-label="Project navigation"
        className="mt-16 sm:mt-20 pt-6 sm:pt-7 border-t border-rule flex justify-between items-center font-mono text-[0.8125rem] print:hidden"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-ink-soft no-underline transition-colors duration-140 hover:text-accent group"
        >
          <span
            className="transition-transform duration-140 group-hover:-translate-x-0.5"
            aria-hidden="true"
          >
            ←
          </span>
          <span className="group-hover:underline group-hover:underline-offset-[0.2em]">
            All projects
          </span>
        </Link>
        <a
          href="#main-content"
          className="inline-flex items-center gap-1 text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent group"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUpIcon className="w-3 h-3 text-icon-top shrink-0 transition-transform duration-120 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </a>
      </nav>
    </article>
  );
}
