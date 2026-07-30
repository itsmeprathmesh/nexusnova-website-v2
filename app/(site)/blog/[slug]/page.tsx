import { supabaseAdmin } from "@/lib/supabase/server";
import { demoPosts } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/site/breadcrumb";

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
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not Found", robots: { index: false } };
  return {
    title: post.title,
    description: post.excerpt || "NexusNova insight.",
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | NexusNova Insights`,
      description: post.excerpt,
      url: `/blog/${slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post: any = await getPost(slug);
  if (!post) notFound();

  return (
    <section className="content-fade px-5 pb-24 pt-36">
      <article className="mx-auto max-w-3xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blog" }, { label: post.title }]} />
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-blue/50">
          <span className="text-blue/40">&gt;</span> _insight_detail
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-10 max-w-none font-mono text-sm leading-8 text-white/40">
          <p className="flex items-start gap-2">
            <span className="text-blue/40 mt-1">&gt;</span>
            <span>{post.content || post.excerpt}</span>
          </p>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/[0.04] pt-6">
          <Link
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-blue/50 transition hover:text-blue"
            href="/blog"
          >
            &gt; Back to insights
          </Link>
          <span className="font-mono text-[10px] text-white/15">
            _nexusnova_insight
          </span>
        </div>
      </article>
    </section>
  );
}
