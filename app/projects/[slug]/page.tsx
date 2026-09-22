import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DataList } from "@/components/DataList";
import { ProjectBody } from "@/components/ProjectBody";
import { PageHeader } from "@/components/PageHeader";
import { StructuredData } from "@/components/StructuredData";
import { identity } from "@/content/profile";
import { site } from "@/content/site";
import { projectBySlug, projects } from "@/content/projects";
import { GithubIcon, ExternalLinkIcon, GooglePlayIcon } from "@/components/Icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = projectBySlug((await params).slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const project = projectBySlug((await params).slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          headline: project.title,
          description: project.summary,
          url: `${site.url}/projects/${project.slug}`,
          author: { "@type": "Person", name: identity.name, url: site.url },
          datePublished: project.year.slice(-4),
          keywords: project.facts.map((fact) => fact.description).join(", "),
          ...(project.repo ? { codeRepository: project.repo } : {}),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] font-medium text-ink-faint no-underline hover:text-accent transition-colors duration-140 group"
        >
          <span
            className="transition-transform duration-140 group-hover:-translate-x-0.5"
            aria-hidden="true"
          >
            ←
          </span>
          <span>All projects</span>
        </Link>
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
                className="inline-flex items-center gap-2 font-mono text-[0.8125rem] font-medium text-accent bg-accent-subtle border border-accent-border py-1.5 px-3.5 rounded-full no-underline transition-all duration-140 hover:bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] hover:border-accent hover:-translate-y-px active:translate-y-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.demo.includes("play.google.com") ? (
                  <GooglePlayIcon className="w-3.5 h-3.5 shrink-0" />
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

      <ProjectBody sections={project.sections} />

      <nav
        aria-label="Project pagination"
        className="mt-18 pt-8 border-t border-rule print:hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col p-4 rounded-md border border-rule transition-all duration-140 hover:border-accent/40 hover:bg-accent-subtle/50 active:scale-[0.995] no-underline"
            >
              <span className="font-mono text-[0.6875rem] font-medium text-ink-faint uppercase tracking-[0.06em] mb-1.5 flex items-center gap-1.5 transition-colors group-hover:text-accent">
                <span
                  aria-hidden="true"
                  className="transition-transform duration-140 group-hover:-translate-x-1"
                >
                  ←
                </span>
                <span>Previous project</span>
              </span>
              <span className="text-[0.9375rem] font-semibold tracking-[-0.015em] leading-[1.35] text-ink transition-colors group-hover:text-accent">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-start sm:items-end p-4 rounded-md border border-rule transition-all duration-140 hover:border-accent/40 hover:bg-accent-subtle/50 active:scale-[0.995] no-underline text-left sm:text-right"
            >
              <span className="font-mono text-[0.6875rem] font-medium text-ink-faint uppercase tracking-[0.06em] mb-1.5 flex items-center gap-1.5 transition-colors group-hover:text-accent">
                <span>Next project</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-140 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
              <span className="text-[0.9375rem] font-semibold tracking-[-0.015em] leading-[1.35] text-ink transition-colors group-hover:text-accent">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>

        <div className="mt-6 pt-4 flex justify-between items-center font-mono text-[0.8125rem]">
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
            className="text-ink-faint no-underline hover:text-accent transition-colors duration-140 hover:underline hover:underline-offset-[0.2em]"
          >
            Top ↑
          </a>
        </div>
      </nav>
    </article>
  );
}
