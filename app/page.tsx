import type { Metadata } from "next";
import { DataList } from "@/components/DataList";
import { Entry } from "@/components/Entry";
import {
  AwardIcon,
  BriefcaseIcon,
  CpuIcon,
  GithubIcon,
  GlobeIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  SlidersIcon,
  TerminalIcon,
} from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import {
  awards,
  credentials,
  education,
  experience,
  identity,
  languages,
  referees,
  skills,
} from "@/content/profile";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
};

/** Credentials that have been filled in. Empty fields are left out entirely. */
const record = [
  { term: "Grade", description: credentials.gpa },
  { term: "Scale", description: credentials.gradingScale },
].filter((item) => item.description);

/** Test scores sit with the certifications, not with the degree. */
const certifications = [
  { term: credentials.englishTestDate, description: credentials.englishTest },
  { term: credentials.greDate, description: credentials.gre },
]
  .filter((item) => item.description)
  .concat(awards);

const research = projects.filter((p) => p.kind === "Undergraduate thesis");
const selfDirected = projects.filter((p) => p.kind === "Machine learning");

function provenance(project: (typeof projects)[number]) {
  return [
    project.kind,
    project.grade && `assessed ${project.grade}`,
    project.kind === "Undergraduate thesis" &&
      credentials.supervisor &&
      `supervised by ${credentials.supervisor}`,
  ]
    .filter(Boolean)
    .join(" · ");
}

function renderLinkIcon(label: string) {
  const norm = label.toLowerCase();
  if (norm.includes("github")) {
    return <GithubIcon className={`${styles.metaIcon} ${styles.githubIcon}`} />;
  }
  if (norm.includes("linkedin")) {
    return <LinkedinIcon className={`${styles.metaIcon} ${styles.linkedinIcon}`} />;
  }
  return null;
}

export default function Home() {
  return (
    <>
      <PageHeader
        title={identity.name}
        meta={
          <p className={styles.metaLine}>
            <span className={styles.metaItem}>
              <MapPinIcon className={`${styles.metaIcon} ${styles.pinIcon}`} />
              <span>{identity.location}</span>
            </span>
            <span className={styles.metaSep} aria-hidden="true">
              ·
            </span>
            <a href={`mailto:${identity.email}`} className={styles.metaItem}>
              <MailIcon className={`${styles.metaIcon} ${styles.mailIcon}`} />
              <span>{identity.email}</span>
            </a>
            {identity.links.map((link) => (
              <span key={link.href} className={styles.metaGroup}>
                <span className={styles.metaSep} aria-hidden="true">
                  ·
                </span>
                <a
                  href={link.href}
                  className={styles.metaItem}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {renderLinkIcon(link.label)}
                  <span>{link.label}</span>
                </a>
              </span>
            ))}
          </p>
        }
      />

      <Section title="Education" icon={<GraduationCapIcon />}>
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
      </Section>

      <Section title="Research" icon={<CpuIcon />}>
        {research.map((project) => (
          <Entry
            key={project.slug}
            when={project.year}
            title={project.title}
            href={`/projects/${project.slug}`}
            where={provenance(project)}
            body={project.cv ?? [project.summary]}
          />
        ))}
      </Section>

      <Section
        title="Professional experience"
        icon={<BriefcaseIcon />}
        lede={experience.preamble}
      >
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
        icon={<TerminalIcon />}
        lede="Independent work undertaken to explore the methods."
        more={{ href: "/projects", label: "All projects" }}
      >
        {selfDirected.map((project) => (
          <Entry
            key={project.slug}
            when={project.year}
            title={project.title}
            href={`/projects/${project.slug}`}
            body={[project.summary]}
          />
        ))}
      </Section>

      <Section title="Technical skills" icon={<SlidersIcon />}>
        <DataList items={skills} />
      </Section>

      <Section title="Certifications and awards" icon={<AwardIcon />}>
        <DataList items={certifications} />
      </Section>

      <Section title="Languages" icon={<GlobeIcon />}>
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
