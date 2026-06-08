import Link from "next/link";
import { useLocale } from "next-intl";

interface Props {
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function IfritMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  return (
    <svg width={dim} height={dim} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="6" fill="#A90000"/>
      {/* subtle diagonal speed marks */}
      <line x1="0" y1="24" x2="24" y2="0" stroke="white" strokeWidth="0.6" strokeOpacity="0.12"/>
      <line x1="0" y1="44" x2="44" y2="0" stroke="white" strokeWidth="0.6" strokeOpacity="0.12"/>
      <line x1="0" y1="64" x2="64" y2="0" stroke="white" strokeWidth="0.6" strokeOpacity="0.12"/>
      {/* E letterform — bold geometric */}
      <rect x="18" y="19" width="44" height="7" rx="1" fill="white"/>
      <rect x="18" y="36.5" width="32" height="7" rx="1" fill="white"/>
      <rect x="18" y="54" width="44" height="7" rx="1" fill="white"/>
      <rect x="18" y="19" width="7" height="42" rx="1" fill="white"/>
    </svg>
  );
}

export default function IfritLogo({ size = "md", href }: Props) {
  const locale = useLocale();
  const target = href ?? `/${locale}`;
  const nameSize = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  const arSize   = size === "sm" ? "text-xs" : size === "lg" ? "text-sm" : "text-xs";

  return (
    <Link href={target} className="flex items-center gap-3 group select-none">
      <IfritMark size={size} />
      <div className="flex flex-col leading-none gap-0.5">
        <span className={`font-black text-white tracking-[0.22em] uppercase ${nameSize} group-hover:text-white/90 transition-colors`}>
          IFRIT
        </span>
        <span
          className={`text-gold font-semibold tracking-wider ${arSize}`}
          style={{ fontFamily: "Cairo, sans-serif" }}
        >
          عفريت
        </span>
      </div>
    </Link>
  );
}
