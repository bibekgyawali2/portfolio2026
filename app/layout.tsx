import type { Metadata } from "next";
import { Page } from "@/components/Page";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bibek Gyawali",
    template: "%s — Bibek Gyawali",
  },
  description:
    "Electronics engineer in Kathmandu working on closed-loop control, biomedical instrumentation and signal processing.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-family='system-ui'>B</text></svg>",
  },
};

// Applies a stored theme before first paint. Light unless dark was chosen.
const restoreTheme = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")==="dark"?"dark":"light"}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
