import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectList({
  projects,
  headingLevel = "h3",
}: {
  projects: Project[];
  /** h2 when the list is the page's own content; h3 when it sits inside a Section. */
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <ul className="m-0 p-0 list-none border-t border-rule">
      {projects.map((project) => (
        <li key={project.slug} className="border-b border-rule">
          <Link
            href={`/projects/${project.slug}`}
            className="grid grid-cols-[6.5rem_1fr_auto] gap-x-7 items-baseline py-5 px-3.5 -mx-3.5 rounded-md no-underline transition-all duration-140 hover:bg-accent-subtle/70 active:scale-[0.995] group max-md:grid-cols-[6.5rem_1fr] max-sm:grid-cols-1 max-sm:py-4 max-sm:px-2.5 max-sm:-mx-2.5"
          >
            <span className="font-mono text-[0.8125rem] font-medium tracking-[-0.01em] text-ink-faint tabular-nums max-sm:mb-1.5 max-sm:block">
              {project.year}
            </span>
            <span>
              <Heading className="m-0 text-[1.0625rem] font-semibold tracking-[-0.022em] leading-[1.3] text-ink transition-colors duration-140 group-hover:text-accent group-hover:underline group-hover:underline-offset-[0.2em]">
                {project.title}
              </Heading>
              <p className="mt-1.5 mb-0 text-ink-soft text-[0.9375rem] leading-[1.6] tracking-[-0.008em] max-w-[36rem] text-pretty">
                {project.summary}
              </p>
              {project.kind === "Undergraduate thesis" ? (
                <div className="mt-2 md:hidden">
                  <span className="font-mono text-[0.6875rem] text-ink-faint tracking-[0.04em] uppercase border border-rule/70 px-1.5 py-0.5 rounded-[3px] inline-block">
                    Undergraduate thesis
                  </span>
                </div>
              ) : null}
            </span>
            <div className="flex items-center gap-2.5 max-md:hidden shrink-0 pt-0.5">
              {project.kind === "Undergraduate thesis" ? (
                <span className="font-mono text-[0.6875rem] text-ink-faint tracking-[0.04em] uppercase border border-rule/70 px-1.5 py-0.5 rounded-[3px] text-right whitespace-nowrap">
                  Undergraduate thesis
                </span>
              ) : null}
              <span
                className="text-ink-faint text-sm transition-all duration-140 group-hover:text-accent group-hover:translate-x-1 opacity-50 group-hover:opacity-100"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
