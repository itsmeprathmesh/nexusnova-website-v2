export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { LeadForm } from "./lead-form";
import { MessageCircle, MapPin, Clock, Mail, Zap } from "lucide-react";
import { siteUrl } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a strategy call with NexusNova. Discuss automating your business operations — AI systems, websites, and digital products.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Strategy Call | NexusNova",
    description:
      "Discuss your project with our team. We'll map your workflow and recommend the right system.",
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
      <div className="glow-orb left-0 top-20 h-80 w-80 bg-ember/20" />
      <div className="glow-orb right-0 top-36 h-96 w-96 bg-crimson/15" />
      <div className="relative mx-auto grid max-w-premium gap-10 md:grid-cols-2">
        <div>
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/45">
            <Link className="transition hover:text-ember" href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>Contact</span>
          </nav>
          <span className="label-premium">
            <Zap size={13} />
            Let&apos;s Talk
          </span>
          <h1 className="mt-4 text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
            Tell us about
            <br />
            <span className="text-gradient-ember">your project.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/50">
            We&apos;ll outline exactly how we can help. No generic proposals —
            just a clear plan designed for your business, workflow, and goals.
          </p>
          <p className="mt-5 text-sm leading-7 text-white/50">
            Review our{" "}
            <Link className="text-ember hover:text-gold" href="/solutions">
              services
            </Link>{" "}
            or explore{" "}
            <Link className="text-ember hover:text-gold" href="/portfolio">
              case studies
            </Link>
            .
          </p>
          <address className="mt-9 grid gap-4 not-italic sm:grid-cols-2">
            <div className="glass-premium-card rounded-4xl p-5">
              <Mail className="text-ember" size={20} />
              <p className="mt-3 font-semibold text-white">Email</p>
              <a className="text-sm text-white/45 transition hover:text-ember" href="mailto:nexeusnovastudio@gmail.com">
                nexeusnovastudio@gmail.com
              </a>
            </div>
            <div className="glass-premium-card rounded-4xl p-5">
              <MessageCircle className="text-ember" size={20} />
              <p className="mt-3 font-semibold text-white">WhatsApp</p>
              <a className="text-sm text-white/45 transition hover:text-ember" href="tel:+917558541331">
                +91 75585 41331
              </a>
            </div>
            <div className="glass-premium-card rounded-4xl p-5">
              <MapPin className="text-ember" size={20} />
              <p className="mt-3 font-semibold text-white">Location</p>
              <p className="text-sm text-white/45">Nagpur, Maharashtra, India</p>
            </div>
            <div className="glass-premium-card rounded-4xl p-5">
              <Clock className="text-ember" size={20} />
              <p className="mt-3 font-semibold text-white">Reply Time</p>
              <p className="text-sm text-white/45">Within 24 hours</p>
            </div>
          </address>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
