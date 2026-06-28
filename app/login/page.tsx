import Link from "next/link";
import { Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 hero-overlay pointer-events-none" />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">Bulls<span className="text-blue-400">AI</span></span>
          </Link>
          <h1 className="text-2xl font-black text-center">Welcome back</h1>
          <p className="text-sm text-slate-400 mt-2 text-center">Sign in to your BullsAI account</p>
        </div>

        <div className="glass rounded-2xl p-8 space-y-4">
          {/* Microsoft SSO (Azure SWA built-in auth) */}
          <a
            href="/.auth/login/aad?post_login_redirect_uri=/dashboard"
            className="flex items-center justify-center gap-3 w-full bg-white text-black font-semibold py-3 rounded-xl text-sm hover:bg-slate-100 transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" viewBox="0 0 23 23" fill="none">
              <path fill="#f25022" d="M0 0h11v11H0z" />
              <path fill="#00a4ef" d="M12 0h11v11H12z" />
              <path fill="#7fba00" d="M0 12h11v11H0z" />
              <path fill="#ffb900" d="M12 12h11v11H12z" />
            </svg>
            Continue with Microsoft
          </a>

          <a
            href="/.auth/login/github?post_login_redirect_uri=/dashboard"
            className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Continue with GitHub
          </a>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
            <div className="relative flex justify-center text-xs text-slate-500 bg-transparent">
              <span className="px-3 bg-surface-100">or continue with email</span>
            </div>
          </div>

          <form action="/.auth/login/email" method="POST" className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-400">Password</label>
                <a href="#forgot" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot?</a>
              </div>
              <input
                type="password"
                name="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              Sign in
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          No account yet?{" "}
          <Link href="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
}
