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
    <div className="min-h-screen bg-[#0A0D14]">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/10 p-5 md:block">
        <Link href="/" className="font-semibold">
          NexusNova Admin
        </Link>
        <nav className="mt-8 space-y-2">
          {nav.map(([n, h]) => (
            <Link
              className="block rounded-2xl px-4 py-3 text-sm text-white/65 hover:bg-white/10 hover:text-white"
              href={h}
              key={n}
            >
              {n}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="md:pl-64">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#0A0D14]/80 px-6 py-4 backdrop-blur">
          <p className="text-sm text-white/50">Admin Panel</p>
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
      <AdminSkeletonBlock className="h-9 w-52 rounded-xl" delay={0.04} />
      <AdminSkeletonBlock className="mt-4 h-4 w-72" delay={0.1} />
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="skeleton-glass rounded-3xl p-6" key={index}>
            <AdminSkeletonBlock className="h-4 w-20" delay={index * 0.07} />
            <AdminSkeletonBlock className="mt-4 h-10 w-16 rounded-xl" delay={index * 0.07 + 0.05} />
          </div>
        ))}
      </div>
      <div className="skeleton-glass mt-8 rounded-3xl p-6">
        <AdminSkeletonBlock className="h-6 w-40" delay={0.08} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <AdminSkeletonBlock
              className="h-12 w-full rounded-2xl"
              delay={index * 0.06}
              key={index}
            />
          ))}
        </div>
        <AdminSkeletonBlock className="mt-6 h-12 w-36" delay={0.25} />
      </div>
    </div>
  );
}
