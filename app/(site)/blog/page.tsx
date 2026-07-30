import { supabaseAdmin } from "@/lib/supabase/server";
import { demoPosts } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/site/breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights — Engineering & Automation",
  description:
    "Read NexusNova insights on AI automation, digital products, website development, and business growth.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Insights | NexusNova",
    description:
      "Practical guidance on AI engineering, automation, and digital products.",
    url: "/blog",
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
    <section className="content-fade relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="glow-orb left-0 top-24 h-80 w-80 bg-blue/20" />
      <div className="relative mx-auto max-w-premium">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
        <span className="label-premium font-mono text-[10px]">_insights()</span>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
          Engineering insights.
        </h1>
        <p className="mt-5 max-w-2xl text-white/50">
          Practical guidance on AI automation, digital products, and building
          systems that scale.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Link
              className="glass-premium-card rounded-5xl p-7 transition hover:-translate-y-1"
              href={`/blog/${p.slug}`}
              key={p.id}
            >
              <p className="text-sm text-blue">NexusNova Insights</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {p.title}
              </h2>
              <p className="mt-3 text-white/50">{p.excerpt}</p>
              <p className="mt-8 font-semibold text-blue">Read article →</p>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm leading-7 text-white/50">
          Need an implementation partner? Explore{" "}
          <Link className="text-blue transition hover:text-purple" href="/solutions">
            our services
          </Link>{" "}
          or{" "}
          <Link className="text-blue transition hover:text-purple" href="/contact">
            book a call
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
