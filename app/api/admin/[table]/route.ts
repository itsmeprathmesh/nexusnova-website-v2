import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/admin';
import { supabaseAdmin } from '@/lib/supabase/server';

const allowed = ['leads', 'blog_posts', 'portfolio_projects', 'testimonials', 'pricing_plans', 'newsletter_subscribers', 'site_settings'];
function check(table: string) {
  if (!allowed.includes(table)) throw new Error('Invalid table');
}

export async function GET(_req: Request, context: { params: { table: string } }) {
  try {
    await requireAdmin();
    const { table } = context.params;
    check(table);
    const { data, error } = await supabaseAdmin().from(table).select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.message === 'FORBIDDEN' ? 403 : e.message === 'UNAUTHENTICATED' ? 401 : 500 });
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
    return NextResponse.json({ error: e.message }, { status: e.message === 'FORBIDDEN' ? 403 : e.message === 'UNAUTHENTICATED' ? 401 : 500 });
  }
}
