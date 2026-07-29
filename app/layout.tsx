import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Suspense } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { AppLoadingSkeleton } from "@/components/site/sections";
import "./globals.css";

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  applicationName: "NexusNova Studio",
  title: {
    default: "AI Engineering Studio | NexusNova",
    template: "%s | NexusNova",
  },
  description:
    "NexusNova Studio is an AI engineering studio building custom automation systems, websites, and digital products for forward-thinking businesses.",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NexusNova Studio",
    title: "AI Engineering Studio | NexusNova",
    description:
      "We engineer AI systems and premium digital experiences. Custom automation, websites, and SaaS for businesses that want to move faster.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NexusNova Studio — AI Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Studio | NexusNova",
    description:
      "We engineer AI systems and premium digital experiences. Custom automation, websites, and SaaS for businesses that want to move faster.",
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
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="font-body antialiased">
        <Suspense fallback={<AppLoadingSkeleton />}>{children}</Suspense>

        <Analytics />

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
