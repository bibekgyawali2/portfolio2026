import { Entry } from "@/components/Entry";
import { Lede } from "@/components/Lede";
import { ProjectList } from "@/components/ProjectList";
import { Section } from "@/components/Section";
import { credentials, education, home } from "@/content/profile";
import { projects, projectBySlug } from "@/content/projects";

const thesis = projectBySlug("ventilator");

export default function Home() {
  return (
    <>
      <Lede display={home.display} intro={home.intro} now={home.now} />

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

        {thesis ? (
          <Entry
            when="Thesis"
            title={thesis.title}
            href={`/work/${thesis.slug}`}
            where={[
              thesis.grade && `Assessed ${thesis.grade}`,
              credentials.supervisor && `supervised by ${credentials.supervisor}`,
            ]
              .filter(Boolean)
              .join(" · ")}
          />
        ) : null}
      </Section>

      <Section title="Selected work" more={{ href: "/work", label: "All work" }}>
        <ProjectList projects={projects.slice(0, 3)} />
      </Section>
    </>
  );
}
