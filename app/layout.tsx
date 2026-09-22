import type { Metadata } from "next";
import { Page } from "@/components/Page";
import { StructuredData } from "@/components/StructuredData";
import { identity } from "@/content/profile";
import { personSchema, site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${identity.name}`,
  },
  description: site.description,
  applicationName: identity.name,
  authors: [{ name: identity.name, url: site.url }],
  creator: identity.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: identity.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: site.locale,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
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
        <StructuredData data={personSchema} />
      </head>
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
