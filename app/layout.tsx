import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Suspense } from "react";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { AppLoadingSkeleton } from "@/components/site/sections";
import "./globals.css";

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
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
    default: "AI Automation for Healthcare | NexusNova Studio",
    template: "%s | NexusNova Studio",
  },
  description:
    "NexusNova Studio builds AI automation systems for healthcare clinics — reducing no-shows, capturing leads, and automating patient communication.",
  alternates: { canonical: "/" },
  category: "healthcare",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NexusNova Studio",
    title: "AI Automation for Healthcare | NexusNova Studio",
    description:
      "Custom automation systems that reduce no-shows, capture leads, and keep patients coming back.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NexusNova Studio — AI Automation for Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Healthcare | NexusNova Studio",
    description:
      "Custom automation systems that reduce no-shows, capture leads, and keep patients coming back.",
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
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <body className="font-body">
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
