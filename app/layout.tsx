import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'NexusNova Studio | Premium Websites & AI Systems', template: '%s | NexusNova Studio' },
  description: 'Premium websites, AI automation, branding, and digital systems for growing businesses.',
  openGraph: { title: 'NexusNova Studio', description: 'Premium websites and AI systems for growing businesses.', url: '/', siteName: 'NexusNova Studio', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'NexusNova Studio' },
};

function hasValidClerkKey() {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '';
  return /^pk_(test|live)_[A-Za-z0-9_-]{20,}/.test(key);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const body = <html lang="en"><body>{children}<Analytics /></body></html>;
  return hasValidClerkKey() ? <ClerkProvider>{body}</ClerkProvider> : body;
}
