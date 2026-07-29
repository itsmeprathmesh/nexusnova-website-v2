import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NexusNova privacy policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="px-5 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/45">
          <Link className="transition hover:text-ember" href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>Privacy Policy</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-white/40">Last updated: July 2026</p>

        <div className="prose prose-invert prose-lg mt-10 max-w-none">
          <h2 className="text-white">1. Information We Collect</h2>
          <p className="text-white/60">
            When you fill out our contact form, we collect your name, email
            address, phone number, business name, and any additional information
            you provide. We also collect standard web analytics data through
            Google Analytics and Vercel Analytics.
          </p>

          <h2 className="text-white">2. How We Use Your Information</h2>
          <p className="text-white/60">
            We use your information to respond to your inquiries, provide
            quotes and proposals, deliver our services, send relevant updates,
            and improve our website. We do not sell your personal information.
          </p>

          <h2 className="text-white">3. Data Storage & Security</h2>
          <p className="text-white/60">
            Your data is stored securely on Supabase. We follow industry-standard
            security practices including encryption in transit and at rest.
          </p>

          <h2 className="text-white">4. Data Retention</h2>
          <p className="text-white/60">
            We retain your information as long as necessary to provide our
            services and comply with legal obligations. You may request deletion
            at any time.
          </p>

          <h2 className="text-white">5. Your Rights</h2>
          <p className="text-white/60">
            You have the right to access your data, correct inaccuracies, request
            deletion, withdraw consent for marketing, and request a portable copy.
          </p>

          <h2 className="text-white">6. Contact</h2>
          <p className="text-white/60">
            For privacy inquiries, contact us at{" "}
            <a href="mailto:nexeusnovastudio@gmail.com" className="text-ember">
              nexeusnovastudio@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
