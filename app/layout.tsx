import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/site/smooth-scroll-provider";
import { CustomCursor } from "@/components/site/custom-cursor";
import "./globals.css";
import { DynamicBackground3D as Background3D, DynamicLoader as Loader } from "@/components/site/dynamic-3d";

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  applicationName: "NexusNova Studio",
  title: { default: "NexusNova — AI Engineering Studio", template: "%s | NexusNova" },
  description: "NexusNova builds AI automation, custom websites, and CRM systems for clinics, restaurants, real estate, salons, coaching institutes, and local service businesses across India.",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NexusNova Studio",
    title: "NexusNova — AI Engineering Studio",
    description: "We engineer AI systems and premium digital experiences for businesses across India.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NexusNova Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusNova — AI Engineering Studio",
    description: "We engineer AI systems and premium digital experiences for businesses across India.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

function hasValidClerkKey() {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
  return /^pk_(test|live)_[A-Za-z0-9_-]{20,}/.test(key);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const body = (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="font-body antialiased">
        <Loader />
        <Background3D />
        <div className="relative z-[1]">
          <SmoothScrollProvider>
            {children}
            <CustomCursor />
          </SmoothScrollProvider>
        </div>
        <Analytics />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZNGDKHE8CY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZNGDKHE8CY');
        `}</Script>
      </body>
    </html>
  );
  return hasValidClerkKey() ? <ClerkProvider>{body}</ClerkProvider> : body;
}
