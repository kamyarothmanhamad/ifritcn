import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPostBySlug, categoryMeta, getSortedPosts } from "@/data/posts";
import { siteConfig, getWhatsAppUrl } from "@/lib/config";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const isAr = locale === "ar";

  const title = isAr
    ? (post.seoTitle?.ar ?? post.title.ar)
    : (post.seoTitle?.en ?? post.title.en);
  const description = isAr
    ? (post.seoDescription?.ar ?? post.excerpt.ar)
    : (post.seoDescription?.en ?? post.excerpt.en);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: isAr ? "ar_AE" : "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        ar: `/ar/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const isAr = locale === "ar";
  const title = isAr ? post.title.ar : post.title.en;
  const body = isAr ? post.body.ar : post.body.en;
  const category = categoryMeta[post.category];
  const categoryLabel = isAr ? category.ar : category.en;
  const readTime = isAr ? post.readingTime.ar : post.readingTime.en;
  const readLabel = isAr ? "دقائق قراءة" : "min read";

  const dateObj = new Date(post.publishedAt);
  const formattedDate = dateObj.toLocaleDateString(
    isAr ? "ar-AE" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // Related posts — same category, excluding this one
  const related = getSortedPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const waMsg = isAr
    ? `مرحباً عفريت، قرأت مقالكم حول "${post.title.ar}" وأودّ الاستفسار عن خدماتكم.`
    : `Hi Ifrit, I read your article on "${post.title.en}" and I'd like to enquire about your services.`;
  const waUrl = getWhatsAppUrl(waMsg);

  const breadcrumbBlog = isAr ? "المدوّنة" : "Blog";
  const backToBlog = isAr ? "← جميع المقالات" : "← All Articles";
  const enquireLabel = isAr ? "استفسر الآن" : "Make an Enquiry";
  const enquireSubLabel = isAr
    ? "نرد خلال 24 ساعة على جميع الاستفسارات."
    : "We respond within 24 hours on all enquiries.";
  const whatsappLabel = isAr ? "راسلنا على واتساب" : "Message on WhatsApp";
  const contactLabel = isAr ? "نموذج التواصل" : "Contact Form";
  const relatedLabel = isAr ? "مقالات ذات صلة" : "Related Articles";
  const servicesLabel = isAr ? "استكشف خدماتنا" : "Explore Our Services";

  // Structured data — Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isAr ? post.title.ar : post.title.en,
    description: isAr ? post.excerpt.ar : post.excerpt.en,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/${locale}/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
    inLanguage: isAr ? "ar" : "en",
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero band */}
      <div className="relative pt-32 pb-16 bg-charcoal-light border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 speed-lines opacity-40" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-crimson/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/25 text-xs mb-8 flex-wrap">
            <Link href={`/${locale}`} className="hover:text-white/60 transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-white/60 transition-colors">
              {breadcrumbBlog}
            </Link>
            <span>/</span>
            <span className="text-white/50 truncate max-w-[200px]">{title}</span>
          </nav>

          {/* Category pill */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-crimson text-xs font-bold uppercase tracking-[0.2em]">
              {categoryLabel}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/30 text-xs">{readTime} {readLabel}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/30 text-xs">{formattedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            {title}
          </h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article body */}
          <div className="lg:col-span-2">
            <div
              className="prose-ifrit"
              dangerouslySetInnerHTML={{ __html: body }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/4 border border-white/8 rounded text-white/35 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Back link */}
            <div className="mt-8">
              <Link
                href={`/${locale}/blog`}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                {backToBlog}
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA card */}
            <div className="bg-charcoal-light border border-white/8 rounded-xl p-6">
              <h3 className="text-white font-black text-base mb-1">{enquireLabel}</h3>
              <p className="text-white/35 text-sm mb-5">{enquireSubLabel}</p>
              <div className="space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366]/10
                             border border-[#25D366]/25 hover:bg-[#25D366]/18 hover:border-[#25D366]/40
                             text-[#25D366] text-xs font-semibold rounded transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.122 1.523 5.86L.057 23.286a.75.75 0 00.92.92l5.333-1.428A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.943 9.943 0 01-5.073-1.387l-.362-.214-3.754 1.005 1.013-3.649-.236-.375A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  {whatsappLabel}
                </a>
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center justify-center w-full py-2.5 bg-crimson
                             hover:bg-crimson-light text-white text-xs font-bold uppercase
                             tracking-wide rounded transition-colors"
                >
                  {contactLabel}
                </Link>
              </div>
            </div>

            {/* Services nudge */}
            <div className="bg-charcoal-light border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-black text-sm mb-4 uppercase tracking-wide">
                {servicesLabel}
              </h3>
              <Link
                href={`/${locale}/services`}
                className="text-crimson text-sm font-semibold hover:underline"
              >
                {isAr ? "جميع خدماتنا ←" : "View all services →"}
              </Link>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/8">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-lg font-black text-white uppercase tracking-wide">
                {relatedLabel}
              </h2>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => {
                const relTitle = isAr ? p.title.ar : p.title.en;
                const relExcerpt = isAr ? p.excerpt.ar : p.excerpt.en;
                const relCat = isAr ? categoryMeta[p.category].ar : categoryMeta[p.category].en;
                return (
                  <Link
                    key={p.slug}
                    href={`/${locale}/blog/${p.slug}`}
                    className="group bg-charcoal-light border border-white/5 hover:border-crimson/30
                               rounded-xl p-5 transition-all duration-200"
                  >
                    <p className="text-crimson text-xs font-bold uppercase tracking-[0.2em] mb-2">
                      {relCat}
                    </p>
                    <h3 className="text-white font-bold text-sm leading-snug group-hover:text-crimson transition-colors mb-2">
                      {relTitle}
                    </h3>
                    <p className="text-white/35 text-xs leading-relaxed line-clamp-2">
                      {relExcerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
