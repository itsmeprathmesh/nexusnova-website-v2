import type { MetadataRoute } from "next";
import { demoPosts, demoProjects } from "@/lib/data";
import { supabaseAdmin } from "@/lib/supabase/server";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

function projectSlug(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl("/contact"), changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl("/portfolio"), changeFrequency: "weekly", priority: 0.8 },
    { url: siteUrl("/blog"), changeFrequency: "weekly", priority: 0.7 },
  ];
  let projects: Array<{ slug: string; updated_at?: string; created_at?: string }> =
    demoProjects.map((project) => ({ slug: projectSlug(project.title) }));
  let posts: Array<{ slug: string; updated_at?: string; created_at?: string }> =
    demoPosts.map((post) => ({ slug: post.slug }));

  if (process.env.NEXT_PHASE !== "phase-production-build") {
    try {
      const database = supabaseAdmin();
      const [{ data: publishedProjects }, { data: publishedPosts }] =
        await Promise.all([
          database
            .from("portfolio_projects")
            .select("slug,updated_at,created_at")
            .eq("status", "published"),
          database
            .from("blog_posts")
            .select("slug,updated_at,created_at")
            .eq("status", "published"),
        ]);
      if (publishedProjects?.length) {
        projects = [
          ...publishedProjects,
          ...projects.filter(
            (fallback) =>
              !publishedProjects.some(
                (published) => published.slug === fallback.slug,
              ),
          ),
        ];
      }
      if (publishedPosts?.length) {
        posts = [
          ...publishedPosts,
          ...posts.filter(
            (fallback) =>
              !publishedPosts.some((published) => published.slug === fallback.slug),
          ),
        ];
      }
    } catch {
      // Keep meaningful public fallback URLs when content storage is unavailable.
    }
  }

  return [
    ...staticPages,
    ...projects.map((project) => ({
      url: siteUrl(`/portfolio/${project.slug}`),
      lastModified: project.updated_at || project.created_at,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...posts.map((post) => ({
      url: siteUrl(`/blog/${post.slug}`),
      lastModified: post.updated_at || post.created_at,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
