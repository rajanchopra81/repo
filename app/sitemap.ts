import type { MetadataRoute } from "next";

const siteUrl = "https://www.drrajanchopra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/services/brain-health",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/membership", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
    {
      path: "/accessibility",
      priority: 0.2,
      changeFrequency: "yearly" as const,
    },
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
