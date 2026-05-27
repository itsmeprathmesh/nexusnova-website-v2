import { MouseGlow, OrbGridBackground } from "@/components/site/motion";
import { Navbar } from "@/components/site/navbar";
import { SitePageSkeleton, WhatsApp } from "@/components/site/sections";
import Link from "next/link";
import { Suspense } from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrbGridBackground className="fixed opacity-50 [mask-image:linear-gradient(to_bottom,black_0%,black_44%,transparent_100%)]" />
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={<SitePageSkeleton />}>{children}</Suspense>
      </main>
      <footer className="relative z-10 border-t border-white/10 bg-[#080b13]/95 px-5 pb-8 pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.35fr_.7fr_.8fr_.9fr]">
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-[#F8FAFC]"
              >
                <span className="text-violet-300">NexusNova</span> Studio
              </Link>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Premium website development and AI automation services for
                businesses in Nagpur, Maharashtra and across India.
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-violet-300/75">
                Design. Automate. Grow.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-violet-300">
                Explore
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  className="block text-sm text-slate-400 transition hover:text-violet-300"
                  href="/portfolio"
                >
                  Website & AI case studies
                </Link>
                <Link
                  className="block text-sm text-slate-400 transition hover:text-violet-300"
                  href="/blog"
                >
                  Automation & web insights
                </Link>
                <Link
                  className="block text-sm text-slate-400 transition hover:text-violet-300"
                  href="/#nagpur-ai-agency"
                >
                  AI agency in Nagpur
                </Link>
                <Link
                  className="block text-sm text-slate-400 transition hover:text-violet-300"
                  href="/contact"
                >
                  Contact NexusNova
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-violet-300">
                Connect
              </p>
              <address className="not-italic">
                <p className="mt-5 text-sm text-slate-400">
                  Nagpur, Maharashtra, India
                </p>
                <a
                  className="mt-3 block text-sm text-slate-400 transition hover:text-violet-300"
                  href="mailto:nexeusnovastudio@gmail.com"
                >
                  nexeusnovastudio@gmail.com
                </a>
              </address>
              <p className="mt-3 text-sm text-slate-400">
                Replies within 24 hours
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-violet-300">
                Start a project
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Get a premium website and an AI automation roadmap designed
                around your next stage of growth.
              </p>
              <Link
                className="btn-outline mt-5 inline-flex px-5 py-3 text-sm"
                href="/contact"
              >
                Request an AI strategy consultation
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 NexusNova Studio. Crafted for considered growth.</p>
            <Link className="transition hover:text-violet-300" href="/admin">
              Client administration
            </Link>
          </div>
        </div>
      </footer>
      <WhatsApp />
    </>
  );
}
