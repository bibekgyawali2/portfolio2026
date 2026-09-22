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
import { GithubIcon, ExternalLinkIcon, GooglePlayIcon, GooglePlayColorIcon, ArrowUpIcon } from "@/components/Icons";

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

      <div className="border-t border-b border-rule py-7 mb-14">
        <DataList items={project.facts} />
        {project.repo || project.demo ? (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-6">
            {project.repo ? (
              <a
                href={project.repo}
                className="inline-flex items-center gap-2 font-mono text-[0.8125rem] font-medium text-accent bg-accent-subtle border border-accent-border py-1.5 px-3.5 rounded-full no-underline transition-all duration-140 hover:bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] hover:border-accent hover:-translate-y-px active:translate-y-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Source on GitHub</span>
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                className={
                  project.demo.includes("play.google.com")
                    ? "inline-flex items-center gap-2.5 font-mono text-[0.8125rem] font-semibold text-emerald-800 dark:text-emerald-300 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 hover:from-emerald-500/25 hover:via-teal-500/25 hover:to-cyan-500/25 border border-emerald-500/40 dark:border-emerald-400/40 py-1.5 px-4 rounded-full no-underline transition-all duration-140 hover:border-emerald-500 hover:shadow-xs hover:-translate-y-px active:translate-y-0 shadow-2xs group/btn"
                    : "inline-flex items-center gap-2 font-mono text-[0.8125rem] font-medium text-accent bg-accent-subtle border border-accent-border py-1.5 px-3.5 rounded-full no-underline transition-all duration-140 hover:bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] hover:border-accent hover:-translate-y-px active:translate-y-0"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.demo.includes("play.google.com") ? (
                  <GooglePlayColorIcon className="w-4 h-4 shrink-0 transition-transform duration-140 group-hover/btn:scale-110" />
                ) : (
                  <ExternalLinkIcon className="w-3.5 h-3.5 shrink-0" />
                )}
                <span>
                  {project.demoLabel ||
                    (project.demo.includes("play.google.com")
                      ? "View on Google Play"
                      : "Live deployment")}
                </span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {project.sections.length ? (
        <ProjectBody sections={project.sections} />
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
