import Image from "next/image";
import { ExternalLinkIcon } from "./Icons";

export type Certification = {
  title: string;
  issuer: string;
  year?: string;
  logo: string;
  href?: string;
};

export function CertificationCard({ cert }: { cert: Certification }) {
  const card = (
    <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-xl border border-rule transition-all duration-140 hover:border-accent/40 hover:bg-accent-subtle/30 active:scale-[0.995] group">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-12 h-12 rounded-lg border border-rule/80 bg-white dark:bg-zinc-900 flex items-center justify-center p-2 shrink-0 shadow-xs">
          <Image
            src={cert.logo}
            alt={`${cert.issuer} logo`}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="min-w-0">
          <h3 className="m-0 text-[0.9375rem] font-semibold tracking-[-0.015em] leading-snug text-ink transition-colors duration-140 group-hover:text-accent">
            {cert.title}
          </h3>
          <p className="mt-1 mb-0 text-[0.8125rem] text-ink-faint tracking-[-0.005em] flex items-center gap-2">
            <span>{cert.issuer}</span>
            {cert.year ? (
              <>
                <span className="opacity-40 select-none" aria-hidden="true">
                  ·
                </span>
                <span className="font-mono text-[0.75rem] tabular-nums">
                  {cert.year}
                </span>
              </>
            ) : null}
          </p>
        </div>
      </div>

      {cert.href ? (
        <div className="shrink-0 pl-2 text-ink-faint transition-all duration-140 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-60 group-hover:opacity-100">
          <ExternalLinkIcon className="w-4 h-4" />
        </div>
      ) : null}
    </div>
  );

  if (cert.href) {
    return (
      <a
        href={cert.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {card}
      </a>
    );
  }

  return card;
}
