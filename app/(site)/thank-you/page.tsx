export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Thank You",
  description: "Your inquiry has been received by NexusNova Studio.",
  alternates: { canonical: "/contact" },
  robots: { index: false, follow: false },
};
export default function Thanks() {
  return (
    <section className="content-fade lux-bg grid min-h-screen place-items-center px-5 text-center">
      <div className="glass rounded-[2rem] px-7 py-12 sm:px-14">
        <p className="text-sm uppercase tracking-[.35em] text-violet-300">Success</p>
        <h1 className="text-gradient mt-4 text-5xl font-semibold">Thank you.</h1>
        <p className="mt-4 text-slate-400">
          Your inquiry was received. NexusNova Studio will contact you shortly.
        </p>
        <Link
          href="/"
          className="btn-lux mt-8 inline-flex px-6 py-3"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
