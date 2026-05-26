import { supabaseAdmin } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = params;
  if (process.env.NEXT_PHASE === 'phase-production-build') return { title: 'Blog' };
  try {
    const { data } = await supabaseAdmin().from('blog_posts').select('*').eq('slug', slug).single();
    return { title: data?.seo_title || data?.title || 'Blog', description: data?.seo_description || data?.excerpt };
  } catch {
    return { title: 'Blog' };
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = params;
  if (process.env.NEXT_PHASE === 'phase-production-build') notFound();
  let post: any = null;
  try {
    const { data } = await supabaseAdmin().from('blog_posts').select('*').eq('slug', slug).eq('status', 'published').single();
    post = data;
  } catch {
    post = null;
  }
  if (!post) notFound();
  return <section className="px-5 pb-24 pt-36"><article className="prose prose-invert prose-lg mx-auto max-w-3xl"><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="whitespace-pre-wrap text-white/75">{post.content}</div></article></section>;
}
