import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { getBaseOgImage } from "@/lib/og";
import { IconArrowRight } from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const ogImage = getBaseOgImage(locale);
  return {
    title: `About | ${siteConfig.name}`,
    description: t("subtitle"),
    openGraph: { images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t       = await getTranslations({ locale, namespace: "about" });
  const tOrigin = await getTranslations({ locale, namespace: "origin" });
  const approachItems = t.raw("approachItems") as string[];

  const yiwuStats = [
    { n: "75,000", l: "Market Booths" },
    { n: "5",      l: "Market Zones" },
    { n: "400K+",  l: "Product Categories" },
    { n: "#1",     l: "Global Wholesale Hub" },
  ];

  return (
    <div className="min-h-screen bg-charcoal">

      {/* Page hero */}
      <div className="relative pt-32 pb-20 bg-charcoal-light border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-crimson text-xs font-bold uppercase tracking-[0.35em] mb-3">Ifrit</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tight mb-4">{t("title")}</h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quranic origin */}
        <section className="py-20 border-b border-white/5">
          <div className="text-center">
            <div className="w-8 h-px bg-crimson mx-auto mb-8" />
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white/30 mb-10">{t("storyTitle")}</h2>
            <blockquote className="text-2xl sm:text-3xl text-white/85 leading-relaxed mb-4 font-medium"
                        style={{ fontFamily: "Cairo, sans-serif" }} dir="rtl">
              &ldquo; {tOrigin("quote")} &rdquo;
            </blockquote>
            <cite className="text-white/30 text-sm not-italic mb-10 block">{tOrigin("quoteSource")}</cite>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">{t("storyBody")}</p>
          </div>
        </section>

        {/* Why Yiwu */}
        <section className="py-16 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-black text-white mb-4">{t("yiwuTitle")}</h2>
              <p className="text-white/55 leading-relaxed">{t("yiwuBody")}</p>
            </div>
            <div className="bg-charcoal-light border border-white/5 rounded-xl p-6 grid grid-cols-2 gap-4">
              {yiwuStats.map((s) => (
                <div key={s.l} className="text-center py-2">
                  <div className="text-crimson font-black text-2xl">{s.n}</div>
                  <div className="text-white/40 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 border-b border-white/5">
          <h2 className="text-2xl font-black text-white mb-4">{t("missionTitle")}</h2>
          <p className="text-white/55 text-lg leading-relaxed">{t("missionBody")}</p>
        </section>

        {/* How we work */}
        <section className="py-16">
          <h2 className="text-2xl font-black text-white mb-8">{t("approachTitle")}</h2>
          <div className="space-y-3">
            {approachItems.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-charcoal-light border border-white/5 rounded-lg">
                <span className="w-6 h-6 bg-crimson/12 border border-crimson/20 rounded flex items-center justify-center text-crimson text-xs font-black flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-white/65 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="pb-20 text-center">
          <Link href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-light
                       text-white font-bold px-8 py-4 rounded uppercase tracking-wide transition-all hover:scale-105">
            Get in Touch
            <IconArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
