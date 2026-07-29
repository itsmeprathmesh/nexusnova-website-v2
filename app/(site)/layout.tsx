import { MouseGlow } from "@/components/site/motion";
import { Navbar } from "@/components/site/navbar";
import { LenisProvider } from "@/components/site/lenis-provider";
import { PageTransition } from "@/components/site/page-transition";
import { SitePageSkeleton, WhatsApp } from "@/components/site/sections";
import Link from "next/link";
import { Suspense } from "react";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <MouseGlow />
      <div className="mx-auto max-w-premium px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="device-frame">
          <Navbar />
          <main className="relative z-10">
            <Suspense fallback={<SitePageSkeleton />}>
              <PageTransition>{children}</PageTransition>
            </Suspense>
          </main>
          <footer className="relative z-10 border-t border-white/5 px-6 pb-8 pt-14">
            <div className="mx-auto max-w-premium">
              <div className="grid gap-10 border-b border-white/5 pb-12 lg:grid-cols-[1.35fr_.7fr_.8fr_.9fr]">
                <div className="max-w-sm">
                  <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
                    Nexus<span className="text-ember">Nova</span>
                  </Link>
                  <p className="mt-4 text-sm leading-7 text-white/45">
                    AI engineering studio building custom automation systems, premium websites, and digital products.
                  </p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-white/40">Engineer. Build. Grow.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/30">Explore</p>
                  <div className="mt-4 space-y-2.5">
                    {[["Services","/solutions"],["Industries","/industries"],["Case Studies","/portfolio"],["Insights","/blog"],["About","/about"],["Contact","/contact"]].map(([l,h])=>(
                      <Link key={l} className="block text-sm text-white/45 transition hover:text-ember" href={h}>{l}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/30">Connect</p>
                  <address className="not-italic mt-4 space-y-2 text-sm text-white/45">
                    <p>Nagpur, Maharashtra, India</p>
                    <a className="block transition hover:text-ember" href="mailto:nexeusnovastudio@gmail.com">nexeusnovastudio@gmail.com</a>
                    <p>Replies within 24 hours</p>
                  </address>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/30">Start a project</p>
                  <p className="mt-4 text-sm leading-7 text-white/45">Ready to build? Let&apos;s engineer your system.</p>
                  <Link className="btn-ghost-pill mt-4 inline-flex text-sm" href="/contact">Book a Call</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; 2026 NexusNova Studio.</p>
                <div className="flex gap-4">
                  <Link className="transition hover:text-ember" href="/privacy">Privacy</Link>
                  <Link className="transition hover:text-ember" href="/terms">Terms</Link>
                  <Link className="transition hover:text-ember" href="/admin">Admin</Link>
                </div>
              </div>
            </div>
          </footer>
          <WhatsApp />
        </div>
      </div>
    </LenisProvider>
  );
}
