import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./ProjectList.module.css";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug} className={styles.item}>
          <Link href={`/work/${project.slug}`} className={styles.link}>
            <span className={styles.year}>{project.year}</span>
            <span>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.summary}>{project.summary}</p>
            </span>
            <span className={styles.kind}>{project.kind}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
