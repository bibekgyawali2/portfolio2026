import { identity } from "@/content/profile";
import {
  ArrowUpIcon,
  ExternalLinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

function getFooterLinkIcon(label: string, href: string) {
  const norm = `${label} ${href}`.toLowerCase();
  if (norm.includes("github")) {
    return (
      <GithubIcon className="w-3.5 h-3.5 text-icon-github shrink-0 transition-transform duration-120 group-hover:-translate-y-px" />
    );
  }
  if (norm.includes("linkedin")) {
    return (
      <LinkedinIcon className="w-3.5 h-3.5 text-icon-linkedin shrink-0 transition-transform duration-120 group-hover:-translate-y-px" />
    );
  }
  return (
    <ExternalLinkIcon className="w-3 h-3 text-accent shrink-0 opacity-70 group-hover:opacity-100" />
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-16 sm:mt-20 pt-6 sm:pt-7 flex flex-wrap justify-between items-center gap-x-6 gap-y-3 font-mono text-[0.8125rem] text-ink-faint print:hidden">
      <p className="m-0 flex items-center gap-1.5">
        <MapPinIcon className="w-3.5 h-3.5 text-icon-location shrink-0" />
        <span>{identity.location}</span>
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 m-0 p-0 list-none">
          <li>
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center gap-1.5 text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent group"
            >
              <MailIcon className="w-3.5 h-3.5 text-icon-email shrink-0 transition-transform duration-120 group-hover:-translate-y-px" />
              <span>{identity.email}</span>
            </a>
          </li>
          {identity.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent group"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getFooterLinkIcon(link.label, link.href)}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="opacity-35 select-none" aria-hidden="true">
          ·
        </span>
        <a
          href="#main-content"
          className="inline-flex items-center gap-1 text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent group"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUpIcon className="w-3 h-3 text-icon-top shrink-0 transition-transform duration-120 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </a>
      </div>
    </footer>
  );
}
