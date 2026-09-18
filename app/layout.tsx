import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibek Gyawali",
  description:
    "Electronics and Communication Engineering graduate working on embedded control, biomedical instrumentation, and signal processing.",
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
      <body>{children}</body>
    </html>
  );
}
