import { StatStrip, SplitSections } from "@/components/site/sections";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "AI Engineering Studio | NexusNova" },
  description: "NexusNova Studio builds AI automation systems for healthcare — from intelligent document processing to predictive diagnostics.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Engineering Studio | NexusNova",
    description: "We engineer AI systems for healthcare. Custom automation, intelligent processing, and enterprise AI.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Studio | NexusNova",
    description: "We engineer AI systems for healthcare. Custom automation, intelligent processing, and enterprise AI.",
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
  description: "AI engineering studio building custom automation systems for healthcare.",
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
      <StatStrip />
      <SplitSections />
    </>
  );
}
