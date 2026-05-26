import { Comparison, FAQ, FinalCTA, Hero, Industries, Pricing, ProblemSection, Process, Services, TechStack, Testimonials, WebsiteAudit, Work } from '@/components/site/sections';
import { supabaseAdmin } from '@/lib/supabase/server';
import { demoProjects, pricing as defaultPricing } from '@/lib/data';

export const dynamic = 'force-dynamic';

async function getHomeContent() {
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return { projects: demoProjects, plans: defaultPricing, testimonials: [] };
  }
  try {
    const sb = supabaseAdmin();
    const [{ data: projects }, { data: plans }, { data: testimonials }] = await Promise.all([
      sb.from('portfolio_projects').select('*').eq('status', 'published').order('created_at', { ascending: false }).limit(3),
      sb.from('pricing_plans').select('*').eq('status', 'active').order('price', { ascending: true }),
      sb.from('testimonials').select('*').eq('status', 'published').order('created_at', { ascending: false }).limit(3),
    ]);
    return { projects: projects?.length ? projects : demoProjects, plans: plans?.length ? plans : defaultPricing, testimonials: testimonials || [] };
  } catch {
    return { projects: demoProjects, plans: defaultPricing, testimonials: [] };
  }
}

export default async function Home() {
  const content = await getHomeContent();
  return <><Hero /><ProblemSection /><Industries /><Services /><WebsiteAudit /><Work projects={content.projects} /><Comparison /><Process /><TechStack /><Pricing plans={content.plans} /><Testimonials testimonials={content.testimonials} /><FAQ /><FinalCTA /></>;
}
