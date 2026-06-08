import { getTranslations } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { services, clusterMeta, type ServiceCluster } from "@/data/services";
import { siteConfig } from "@/lib/config";
import { getBaseOgImage } from "@/lib/og";
import { ClusterIcon, ServiceIcon, IconArrowRight } from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const ogImage = getBaseOgImage(locale);
  return {
    title: `Services | ${siteConfig.name}`,
    description: t("subtitle"),
    openGraph: { images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const clusters: ServiceCluster[] = ["find-buy", "protect-ship", "build-grow", "represent-support"];

  return (
    <div className="min-h-screen bg-charcoal">
      <div className="relative pt-32 pb-20 bg-charcoal-light border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-50" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-crimson/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-crimson text-xs font-bold uppercase tracking-[0.35em] mb-3">Ifrit</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-white/40 text-lg max-w-xl">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {clusters.map((id) => {
          const clusterServices = services.filter((s) => s.cluster === id);
          const mk = clusterMeta[id].key as "cluster1"|"cluster2"|"cluster3"|"cluster4";
          return (
            <div key={id}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-9 h-9 rounded-lg bg-crimson/10 flex items-center justify-center flex-shrink-0">
                  <ClusterIcon cluster={id} size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-black text-white uppercase tracking-wide">{t(`${mk}.name`)}</h2>
                  <p className="text-white/35 text-sm">{t(`${mk}.desc`)}</p>
                </div>
                <div className="h-px flex-1 bg-white/5 hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clusterServices.map((s) => (
                  <Link key={s.slug} href={`/${locale}/services/${s.slug}`}
                    className="group relative bg-charcoal-light border border-white/5 hover:border-crimson/30
                               rounded-xl p-6 transition-all duration-300 hover:-translate-y-1
                               hover:shadow-2xl hover:shadow-black/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-crimson/4 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="relative z-10">
                      <div className="mb-4 w-10 h-10 rounded-lg bg-crimson/8 group-hover:bg-crimson/15 flex items-center justify-center transition-colors">
                        <ServiceIcon slug={s.slug} size={20} />
                      </div>
                      <h3 className="font-black text-white text-base mb-2 group-hover:text-crimson transition-colors leading-tight">
                        {locale === "ar" ? s.title.ar : s.title.en}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {locale === "ar" ? s.shortDesc.ar : s.shortDesc.en}
                      </p>
                      <div className="mt-5 flex items-center gap-1.5 text-crimson text-xs font-bold uppercase tracking-wide
                                      opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1 duration-200">
                        Learn more
                        <IconArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
