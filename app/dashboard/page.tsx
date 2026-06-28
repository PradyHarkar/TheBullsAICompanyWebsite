import Link from "next/link";
import { ArrowRight, Database, Shield, BarChart3, Network, Layers, Zap } from "lucide-react";
import { products } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database, Shield, BarChart3, Network, Layers, Zap,
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-3xl font-black mb-2">Welcome to BullsAI</h1>
          <p className="text-slate-400">Your enterprise AI platform is ready. Explore your products below.</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active products", value: "0", note: "6 available" },
            { label: "Data pipelines", value: "0", note: "Connect your Azure" },
            { label: "AI agents running", value: "0", note: "Deploy from Canvas" },
            { label: "Alerts", value: "0", note: "All clear" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5">
              <div className="text-2xl font-black mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.note}</div>
            </div>
          ))}
        </div>

        {/* Products */}
        <h2 className="text-lg font-bold mb-5">Your products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {products.map((product) => {
            const Icon = iconMap[product.icon] || Zap;
            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group glass rounded-xl p-5 glow-hover transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4"
              >
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold mb-0.5 group-hover:text-blue-400 transition-colors truncate">{product.name}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{product.tagline}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-all" />
              </Link>
            );
          })}
        </div>

        {/* Getting started */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-lg font-bold mb-6">Get started in 3 steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Connect your Azure", body: "Link your BullsAI-Dev or Prod subscription to start ingesting data and deploying agents.", cta: "Connect Azure", href: "/contact" },
              { step: "02", title: "Deploy your first pipeline", body: "Use BullsAI Data Fabric to land your first dataset in the medallion lakehouse — bronze to gold in minutes.", cta: "Explore Data Fabric", href: "/products/data-fabric" },
              { step: "03", title: "Monitor and learn", body: "BullsAI Sentinel and Probe watch your environment overnight and surface insights each morning.", cta: "View Sentinel", href: "/products/sentinel" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-black text-white/5 mb-4">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.body}</p>
                <Link href={item.href} className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  {item.cta} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
