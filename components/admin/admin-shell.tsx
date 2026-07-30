import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import type { CSSProperties } from "react";

const nav = [
  ["Dashboard", "/admin"],
  ["Leads", "/admin/leads"],
  ["Blog", "/admin/blog"],
  ["Portfolio", "/admin/portfolio"],
  ["Testimonials", "/admin/testimonials"],
  ["Pricing", "/admin/pricing"],
  ["Newsletter", "/admin/newsletter"],
  ["Settings", "/admin/settings"],
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#05070A] font-mono">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/[0.04] bg-[#030508] p-5 md:block">
        <Link href="/" className="text-xs uppercase tracking-[0.12em] text-blue/60">
          <span className="text-blue/40">&gt;</span> _nexusnova/
          <span className="text-white/30">admin</span>
        </Link>
        <div className="mt-6 space-y-1">
          {nav.map(([n, h]) => (
            <Link
              className="flex items-center gap-2 rounded-[3.2px] px-3 py-2 text-xs text-white/40 transition hover:bg-white/[0.03] hover:text-white"
              href={h}
              key={n}
            >
              <span className="text-blue/40">&gt;</span>
              {n}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-6 left-5 right-5 border-t border-white/[0.04] pt-4">
          <p className="text-[9px] uppercase tracking-[0.12em] text-white/15">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue mr-1.5" />
            SYSTEM ONLINE
          </p>
          <p className="mt-1 text-[9px] text-white/10">
            NexusNova Admin v1.0
          </p>
        </div>
      </aside>
      <main className="md:pl-64">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/[0.04] bg-[#05070A]/90 px-6 py-3 backdrop-blur">
          <p className="text-[10px] uppercase tracking-[0.12em] text-white/20">
            <span className="text-blue/50">&gt;</span> _admin_panel
          </p>
          <UserButton />
        </header>
        <div className="p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
}

function AdminSkeletonBlock({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      className={`skeleton rounded-full ${className}`}
      style={{ "--skeleton-delay": `${delay}s` } as CSSProperties}
    />
  );
}

export function AdminContentSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading admin content" role="status">
      <span className="sr-only">Loading administration content</span>
      <AdminSkeletonBlock className="h-5 w-44 rounded" delay={0.04} />
      <AdminSkeletonBlock className="mt-3 h-3 w-56" delay={0.1} />
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="skeleton-glass rounded-[6.4px] border border-white/[0.04] p-6" key={index}>
            <AdminSkeletonBlock className="h-3 w-16" delay={index * 0.07} />
            <AdminSkeletonBlock className="mt-4 h-8 w-12 rounded" delay={index * 0.07 + 0.05} />
          </div>
        ))}
      </div>
      <div className="skeleton-glass mt-8 rounded-[6.4px] border border-white/[0.04] p-6">
        <AdminSkeletonBlock className="h-4 w-32" delay={0.08} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <AdminSkeletonBlock
              className="h-10 w-full rounded-[3.2px]"
              delay={index * 0.06}
              key={index}
            />
          ))}
        </div>
        <AdminSkeletonBlock className="mt-6 h-10 w-28" delay={0.25} />
      </div>
    </div>
  );
}
