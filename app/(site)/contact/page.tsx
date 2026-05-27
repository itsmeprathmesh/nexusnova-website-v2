export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { LeadForm } from "./lead-form";
import { MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { siteUrl } from "@/lib/utils";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Contact an AI Agency in Nagpur",
  description:
    "Book a strategy call with NexusNova Studio for AI automation services, website development, CRM systems, and digital solutions in Nagpur, India.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact NexusNova Studio | AI Agency in Nagpur",
    description:
      "Discuss AI automation, website development, and digital transformation with our Nagpur-based studio.",
    url: "/contact",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NexusNova Studio | AI Agency in Nagpur",
    description:
      "Discuss AI automation, website development, and digital transformation with our Nagpur-based studio.",
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
    <section className="content-fade lux-bg noise relative overflow-hidden px-5 pb-24 pt-36">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <div className="orb left-0 top-20 h-80 w-80 bg-blue-500/20" />
      <div className="orb right-0 top-36 h-96 w-96 bg-fuchsia-500/15" />
      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-400"
          >
            <Link className="transition hover:text-violet-300" href="/">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span>Contact</span>
          </nav>
          <p className="text-sm uppercase tracking-[.35em] text-violet-300">
            Contact
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
            Start your website or AI automation project.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Share your business details. Our Nagpur-based studio will outline
            a clear website development, CRM, or automation roadmap for your
            next step in India&apos;s digital market.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Review our{" "}
            <Link className="text-blue-300 hover:text-violet-300" href="/#services">
              AI automation and website services
            </Link>{" "}
            or explore{" "}
            <Link className="text-blue-300 hover:text-violet-300" href="/portfolio">
              client-ready case studies
            </Link>
            .
          </p>
          <address className="mt-9 grid gap-4 not-italic sm:grid-cols-2">
            <div className="glass rounded-3xl p-5">
              <Mail className="text-blue-300" />
              <p className="mt-3 font-bold">Email</p>
              <a
                className="text-sm text-slate-400 transition hover:text-violet-300"
                href="mailto:nexeusnovastudio@gmail.com"
              >
                nexeusnovastudio@gmail.com
              </a>
            </div>
            <div className="glass rounded-3xl p-5">
              <MessageCircle className="text-violet-300" />
              <p className="mt-3 font-bold">WhatsApp</p>
              <a
                className="text-sm text-slate-400 transition hover:text-violet-300"
                href="tel:+917558541331"
              >
                +91 75585 41331
              </a>
            </div>
            <div className="glass rounded-3xl p-5">
              <MapPin className="text-fuchsia-300" />
              <p className="mt-3 font-bold">Location</p>
              <p className="text-sm text-slate-400">
                Nagpur, Maharashtra, India
              </p>
            </div>
            <div className="glass rounded-3xl p-5">
              <Clock className="text-blue-300" />
              <p className="mt-3 font-bold">Reply Time</p>
              <p className="text-sm text-slate-400">Within 24 hours</p>
            </div>
          </address>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
