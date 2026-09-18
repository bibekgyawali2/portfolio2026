"use client";

import { useState } from "react";
import styles from "./CvActions.module.css";

export function CvActions({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <aside className={styles.toolbar} aria-label="CV actions">
      <button
        type="button"
        onClick={handlePrint}
        className={styles.actionButton}
        title="Print or export CV to PDF (Cmd+P / Ctrl+P)"
      >
        <svg
          className={styles.icon}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        <span>Print / Save PDF</span>
        <kbd className={styles.kbd}>⌘P</kbd>
      </button>

      <button
        type="button"
        onClick={handleCopyEmail}
        className={`${styles.actionButton} ${copied ? styles.copiedBadge : ""}`}
        title="Copy email to clipboard"
      >
        {copied ? (
          <>
            <svg
              className={styles.icon}
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Email Copied!</span>
          </>
        ) : (
          <>
            <svg
              className={styles.icon}
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>Copy Email</span>
          </>
        )}
      </button>
    </aside>
  );
}
