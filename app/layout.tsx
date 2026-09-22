import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Page } from "@/components/Page";
import { StructuredData } from "@/components/StructuredData";
import { identity } from "@/content/profile";
import { rootSchemaGraph, site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${identity.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: identity.name,
  authors: [{ name: identity.name, url: site.url }],
  creator: identity.name,
  publisher: identity.name,
  category: "technology",
  classification: "Engineering Portfolio & Academic CV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: { canonical: site.url },
  openGraph: {
    type: "profile",
    firstName: "Bibek",
    lastName: "Gyawali",
    gender: "male",
    username: "bibekgyawali2",
    siteName: identity.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: site.locale,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${identity.name} | Electronics Engineer, Kathmandu`,
        type: "image/png",
      },
    ],
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
};

// Applies stored theme or defaults to device preference before first paint.
const restoreTheme = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t?t:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          id="theme-restore"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: restoreTheme }}
        />
        <StructuredData data={rootSchemaGraph} />
        <Page>{children}</Page>
      </body>
    </html>
  );
}
