import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-[120px] font-black leading-none mb-2" style={{ color: "rgba(169,0,0,0.12)" }}>404</div>
        <div className="w-8 h-px bg-crimson mx-auto mb-6" />
        <h1 className="text-2xl font-black text-white uppercase tracking-wide mb-3">Page Not Found</h1>
        <p className="text-white/40 text-sm mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/en"
            className="bg-crimson hover:bg-crimson-light text-white font-bold px-6 py-3 rounded uppercase tracking-wide text-sm transition-colors">
            Back to Home
          </Link>
          <Link href="/en/contact"
            className="border border-white/10 hover:border-white/25 text-white/50 hover:text-white px-6 py-3 rounded text-sm transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
