import {
  Hero,
  ProblemSection,
  SolutionsSection,
  IndustriesSection,
  WorkflowSection,
  BenefitsSection,
  ProcessSection,
  CaseStudies,
  FAQSection,
  CTASection,
  HomeDataSkeleton,
} from "@/components/site/sections";
import { supabaseAdmin } from "@/lib/supabase/server";
import { demoProjects, faqs, services } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "AI Automation for Healthcare | NexusNova Studio",
  },
  description:
    "NexusNova Studio builds AI automation systems for healthcare clinics — reducing no-shows, capturing leads, and automating patient communication.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Automation for Healthcare | NexusNova Studio",
    description:
      "Custom automation systems that reduce no-shows, capture leads, and keep patients coming back.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Healthcare | NexusNova Studio",
    description:
      "Custom automation systems that reduce no-shows, capture leads, and keep patients coming back.",
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
  description:
    "AI automation systems for healthcare businesses. Reducing no-shows, capturing leads, and automating patient communication.",
  email: "nexeusnovastudio@gmail.com",
  telephone: "+91 75585 41331",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91 75585 41331",
    email: "nexeusnovastudio@gmail.com",
    availableLanguage: ["English", "Hindi"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.solution,
    provider: { "@id": siteUrl("/#organization") },
    areaServed: "India",
    url: siteUrl("/#solutions"),
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

async function getHomeContent() {
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return { projects: demoProjects };
  }
  try {
    const sb = supabaseAdmin();
    const { data: projects } = await sb
      .from("portfolio_projects")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(3);
    return { projects: projects?.length ? projects : demoProjects };
  } catch {
    return { projects: demoProjects };
  }
}

async function DynamicHomeContent() {
  const content = await getHomeContent();

  return (
    <div className="content-fade">
      <CaseStudies projects={content.projects} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(businessSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
        type="application/ld+json"
      />
      <Hero />
      <ProblemSection />
      <SolutionsSection />
      <WorkflowSection />
      <BenefitsSection />
      <IndustriesSection />
      <ProcessSection />
      <Suspense fallback={<HomeDataSkeleton />}>
        <DynamicHomeContent />
      </Suspense>
      <FAQSection />
      <CTASection />
    </>
  );
}
