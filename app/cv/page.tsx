import type { Metadata } from "next";
import { DataList } from "@/components/DataList";
import { Entry } from "@/components/Entry";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import {
  awards,
  coursework,
  credentials,
  education,
  experience,
  identity,
  interests,
  languages,
  referees,
  skills,
  thesis,
} from "@/content/profile";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae — Bibek Gyawali.",
};

/** Credentials that have been filled in. Empty fields are left out entirely. */
const record = [
  { term: "Grade", description: credentials.gpa },
  { term: "Scale", description: credentials.gradingScale },
  { term: "English", description: credentials.englishTest },
  { term: "GRE", description: credentials.gre },
].filter((item) => item.description);

const researchProjects = projects.filter((p) => p.kind === "Research project");
const selfDirected = projects.filter((p) => p.kind === "Machine learning");

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

      <Section title="Areas of interest">
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
            note={item.note}
          />
        ))}

        {record.length ? (
          <div className={styles.block}>
            <DataList items={record} />
          </div>
        ) : null}

        <div className={styles.block}>
          <DataList items={coursework} />
        </div>
      </Section>

      <Section title="Research">
        <Entry
          when={thesis.period}
          title={thesis.title}
          href={credentials.thesisUrl || undefined}
          where={[
            "Undergraduate thesis",
            `assessed ${thesis.grade}`,
            credentials.supervisor && `supervised by ${credentials.supervisor}`,
          ]
            .filter(Boolean)
            .join(" · ")}
          body={thesis.body}
        />

        {researchProjects.map((project) => (
          <Entry
            key={project.slug}
            when={project.year}
            title={project.title}
            href={project.repo}
            where={project.facts
              .filter((fact) => fact.term === "Data" || fact.term === "Best")
              .map((fact) => fact.description)
              .join(" · ")}
            body={[project.summary]}
          />
        ))}
      </Section>

      <Section title="Professional experience" lede={experience.preamble}>
        {experience.roles.map((role) => (
          <Entry
            key={role.institution}
            when={role.period}
            title={role.role}
            where={role.institution}
            body={role.body}
            note={role.note || undefined}
          />
        ))}
      </Section>

      <Section
        title="Self-directed projects"
        lede="Independent work outside coursework, undertaken to learn the methods."
      >
        {selfDirected.map((project) => (
          <Entry
            key={project.slug}
            when={project.year}
            title={project.title}
            href={project.repo}
            body={[project.summary]}
          />
        ))}
      </Section>

      <Section title="Technical skills">
        <DataList items={skills} />
      </Section>

      <Section title="Awards and certifications">
        <DataList items={awards} />
      </Section>

      <Section title="Languages">
        <DataList items={languages} />
      </Section>

      {referees.length ? (
        <Section title="Referees">
          <DataList items={referees} />
        </Section>
      ) : null}
    </>
  );
}
