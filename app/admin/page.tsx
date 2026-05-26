import { supabaseAdmin } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

async function count(t: string) {
  if (process.env.NEXT_PHASE === 'phase-production-build') return 0;
  try {
    const { count } = await supabaseAdmin().from(t).select('*', { count: 'exact', head: true });
    return count || 0;
  } catch {
    return 0;
  }
}

export default async function Admin() {
  const [leads, posts, projects, testimonials] = await Promise.all(['leads', 'blog_posts', 'portfolio_projects', 'testimonials'].map(count));
  return <div><h1 className="text-3xl font-semibold">Dashboard</h1><div className="mt-8 grid gap-4 md:grid-cols-4">{[['Leads', leads], ['Blog Posts', posts], ['Projects', projects], ['Testimonials', testimonials]].map(([n, v]) => <div className="glass rounded-3xl p-6" key={n as string}><p className="text-white/50">{n}</p><p className="mt-3 text-4xl font-semibold">{v}</p></div>)}</div><p className="mt-8 text-white/55">Use the left menu to manage leads, blog posts, portfolio projects, testimonials, pricing, newsletter subscribers, and settings.</p></div>;
}
