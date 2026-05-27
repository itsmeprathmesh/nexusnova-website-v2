import { supabaseAdmin } from "@/lib/supabase/server";
import { demoProjects } from "@/lib/data";
import { ImageWithSkeleton } from "@/components/site/motion";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = { slug: string };

function slugFromTitle(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

function demoProject(slug: string) {
  const demo = demoProjects.find((project) => slugFromTitle(project.title) === slug);
  return demo
    ? {
        ...demo,
        slug,
        challenge:
          "A business needed a stronger online presence and a better way to capture inquiries.",
        solution: demo.summary,
        image_url: "",
      }
    : null;
}

async function getProject(slug: string) {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return demoProject(slug);
  }
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

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) {
    return { title: "Case Study Not Found", robots: { index: false } };
  }
  const title = `${project.title} Case Study`;
  const description =
    project.summary ||
    "NexusNova Studio website development and automation case study.";
  const image = project.image_url || "/opengraph-image";

  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${params.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/portfolio/${params.slug}`,
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CaseStudy({ params }: { params: Params }) {
  const project: any = await getProject(params.slug);
  if (!project) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Studies",
            item: siteUrl("/portfolio"),
          },
          { "@type": "ListItem", position: 3, name: project.title },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: siteUrl(`/portfolio/${params.slug}`),
        creator: { "@id": siteUrl("/#organization") },
        ...(project.image_url ? { image: project.image_url } : {}),
      },
    ],
  };

  return (
    <section className="content-fade px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <article className="mx-auto max-w-4xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-slate-400"
        >
          <Link className="transition hover:text-violet-300" href="/">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link className="transition hover:text-violet-300" href="/portfolio">
            Case Studies
          </Link>
        </nav>
        <p className="text-blue-200">{project.industry}</p>
        <h1 className="mt-4 text-5xl font-semibold">{project.title}</h1>
        <p className="mt-6 text-xl text-white/65">{project.summary}</p>
        <div className="relative my-10 h-80 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(13,110,253,.48),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(123,44,245,.4),transparent_35%),radial-gradient(circle_at_78%_24%,rgba(217,70,239,.2),transparent_30%)]">
          {project.image_url && (
            <ImageWithSkeleton
              alt={`${project.title} by NexusNova Studio`}
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 896px) 100vw, 896px"
              src={project.image_url}
            />
          )}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-3 text-white/60">{project.challenge}</p>
          </div>
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-semibold">Solution</h2>
            <p className="mt-3 text-white/60">{project.solution}</p>
          </div>
          <div className="glass rounded-3xl p-6">
            <h2 className="text-2xl font-semibold">Result</h2>
            <p className="mt-3 text-white/60">{project.results}</p>
          </div>
        </div>
        <aside className="glass mt-12 rounded-3xl p-7">
          <h2 className="text-2xl font-semibold">
            Planning a similar digital project?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/60">
            NexusNova Studio provides website development, CRM systems, and AI
            automation services for businesses in Nagpur and across India.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <Link className="text-blue-300 transition hover:text-violet-300" href="/#services">
              Explore our services
            </Link>
            <Link className="text-blue-300 transition hover:text-violet-300" href="/blog">
              Read digital growth insights
            </Link>
            <Link className="text-blue-300 transition hover:text-violet-300" href="/contact">
              Discuss your project
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
}
