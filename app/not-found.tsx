import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function NotFound() {
  return (
    <article className="py-4">
      <PageHeader
        title="Page not found"
        meta="Error 404"
        lede="The page you requested does not exist or may have been moved."
      />
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-[0.8125rem]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-accent bg-accent-subtle border border-accent-border py-1.5 px-3.5 rounded-full no-underline transition-all duration-140 hover:bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] hover:border-accent hover:-translate-y-px"
        >
          <span aria-hidden="true">←</span>
          <span>Return home</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-ink-soft border border-rule py-1.5 px-3.5 rounded-full no-underline transition-all duration-140 hover:text-accent hover:border-accent hover:-translate-y-px"
        >
          <span>View projects</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
