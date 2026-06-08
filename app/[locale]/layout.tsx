import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/config";
import { getBaseOgImage } from "@/lib/og";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const isAr = locale === "ar";

  return {
    title: {
      default: `${siteConfig.name} | ${siteConfig.slogan}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: t("subheadline"),
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      siteName: siteConfig.name,
      locale: isAr ? "ar_AE" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_AE",
      images: [getBaseOgImage(locale)],
    },
    twitter: {
      card: "summary_large_image",
      images: [getBaseOgImage(locale).url],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ar: "/ar" },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const isAr = locale === "ar";

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/*
          Preload the critical above-the-fold fonts.
          Barlow 900 is used for the hero IFRIT wordmark (LCP element).
          Cairo 700 is used for the Arabic عفريت wordmark.
          All other weights are loaded on first use via the @font-face
          font-display:swap declarations in globals.css.
        */}
        <link
          rel="preload"
          href="/fonts/barlow-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {isAr && (
          <link
            rel="preload"
            href="/fonts/cairo-arabic-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="bg-charcoal text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
