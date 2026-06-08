import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig, getWhatsAppUrl } from "@/lib/config";
import { routing } from "@/i18n/routing";
import { ServiceIcon, IconWhatsApp, IconArrowRight, IconCheck } from "@/components/icons";
import { getServiceOgImage } from "@/lib/og";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const title   = locale === "ar" ? service.title.ar    : service.title.en;
  const desc    = locale === "ar" ? service.shortDesc.ar : service.shortDesc.en;
  const ogImage = getServiceOgImage(slug, locale);
  return {
    title: `${title} in Yiwu, China | ${siteConfig.name}`,
    description: desc,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
      images: [ogImage],
      locale: locale === "ar" ? "ar_AE" : "en_US",
    },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const t  = await getTranslations({ locale, namespace: "services" });
  const tC = await getTranslations({ locale, namespace: "contact" });

  const title   = locale === "ar" ? service.title.ar       : service.title.en;
  const desc    = locale === "ar" ? service.description.ar : service.description.en;
  const bullets = locale === "ar" ? service.bullets.ar     : service.bullets.en;
  const cta     = locale === "ar" ? service.cta.ar         : service.cta.en;
  const waMsg   = locale === "ar" ? service.whatsappMsg.ar : service.whatsappMsg.en;
  const waUrl   = getWhatsAppUrl(waMsg);
  const related = services.filter((s) => s.cluster === service.cluster && s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero band */}
      <div className="relative pt-32 pb-16 bg-charcoal-light border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-40" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-crimson/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/25 text-xs mb-8 flex-wrap">
            <Link href={`/${locale}`} className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/services`} className="hover:text-white/60 transition-colors">{t("title")}</Link>
            <span>/</span>
            <span className="text-white/50">{title}</span>
          </nav>
          <div className="mb-5 w-12 h-12 rounded-xl bg-crimson/12 flex items-center justify-center">
            <ServiceIcon slug={service.slug} size={24} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-2xl">{desc}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-charcoal-light border border-white/5 rounded-xl p-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-6">What's Included</h2>
              <ul className="space-y-4">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-crimson/12 border border-crimson/25 flex-shrink-0 flex items-center justify-center">
                      <IconCheck size={10} className="text-crimson" />
                    </span>
                    <span className="text-white/65 text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-4">Related Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {related.map((s) => (
                    <Link key={s.slug} href={`/${locale}/services/${s.slug}`}
                      className="group flex gap-3 items-center border border-white/5 hover:border-crimson/25
                                 bg-charcoal-light rounded-lg p-4 transition-all">
                      <div className="w-7 h-7 rounded-md bg-crimson/8 group-hover:bg-crimson/15 flex items-center justify-center flex-shrink-0 transition-colors">
                        <ServiceIcon slug={s.slug} size={14} />
                      </div>
                      <span className="text-white/55 group-hover:text-white text-xs font-medium transition-colors leading-tight">
                        {locale === "ar" ? s.title.ar : s.title.en}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gradient-to-br from-crimson/10 to-charcoal-light border border-crimson/20 rounded-xl p-6">
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">{cta}</p>
                <div className="space-y-3">
                  <Link href={`/${locale}/contact?service=${service.slug}`}
                    className="flex items-center justify-center gap-2 w-full bg-crimson hover:bg-crimson-light
                               text-white font-bold py-3 rounded uppercase tracking-wide text-xs transition-colors">
                    {t("enquire")}
                    <IconArrowRight size={12} />
                  </Link>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366]/8 hover:bg-[#25D366]/15
                               border border-[#25D366]/25 text-[#25D366] font-semibold py-3 rounded transition-colors text-xs">
                    <IconWhatsApp size={14} />
                    {tC("whatsappCta")}
                  </a>
                </div>
                <p className="text-white/20 text-xs text-center mt-4">{tC("responseTime")}</p>
              </div>
              <Link href={`/${locale}/services`}
                className="flex items-center justify-center gap-2 w-full border border-white/8 hover:border-white/20
                           text-white/35 hover:text-white/70 py-3 rounded text-xs font-medium transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6H3M6 3L3 6l3 3"/>
                </svg>
                All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
