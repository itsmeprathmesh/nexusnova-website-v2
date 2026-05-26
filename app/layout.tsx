import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';   // ADD THIS
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: 'NexusNova Studio | Premium Websites & AI Systems', template: '%s | NexusNova Studio' },
  description: 'Premium websites, AI automation, branding, and digital systems for growing businesses.',
};

function hasValidClerkKey() {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '';
  return /^pk_(test|live)_[A-Za-z0-9_-]{20,}/.test(key);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const body = (
    <html lang="en">
      <body>

        {children}

        <Analytics />

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNGDKHE8CY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZNGDKHE8CY');
          `}
        </Script>

      </body>
    </html>
  );

  return hasValidClerkKey()
    ? <ClerkProvider>{body}</ClerkProvider>
    : body;
}