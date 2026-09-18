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
import styles from "./page.module.css";

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
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const project = projectBySlug((await params).slug);

  if (!project) notFound();

  return (
    <article>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          headline: project.title,
          description: project.summary,
          url: `${site.url}/work/${project.slug}`,
          author: { "@type": "Person", name: identity.name, url: site.url },
          datePublished: project.year.slice(-4),
          keywords: project.facts.map((fact) => fact.description).join(", "),
          ...(project.repo ? { codeRepository: project.repo } : {}),
        }}
      />
      <PageHeader
        kicker={`${project.kind} · ${project.year}`}
        title={project.title}
        lede={project.lede}
      />

      <div className={styles.facts}>
        <DataList items={project.facts} />
        {project.repo || project.demo ? (
          <p className={styles.repo}>
            {project.repo ? <a href={project.repo}>Source on GitHub →</a> : null}
            {project.repo && project.demo ? <span className={styles.gap} /> : null}
            {project.demo ? <a href={project.demo}>Live predictor →</a> : null}
          </p>
        ) : null}
      </div>

      <ProjectBody sections={project.sections} />

      <p className={styles.back}>
        <Link href="/work">← All work</Link>
      </p>
    </article>
  );
}
