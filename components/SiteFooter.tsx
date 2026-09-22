import { identity } from "@/content/profile";
import { MapPinIcon } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-24 pt-7 flex flex-wrap justify-between items-center gap-x-6 gap-y-3 font-mono text-[0.8125rem] text-ink-faint print:hidden">
      <p className="m-0 flex items-center gap-1.5">
        <MapPinIcon className="w-3.5 h-3.5 text-icon-location opacity-85" />
        <span>{identity.location}</span>
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 m-0 p-0 list-none">
          <li>
            <a
              href={`mailto:${identity.email}`}
              className="text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent"
            >
              {identity.email}
            </a>
          </li>
          {identity.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="opacity-35 select-none" aria-hidden="true">
          ·
        </span>
        <a
          href="#main-content"
          className="text-ink-faint no-underline pb-0.5 border-b border-transparent transition-colors duration-140 hover:text-accent hover:border-accent"
          aria-label="Back to top"
        >
          Top ↑
        </a>
      </div>
    </footer>
  );
}
