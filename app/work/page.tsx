import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects in embedded control, instrumentation and applied machine learning.",
};

export default function Work() {
  return (
    <>
      <PageHeader
        kicker="Work"
        title="Three projects, and what each one actually taught me."
        lede="A ventilator built for my thesis, and two machine learning projects where the interesting part turned out to be the evaluation rather than the model."
      />
      <ProjectList projects={projects} />
    </>
  );
}
