import { siteConfig } from "@/lib/config";

/**
 * Returns OG image metadata for the layout-level images (home, about, contact, services index).
 */
export function getBaseOgImage(locale: string) {
  const isAr = locale === "ar";
  return {
    url: isAr ? "/brand/og-ar.png" : "/brand/og-en.png",
    width: 1200,
    height: 630,
    alt: isAr
      ? `${siteConfig.nameAr} — ${siteConfig.sloganAr}`
      : `${siteConfig.name} — ${siteConfig.slogan}`,
  };
}

/**
 * Returns OG image metadata for an individual service page.
 * Falls back to the base OG if a per-service image doesn't exist.
 */
export function getServiceOgImage(slug: string, locale: string) {
  const isAr = locale === "ar";
  return {
    url: `/brand/services/og-${slug}.png`,
    width: 1200,
    height: 630,
    alt: isAr
      ? `${siteConfig.nameAr} — ${slug}`
      : `${siteConfig.name} — ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
  };
}
