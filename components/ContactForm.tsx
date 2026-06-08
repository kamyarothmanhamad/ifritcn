"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { IconCheck, IconWhatsApp, IconArrowRight } from "@/components/icons";
import { getWhatsAppUrl } from "@/lib/config";

const SERVICE_KEYS = [
  "sourcing","qc","logistics","consulting","productdev",
  "marketing","aftersales","representation","digital","niche"
] as const;

function ContactFormInner({ locale }: { locale: string }) {
  const t = useTranslations("contact");
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", service: preselected, message: "",
  });
  const [status, setStatus] = useState<"idle"|"submitting"|"success"|"error">("idle");
  const [touched, setTouched] = useState<Record<string,boolean>>({});

  useEffect(() => {
    if (preselected) setForm((f) => ({ ...f, service: preselected }));
  }, [preselected]);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const touch = (k: string) => setTouched((p) => ({ ...p, [k]: true }));

  const errors = {
    name:    !form.name.trim(),
    email:   !form.email.includes("@"),
    message: form.message.trim().length < 10,
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", whatsapp: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const base = "w-full bg-charcoal border rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/25";
  const field = (k: string) =>
    `${base} ${touched[k] && errors[k as keyof typeof errors]
      ? "border-crimson/60 focus:border-crimson"
      : "border-white/10 focus:border-white/30"}`;

  const waUrl = getWhatsAppUrl(
    locale === "ar"
      ? "مرحباً عفريت، أودّ الاستفسار عن خدماتكم."
      : "Hi Ifrit, I'd like to get in touch."
  );

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-500/20 bg-green-950/30 p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-4">
          <IconCheck size={20} className="text-green-400" />
        </div>
        <p className="text-green-400 font-semibold mb-1">{t("success")}</p>
        <p className="text-white/30 text-xs">{t("responseTime")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Row 1: name + whatsapp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
            {t("name")} <span className="text-crimson">*</span>
          </label>
          <input type="text" value={form.name} placeholder="Ahmad Al-Rashidi"
            className={field("name")}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => touch("name")} />
          {touched.name && errors.name && (
            <p className="text-crimson/70 text-xs mt-1">Required</p>
          )}
        </div>
        <div>
          <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
            {t("whatsapp")}
          </label>
          <input type="tel" value={form.whatsapp} placeholder="+964 770 000 0000"
            className={`${base} border-white/10 focus:border-white/30`}
            onChange={(e) => set("whatsapp", e.target.value)} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
          {t("email")} <span className="text-crimson">*</span>
        </label>
        <input type="email" value={form.email} placeholder="you@company.com"
          className={field("email")}
          onChange={(e) => set("email", e.target.value)}
          onBlur={() => touch("email")} />
        {touched.email && errors.email && (
          <p className="text-crimson/70 text-xs mt-1">Enter a valid email address</p>
        )}
      </div>

      {/* Service dropdown */}
      <div>
        <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
          {t("service")}
        </label>
        <select value={form.service} onChange={(e) => set("service", e.target.value)}
          className={`${base} border-white/10 focus:border-white/30 cursor-pointer`}>
          <option value="">{t("selectService")}</option>
          {SERVICE_KEYS.map((k) => (
            <option key={k} value={k}>{t(`allServices.${k}`)}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">
          {t("message")} <span className="text-crimson">*</span>
        </label>
        <textarea rows={5} value={form.message} placeholder={t("messagePlaceholder")}
          className={`${field("message")} resize-none`}
          onChange={(e) => set("message", e.target.value)}
          onBlur={() => touch("message")} />
        {touched.message && errors.message && (
          <p className="text-crimson/70 text-xs mt-1">Please write at least 10 characters</p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-crimson/20 bg-crimson/5 px-4 py-3 text-crimson/80 text-sm">
          {t("error")}
        </div>
      )}

      {/* Submit */}
      <button onClick={handleSubmit} disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-crimson hover:bg-crimson-light
                   disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded
                   uppercase tracking-[0.12em] text-sm transition-all hover:scale-[1.01] active:scale-[0.99]">
        {status === "submitting" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" strokeLinecap="round"/>
            </svg>
            {t("submitting")}
          </>
        ) : (
          <>
            {t("submit")}
            <IconArrowRight size={14} />
          </>
        )}
      </button>

      {/* WhatsApp alternative */}
      <div className="flex items-center gap-3 pt-1">
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-white/20 text-xs">or</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>
      <a href={waUrl} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full border border-[#25D366]/20
                   hover:border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/10
                   text-[#25D366] font-semibold py-3 rounded text-sm transition-all">
        <IconWhatsApp size={16} />
        {t("whatsappCta")}
      </a>
    </div>
  );
}

export default function ContactForm({ locale }: { locale: string }) {
  return (
    <Suspense fallback={
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-12 bg-charcoal-light rounded-lg animate-pulse" />
        ))}
      </div>
    }>
      <ContactFormInner locale={locale} />
    </Suspense>
  );
}
