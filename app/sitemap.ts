import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();

  return [
    { url: site.url, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
