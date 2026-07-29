export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { LeadForm } from "./lead-form";
import { MessageCircle, MapPin, Clock, Mail, Stethoscope } from "lucide-react";
import { siteUrl } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a strategy call with NexusNova Studio. Discuss automating your clinic operations — patient intake, appointments, follow-up, and lead CRM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Strategy Call | NexusNova Studio",
    description:
      "Discuss clinic automation with our team. We'll map your workflow and recommend the right system.",
    url: "/contact",
    images: ["/opengraph-image"],
  },
};

export default function Contact() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Contact" },
    ],
  };

  return (
    <section className="content-fade relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="neuro-orb left-0 top-20 h-80 w-80 bg-blue-500/20" />
      <div className="neuro-orb right-0 top-36 h-96 w-96 bg-purple-500/15" />
      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-400"
          >
            <Link className="transition hover:text-blue-300" href="/">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span>Contact</span>
          </nav>
          <p className="eyebrow-neuro">
            <Stethoscope size={13} />
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#F1F5F9] md:text-7xl">
            Tell us about your clinic.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            We&apos;ll outline exactly how automation changes your operations.
            No generic proposals — just a clear system designed for your
            workflow, patient volume, and goals.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Review our{" "}
            <Link className="text-blue-300 hover:text-blue-200" href="/solutions">
              automation solutions
            </Link>{" "}
            or explore{" "}
            <Link className="text-blue-300 hover:text-blue-200" href="/portfolio">
              healthcare case studies
            </Link>
            .
          </p>
          <address className="mt-9 grid gap-4 not-italic sm:grid-cols-2">
            <div className="neuro-glass rounded-3xl p-5">
              <Mail className="text-blue-300" />
              <p className="mt-3 font-bold text-[#F1F5F9]">Email</p>
              <a
                className="text-sm text-slate-400 transition hover:text-blue-300"
                href="mailto:nexeusnovastudio@gmail.com"
              >
                nexeusnovastudio@gmail.com
              </a>
            </div>
            <div className="neuro-glass rounded-3xl p-5">
              <MessageCircle className="text-blue-300" />
              <p className="mt-3 font-bold text-[#F1F5F9]">WhatsApp</p>
              <a
                className="text-sm text-slate-400 transition hover:text-blue-300"
                href="tel:+917558541331"
              >
                +91 75585 41331
              </a>
            </div>
            <div className="neuro-glass rounded-3xl p-5">
              <MapPin className="text-blue-300" />
              <p className="mt-3 font-bold text-[#F1F5F9]">Location</p>
              <p className="text-sm text-slate-400">
                Nagpur, Maharashtra, India
              </p>
            </div>
            <div className="neuro-glass rounded-3xl p-5">
              <Clock className="text-blue-300" />
              <p className="mt-3 font-bold text-[#F1F5F9]">Reply Time</p>
              <p className="text-sm text-slate-400">Within 24 hours</p>
            </div>
          </address>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
