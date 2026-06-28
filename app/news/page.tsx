import Link from "next/link";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { newsArticles } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Industry News",
  description: "Latest news and insights from the world of artificial intelligence and enterprise technology.",
};

const categoryColors: Record<string, string> = {
  "Model Releases": "text-blue-400 bg-blue-400/10",
  "Microsoft": "text-cyan-400 bg-cyan-400/10",
  "Enterprise AI": "text-violet-400 bg-violet-400/10",
  "Industry Trends": "text-emerald-400 bg-emerald-400/10",
  "Regulation": "text-orange-400 bg-orange-400/10",
  "Research": "text-pink-400 bg-pink-400/10",
};

export default function NewsPage() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1);

  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Header */}
      <div className="relative border-b border-white/5 pb-16">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Intelligence Feed</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Latest in <span className="gradient-text">AI</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Curated intelligence from across the AI industry — models, regulation, enterprise adoption, and research.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        {/* Featured article */}
        <div className="glass rounded-2xl p-8 lg:p-12 mb-8 glow-hover transition-all duration-300">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] || "text-blue-400 bg-blue-400/10"}`}>
              {featured.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3 h-3" /> {featured.readTime} read
            </span>
            <span className="text-xs text-slate-500">
              {new Date(featured.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="text-xs text-slate-600 ml-auto">{featured.source}</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">{featured.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-6 max-w-3xl">{featured.summary}</p>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
            Read full article <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <div
              key={article.id}
              className="group glass rounded-2xl p-6 glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category] || "text-blue-400 bg-blue-400/10"}`}>
                  {article.category}
                </span>
              </div>
              <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-blue-400 transition-colors flex-1">
                {article.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">{article.summary}</p>
              <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
                <span>{article.source}</span>
                <span>{new Date(article.date).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black mb-3">Stay ahead of the curve</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Get the most important AI industry developments delivered to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@company.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
