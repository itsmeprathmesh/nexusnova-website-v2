import {
  Comparison,
  FAQ,
  FinalCTA,
  Hero,
  HomeDataSkeleton,
  Industries,
  LocalPresence,
  Pricing,
  ProblemSection,
  Process,
  Services,
  TechStack,
  Testimonials,
  WebsiteAudit,
  Work,
} from "@/components/site/sections";
import { supabaseAdmin } from "@/lib/supabase/server";
import {
  demoProjects,
  faqs,
  pricing as defaultPricing,
  services,
} from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { absolute: "Premium AI Agency in Nagpur | NexusNova Studio" },
  description:
    "NexusNova Studio provides AI automation services, premium website development, CRM systems, and digital transformation solutions in Nagpur and across India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Premium AI Agency in Nagpur | NexusNova Studio",
    description:
      "Premium websites, AI automation, CRM development, and digital solutions for businesses in Nagpur and across India.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium AI Agency in Nagpur | NexusNova Studio",
    description:
      "AI automation, website development, CRM systems, and digital solutions for businesses across India.",
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
    "Premium AI agency providing website development, AI automation, CRM systems, and digital transformation solutions.",
  email: "nexeusnovastudio@gmail.com",
  telephone: "+91 75585 41331",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Nagpur" },
    { "@type": "Country", name: "India" },
  ],
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
    areaServed: ["Nagpur", "Maharashtra", "India"],
    url: siteUrl("/#services"),
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
    return { projects: demoProjects, plans: defaultPricing, testimonials: [] };
  }
  try {
    const sb = supabaseAdmin();
    const [{ data: projects }, { data: plans }, { data: testimonials }] =
      await Promise.all([
        sb
          .from("portfolio_projects")
          .select("*")
          .eq("status", "published")
          .order("created_at", { ascending: false })
          .limit(3),
        sb
          .from("pricing_plans")
          .select("*")
          .eq("status", "active")
          .order("price", { ascending: true }),
        sb
          .from("testimonials")
          .select("*")
          .eq("status", "published")
          .order("created_at", { ascending: false })
          .limit(3),
      ]);
    return {
      projects: projects?.length ? projects : demoProjects,
      plans: plans?.length ? plans : defaultPricing,
      testimonials: testimonials || [],
    };
  } catch {
    return { projects: demoProjects, plans: defaultPricing, testimonials: [] };
  }
}

async function DynamicHomeContent() {
  const content = await getHomeContent();

  return (
    <div className="content-fade">
      <Work projects={content.projects} />
      <Comparison />
      <Process />
      <TechStack />
      <Pricing plans={content.plans} />
      <Testimonials testimonials={content.testimonials} />
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
      <Industries />
      <Services />
      <LocalPresence />
      <WebsiteAudit />
      <Suspense fallback={<HomeDataSkeleton />}>
        <DynamicHomeContent />
      </Suspense>
      <FAQ />
      <FinalCTA />
    </>
  );
}
