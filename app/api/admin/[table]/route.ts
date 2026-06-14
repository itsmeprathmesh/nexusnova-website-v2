import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/admin';
import { demoProjects } from '@/lib/data';
import { supabaseAdmin } from '@/lib/supabase/server';

const allowed = ['leads', 'blog_posts', 'portfolio_projects', 'testimonials', 'pricing_plans', 'newsletter_subscribers', 'site_settings'];
function check(table: string) {
  if (!allowed.includes(table)) throw new Error('Invalid table');
}

function adminErrorMessage(error: any) {
  const message = String(error?.message || error || 'Admin request failed');
  if (
    error?.code === 'PGRST204' &&
    message.includes("'website_url'") &&
    message.includes("'portfolio_projects'")
  ) {
    return 'Production Supabase is missing portfolio_projects.website_url, or its schema cache has not refreshed. Run supabase/fix-portfolio-website-url.sql in your production Supabase SQL Editor, then save again.';
  }
  return message;
}

function slugFromTitle(title: string) {
  return title.toLowerCase().replaceAll(' ', '-');
}

function portfolioSeedRows() {
  return demoProjects.map((project) => ({
    title: project.title,
    slug: slugFromTitle(project.title),
    industry: project.industry,
    summary: project.summary,
    challenge:
      'A business needed a stronger online presence and a better way to capture inquiries.',
    solution: project.summary,
    results: project.results,
    image_url: '',
    website_url: '',
    status: 'published',
  }));
}

async function markPortfolioSeedsCreated(client: ReturnType<typeof supabaseAdmin>) {
  await client
    .from('site_settings')
    .upsert(
      { key: 'portfolio_demo_projects_seeded', value: 'true' },
      { onConflict: 'key' },
    );
}

async function seedPortfolioProjects(data: any[] | null) {
  const client = supabaseAdmin();
  const existing = Array.isArray(data) ? data : [];
  const existingSlugs = new Set(existing.map((project) => project.slug));
  const missingRows = portfolioSeedRows().filter(
    (project) => !existingSlugs.has(project.slug),
  );

  if (missingRows.length === 0) return existing;

  const { data: inserted, error } = await client
    .from('portfolio_projects')
    .upsert(missingRows, { onConflict: 'slug', ignoreDuplicates: true })
    .select('*')
    .order('created_at', { ascending: false });

  if (error && error.code === 'PGRST204') {
    const fallbackRows = missingRows.map(({ website_url, ...row }) => row);
    const { data: fallbackInserted, error: fallbackError } = await client
      .from('portfolio_projects')
      .upsert(fallbackRows, { onConflict: 'slug', ignoreDuplicates: true })
      .select('*')
      .order('created_at', { ascending: false });
    if (fallbackError) throw fallbackError;
    await markPortfolioSeedsCreated(client).catch(() => undefined);
    return [...(fallbackInserted || []), ...existing];
  }

  if (error) throw error;
  await markPortfolioSeedsCreated(client).catch(() => undefined);
  return [...(inserted || []), ...existing];
}

export async function GET(_req: Request, context: { params: { table: string } }) {
  try {
    await requireAdmin();
    const { table } = context.params;
    check(table);
    const { data, error } = await supabaseAdmin().from(table).select('*').order('created_at', { ascending: false });
    if (error) throw error;
    if (table === 'portfolio_projects') {
      const projects = await seedPortfolioProjects(data);
      return NextResponse.json(projects);
    }
    return NextResponse.json(data);
  } catch (e: any) {
    const message = adminErrorMessage(e);
    return NextResponse.json({ error: message }, { status: message === 'FORBIDDEN' ? 403 : message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}

export async function POST(req: Request, context: { params: { table: string } }) {
  try {
    await requireAdmin();
    const { table } = context.params;
    check(table);
    const body = await req.json();
    const { data, error } = await supabaseAdmin().from(table).insert(body).select().single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (e: any) {
    const message = adminErrorMessage(e);
    return NextResponse.json({ error: message }, { status: message === 'FORBIDDEN' ? 403 : message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}
