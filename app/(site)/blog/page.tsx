import { supabaseAdmin } from "@/lib/supabase/server";
import { demoPosts } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "AI Automation & Web Development Insights",
  description:
    "Read NexusNova Studio insights on AI automation, website development, CRM systems and local digital growth for Nagpur and Indian businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AI Automation & Web Development Insights | NexusNova Studio",
    description:
      "Guidance for Nagpur and Indian businesses improving websites, automation, CRM systems, and digital growth.",
    url: "/blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Web Development Insights | NexusNova Studio",
    description:
      "Guidance for Nagpur and Indian businesses improving websites, automation, CRM systems, and digital growth.",
    images: ["/opengraph-image"],
  },
};
export default async function Blog() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights" },
    ],
  };
  let posts: any[] = [];
  if (process.env.NEXT_PHASE !== "phase-production-build") {
    try {
      const { data } = await supabaseAdmin()
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false });
      posts = data || [];
    } catch {}
  }
  const items = posts.length ? posts : demoPosts;
  return (
    <section className="content-fade lux-bg noise relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="orb left-0 top-24 h-80 w-80 bg-blue-500/20" />
      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-slate-400"
        >
          <Link className="transition hover:text-violet-300" href="/">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>Insights</span>
        </nav>
        <p className="text-sm uppercase tracking-[.35em] text-fuchsia-300">Blog</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          AI automation and web development insights.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-400">
          Practical guidance on AI solutions, web design, business
          automation, CRM development, and digital transformation in India.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Link
              className="glass-warm rounded-[2rem] p-7 transition hover:-translate-y-2"
              href={`/blog/${p.slug}`}
              key={p.id}
            >
              <p className="text-sm text-violet-300">NexusNova Insights</p>
              <h2 className="mt-4 text-2xl font-black">{p.title}</h2>
              <p className="mt-3 text-slate-400">{p.excerpt}</p>
              <p className="mt-8 font-bold text-blue-300">Read article →</p>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm leading-7 text-slate-400">
          Need an implementation partner? Explore{" "}
          <Link className="text-blue-300 transition hover:text-violet-300" href="/#services">
            NexusNova&apos;s AI and website services
          </Link>{" "}
          or{" "}
          <Link className="text-blue-300 transition hover:text-violet-300" href="/contact">
            discuss a project in Nagpur
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
