import { supabaseAdmin } from '@/lib/supabase/server';
import { demoProjects } from '@/lib/data';
import Link from 'next/link';

export const metadata = { title: 'Portfolio' };
export const dynamic = 'force-dynamic';
function slugFromTitle(title: string) { return title.toLowerCase().replaceAll(' ', '-'); }
export default async function Portfolio() {
  let projects: any[] = [];
  if (process.env.NEXT_PHASE !== 'phase-production-build') {
    try { const { data } = await supabaseAdmin().from('portfolio_projects').select('*').eq('status','published').order('created_at',{ascending:false}); projects = data || []; } catch { projects = []; }
  }
  const items = projects.length ? projects : demoProjects.map((p)=>({...p,slug:slugFromTitle(p.title),image_url:'',results:p.results}));
  return <section className="lux-bg noise relative overflow-hidden px-5 pb-24 pt-36"><div className="orb right-0 top-24 h-96 w-96 bg-rose-400/20"/><div className="relative mx-auto max-w-7xl"><p className="text-sm uppercase tracking-[.35em] text-amber-200">Portfolio</p><h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Case studies built for trust, leads, and premium positioning.</h1><p className="mt-5 max-w-2xl text-amber-50/62">Demo and client-ready case studies showing how NexusNova structures websites as growth systems.</p><div className="mt-12 grid gap-6 md:grid-cols-3">{items.map((p)=><Link className="group glass-warm overflow-hidden rounded-[2rem] transition hover:-translate-y-2" href={`/portfolio/${p.slug}`} key={p.slug||p.title}><div className="h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(246,200,95,.55),transparent_32%),radial-gradient(circle_at_70%_40%,rgba(255,107,156,.45),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,.55),transparent_34%)]" style={p.image_url?{backgroundImage:`linear-gradient(rgba(18,13,31,.1),rgba(18,13,31,.5)),url(${p.image_url})`,backgroundSize:'cover',backgroundPosition:'center'}:undefined}/><div className="p-7"><p className="text-sm font-bold text-amber-200">{p.industry}</p><h2 className="mt-4 text-2xl font-black group-hover:text-amber-200">{p.title}</h2><p className="mt-3 text-amber-50/60">{p.summary}</p><p className="mt-6 font-semibold text-emerald-200">{p.results}</p></div></Link>)}</div></div></section>;
}
