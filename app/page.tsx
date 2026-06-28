import Link from "next/link";
import { ArrowRight, Database, Shield, BarChart3, Network, Layers, Zap, CheckCircle, Star } from "lucide-react";
import { products, newsArticles, stats, testimonials } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, Shield, BarChart3, Network, Layers, Zap,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Now live on Microsoft Azure Marketplace
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
            Intelligence
            <br />
            <span className="gradient-text">at Scale.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Enterprise AI solutions that transform how the world&apos;s leading companies operate,
            innovate, and grow. Built natively on Microsoft Azure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-2xl shadow-blue-600/25 hover:shadow-blue-500/40 group"
            >
              Start for free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              Explore products
            </Link>
          </div>

          {/* Trust logos */}
          <div className="mt-20 pt-12 border-t border-white/5">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-8">
              Trusted by leading enterprises globally
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-30">
              {["Meridian Group", "Apex Healthcare", "Veridian Logistics", "Stratford Capital", "NovaTech", "Cornerstone"].map((name) => (
                <span key={name} className="text-slate-400 font-semibold text-sm tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Products</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
              Every tool your enterprise needs
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A complete AI platform built on Microsoft Azure — from data engineering to intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = iconMap[product.icon] || Zap;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group relative glass rounded-2xl p-6 glow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs font-medium text-slate-500 mb-1">{product.category}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{product.tagline}</p>
                  <div className="mt-4 flex items-center text-xs text-blue-400 font-medium">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why BullsAI */}
      <section className="py-24 bg-surface-50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Why BullsAI</p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                Built for the enterprises that can&apos;t afford to fail
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Every BullsAI product is designed for production from day one. We operate on the same
                Azure infrastructure as the world&apos;s most regulated industries — and our agents run overnight
                so your team wakes up to answers, not incidents.
              </p>
              <div className="space-y-4">
                {[
                  "99.9% uptime SLA backed by Azure",
                  "End-to-end encryption and zero secrets in code",
                  "Full audit trail on every agent action",
                  "GDPR, ISO 27001, and SOC 2 ready",
                  "Dedicated enterprise support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                Talk to sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature grid */}
            <div className="mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Overnight Watch", body: "Agents monitor production while you sleep and recover automatically from known failure patterns.", icon: "🌙" },
                { title: "Zero-secret Policy", body: "Credentials never touch code or wikis. Key Vault and managed identities are enforced at the architecture level.", icon: "🔐" },
                { title: "Medallion Architecture", body: "Bronze → Silver → Gold data layers built into every pipeline, with lineage and quality scores at each stage.", icon: "🏅" },
                { title: "Multi-agent Orchestration", body: "Jupiter coordinates a fleet of specialised agents so each task is handled by the system best equipped for it.", icon: "🧠" },
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-5">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">What our clients say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest AI News */}
      <section className="py-24 bg-surface-50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Industry News</p>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight">Latest in AI</h2>
            </div>
            <Link href="/news" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                href="/news"
                className="group glass rounded-2xl p-5 glow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.readTime} read</span>
                </div>
                <h3 className="text-sm font-bold leading-snug mb-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{article.summary.slice(0, 120)}…</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{article.source}</span>
                  <span>{new Date(article.date).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cta-gradient opacity-10 pointer-events-none" />
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
            Ready to build the future?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join 500+ enterprises already running BullsAI. Start free, scale to enterprise — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl text-base hover:bg-slate-100 transition-all duration-200 shadow-2xl"
            >
              Start for free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
