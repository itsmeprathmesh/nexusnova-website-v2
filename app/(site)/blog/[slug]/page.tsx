import { supabaseAdmin } from "@/lib/supabase/server";
import { demoPosts } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = { slug: string };

async function getPost(slug: string) {
  const fallback = demoPosts.find((post) => post.slug === slug) || null;
  if (process.env.NEXT_PHASE === "phase-production-build") return fallback;
  try {
    const { data } = await supabaseAdmin()
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();
    return data || fallback;
  } catch {
    return fallback;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: "Article Not Found", robots: { index: false } };
  }
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${params.slug}`,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const post: any = await getPost(params.slug);
  if (!post) notFound();
  const paragraphs = String(post.content || "")
    .split(/\n\s*\n/)
    .filter(Boolean);
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
            name: "Insights",
            item: siteUrl("/blog"),
          },
          { "@type": "ListItem", position: 3, name: post.title },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: siteUrl(`/blog/${params.slug}`),
        author: { "@type": "Organization", "@id": siteUrl("/#organization") },
        publisher: { "@type": "Organization", "@id": siteUrl("/#organization") },
        ...(post.created_at ? { datePublished: post.created_at } : {}),
        ...(post.updated_at ? { dateModified: post.updated_at } : {}),
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
      <article className="prose prose-invert prose-lg mx-auto max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-slate-400"
        >
          <Link className="no-underline transition hover:text-violet-300" href="/">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            className="no-underline transition hover:text-violet-300"
            href="/blog"
          >
            Insights
          </Link>
        </nav>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="text-white/75">
          {paragraphs.map((paragraph, index) => (
            <p key={`${post.slug}-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>
        <aside className="not-prose mt-14 rounded-3xl border border-white/10 bg-white/[.04] p-7">
          <h2 className="text-2xl font-semibold text-white">
            Put these ideas into practice
          </h2>
          <p className="mt-3 leading-7 text-slate-400">
            NexusNova Studio builds websites, CRM workflows, and AI automation
            systems for businesses in Nagpur and across India.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link className="text-blue-300 transition hover:text-violet-300" href="/#services">
              Explore our services
            </Link>
            <Link className="text-blue-300 transition hover:text-violet-300" href="/portfolio">
              View case studies
            </Link>
            <Link className="text-blue-300 transition hover:text-violet-300" href="/contact">
              Start a project
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
}
