import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { services, clusterMeta, type ServiceCluster } from "@/data/services";
import { siteConfig, getWhatsAppUrl } from "@/lib/config";
import { IfritMark } from "@/components/IfritLogo";
import {
  ClusterIcon, TrustIcon,
  IconArrowRight, IconWhatsApp,
} from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: t("subheadline"),
  };
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const waUrl = getWhatsAppUrl(
    locale === "ar"
      ? "مرحباً عفريت، أودّ الاستفسار عن خدماتكم."
      : "Hi Ifrit, I'd like to start sourcing."
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 speed-lines" />
      <div className="absolute top-[30%] left-[55%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2
                      bg-crimson/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-crimson/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-16 inset-x-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        <div className="inline-flex items-center gap-2.5 mb-10 opacity-0 animate-fade-up
                        border border-white/10 bg-white/3 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
          <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.25em]">{t("basedIn")}</span>
        </div>

        <div className="flex justify-center mb-8 opacity-0 animate-fade-up delay-100">
          <div className="relative">
            <IfritMark size="lg" />
            <div className="absolute inset-0 rounded-lg ring-1 ring-crimson/20 scale-125 opacity-50" />
          </div>
        </div>

        <h1 className="opacity-0 animate-fade-up delay-200 font-black uppercase leading-none tracking-[0.15em]
                       text-6xl sm:text-8xl lg:text-[112px] text-white mb-3">
          IFRIT
        </h1>

        <p className="opacity-0 animate-fade-up delay-300 text-gold-shimmer font-bold mb-6
                      text-2xl sm:text-4xl lg:text-5xl"
           style={{ fontFamily: "Cairo, sans-serif" }}>
          عفريت
        </p>

        <div className="opacity-0 animate-fade-up delay-300 flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-crimson/60" />
          <span className="text-white/40 text-xs uppercase tracking-[0.35em] font-semibold">
            {t("tagline")} &nbsp;·&nbsp; {t("taglineAr")}
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-crimson/60" />
        </div>

        <p className="opacity-0 animate-fade-up delay-400 max-w-2xl mx-auto text-white/50
                      text-lg sm:text-xl leading-relaxed mb-12 font-light">
          {t("subheadline")}
        </p>

        <div className="opacity-0 animate-fade-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={`/${locale}/contact`}
            className="group inline-flex items-center gap-2 bg-crimson hover:bg-crimson-light
                       text-white font-bold text-sm px-8 py-4 rounded uppercase tracking-[0.12em]
                       transition-all duration-200 hover:scale-105 active:scale-95
                       shadow-lg shadow-crimson/20 hover:shadow-crimson/40">
            {t("cta")}
            <IconArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href={`/${locale}/services`}
            className="inline-flex items-center gap-2 border border-white/12 hover:border-white/25
                       text-white/60 hover:text-white text-sm font-semibold px-8 py-4 rounded
                       uppercase tracking-[0.12em] transition-all duration-200">
            {t("ctaSecondary")}
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1l5 5 5-5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust band ─────────────────────────────────────────────────── */
function TrustBand() {
  const t = useTranslations("trust");
  const stats = ["stat1", "stat2", "stat3", "stat4"] as const;
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-charcoal-light border-y border-white/5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/5">
          {stats.map((key) => (
            <div key={key} className="flex flex-col items-center text-center lg:px-8 gap-2">
              <TrustIcon stat={key} size={18} />
              <span className="text-crimson font-black text-base leading-tight">{t(`${key}.value`)}</span>
              <span className="text-white/35 text-xs leading-snug max-w-[140px]">{t(`${key}.label`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services grid ──────────────────────────────────────────────── */
function ServicesGrid({ locale }: { locale: string }) {
  const t = useTranslations("services");

  const clusters: ServiceCluster[] = ["find-buy", "protect-ship", "build-grow", "represent-support"];

  return (
    <section className="py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl">
          <p className="text-crimson text-xs font-bold uppercase tracking-[0.35em] mb-3">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-white/40 text-base leading-relaxed">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {clusters.map((id) => {
            const clusterServices = services.filter((s) => s.cluster === id);
            const mk = clusterMeta[id].key as "cluster1"|"cluster2"|"cluster3"|"cluster4";
            return (
              <div key={id}
                className="group relative bg-charcoal-light border border-white/5 hover:border-crimson/25
                           rounded-xl p-6 transition-all duration-300 hover:-translate-y-1
                           hover:shadow-xl hover:shadow-black/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-4 w-9 h-9 rounded-lg bg-crimson/10 flex items-center justify-center">
                    <ClusterIcon cluster={id} size={18} />
                  </div>
                  <h3 className="font-black text-white text-sm uppercase tracking-wide mb-1 group-hover:text-crimson transition-colors">
                    {t(`${mk}.name`)}
                  </h3>
                  <p className="text-white/35 text-xs mb-5 leading-relaxed">{t(`${mk}.desc`)}</p>
                  <div className="space-y-1.5">
                    {clusterServices.map((s) => (
                      <Link key={s.slug} href={`/${locale}/services/${s.slug}`}
                        className="flex items-center gap-2 text-white/45 hover:text-white text-xs transition-colors py-0.5">
                        <span className="w-1 h-1 rounded-full bg-crimson/50 flex-shrink-0" />
                        {locale === "ar" ? s.title.ar : s.title.en}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Link href={`/${locale}/services`}
          className="inline-flex items-center gap-2 border border-white/10 hover:border-crimson/50
                     text-white/50 hover:text-white text-xs font-bold uppercase tracking-[0.2em]
                     px-6 py-3 rounded transition-all duration-200">
          {t("viewAll")}
          <IconArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

/* ─── Quranic origin ──────────────────────────────────────────────── */
function OriginSection() {
  const t = useTranslations("origin");
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-light" />
      <div className="absolute inset-0 bg-gradient-to-b from-crimson/4 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[320px] font-black
                      text-white/[0.012] select-none pointer-events-none leading-none"
           style={{ fontFamily: "Cairo, sans-serif" }} aria-hidden>
        ع
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-10 h-px bg-crimson mx-auto mb-8" />
        <p className="text-white/25 text-xs font-bold uppercase tracking-[0.4em] mb-10">{t("title")}</p>
        <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white/80 leading-[1.8] mb-5 font-medium"
                    style={{ fontFamily: "Cairo, sans-serif" }} dir="rtl">
          &ldquo; {t("quote")} &rdquo;
        </blockquote>
        <cite className="block text-white/25 text-sm not-italic mb-14">{t("quoteSource")}</cite>
        <p className="text-white/45 text-base sm:text-lg leading-relaxed mb-10 font-light">{t("body")}</p>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/20 bg-gold/4">
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span className="text-gold text-base font-semibold" style={{ fontFamily: "Cairo, sans-serif" }}>
            {t("slogan")}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA strip ──────────────────────────────────────────── */
function CtaStrip({ locale }: { locale: string }) {
  const t = useTranslations("contact");
  const waUrl = getWhatsAppUrl(
    locale === "ar"
      ? "مرحباً عفريت، أودّ الاستفسار عن خدماتكم."
      : "Hi Ifrit, I'd like to get a quote."
  );
  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-crimson/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-crimson" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">{t("title")}</h2>
            <p className="text-white/40">{t("subtitle")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-crimson hover:bg-crimson-light
                         text-white font-bold text-sm px-7 py-3.5 rounded uppercase tracking-[0.12em]
                         transition-all hover:scale-105 shadow-lg shadow-crimson/20">
              {t("submit")}
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366]/8 hover:bg-[#25D366]/15
                         border border-[#25D366]/25 text-[#25D366] font-semibold text-sm px-7 py-3.5 rounded transition-all">
              <IconWhatsApp size={16} />
              {t("whatsappCta")}
            </a>
          </div>
        </div>
        <p className="mt-6 text-white/20 text-xs">{t("responseTime")}</p>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <HeroSection locale={locale} />
      <TrustBand />
      <ServicesGrid locale={locale} />
      <OriginSection />
      <CtaStrip locale={locale} />
    </>
  );
}
