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
  params: Params;
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Not Found", robots: { index: false } };
  return {
    title: post.title,
    description: post.excerpt || "NexusNova insight.",
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | NexusNova Insights`,
      description: post.excerpt,
      url: `/blog/${params.slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Params;
}) {
  const post: any = await getPost(params.slug);
  if (!post) notFound();

  return (
    <section className="content-fade px-5 pb-24 pt-36">
      <article className="mx-auto max-w-3xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blog" }, { label: post.title }]} />
        <p className="text-ember">NexusNova Insights</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="prose prose-invert prose-lg mt-10 max-w-none">
          <p className="text-white/60 leading-8">
            {post.content || post.excerpt}
          </p>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8">
          <Link
            className="text-ember transition hover:text-gold"
            href="/blog"
          >
            ← Back to insights
          </Link>
        </div>
      </article>
    </section>
  );
}
