import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./ProjectList.module.css";

export function ProjectList({
  projects,
  headingLevel = "h3",
}: {
  projects: Project[];
  /** h2 when the list is the page's own content; h3 when it sits inside a Section. */
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug} className={styles.item}>
          <Link href={`/projects/${project.slug}`} className={styles.link}>
            <span className={styles.year}>{project.year}</span>
            <span>
              <Heading className={styles.title}>{project.title}</Heading>
              <p className={styles.summary}>{project.summary}</p>
            </span>
            <span className={styles.kind}>{project.kind}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
