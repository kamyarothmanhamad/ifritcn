import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/lib/config";
import { getBaseOgImage } from "@/lib/og";
import ContactForm from "@/components/ContactForm";
import { IconWhatsApp, IconMapPin, IconZap, IconGlobe } from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const ogImage = getBaseOgImage(locale);
  return {
    title: `Contact | ${siteConfig.name}`,
    description: t("subtitle"),
    openGraph: { images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const waUrl = getWhatsAppUrl(
    locale === "ar"
      ? "مرحباً عفريت، أودّ الاستفسار عن خدماتكم."
      : "Hi Ifrit, I'd like to get in touch."
  );

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Page hero */}
      <div className="relative pt-32 pb-20 bg-charcoal-light border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-crimson/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-crimson text-xs font-bold uppercase tracking-[0.35em] mb-3">Ifrit</p>
          <h1 className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tight mb-3">{t("title")}</h1>
          <p className="text-white/45 text-xl">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form col */}
          <div className="lg:col-span-3">
            <ContactForm locale={locale} />
          </div>

          {/* Sidebar col */}
          <div className="lg:col-span-2 space-y-5">

            {/* WhatsApp card */}
            <div className="bg-charcoal-light border border-white/5 rounded-xl p-6">
              <p className="text-white/30 text-xs font-bold uppercase tracking-[0.25em] mb-4">{t("orWhatsapp")}</p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full
                           bg-[#25D366]/8 hover:bg-[#25D366]/15 border border-[#25D366]/20 hover:border-[#25D366]/40
                           text-[#25D366] font-semibold py-3.5 px-4 rounded transition-all">
                <IconWhatsApp size={16} />
                {t("whatsappCta")}
              </a>
            </div>

            {/* Info card */}
            <div className="bg-charcoal-light border border-white/5 rounded-xl p-6">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconZap size={14} className="text-crimson" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-0.5">Response Time</p>
                    <p className="text-white/70 text-sm">{t("responseTime")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconMapPin size={14} className="text-crimson" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white/70 text-sm">{t("location")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconGlobe size={14} className="text-crimson" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-0.5">Languages</p>
                    <p className="text-white/70 text-sm">Arabic · English · Chinese</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slogan */}
            <div className="border border-gold/12 bg-gold/3 rounded-xl p-5 text-center">
              <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mb-2">Strong &amp; Trustworthy</p>
              <p className="text-gold font-semibold text-lg" style={{ fontFamily: "Cairo, sans-serif" }}>
                قويّ أمينْ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
