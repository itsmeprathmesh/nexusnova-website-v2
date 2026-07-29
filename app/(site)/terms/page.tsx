import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "NexusNova Studio terms of service — conditions for using our website and services.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="px-5 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link className="transition hover:text-teal-300" href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>Terms of Service</span>
        </nav>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-400">Last updated: July 2026</p>

        <div className="prose prose-invert prose-lg mt-10 max-w-none">
          <h2>1. Services</h2>
          <p>
            NexusNova Studio provides website development, AI automation
            systems, CRM development, and related digital services for
            healthcare businesses. Specific deliverables, timelines, and pricing
            are defined in individual project agreements.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            Upon full payment, clients retain full intellectual property rights
            to the custom systems we build. NexusNova Studio retains the right
            to display completed work in our portfolio unless otherwise agreed.
          </p>

          <h2>3. Project Terms</h2>
          <p>
            Project scope, timeline, and payment terms are defined in a separate
            project agreement signed by both parties. Changes to scope may
            affect timeline and pricing.
          </p>

          <h2>4. Payment</h2>
          <p>
            Payment terms are specified in the project agreement. Typical terms
            require 50% upfront and 50% upon completion. Monthly retainer
            services are billed at the beginning of each month.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            We treat all client information as confidential and will not share
            project details, business data, or patient information with third
            parties without explicit consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            NexusNova Studio&apos;s liability is limited to the total amount
            paid for the specific project giving rise to the claim. We are not
            liable for indirect damages including loss of revenue or business
            interruption.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:nexeusnovastudio@gmail.com" className="text-teal-300">
              nexeusnovastudio@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
