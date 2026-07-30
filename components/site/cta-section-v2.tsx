"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <span className="label-premium">Let&apos;s Build</span>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl">
            Ready to build something
            <br />
            <span className="text-gradient-blue">that actually works?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
            Book a free strategy call. We&apos;ll map your current workflow and
            recommend the right system. No pressure, just clarity.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary h-12 px-8 text-sm">
              Book a Strategy Call <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-secondary h-12 px-8 text-sm">
              View Case Studies
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/30">
            Reply within 24 hours · nexeusnovastudio@gmail.com · +91 75585 41331
          </p>
        </motion.div>
      </div>
    </section>
  );
}
