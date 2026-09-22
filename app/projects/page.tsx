import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering and research projects by Bibek Gyawali in embedded systems, instrumentation, signal processing, and applied machine learning.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        lede="Selected work in embedded control systems, biomedical instrumentation, applied machine learning, and time-series modeling."
      />
      <ProjectList projects={projects} headingLevel="h2" />
    </>
  );
}
