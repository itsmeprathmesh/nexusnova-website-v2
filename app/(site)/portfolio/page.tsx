import { supabaseAdmin } from "@/lib/supabase/server";
import { demoProjects } from "@/lib/data";
import { ImageWithSkeleton } from "@/components/site/motion";
import Link from "next/link";
import type { Metadata } from "next";
import { externalUrl, siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Healthcare Automation Case Studies",
  description:
    "Explore NexusNova Studio case studies for healthcare automation — no-show reduction, appointment systems, patient recall, and lead CRM.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Healthcare Automation Case Studies | NexusNova Studio",
    description:
      "Real results from clinics using NexusNova automation systems.",
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
      <div className="neuro-orb right-0 top-24 h-96 w-96 bg-blue-500/20" />
      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-slate-400"
        >
          <Link className="transition hover:text-blue-300" href="/">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>Case Studies</span>
        </nav>
        <p className="eyebrow-neuro">Case Studies</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-[#F1F5F9] md:text-7xl">
          Real results from clinics like yours.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-400">
          Case studies showing how NexusNova automation systems help clinics
          reduce no-shows, capture more leads, and improve patient
          communication.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p: any) => {
            const websiteUrl = externalUrl(p.website_url);

            return (
              <article
                className="group neuro-glass overflow-hidden rounded-[2rem] transition hover:-translate-y-2"
                key={p.slug || p.title}
              >
                <Link href={`/portfolio/${p.slug}`}>
                  <div className="relative h-52 bg-[radial-gradient(circle_at_20%_20%,rgba(74,143,231,.5),transparent_32%),radial-gradient(circle_at_70%_40%,rgba(139,92,246,.38),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(91,192,190,.48),transparent_34%)]">
                    {p.image_url && (
                      <ImageWithSkeleton
                        alt={`${p.title} case study`}
                        className="absolute inset-0 h-full w-full"
                        src={p.image_url}
                      />
                    )}
                  </div>
                </Link>
                <div className="p-7">
                  <p className="text-sm font-bold text-blue-300">
                    {p.industry}
                  </p>
                  <Link href={`/portfolio/${p.slug}`}>
                    <h2 className="mt-4 text-2xl font-bold text-[#F1F5F9] transition group-hover:text-blue-300">
                      {p.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-slate-400">{p.summary}</p>
                  <p className="mt-6 font-semibold text-blue-300">
                    {p.results}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                    <Link
                      className="rounded-full border border-white/10 px-4 py-2 text-white/70 transition hover:border-blue-300/60 hover:text-blue-200"
                      href={`/portfolio/${p.slug}`}
                    >
                      View Case Study
                    </Link>
                    {websiteUrl ? (
                      <a
                        className="btn-neuro px-4 py-2"
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
