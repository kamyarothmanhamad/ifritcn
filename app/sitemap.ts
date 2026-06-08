import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const locales = ["en", "ar"];
  const staticRoutes = ["", "/services", "/blog", "/about", "/contact"];

  const staticPages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${route}`])),
      },
    }))
  );

  const servicePages = locales.flatMap((locale) =>
    services.map((s) => ({
      url: `${base}/${locale}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const blogPages = locales.flatMap((locale) =>
    posts.map((p) => ({
      url: `${base}/${locale}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.75,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}/blog/${p.slug}`])),
      },
    }))
  );

  return [...staticPages, ...servicePages, ...blogPages];
}
