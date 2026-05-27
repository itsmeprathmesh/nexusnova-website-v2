import { supabaseAdmin } from "@/lib/supabase/server";
import { demoProjects } from "@/lib/data";
import { ImageWithSkeleton } from "@/components/site/motion";
import Link from "next/link";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI & Website Development Case Studies",
  description:
    "Explore NexusNova Studio case studies for premium website development, AI automation and CRM systems for businesses in Nagpur and India.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "AI & Website Development Case Studies | NexusNova Studio",
    description:
      "Website development and AI automation case studies for businesses in Nagpur and across India.",
    url: "/portfolio",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Website Development Case Studies | NexusNova Studio",
    description:
      "Website development and AI automation case studies for businesses in Nagpur and across India.",
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
    : demoProjects.map((p) => ({
        ...p,
        slug: slugFromTitle(p.title),
        image_url: "",
        results: p.results,
      }));
  return (
    <section className="content-fade lux-bg noise relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="orb right-0 top-24 h-96 w-96 bg-violet-500/20" />
      <div className="relative mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-slate-400"
        >
          <Link className="transition hover:text-violet-300" href="/">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>Case Studies</span>
        </nav>
        <p className="text-sm uppercase tracking-[.35em] text-violet-300">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          Website development and AI automation case studies.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-400">
          Case studies showing how NexusNova structures website development,
          AI automation, and CRM lead systems for businesses in Nagpur and
          across India.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Link
              className="group glass-warm overflow-hidden rounded-[2rem] transition hover:-translate-y-2"
              href={`/portfolio/${p.slug}`}
              key={p.slug || p.title}
            >
              <div className="relative h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(13,110,253,.5),transparent_32%),radial-gradient(circle_at_70%_40%,rgba(217,70,239,.38),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(123,44,245,.58),transparent_34%)]">
                {p.image_url && (
                  <ImageWithSkeleton
                    alt={`${p.title} website development case study`}
                    className="absolute inset-0 h-full w-full"
                    src={p.image_url}
                  />
                )}
              </div>
              <div className="p-7">
                <p className="text-sm font-bold text-blue-300">{p.industry}</p>
                <h2 className="mt-4 text-2xl font-black group-hover:text-violet-300">
                  {p.title}
                </h2>
                <p className="mt-3 text-slate-400">{p.summary}</p>
                <p className="mt-6 font-semibold text-blue-300">
                  {p.results}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm leading-7 text-slate-400">
          Planning a similar outcome? Explore our{" "}
          <Link className="text-blue-300 transition hover:text-violet-300" href="/#services">
            website development and AI automation services
          </Link>{" "}
          or{" "}
          <Link className="text-blue-300 transition hover:text-violet-300" href="/contact">
            book a strategy call in Nagpur
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
