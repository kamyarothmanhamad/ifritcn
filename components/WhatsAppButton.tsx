"use client";
import { useLocale, useTranslations } from "next-intl";
import { getWhatsAppUrl } from "@/lib/config";
import { IconWhatsApp } from "@/components/icons";

export default function WhatsAppButton() {
  const locale = useLocale();
  const t = useTranslations("whatsapp");
  const url = getWhatsAppUrl(t("defaultMessage"));
  const isRtl = locale === "ar";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 z-50 flex items-center justify-center w-14 h-14
                 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full
                 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40
                 transition-all duration-200 hover:scale-110 active:scale-95"
      style={{ right: isRtl ? "auto" : "1.5rem", left: isRtl ? "1.5rem" : "auto" }}>
      <IconWhatsApp size={24} className="text-white" />
    </a>
  );
}
