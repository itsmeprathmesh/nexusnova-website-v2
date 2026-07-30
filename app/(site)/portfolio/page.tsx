import { supabaseAdmin } from "@/lib/supabase/server";
import { demoProjects } from "@/lib/data";
import { ImageWithSkeleton } from "@/components/site/motion";
import Link from "next/link";
import type { Metadata } from "next";
import { externalUrl, siteUrl } from "@/lib/utils";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — AI Engineering & Digital Products",
  description:
    "Explore NexusNova case studies — AI automation, websites, and CRM systems for restaurants, clinics, real estate, salons, coaching institutes, and local service businesses.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Case Studies | NexusNova",
    description:
      "Real results from businesses using NexusNova engineering.",
    url: "/portfolio",
    images: ["/opengraph-image"],
  },
};

export const dynamic = "force-dynamic";

function slugFromTitle(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

export default async function Portfolio() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Case Studies" },
    ],
  };

  let projects: any[] = [];
  if (process.env.NEXT_PHASE !== "phase-production-build") {
    try {
      const { data } = await supabaseAdmin()
        .from("portfolio_projects")
        .select("*")
        .eq("status", "published")
        .order("created_at", { ascending: false });
      projects = data || [];
    } catch {
      projects = [];
    }
  }

  const items = projects.length
    ? projects
    : demoProjects.map((p: any) => ({
        ...p,
        slug: slugFromTitle(p.title),
        image_url: "",
      }));

  return (
    <section className="content-fade relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="glow-orb right-0 top-24 h-96 w-96 bg-blue/20" />
      <div className="relative mx-auto max-w-premium">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
        <span className="label-premium font-mono text-[10px]">_case_studies()</span>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
          Real results from
          <br />
          <span className="text-gradient-blue">businesses like yours.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-white/50">
          Case studies showing how NexusNova engineering helps businesses
          automate operations, capture more leads, and grow revenue.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p: any) => {
            const websiteUrl = externalUrl(p.website_url);
            return (
              <article
                className="group glass-premium-card overflow-hidden rounded-5xl transition hover:-translate-y-2"
                key={p.slug || p.title}
              >
                <Link href={`/portfolio/${p.slug}`}>
                  <div className="relative h-48 bg-gradient-to-br from-blue/20 via-cyan/10 to-bg">
                    {p.image_url && (
                      <ImageWithSkeleton
                        alt={`${p.title} case study`}
                        className="absolute inset-0"
                        src={p.image_url}
                      />
                    )}
                  </div>
                </Link>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-blue">
                        {p.industry}
                      </p>
                      <Link href={`/portfolio/${p.slug}`}>
                        <h2 className="mt-3 text-xl font-semibold text-white transition group-hover:text-blue">
                          {p.title}
                        </h2>
                      </Link>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-white/30 transition group-hover:text-blue"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {p.summary}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-blue">
                    {p.results}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                    <Link
                      className="rounded-full border border-white/10 px-4 py-2 text-white/60 transition hover:border-blue/40 hover:text-blue"
                      href={`/portfolio/${p.slug}`}
                    >
                      View Case Study
                    </Link>
                    {websiteUrl ? (
                      <a
                        className="btn-primary h-9 px-4 text-sm"
                        href={websiteUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Visit Website
                      </a>
                    ) : (
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/45">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
