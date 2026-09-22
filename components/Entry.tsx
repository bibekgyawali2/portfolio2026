import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "./Icons";
import { emphasize } from "./emphasize";

export function Entry({
  when,
  title,
  href,
  where,
  whereHref,
  logo,
  body,
  note,
}: {
  when: string;
  title: string;
  href?: string;
  where?: string;
  whereHref?: string;
  logo?: string;
  body?: string[];
  note?: string;
}) {
  return (
    <article className="grid grid-cols-[10.5rem_1fr] gap-x-7 mb-8 sm:mb-9 last:mb-0 sm:last:mb-0 max-sm:grid-cols-1 max-sm:gap-x-0 print:break-inside-avoid">
      <p className="m-0 pt-1 max-sm:pt-0 max-sm:mb-1.5 font-mono text-[0.8125rem] font-medium text-ink-faint tabular-nums leading-[1.4] tracking-[-0.01em]">
        {when}
      </p>
      <div>
        <div className="flex items-start gap-3">
          {logo ? (
            <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-140 hover:scale-105">
              <Image
                src={logo}
                alt=""
                width={32}
                height={32}
                className="w-7 h-7 object-contain"
              />
            </div>
          ) : null}
          <div className="min-w-0 flex-1">
            <h3 className="m-0 text-[1rem] font-semibold tracking-[-0.02em] leading-[1.35] text-ink">
              {href ? (
                <Link
                  href={href}
                  className="text-inherit no-underline border-b border-accent-border transition-colors duration-140 hover:text-accent hover:border-accent"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            {where ? (
              <p className="mt-1 mb-0 text-ink-soft text-[0.875rem] leading-[1.45] tracking-[-0.005em]">
                {whereHref ? (
                  <a
                    href={whereHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit no-underline border-b border-rule hover:border-accent hover:text-accent transition-colors duration-140 inline-flex items-center gap-1 group/where"
                  >
                    <span>{where}</span>
                    <ExternalLinkIcon className="w-2.5 h-2.5 opacity-40 group-hover/where:opacity-100 group-hover/where:text-accent transition-all" />
                  </a>
                ) : (
                  where
                )}
              </p>
            ) : null}
          </div>
        </div>
        {body?.length ? (
          <ul className="mt-2.5 mb-0 p-0 list-none text-ink-soft text-[0.9375rem] leading-[1.62] tracking-[-0.008em]">
            {body.map((line, i) => (
              <li
                key={i}
                className="relative pl-4.5 mb-2 last:mb-0 text-pretty before:content-[''] before:absolute before:left-0 before:top-[0.72em] before:w-1.5 before:h-[1.5px] before:rounded-[1px] before:bg-accent before:opacity-60"
              >
                {emphasize(line)}
              </li>
            ))}
          </ul>
        ) : null}
        {note ? (
          <p className="mt-2.5 mb-0 text-[0.8125rem] leading-[1.5] text-ink-faint font-mono">
            {note}
          </p>
        ) : null}
      </div>
    </article>
  );
}
