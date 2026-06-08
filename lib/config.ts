export const siteConfig = {
  name: "Ifrit",
  nameAr: "عفريت",
  slogan: "Strong & Trustworthy",
  sloganAr: "قويّ أمينْ",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ifrit.co",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8613000000000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@ifrit.co",
  location: "Yiwu, Zhejiang, China",
  responseTime: "24h",
};

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
