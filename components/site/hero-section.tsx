"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AICore from "./ai-core";

const headlineWords = ["WE BUILD", "THE NEXT", "GENERATION", "OF AI BUSINESSES"];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(100% 80% at 50% 100%, rgba(59,130,246,0.12), transparent 60%)" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "linear-gradient(to right, rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
      />

      <div className="relative mx-auto max-w-premium">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-8"
            >
              <span className="label-premium">
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                AI Engineering Studio
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
                    }),
                  }}
                  initial="hidden"
                  animate={mounted ? "visible" : "hidden"}
                  className="block"
                >
                  {word}{i < headlineWords.length - 1 && <span className="text-blue/40">.</span>}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-8 max-w-xl"
            >
              <p className="text-[13px] font-medium uppercase leading-[1.8] tracking-[0.08em] text-white/50">
                Premium AI Websites<span className="text-blue/40">.</span> Automation<span className="text-blue/40">.</span> AI Systems<span className="text-blue/40">.</span> Digital Experiences<span className="text-blue/40">.</span>
              </p>
              <p className="mt-3 text-sm text-white/40">
                We engineer the systems that handle the repetitive work — so your team can focus on what matters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="/contact" className="btn-primary h-12 px-6 text-sm">
                Book a Strategy Call
              </a>
              <a href="/solutions" className="btn-secondary h-12 px-6 text-sm">
                View Services
              </a>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square w-full max-w-[500px] ml-auto">
              <AICore />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/30">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-blue/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
