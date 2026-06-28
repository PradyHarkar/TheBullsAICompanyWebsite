"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const offices = [
  { city: "Sydney", address: "Level 25, 1 Bligh Street, Sydney NSW 2000", flag: "🇦🇺" },
  { city: "Singapore", address: "1 Raffles Place, #50-01 One Raffles Place, Singapore 048616", flag: "🇸🇬" },
  { city: "London", address: "33 Cannon Street, London EC4M 5SB, United Kingdom", flag: "🇬🇧" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", company: "", phone: "", subject: "", message: "", consent: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Header */}
      <div className="relative border-b border-white/5 pb-16">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 hero-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">Get in touch</p>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Let&apos;s <span className="gradient-text">build together</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you&apos;re ready to deploy or just exploring, our team responds within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">Message sent!</h3>
                  <p className="text-slate-400">We&apos;ll be in touch within one business day. Check your inbox for a confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Full name *</label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Prady Harkar"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Work email *</label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Company</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="+61 400 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Subject *</label>
                    <select
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="" className="bg-black">Select a topic</option>
                      <option value="sales" className="bg-black">Sales inquiry</option>
                      <option value="demo" className="bg-black">Request a demo</option>
                      <option value="support" className="bg-black">Technical support</option>
                      <option value="partnership" className="bg-black">Partnership</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your use case, data scale, and timeline..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      required
                      type="checkbox"
                      id="consent"
                      checked={formState.consent}
                      onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/5 accent-blue-600 flex-shrink-0"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-400 leading-relaxed">
                      I agree to TheBullsAICompany contacting me with relevant information. I can unsubscribe at any time. See our <a href="#privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 group"
                  >
                    {status === "loading" ? "Sending…" : (
                      <>Send message <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 mt-8 lg:mt-0 space-y-6">
            {/* Contact methods */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold mb-5">Other ways to reach us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <a href="mailto:hello@thebullsaicompany.com" className="text-sm text-white hover:text-blue-400 transition-colors">
                      hello@thebullsaicompany.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Sales</div>
                    <a href="tel:+611800000000" className="text-sm text-white hover:text-blue-400 transition-colors">
                      +61 1800 000 000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold mb-5">Our offices</h3>
              <div className="space-y-5">
                {offices.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold mb-0.5">
                        {office.flag} {office.city}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed">{office.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">Fast response</span>
              </div>
              <p className="text-xs text-slate-400">
                Enterprise inquiries are replied to within 4 business hours. General inquiries within 1 business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
