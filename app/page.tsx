import { DataList } from "@/components/DataList";
import { Entry } from "@/components/Entry";
import { Masthead } from "@/components/Masthead";
import { Footer, Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import {
  also,
  education,
  experience,
  identity,
  interests,
  research,
  skills,
  statement,
} from "@/content/profile";

export default function Home() {
  return (
    <Page>
      <Masthead {...identity} />

      <Section title="Statement">
        <Prose paragraphs={statement} />
      </Section>

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
        {research.map((item) => (
          <Entry
            key={item.title}
            when={item.period}
            title={item.title}
            href={item.href}
            body={item.body}
          />
        ))}
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

      <Section title="Technical skills">
        <DataList items={skills} />
      </Section>

      <Section title="Also">
        <DataList items={also} />
      </Section>

      <Footer>
        {identity.location} · <a href={`mailto:${identity.email}`}>{identity.email}</a>
      </Footer>
    </Page>
  );
}
