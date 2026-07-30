import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
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

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  applicationName: "NexusNova",
  title: { default: "NexusNova | AI Patient Acquisition & Operations Systems", template: "%s | NexusNova" },
  description: "We build custom AI infrastructure, automated booking engines, and CRM workflows for private healthcare practices and clinics to eliminate missed leads and administrative overhead.",
  alternates: { canonical: "/" },
  category: "healthcare",
  keywords: [
    "Clinic AI Automation",
    "Healthcare CRM Systems",
    "Automated Patient Booking",
    "Patient Acquisition Engine",
    "AI Front Desk for Healthcare",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "NexusNova",
    title: "NexusNova | AI Infrastructure for Modern Clinics",
    description: "Stop losing patient inquiries. We deploy custom AI booking agents and operational workflows directly into your practice.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NexusNova" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusNova | AI Infrastructure for Modern Clinics",
    description: "Stop losing patient inquiries. We deploy custom AI booking agents and operational workflows directly into your practice.",
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
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
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
