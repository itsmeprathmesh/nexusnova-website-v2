import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NexusNova terms of service — conditions for using our website and services.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="content-fade px-5 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
        <RevealOnScroll>
          <h1 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-white/40">Last updated: July 2026</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="prose prose-invert prose-lg mt-10 max-w-none">
          <h2 className="text-white">1. Services</h2>
          <p className="text-white/60">
            NexusNova provides AI automation, website development, and digital
            engineering services. Deliverables, timelines, and pricing are
            defined in individual project agreements.
          </p>

          <h2 className="text-white">2. Intellectual Property</h2>
          <p className="text-white/60">
            Upon full payment, clients retain full IP rights to custom systems
            we build. NexusNova retains the right to display completed work in
            our portfolio unless otherwise agreed.
          </p>

          <h2 className="text-white">3. Payment</h2>
          <p className="text-white/60">
            Payment terms are specified in the project agreement. Typical terms
            require 50% upfront and 50% upon completion.
          </p>

          <h2 className="text-white">4. Confidentiality</h2>
          <p className="text-white/60">
            We treat all client information as confidential and will not share
            project details without explicit consent.
          </p>

          <h2 className="text-white">5. Contact</h2>
          <p className="text-white/60">
            For questions, contact us at{" "}
            <a href="mailto:nexeusnovastudio@gmail.com" className="text-ember">
              nexeusnovastudio@gmail.com
            </a>.
          </p>
        </div>
          </RevealOnScroll>
      </div>
    </section>
  );
}
