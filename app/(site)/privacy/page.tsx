import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NexusNova Studio privacy policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="px-5 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link className="transition hover:text-teal-300" href="/">Home</Link>
          <span aria-hidden>/</span>
          <span>Privacy Policy</span>
        </nav>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-400">Last updated: July 2026</p>

        <div className="prose prose-invert prose-lg mt-10 max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            When you fill out our contact form, we collect your name, email
            address, phone number, business name, and any additional information
            you provide. We also collect standard web analytics data (page views,
            referral sources, browser type) through Google Analytics and Vercel
            Analytics.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to: respond to your inquiries, provide
            quotes and proposals, deliver our services, send relevant updates
            about our services, and improve our website and offerings. We do not
            sell your personal information to third parties.
          </p>

          <h2>3. Data Storage & Security</h2>
          <p>
            Your data is stored securely on Supabase (PostgreSQL) servers. We
            follow industry-standard security practices including encryption in
            transit and at rest, access controls, and regular security reviews.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide our
            services and comply with legal obligations. You may request deletion
            of your data at any time by contacting us.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to: access your personal data, correct inaccurate
            data, request deletion of your data, withdraw consent for marketing
            communications, and request a copy of your data in a portable format.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We use the following third-party services: Clerk (authentication),
            Supabase (database), Resend (email), Vercel (hosting & analytics),
            and Google Analytics. Each service has its own privacy policy
            governing data handling.
          </p>

          <h2>7. Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
            <a href="mailto:nexeusnovastudio@gmail.com" className="text-teal-300">
              nexeusnovastudio@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
