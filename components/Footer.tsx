import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/config";
import { IfritMark } from "@/components/IfritLogo";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const servicesCols = [services.slice(0, 5), services.slice(5)];

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand col */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <IfritMark size="sm" />
              <div>
                <div className="font-black text-white text-sm tracking-[0.2em] uppercase">IFRIT</div>
                <div className="text-gold text-xs font-medium" style={{ fontFamily: "Cairo, sans-serif" }}>عفريت</div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed mb-4">{siteConfig.slogan} · {siteConfig.sloganAr}</p>
            <p className="text-white/20 text-xs">{siteConfig.location}</p>
          </div>

          {/* Services cols */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {servicesCols.map((col, ci) => (
              <div key={ci}>
                {ci === 0 && (
                  <h4 className="text-white/25 text-xs font-bold uppercase tracking-[0.25em] mb-4">{t("services")}</h4>
                )}
                {ci === 1 && <div className="mb-4 h-[1.25rem]" />}
                <div className="space-y-2">
                  {col.map((s) => (
                    <Link key={s.slug} href={`/${locale}/services/${s.slug}`}
                      className="block text-white/40 hover:text-white text-xs transition-colors py-0.5">
                      {locale === "ar" ? s.title.ar : s.title.en}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Company col */}
          <div className="md:col-span-3">
            <h4 className="text-white/25 text-xs font-bold uppercase tracking-[0.25em] mb-4">{t("company")}</h4>
            <div className="space-y-2">
              <Link href={`/${locale}/about`}   className="block text-white/40 hover:text-white text-xs transition-colors py-0.5">{t("about")}</Link>
              <Link href={`/${locale}/blog`}    className="block text-white/40 hover:text-white text-xs transition-colors py-0.5">{nav("blog")}</Link>
              <Link href={`/${locale}/contact`} className="block text-white/40 hover:text-white text-xs transition-colors py-0.5">{t("contact")}</Link>
              <Link href={`/${locale}/services`} className="block text-white/40 hover:text-white text-xs transition-colors py-0.5">{nav("services")}</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© {year} {siteConfig.name}. {t("rights")}</p>
          <p className="text-white/15 text-xs">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
