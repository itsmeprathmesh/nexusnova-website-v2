"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASectionV2() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.15), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">
            Ready to Automate Patient Intake
            <br />
            <span className="text-gradient-blue">and Stop Losing Inquiries?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Book a 20-minute operational audit. We&apos;ll analyze your practice&apos;s current inquiry response times and show you how ClinicOS can double your booked consultations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary h-12 px-8 text-sm">
              Schedule Practice Audit
            </Link>
          </div>
          <p className="mt-6 text-sm font-mono text-white/50">
            No contract required &middot; 14-day deployment &middot; Tailored to your medical specialty
          </p>
        </motion.div>
      </div>
    </section>
  );
}
