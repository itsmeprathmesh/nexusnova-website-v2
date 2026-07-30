import { supabaseAdmin } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function count(t: string) {
  if (process.env.NEXT_PHASE === "phase-production-build") return 0;
  try {
    const { count } = await supabaseAdmin()
      .from(t)
      .select("*", { count: "exact", head: true });
    return count || 0;
  } catch {
    return 0;
  }
}

const cardStyles: Record<string, { label: string; count: string }> = {
  leads: { label: "text-blue/50", count: "text-blue" },
  blog_posts: { label: "text-purple/50", count: "text-purple" },
  projects: { label: "text-cyan/50", count: "text-cyan" },
  testimonials: { label: "text-white/50", count: "text-white" },
};

export default async function Admin() {
  const [leads, posts, projects, testimonials] = await Promise.all(
    ["leads", "blog_posts", "portfolio_projects", "testimonials"].map(count),
  );
  const cards = [
    { id: "leads", name: "leads", value: leads },
    { id: "blog_posts", name: "blog_posts", value: posts },
    { id: "projects", name: "projects", value: projects },
    { id: "testimonials", name: "testimonials", value: testimonials },
  ];

  return (
    <div className="content-fade font-mono">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-blue/50">&gt;</span>
        <h1 className="text-sm font-semibold tracking-[-0.01em] text-white">
          _dashboard
        </h1>
        <span className="h-1 w-1 rounded-full bg-blue" />
      </div>
      <p className="mt-2 text-[11px] text-white/25">
        System overview &amp; content management
      </p>
      <div className="mt-8 grid gap-3 md:grid-cols-4">
        {cards.map(({ id, name, value }) => (
          <div
            key={id}
            className="rounded-[6.4px] border border-white/[0.04] bg-white/[0.02] p-5"
          >
            <p className={`text-[10px] uppercase tracking-[0.12em] ${cardStyles[id].label}`}>
              <span className="opacity-70">&gt;</span> {name}
            </p>
            <p className={`mt-3 text-3xl font-bold ${cardStyles[id].count}`}>
              {value}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-[11px] text-white/20">
        <span className="text-blue/40">&gt;</span> Use the sidebar to manage leads, blog posts, portfolio projects,
        testimonials, pricing, newsletter subscribers, and settings.
      </p>
    </div>
  );
}
