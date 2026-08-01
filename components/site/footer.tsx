import Link from "next/link";
import { footerExploreLinks } from "@/lib/nav-links";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 pb-6 pt-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.35fr_0.7fr_0.8fr_0.9fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-white/65"
            >
              <span className="text-blue/50">&gt;</span>
              _nexusnova
            </Link>
            <p className="mt-4 font-mono text-xs leading-6 text-white/55">
              AI engineering studio. Custom automation systems, premium
              websites, and internal tools for businesses across India.
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/15">
              <span className="text-blue/30">&gt;</span> Engineer. Build. Scale.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
              &gt; _explore
            </p>
            <div className="mt-4 space-y-2">
              {footerExploreLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  className="block font-mono text-xs text-white/55 transition hover:text-white"
                  href={href}
                >
                  &gt; {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
              &gt; _connect
            </p>
            <address className="not-italic mt-4 space-y-2 font-mono text-xs text-white/55">
              <p>Nagpur, Maharashtra, India</p>
              <a
                className="block transition hover:text-white"
                href="mailto:nexeusnovastudio@gmail.com"
              >
                nexeusnovastudio@gmail.com
              </a>
            </address>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
              &gt; _start
            </p>
            <p className="mt-4 font-mono text-xs text-white/55">
              Ready to build? Let&apos;s talk.
            </p>
            <Link
              className="inline-flex font-mono text-xs text-blue/50 underline underline-offset-4 transition hover:text-blue"
              href="/contact"
            >
              &gt; Book a Call
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/[0.04] pb-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] text-white/45">
            <span className="text-blue/30">&gt;</span> &copy; 2026 NexusNova Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              SYSTEM ONLINE
            </span>
            <span className="text-white/40">|</span>
            <Link className="font-mono text-[10px] text-white/45 transition hover:text-white" href="/privacy">
              _privacy
            </Link>
            <Link className="font-mono text-[10px] text-white/45 transition hover:text-white" href="/terms">
              _terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
