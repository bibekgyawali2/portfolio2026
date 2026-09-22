import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Bibek Gyawali in signal processing, embedded control, instrumentation and applied machine learning.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <>
      <PageHeader
        title="What I have built"
        lede="A closed-loop ventilator built for my thesis, an empirical construction cost study, and applied machine learning projects focused on rigorous evaluation design."
      />
      <ProjectList projects={projects} headingLevel="h2" />
    </>
  );
}
