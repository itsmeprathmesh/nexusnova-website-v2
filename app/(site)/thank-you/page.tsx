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
      <div className="neuro-glass rounded-[2rem] px-7 py-12 sm:px-14">
        <p className="text-sm uppercase tracking-[.35em] text-blue-300">
          Success
        </p>
        <h1 className="text-gradient-blue mt-4 text-5xl font-bold">
          Thank you.
        </h1>
        <p className="mt-4 text-slate-400">
          Your strategy call request was received. NexusNova Studio will
          contact you within 24 hours with a custom automation roadmap for your
          clinic.
        </p>
        <Link href="/" className="btn-neuro mt-8 inline-flex px-6 py-3">
          Back home
        </Link>
      </div>
    </section>
  );
}
