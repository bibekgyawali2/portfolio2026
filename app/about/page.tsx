import type { Metadata } from "next";
import { DataList } from "@/components/DataList";
import { Entry } from "@/components/Entry";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import {
  about,
  coursework,
  credentials,
  education,
  experience,
  interests,
  languages,
  thesis,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: about.lede,
};

export default function About() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="From software back to hardware, and why I want the theory."
        lede={about.lede}
      />

      <Prose paragraphs={about.story} />

      <Section title="Research interests">
        {interests.map((interest) => (
          <Entry
            key={interest.title}
            when={interest.label}
            title={interest.title}
            body={[interest.body]}
          />
        ))}
      </Section>

      <Section title="Education" more={{ href: "/cv", label: "Full CV" }}>
        {education.map((item) => (
          <Entry
            key={item.degree}
            when={item.period}
            title={item.degree}
            where={item.institution}
            note={item.note}
          />
        ))}

        <Entry
          when="Thesis"
          title={thesis.title}
          href={credentials.thesisUrl || undefined}
          where={`Assessed ${thesis.grade}${
            credentials.supervisor ? ` · supervised by ${credentials.supervisor}` : ""
          }`}
        />
      </Section>

      <Section title="Coursework">
        <DataList items={coursework} />
      </Section>

      <Section title="Engineering experience" lede={experience.preamble}>
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

      <Section title="Languages">
        <DataList items={languages} />
      </Section>
    </>
  );
}
