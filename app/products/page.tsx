import Link from "next/link";
import { ArrowRight, Database, Shield, BarChart3, Network, Layers, Zap } from "lucide-react";
import { products } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the full BullsAI product suite — enterprise AI for data, security, analytics, and automation.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, Shield, BarChart3, Network, Layers, Zap,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5 pb-24">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Products</p>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            The full AI <span className="gradient-text">platform</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Six enterprise-grade products, one Azure-native platform. Pick one, use all — they&apos;re designed to work together.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = iconMap[product.icon] || Zap;
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group glass rounded-2xl p-7 glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-500 mb-1">{product.category}</span>
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h2>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{product.tagline}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-xs font-semibold text-blue-400 mt-auto">
                  Explore product <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 glass rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-black mb-4">Need the full suite?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our enterprise plan bundles all six products with dedicated infrastructure, priority support, and a named solution architect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            Talk to sales <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
