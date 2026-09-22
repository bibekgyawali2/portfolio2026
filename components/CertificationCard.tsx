import Image from "next/image";
import { ExternalLinkIcon } from "./Icons";
import type { Certification } from "@/content/profile";

export type { Certification };

export function CertificationCard({ cert }: { cert: Certification }) {
  const content = (
    <div className="grid grid-cols-[5.5rem_2.25rem_1fr_auto] gap-x-6 items-center py-2.5 px-3 -mx-3 rounded-md transition-all duration-140 hover:bg-accent-subtle/50 active:scale-[0.995] group max-sm:grid-cols-[2.25rem_1fr_auto] max-sm:gap-x-3.5 max-sm:py-2 max-sm:px-2.5 max-sm:-mx-2.5">
      {/* 1. Year */}
      <span className="font-mono text-[0.8125rem] font-medium tracking-[-0.01em] text-ink-faint tabular-nums max-sm:hidden">
        {cert.year}
      </span>

      {/* 2. Logo Mark */}
      <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-transform duration-140 group-hover:scale-105">
        <Image
          src={cert.logo}
          alt={`${cert.issuer} logo`}
          width={32}
          height={32}
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* 3. Title & Issuer */}
      <div className="min-w-0">
        <h3 className="m-0 text-[0.9375rem] font-medium tracking-[-0.015em] leading-[1.35] text-ink transition-colors duration-140 group-hover:text-accent group-hover:underline group-hover:underline-offset-[0.2em] text-pretty">
          {cert.title}
        </h3>
        <p className="mt-0.5 mb-0 text-[0.8125rem] text-ink-faint tracking-[-0.005em] flex items-center gap-2">
          <span>{cert.issuer}</span>
          {cert.year ? (
            <span className="sm:hidden font-mono text-[0.75rem] text-ink-faint tabular-nums">
              · {cert.year}
            </span>
          ) : null}
        </p>
      </div>

      {/* 4. External link indicator */}
      <div className="shrink-0 pl-1">
        {cert.href ? (
          <span
            className="text-ink-faint opacity-40 transition-all duration-140 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block"
            aria-hidden="true"
          >
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span
            className="text-ink-faint opacity-40 transition-all duration-140 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 inline-block"
            aria-hidden="true"
          >
            →
          </span>
        )}
      </div>
    </div>
  );

  return (
    <li className="list-none">
      {cert.href ? (
        <a
          href={cert.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
