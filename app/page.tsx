import type { Metadata } from "next";
import { DataList } from "@/components/DataList";
import { Entry } from "@/components/Entry";
import {
  AwardIcon,
  BriefcaseIcon,
  CpuIcon,
  ExternalLinkIcon,
  GithubIcon,
  GraduationCapIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  SlidersIcon,
  TerminalIcon,
} from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CertificationCard } from "@/components/CertificationCard";
import { CopyEmail } from "@/components/CopyEmail";
import {
  certifications,
  credentials,
  education,
  experience,
  identity,
  referees,
  skills,
} from "@/content/profile";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
};

/** Credentials that have been filled in. Empty fields are left out entirely. */
const record = [
  { term: "Grade", description: credentials.gpa },
  { term: "Scale", description: credentials.gradingScale },
  {
    term: "English test",
    description: credentials.englishTest
      ? `${credentials.englishTest} (${credentials.englishTestDate})`
      : "",
  },
  {
    term: "GRE",
    description: credentials.gre
      ? `${credentials.gre} (${credentials.greDate})`
      : "",
  },
].filter((item) => item.description);

const research = projects.filter(
  (p) => p.kind === "Undergraduate thesis" || p.kind === "Research project"
);
const engineeringAndMl = projects.filter(
  (p) => p.kind !== "Undergraduate thesis" && p.kind !== "Research project"
);

function provenance(project: (typeof projects)[number]) {
  return [
    project.kind,
    // project.grade && `assessed ${project.grade}`,
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
    return (
      <GithubIcon className="inline-block w-[0.9375rem] h-[0.9375rem] text-icon-github shrink-0 transition-transform duration-120 group-hover:scale-110" />
    );
  }
  if (norm.includes("linkedin")) {
    return (
      <LinkedinIcon className="inline-block w-[0.9375rem] h-[0.9375rem] text-icon-linkedin shrink-0 transition-transform duration-120 group-hover:scale-110" />
    );
  }
  return null;
}

export default function Home() {
  return (
    <>
      <PageHeader
        title={identity.name}
        meta={
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 m-0">
            <span className="inline-flex items-center gap-1.5 text-inherit no-underline">
              <MapPinIcon className="inline-block w-[0.9375rem] h-[0.9375rem] text-icon-location shrink-0" />
              <span>{identity.location}</span>
            </span>
            <span className="opacity-45 select-none" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-1">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-1.5 text-inherit no-underline transition-colors duration-140 hover:text-accent hover:underline hover:underline-offset-[0.2em] group"
              >
                <MailIcon className="inline-block w-[0.9375rem] h-[0.9375rem] text-icon-email shrink-0 transition-transform duration-120 group-hover:scale-110" />
                <span>{identity.email}</span>
              </a>
              <CopyEmail email={identity.email} />
            </span>
            {identity.links.map((link) => (
              <span key={link.href} className="inline-flex items-center gap-2">
                <span className="opacity-45 select-none" aria-hidden="true">
                  ·
                </span>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-inherit no-underline transition-colors duration-140 hover:text-accent hover:underline hover:underline-offset-[0.2em] group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {renderLinkIcon(link.label)}
                  <span>{link.label}</span>
                  <ExternalLinkIcon className="w-2.5 h-2.5 text-ink-faint opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all" />
                </a>
              </span>
            ))}
          </p>
        }
      />

      <Section
        title="Education"
        icon={<GraduationCapIcon className="w-4 h-4 text-icon-education" />}
      >
        {education.map((item) => (
          <Entry
            key={item.degree}
            when={item.period}
            title={item.degree}
            where={item.institution}
            note={item.note}
          />
        ))}

        {record.length > 0 && (
          <div className="mt-6">
            <DataList items={record} />
          </div>
        )}
      </Section>

      <Section
        title="Research"
        icon={<CpuIcon className="w-4 h-4 text-icon-research" />}
      >
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
        icon={<BriefcaseIcon className="w-4 h-4 text-icon-experience" />}
        lede={experience.preamble || undefined}
      >
        {experience.roles.map((role) => (
          <Entry
            key={role.institution}
            when={role.period}
            title={role.role}
            where={role.institution}
            whereHref={role.institutionHref}
            logo={role.logo}
            body={role.body}
            note={role.note || undefined}
          />
        ))}
      </Section>

      <Section
        title="Projects"
        icon={<TerminalIcon className="w-4 h-4 text-icon-projects" />}
        lede="Civic technology platforms and machine learning systems."
        more={{ href: "/projects", label: "All projects" }}
      >
        {engineeringAndMl.map((project) => (
          <Entry
            key={project.slug}
            when={project.year}
            title={project.title}
            href={`/projects/${project.slug}`}
            body={[project.summary]}
          />
        ))}
      </Section>

      <Section
        title="Technical skills"
        icon={<SlidersIcon className="w-4 h-4 text-icon-skills" />}
      >
        <DataList items={skills} />
      </Section>

      <Section
        title="Certifications and awards"
        icon={<AwardIcon className="w-4 h-4 text-icon-award" />}
      >
        <ul className="m-0 p-0 list-none space-y-1">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </ul>
      </Section>

      {referees.length ? (
        <Section title="Referees">
          <DataList items={referees} />
        </Section>
      ) : null}
    </>
  );
}
