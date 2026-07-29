import { supabaseAdmin } from "@/lib/supabase/server";
import { demoPosts } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Healthcare Automation Insights",
  description:
    "Read NexusNova Studio insights on healthcare automation, patient intake systems, appointment management, and lead CRM for clinics.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Healthcare Automation Insights | NexusNova Studio",
    description:
      "Practical guidance on clinic automation, patient communication, and healthcare operations.",
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
    <section className="content-fade lux-bg noise relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="orb left-0 top-24 h-80 w-80 bg-teal-500/20" />
      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-slate-400"
        >
          <Link className="transition hover:text-teal-300" href="/">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>Insights</span>
        </nav>
        <p className="eyebrow eyebrow-health">Blog</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          Healthcare automation insights.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-400">
          Practical guidance on reducing no-shows, capturing leads, and
          automating patient communication for clinics across India.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Link
              className="glass-health rounded-[2rem] p-7 transition hover:-translate-y-2"
              href={`/blog/${p.slug}`}
              key={p.id}
            >
              <p className="text-sm text-teal-300">NexusNova Insights</p>
              <h2 className="mt-4 text-2xl font-black">{p.title}</h2>
              <p className="mt-3 text-slate-400">{p.excerpt}</p>
              <p className="mt-8 font-bold text-teal-300">Read article →</p>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm leading-7 text-slate-400">
          Need an implementation partner? Explore{" "}
          <Link className="text-teal-300 transition hover:text-teal-200" href="/solutions">
            our automation solutions
          </Link>{" "}
          or{" "}
          <Link className="text-teal-300 transition hover:text-teal-200" href="/contact">
            book a strategy call
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
