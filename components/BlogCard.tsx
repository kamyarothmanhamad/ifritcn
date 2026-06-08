import Link from "next/link";
import type { Post } from "@/data/posts";
import { categoryMeta } from "@/data/posts";

interface BlogCardProps {
  post: Post;
  locale: string;
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const isAr = locale === "ar";
  const title = isAr ? post.title.ar : post.title.en;
  const excerpt = isAr ? post.excerpt.ar : post.excerpt.en;
  const category = categoryMeta[post.category];
  const categoryLabel = isAr ? category.ar : category.en;
  const readLabel = isAr ? "دقائق قراءة" : "min read";
  const readTime = isAr ? post.readingTime.ar : post.readingTime.en;

  const dateObj = new Date(post.publishedAt);
  const formattedDate = dateObj.toLocaleDateString(
    isAr ? "ar-AE" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group relative bg-charcoal-light border border-white/5 hover:border-crimson/30
                 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1
                 hover:shadow-2xl hover:shadow-black/50 overflow-hidden flex flex-col"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/4 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Category + read time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-crimson text-xs font-bold uppercase tracking-[0.2em]">
            {categoryLabel}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-white/30 text-xs">{readTime} {readLabel}</span>
        </div>

        {/* Title */}
        <h3 className="font-black text-white text-lg leading-snug mb-3 group-hover:text-crimson transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-white/40 text-sm leading-relaxed flex-1">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-white/25 text-xs">{formattedDate}</span>
          <span className="text-crimson text-xs font-bold uppercase tracking-wide
                           opacity-0 group-hover:opacity-100 transition-opacity">
            {isAr ? "اقرأ المزيد ←" : "Read more →"}
          </span>
        </div>
      </div>
    </Link>
  );
}
