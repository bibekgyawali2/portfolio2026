import Image from "next/image";
import { ExternalLinkIcon } from "./Icons";
import type { Certification } from "@/content/profile";

export type { Certification };

export function CertificationCard({ cert }: { cert: Certification }) {
  const inner = (
    <div className="flex items-center justify-between gap-4 min-w-0">
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {cert.logo ? (
          <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-transform duration-140 group-hover:scale-105">
            <Image
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              width={32}
              height={32}
              className="w-7 h-7 object-contain"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
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
      </div>
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
    <li className="list-none mb-3 sm:mb-3.5 last:mb-0">
      <div className="grid grid-cols-[10.5rem_1fr] gap-x-7 items-center group max-sm:grid-cols-1 max-sm:gap-x-0">
        <span className="font-mono text-[0.8125rem] font-medium tracking-[-0.01em] text-ink-faint tabular-nums max-sm:hidden">
          {cert.year}
        </span>
        {cert.href ? (
          <a
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline min-w-0"
          >
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    </li>
  );
}
