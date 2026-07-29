import { supabaseAdmin } from "@/lib/supabase/server";
import { demoProjects } from "@/lib/data";
import { ImageWithSkeleton } from "@/components/site/motion";
import { externalUrl, siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = { slug: string };

function slugFromTitle(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

function demoProject(slug: string) {
  const demo = demoProjects.find((p) => slugFromTitle(p.title) === slug);
  return demo
    ? {
        ...demo,
        slug,
        challenge:
          "The business needed to streamline operations and capture more leads.",
        solution: demo.summary,
        image_url: "",
        website_url: "",
      }
    : null;
}

async function getProject(slug: string) {
  if (process.env.NEXT_PHASE === "phase-production-build") return demoProject(slug);
  try {
    const { data } = await supabaseAdmin()
      .from("portfolio_projects")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();
    return data || demoProject(slug);
  } catch {
    return demoProject(slug);
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) return { title: "Not Found", robots: { index: false } };
  return {
    title: `${project.title} Case Study`,
    description: project.summary || "NexusNova case study.",
    alternates: { canonical: `/portfolio/${params.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} Case Study | NexusNova`,
      description: project.summary,
      url: `/portfolio/${params.slug}`,
      images: [{ url: project.image_url || "/opengraph-image", alt: project.title }],
    },
  };
}

export default async function CaseStudy({ params }: { params: Params }) {
  const project: any = await getProject(params.slug);
  if (!project) notFound();
  const websiteUrl = externalUrl(project.website_url);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: siteUrl("/portfolio") },
          { "@type": "ListItem", position: 3, name: project.title },
        ],
      },
      { "@type": "CreativeWork", name: project.title, description: project.summary, url: siteUrl(`/portfolio/${params.slug}`) },
    ],
  };

  return (
    <section className="content-fade px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <article className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/45">
          <Link className="transition hover:text-ember" href="/">Home</Link>
          <span aria-hidden>/</span>
          <Link className="transition hover:text-ember" href="/portfolio">Case Studies</Link>
          <span aria-hidden>/</span>
          <span>{project.title}</span>
        </nav>
        <p className="text-ember">{project.industry}</p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.03em] text-white">{project.title}</h1>
        <p className="mt-6 text-xl text-white/50">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          {websiteUrl ? (
            <a className="btn-primary" href={websiteUrl} rel="noopener noreferrer" target="_blank">
              Visit Website
            </a>
          ) : (
            <span className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/45">Coming Soon</span>
          )}
          <Link className="btn-secondary" href="/contact">Discuss Your Project</Link>
        </div>
        <div className="relative my-10 h-80 overflow-hidden rounded-5xl bg-gradient-to-br from-ember/20 via-crimson/10 to-midnight">
          {project.image_url && (
            <ImageWithSkeleton
              alt={`${project.title} by NexusNova`}
              className="absolute inset-0"
              sizes="(max-width: 896px) 100vw, 896px"
              src={project.image_url}
            />
          )}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass-premium-card rounded-4xl p-6">
            <h2 className="text-2xl font-bold text-white">Challenge</h2>
            <p className="mt-3 text-white/50">{project.challenge}</p>
          </div>
          <div className="glass-premium-card rounded-4xl p-6">
            <h2 className="text-2xl font-bold text-white">Solution</h2>
            <p className="mt-3 text-white/50">{project.solution}</p>
          </div>
          <div className="glass-premium-card rounded-4xl p-6">
            <h2 className="text-2xl font-bold text-white">Result</h2>
            <p className="mt-3 text-white/50">{project.results}</p>
          </div>
        </div>
        <aside className="glass-premium-card mt-12 rounded-4xl p-7">
          <h2 className="text-2xl font-bold text-white">Planning a similar project?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/50">
            NexusNova provides AI automation, website development, and digital engineering for businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <Link className="text-ember transition hover:text-gold" href="/#services">Explore our services</Link>
            <Link className="text-ember transition hover:text-gold" href="/blog">Read insights</Link>
            <Link className="text-ember transition hover:text-gold" href="/contact">Discuss your project</Link>
          </div>
        </aside>
      </article>
    </section>
  );
}
