import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getSortedPosts, categoryMeta, type PostCategory } from "@/data/posts";
import { siteConfig } from "@/lib/config";
import { getBaseOgImage } from "@/lib/og";
import BlogCard from "@/components/BlogCard";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  const ogImage = getBaseOgImage(locale);

  const title = isAr
    ? `المدونة والرؤى التجارية | ${siteConfig.nameAr}`
    : `Trade Insights & Guides | ${siteConfig.name}`;
  const description = isAr
    ? "أدلة عملية وإرشادات توريد ورؤى تجارية لمستوردي الشرق الأوسط الذين يشترون من الصين."
    : "Practical guides, sourcing tips, and trade insights for Middle East importers buying from China.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImage],
      locale: isAr ? "ar_AE" : "en_US",
    },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { en: "/en/blog", ar: "/ar/blog" },
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const posts = getSortedPosts();

  // Group by category for display
  const categories = Array.from(new Set(posts.map((p) => p.category))) as PostCategory[];

  const heading = isAr ? "المدوّنة" : "Insights";
  const subheading = isAr
    ? "أدلة عملية ونصائح توريد ورؤى تجارية من يوو، الصين."
    : "Practical guides, sourcing tips, and trade insights from Yiwu, China.";
  const allLabel = isAr ? "جميع المقالات" : "All Articles";

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Page hero */}
      <div className="relative pt-32 pb-20 bg-charcoal-light border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-50" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-crimson/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-crimson text-xs font-bold uppercase tracking-[0.35em] mb-3">
            {isAr ? "عفريت" : "Ifrit"}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-white/40 text-lg max-w-xl">{subheading}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* All posts section */}
        <div className="mb-4 flex items-center gap-4">
          <h2 className="text-lg font-black text-white uppercase tracking-wide">
            {allLabel}
          </h2>
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-white/25 text-sm">{posts.length}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>

        {/* Category index */}
        {categories.length > 1 && (
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-lg font-black text-white uppercase tracking-wide">
                {isAr ? "تصفّح حسب الموضوع" : "Browse by Topic"}
              </h2>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const catPosts = posts.filter((p) => p.category === cat);
                const label = isAr ? categoryMeta[cat].ar : categoryMeta[cat].en;
                return (
                  <div
                    key={cat}
                    className="flex items-center gap-2 px-4 py-2 bg-charcoal-light border border-white/8 rounded-lg"
                  >
                    <span className="text-white/60 text-sm font-medium">{label}</span>
                    <span className="text-xs text-white/25 font-bold">{catPosts.length}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
