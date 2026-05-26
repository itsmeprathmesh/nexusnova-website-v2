import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/admin';
import { supabaseAdmin } from '@/lib/supabase/server';
import slugify from 'slugify';

export const dynamic = 'force-dynamic';
const BUCKET = 'nexusnova-media';
const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(req: Request) {
  try {
    await requireAdmin();
    const form = await req.formData();
    const file = form.get('file');
    const folder = String(form.get('folder') || 'uploads');
    if (!(file instanceof File)) return NextResponse.json({ error: 'No image file provided.' }, { status: 400 });
    if (!ALLOWED.includes(file.type)) return NextResponse.json({ error: 'Only JPG, PNG, WebP, or GIF images are allowed.' }, { status: 400 });
    if (file.size > MAX_SIZE) return NextResponse.json({ error: 'Image must be smaller than 5MB.' }, { status: 400 });

    const ext = file.name.split('.').pop() || 'png';
    const safe = slugify(file.name.replace(/\.[^/.]+$/, ''), { lower: true, strict: true }) || 'image';
    const path = `${slugify(folder, { lower: true, strict: true })}/${Date.now()}-${safe}.${ext}`;
    const bytes = await file.arrayBuffer();
    const client = supabaseAdmin();
    const { error } = await client.storage.from(BUCKET).upload(path, bytes, { contentType: file.type, upsert: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    const { data } = client.storage.from(BUCKET).getPublicUrl(path);
    return NextResponse.json({ url: data.publicUrl, path });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Upload failed' }, { status: 500 });
  }
}
