"use client";

import { motion } from "motion/react";
import {
  GithubIcon,
  GooglePlayIcon,
  ExternalLinkIcon,
  ArrowUpRightIcon,
} from "./Icons";

export type ActionIconType = "github" | "playstore" | "demo" | "external";

export function ProjectActionLink({
  href,
  label,
  iconType,
}: {
  href: string;
  label: string;
  iconType?: ActionIconType;
}) {
  const type: ActionIconType =
    iconType ||
    (href.includes("github.com")
      ? "github"
      : href.includes("play.google.com")
      ? "playstore"
      : "demo");

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.14 }}
      className="group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-md border border-rule bg-paper text-ink font-sans text-[0.8125rem] font-medium leading-none no-underline transition-colors duration-140 hover:border-ink/35 hover:bg-accent-subtle/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 shadow-2xs hover:shadow-xs"
    >
      <span className="shrink-0 text-ink-faint transition-colors duration-140 group-hover:text-accent flex items-center justify-center">
        {type === "github" && <GithubIcon className="w-4 h-4" />}
        {type === "playstore" && <GooglePlayIcon className="w-3.5 h-3.5" />}
        {type !== "github" && type !== "playstore" && (
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        )}
      </span>
      <span className="tracking-[-0.01em]">{label}</span>
      <span
        aria-hidden="true"
        className="shrink-0 text-ink-faint opacity-50 transition-all duration-140 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center"
      >
        <ArrowUpRightIcon className="w-3 h-3" />
      </span>
    </motion.a>
  );
}
