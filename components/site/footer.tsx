import Link from "next/link";
import { footerExploreLinks } from "@/lib/nav-links";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 pb-8 pt-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.35fr_0.7fr_0.8fr_0.9fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white"
            >
              Nexus<span className="text-white/60">Nova</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-white/45">
              AI engineering studio building custom automation systems, premium
              websites, and digital products for healthcare.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
              Engineer. Build. Scale.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/30">
              Explore
            </p>
            <div className="mt-4 space-y-2.5">
              {footerExploreLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  className="block text-sm text-white/45 transition hover:text-white"
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/30">
              Connect
            </p>
            <address className="not-italic mt-4 space-y-2 text-sm text-white/45">
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
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/30">
              Start a project
            </p>
            <p className="mt-4 text-sm leading-7 text-white/45">
              Ready to build? Let&apos;s talk.
            </p>
            <Link
              className="inline-flex text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
              href="/contact"
            >
              Book a Call
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/[0.04] pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 NexusNova Studio.</p>
          <div className="flex gap-4">
            <Link className="transition hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-white" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
