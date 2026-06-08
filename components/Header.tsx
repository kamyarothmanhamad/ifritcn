"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/config";
import IfritLogo from "@/components/IfritLogo";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const otherLocale = locale === "en" ? "ar" : "en";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const whatsappUrl = getWhatsAppUrl(
    locale === "ar"
      ? "مرحباً عفريت، أودّ الاستفسار عن خدماتكم."
      : "Hi Ifrit, I found your website and I'd like to enquire."
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/98 backdrop-blur-md border-b border-white/8 shadow-xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          <IfritLogo size="sm" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-crimson" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href={switchPath}
              className="h-8 px-3 flex items-center text-xs font-bold text-white/40 hover:text-white/80 uppercase tracking-widest border border-white/8 hover:border-white/20 rounded transition-all"
            >
              {locale === "en" ? "عر" : "EN"}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 px-3 flex items-center gap-1.5 rounded bg-[#25D366]/8 hover:bg-[#25D366]/15 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] text-xs font-semibold transition-all"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.122 1.523 5.86L.057 23.286a.75.75 0 00.92.92l5.333-1.428A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.943 9.943 0 01-5.073-1.387l-.362-.214-3.754 1.005 1.013-3.649-.236-.375A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              {t("whatsapp")}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="h-8 px-4 flex items-center bg-crimson hover:bg-crimson-light text-white text-xs font-bold uppercase tracking-wide rounded transition-colors"
            >
              {t("getQuote")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M4 4L16 16M4 16L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-charcoal/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-white bg-white/5" : "text-white/60 hover:text-white hover:bg-white/4"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/5 flex gap-2">
              <Link href={switchPath} onClick={() => setOpen(false)}
                className="flex-none px-3 py-2 text-xs font-bold text-white/50 border border-white/10 rounded">
                {locale === "en" ? "عربي" : "English"}
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] text-xs font-semibold rounded">
                {t("whatsapp")}
              </a>
              <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}
                className="flex-1 text-center py-2 bg-crimson text-white text-xs font-bold uppercase tracking-wide rounded">
                {t("getQuote")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
