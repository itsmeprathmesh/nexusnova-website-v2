import { supabaseAdmin } from '@/lib/supabase/server';
import { demoProjects } from '@/lib/data';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

type Params = { slug: string };

function slugFromTitle(title: string) {
  return title.toLowerCase().replaceAll(' ', '-');
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = params;
  if (process.env.NEXT_PHASE === 'phase-production-build') return { title: 'Case Study' };
  try {
    const { data } = await supabaseAdmin()
      .from('portfolio_projects')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    return { title: data?.title || 'Case Study', description: data?.summary || 'NexusNova Studio case study' };
  } catch {
    return { title: 'Case Study' };
  }
}

export default async function CaseStudy({ params }: { params: Params }) {
  const { slug } = params;
  let project: any = null;
  try {
    const { data } = await supabaseAdmin()
      .from('portfolio_projects')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    project = data;
  } catch {
    project = null;
  }

  if (!project) {
    const demo = demoProjects.find((x) => slugFromTitle(x.title) === slug);
    if (demo) project = { ...demo, slug, challenge: 'A business needed a stronger online presence and a better way to capture inquiries.', solution: demo.summary, image_url: '' };
  }
  if (!project) notFound();

  return (
    <section className="px-5 pb-24 pt-36">
      <article className="mx-auto max-w-4xl">
        <p className="text-blue-200">{project.industry}</p>
        <h1 className="mt-4 text-5xl font-semibold">{project.title}</h1>
        <p className="mt-6 text-xl text-white/65">{project.summary}</p>
        <div
          className="my-10 h-80 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(79,140,255,.45),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(155,92,255,.35),transparent_35%)]"
          style={project.image_url ? { backgroundImage: `url(${project.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        />
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass rounded-3xl p-6"><h2 className="text-2xl font-semibold">Challenge</h2><p className="mt-3 text-white/60">{project.challenge}</p></div>
          <div className="glass rounded-3xl p-6"><h2 className="text-2xl font-semibold">Solution</h2><p className="mt-3 text-white/60">{project.solution}</p></div>
          <div className="glass rounded-3xl p-6"><h2 className="text-2xl font-semibold">Result</h2><p className="mt-3 text-white/60">{project.results}</p></div>
        </div>
      </article>
    </section>
  );
}
