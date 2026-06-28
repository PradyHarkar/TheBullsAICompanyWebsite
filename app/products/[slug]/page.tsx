import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Database, Shield, BarChart3, Network, Layers, Zap } from "lucide-react";
import { products } from "@/lib/data";
import type { Metadata } from "next";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, Shield, BarChart3, Network, Layers, Zap,
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return { title: product.name, description: product.tagline };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const Icon = iconMap[product.icon] || Zap;
  const otherProducts = products.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Hero */}
      <div className="relative border-b border-white/5 pb-20">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>

          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-xl`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
                {product.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">{product.name}</h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 group"
                >
                  Get started free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
                >
                  Talk to sales
                </Link>
              </div>
            </div>

            {/* Feature list */}
            <div className="mt-12 lg:mt-0 glass rounded-2xl p-8">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Key capabilities</h3>
              <ul className="space-y-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <h2 className="text-2xl font-black mb-8">Explore more products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((p) => {
            const OtherIcon = iconMap[p.icon] || Zap;
            return (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group glass rounded-xl p-5 glow-hover transition-all duration-300 hover:-translate-y-0.5">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-3`}>
                  <OtherIcon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-bold mb-1 group-hover:text-blue-400 transition-colors">{p.name}</h3>
                <p className="text-xs text-slate-400">{p.tagline}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
