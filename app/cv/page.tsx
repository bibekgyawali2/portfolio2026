import type { Metadata } from "next";
import { DataList } from "@/components/DataList";
import { Entry } from "@/components/Entry";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import {
  also,
  education,
  experience,
  identity,
  interests,
  skills,
} from "@/content/profile";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae — Bibek Gyawali.",
};

export default function CV() {
  return (
    <>
      <PageHeader kicker="Curriculum vitae" title={identity.name} />

      <p className={styles.contact}>
        {identity.location} · <a href={`mailto:${identity.email}`}>{identity.email}</a>
        {identity.links.map((link) => (
          <span key={link.href}>
            {" · "}
            <a href={link.href}>{link.label}</a>
          </span>
        ))}
      </p>

      <p className={styles.hint}>Print this page for a PDF copy.</p>

      <Section title="Research interests">
        <DataList
          items={interests.map((interest) => ({
            term: interest.label,
            description: interest.title,
          }))}
        />
      </Section>

      <Section title="Education">
        {education.map((item) => (
          <Entry
            key={item.degree}
            when={item.period}
            title={item.degree}
            where={item.institution}
            body={item.body}
            note={item.note}
          />
        ))}
      </Section>

      <Section title="Research and projects">
        {projects.map((project) => (
          <Entry
            key={project.slug}
            when={project.year}
            title={project.title}
            where={project.kind}
            body={[project.summary]}
          />
        ))}
      </Section>

      <Section title="Experience">
        {experience.roles.map((role) => (
          <Entry
            key={role.institution}
            when={role.period}
            title={role.role}
            where={role.institution}
            body={role.body}
          />
        ))}
      </Section>

      <Section title="Technical skills">
        <DataList items={skills} />
      </Section>

      <Section title="Certifications, awards and languages">
        <DataList items={also} />
      </Section>
    </>
  );
}
