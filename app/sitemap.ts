import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/contact', '/portfolio', '/blog', '/thank-you'].map((url) => ({
    url: siteUrl(url),
    lastModified: new Date(),
  }));
}
