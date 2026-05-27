import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script"; // ADD THIS
import { Suspense } from "react";
import { AppLoadingSkeleton } from "@/components/site/sections";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  applicationName: "NexusNova Studio",
  title: {
    default: "Premium AI Agency in Nagpur | NexusNova Studio",
    template: "%s | NexusNova Studio",
  },
  description:
    "NexusNova Studio is a premium AI agency in Nagpur delivering AI automation, website development, CRM systems, and digital transformation solutions across India.",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NexusNova Studio",
    title: "Premium AI Agency in Nagpur | NexusNova Studio",
    description:
      "AI automation, premium website development, CRM systems, and digital solutions for ambitious businesses in Nagpur and across India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NexusNova Studio - AI Agency in Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium AI Agency in Nagpur | NexusNova Studio",
    description:
      "AI automation, premium websites, CRM systems, and digital transformation solutions across India.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function hasValidClerkKey() {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
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
        <Suspense fallback={<AppLoadingSkeleton />}>{children}</Suspense>

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

  return hasValidClerkKey() ? <ClerkProvider>{body}</ClerkProvider> : body;
}
