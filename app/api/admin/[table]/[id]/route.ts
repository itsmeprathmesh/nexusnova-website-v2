import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/admin';
import { supabaseAdmin } from '@/lib/supabase/server';

const allowed = ['leads', 'blog_posts', 'portfolio_projects', 'testimonials', 'pricing_plans', 'newsletter_subscribers', 'site_settings'];
function check(table: string) {
  if (!allowed.includes(table)) throw new Error('Invalid table');
}

export async function PATCH(req: Request, context: { params: { table: string; id: string } }) {
  try {
    await requireAdmin();
    const { table, id } = context.params;
    check(table);
    const body = await req.json();
    const { data, error } = await supabaseAdmin().from(table).update({ ...body, updated_at: new Date().toISOString() }).eq('id', id).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.message === 'FORBIDDEN' ? 403 : e.message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}

export async function DELETE(_req: Request, context: { params: { table: string; id: string } }) {
  try {
    await requireAdmin();
    const { table, id } = context.params;
    check(table);
    const { error } = await supabaseAdmin().from(table).delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.message === 'FORBIDDEN' ? 403 : e.message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}
