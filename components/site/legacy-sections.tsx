import { MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";

function SkeletonBlock({
  className,
  delay = 0,
  style,
}: {
  className: string;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={`skeleton rounded-full ${className}`}
      style={{ "--skeleton-delay": `${delay}s`, ...style } as CSSProperties}
    />
  );
}

function SkeletonCards({
  count,
  image = false,
  columns = "md:grid-cols-3",
}: {
  count: number;
  image?: boolean;
  columns?: string;
}) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-glass rounded-[2rem] p-5" key={index}>
          {image && (
            <SkeletonBlock
              className="skeleton-media mb-6 h-44 w-full rounded-2xl"
              delay={index * 0.09}
            />
          )}
          <SkeletonBlock className="h-4 w-24" delay={index * 0.09 + 0.04} />
          <SkeletonBlock className="mt-5 h-7 w-4/5" delay={index * 0.09 + 0.07} />
          <SkeletonBlock className="mt-4 h-4 w-full" delay={index * 0.09 + 0.1} />
          <SkeletonBlock className="mt-3 h-4 w-2/3" delay={index * 0.09 + 0.13} />
        </div>
      ))}
    </div>
  );
}

export function SitePageSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading page content"
      className="skeleton-stage px-5 pb-24 pt-36"
      role="status"
    >
      <span className="sr-only">Loading content</span>
      <div className="mx-auto max-w-7xl">
        <SkeletonBlock className="h-4 w-28" delay={0.03} />
        <SkeletonBlock className="mt-7 h-14 max-w-3xl rounded-2xl sm:h-20" delay={0.08} />
        <SkeletonBlock className="mt-5 h-5 max-w-xl" delay={0.14} />
        <div className="mt-12">
          <SkeletonCards count={3} image />
        </div>
      </div>
    </section>
  );
}

export function HomeDataSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading portfolio and plans" role="status">
      <span className="sr-only">Loading portfolio, plans and testimonials</span>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-4 w-32" delay={0.05} />
          <SkeletonBlock className="mt-6 h-14 max-w-3xl rounded-2xl" delay={0.1} />
          <div className="mt-12">
            <SkeletonCards count={3} image />
          </div>
        </div>
      </section>
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SkeletonBlock className="h-12 max-w-3xl rounded-2xl" delay={0.08} />
          <div className="skeleton-glass mt-12 rounded-[2rem] p-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                className="flex gap-5 border-b border-white/5 py-4 last:border-0"
                key={index}
              >
                <SkeletonBlock className="h-4 w-2/5" delay={index * 0.07} />
                <SkeletonBlock className="h-4 w-2/5" delay={index * 0.07 + 0.04} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function AppLoadingSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading NexusNova Studio"
      className="min-h-screen bg-[#0A0D14] px-3 pt-3 sm:px-5 sm:pt-4"
      role="status"
    >
      <span className="sr-only">Loading NexusNova Studio</span>
      <div className="skeleton-glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
        <div className="flex items-center gap-3">
          <SkeletonBlock className="h-10 w-10 rounded-xl" delay={0.02} />
          <SkeletonBlock className="h-5 w-32" delay={0.08} />
        </div>
        <div className="hidden gap-4 sm:flex">
          <SkeletonBlock className="h-4 w-14" delay={0.12} />
          <SkeletonBlock className="h-4 w-14" delay={0.16} />
          <SkeletonBlock className="h-11 w-28" delay={0.2} />
        </div>
        <SkeletonBlock className="h-10 w-10 rounded-xl sm:hidden" delay={0.12} />
      </div>
    </div>
  );
}

export function WhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917558541331";

  return (
    <a
      href={`https://wa.me/${number}`}
      aria-label="Contact NexusNova Studio on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-teal-300/25 bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-teal-600/25 transition hover:shadow-teal-500/30 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <MessageCircle size={17} /> WhatsApp
    </a>
  );
}
