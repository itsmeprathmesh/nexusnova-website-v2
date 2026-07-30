import {
  HeroSection, StatStrip, ROISection, EcosystemSection,
  SpecialtyGrid, AnimatedWorkflow, HolographicCases,
  TechStack, FAQSection, CTASectionV2
} from "@/components/site/sections";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "NexusNova | AI Patient Acquisition & Clinic Operations Systems" },
  description: "We build custom AI patient booking engines, automated triage agents, and EHR-integrated intake workflows for private healthcare practices and modern medical clinics.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NexusNova | AI Infrastructure for Modern Clinics",
    description: "Stop losing patient inquiries. We deploy custom AI booking agents and operational workflows directly into your practice.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusNova | AI Infrastructure for Modern Clinics",
    description: "Stop losing patient inquiries. We deploy custom AI booking agents and operational workflows directly into your practice.",
    images: ["/opengraph-image"],
  },
};

function jsonLd(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "@id": siteUrl("/#organization"),
  name: "NexusNova",
  url: siteUrl("/"),
  image: siteUrl("/opengraph-image"),
  description: "AI patient booking engines, automated triage agents, and EHR-integrated intake workflows for private healthcare practices.",
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
      <ROISection />
      <EcosystemSection />
      <SpecialtyGrid />
      <AnimatedWorkflow />
      <HolographicCases />
      <TechStack />
      <FAQSection />
      <CTASectionV2 />
    </>
  );
}
