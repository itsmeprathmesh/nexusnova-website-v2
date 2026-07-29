"use client";

import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-32 sm:px-6">
      {/* Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="neuro-orb left-1/4 top-1/4 h-[500px] w-[500px] bg-blue-500/20"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="neuro-orb right-1/4 top-1/3 h-[400px] w-[400px] bg-purple-500/15"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="neuro-orb bottom-1/4 right-1/3 h-[350px] w-[350px] bg-teal-500/20"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="eyebrow-neuro">AI Automation for Healthcare</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#F1F5F9] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block">AI Systems for</span>
          <span className="text-gradient-blue">Healthcare Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          We build custom AI automation for clinics, dental practices, and
          wellness centers — reducing no-shows, capturing more leads, and
          keeping patients engaged without adding overhead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/contact" className="btn-neuro group px-8 py-4 text-base">
            Get Your Strategy
            <ArrowRight size={16} className="ml-2 transition group-hover:translate-x-0.5" />
          </Link>
          <Link href="/solutions" className="btn-neuro-outline group text-base">
            See How It Works
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={20} className="animate-bounce text-slate-500" />
      </motion.div>
    </section>
  );
}
