import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/admin';
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

export async function PATCH(req: Request, { params }: { params: Promise<{ table: string; id: string }> }) {
  try {
    await requireAdmin();
    const { table, id } = await params;
    check(table);
    const body = await req.json();
    const { data, error } = await supabaseAdmin().from(table).update({ ...body, updated_at: new Date().toISOString() }).eq('id', id).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (e: any) {
    const message = adminErrorMessage(e);
    return NextResponse.json({ error: message }, { status: message === 'FORBIDDEN' ? 403 : message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ table: string; id: string }> }) {
  try {
    await requireAdmin();
    const { table, id } = await params;
    check(table);
    const { error } = await supabaseAdmin().from(table).delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    const message = adminErrorMessage(e);
    return NextResponse.json({ error: message }, { status: message === 'FORBIDDEN' ? 403 : message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}
