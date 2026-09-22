"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Graceful fallback for restricted contexts
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
      title={copied ? "Copied to clipboard!" : "Copy email"}
      className="inline-flex items-center justify-center p-1 rounded text-ink-faint hover:text-accent hover:bg-accent-subtle/80 active:scale-95 transition-all duration-120 cursor-pointer bg-transparent border-0 print:hidden"
    >
      {copied ? (
        <span className="inline-flex items-center gap-1 text-[0.6875rem] font-mono text-accent font-medium">
          <CheckIcon className="w-3 h-3 text-accent" />
          <span>copied</span>
        </span>
      ) : (
        <CopyIcon className="w-3 h-3 opacity-60 hover:opacity-100" />
      )}
    </button>
  );
}
