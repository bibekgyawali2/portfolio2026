import Link from "next/link";
import { Lede } from "@/components/Lede";
import { ProjectList } from "@/components/ProjectList";
import { Section } from "@/components/Section";
import { home } from "@/content/profile";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Lede display={home.display} intro={home.intro} now={home.now} />

      <Section title="Selected work" more={{ href: "/work", label: "All work" }}>
        <ProjectList projects={projects} />
      </Section>

      <Section title="Elsewhere">
        <p>
          More on the <Link href="/about">background</Link>, or the whole thing
          as a <Link href="/cv">CV</Link>.
        </p>
      </Section>
    </>
  );
}
