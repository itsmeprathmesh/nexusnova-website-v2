import {
  HeroSection, StatStrip, EcosystemSection,
  AnimatedWorkflow, HolographicCases, TechStack, CTASectionV2
} from "@/components/site/sections";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "AI Engineering Studio | NexusNova" },
  description: "NexusNova builds AI automation, custom websites, and CRM systems for clinics, restaurants, real estate, salons, coaching institutes, and local service businesses across India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Engineering Studio | NexusNova",
    description: "We build AI businesses that scale.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Studio | NexusNova",
    description: "We build AI businesses that scale.",
    images: ["/opengraph-image"],
  },
};

function jsonLd(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": siteUrl("/#organization"),
  name: "NexusNova Studio",
  url: siteUrl("/"),
  image: siteUrl("/opengraph-image"),
  description: "AI automation, custom websites, and CRM systems for growing businesses across India.",
  email: "nexeusnovastudio@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(businessSchema) }}
        type="application/ld+json"
      />
      <HeroSection />
      <StatStrip />
      <EcosystemSection />
      <AnimatedWorkflow />
      <HolographicCases />
      <TechStack />
      <CTASectionV2 />
    </>
  );
}
