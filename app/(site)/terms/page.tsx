import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NexusNova terms of service — conditions for using our website and services.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="px-5 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/45">
          <Link className="transition hover:text-ember" href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>Terms of Service</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-white/40">Last updated: July 2026</p>

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
      </div>
    </section>
  );
}
