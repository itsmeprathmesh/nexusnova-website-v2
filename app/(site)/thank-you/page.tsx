export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your strategy call request has been received by NexusNova Studio.",
  alternates: { canonical: "/contact" },
  robots: { index: false, follow: false },
};

export default function Thanks() {
  return (
    <section className="content-fade grid min-h-screen place-items-center px-5 text-center">
      <div className="glass-premium rounded-4xl px-10 py-14">
        <p className="text-sm font-mono uppercase tracking-[.35em] text-blue">_success()</p>
        <h1 className="text-gradient-blue mt-4 text-5xl font-bold">
          Thank you.
        </h1>
        <p className="mt-4 text-white/75">
          Your strategy call request was received. We&apos;ll contact you within
          24 hours with a custom roadmap for your business.
        </p>
        <Link href="/" className="btn-primary mt-10">
          Back home
        </Link>
      </div>
    </section>
  );
}
