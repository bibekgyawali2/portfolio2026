import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DataList } from "@/components/DataList";
import { ProjectBody } from "@/components/ProjectBody";
import { PageHeader } from "@/components/PageHeader";
import { projectBySlug, projects } from "@/content/projects";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = projectBySlug((await params).slug);

  return project
    ? { title: project.title, description: project.summary }
    : {};
}

export default async function ProjectPage({ params }: Params) {
  const project = projectBySlug((await params).slug);

  if (!project) notFound();

  return (
    <article>
      <PageHeader
        kicker={`${project.kind} · ${project.year}`}
        title={project.title}
        lede={project.lede}
      />

      <div className={styles.facts}>
        <DataList items={project.facts} />
        {project.repo ? (
          <p className={styles.repo}>
            <a href={project.repo}>Source on GitHub →</a>
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
