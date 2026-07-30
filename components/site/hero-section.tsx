"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HoldButton } from "./hold-button";

const InteractiveAICore = dynamic(() => import("./interactive-particles"), { ssr: false });

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [touchLine, setTouchLine] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(100% 80% at 50% 100%, rgba(59,130,246,0.15), transparent 60%)" }}
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
              <span className="label-premium font-mono text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                _studio.init()
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.85] tracking-[-0.04em] text-white">
              {["We Build", "AI Businesses", "That Scale."].map((line, i) =>
                i === 2 ? (
                  <motion.span
                    key={line}
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] } }),
                    }}
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                    className="block"
                  >
                    {line}
                    <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-blink bg-blue align-middle" />
                  </motion.span>
                ) : (
                  <motion.span
                    key={line}
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] } }),
                    }}
                    initial="hidden"
                    animate={mounted ? "visible" : "hidden"}
                    className="block"
                  >
                    {line}{i < 2 && <span className="text-blue/30">.</span>}
                  </motion.span>
                ),
              )}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 max-w-xl"
              onMouseEnter={() => setTouchLine(true)}
              onMouseLeave={() => setTouchLine(false)}
            >
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-white/30">
                <span className={`transition-colors duration-300 ${touchLine ? "text-blue" : "text-blue/50"}`}>
                  &gt;
                </span>
                <span className={`transition-all duration-500 ${touchLine ? "text-white/60 tracking-[0.2em]" : ""}`}>
                  Dare to touch the lines.
                </span>
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/15">
                Premium AI Websites / Automation / Internal Tools / Brand Systems
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <HoldButton href="/contact" label="Initialize Project" />
              <a href="/solutions" className="btn-secondary h-14 px-6 text-xs font-mono uppercase tracking-[0.15em]">
                &gt; View Services
              </a>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={mounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-square w-full max-w-[520px] ml-auto"
            >
              <InteractiveAICore />
            </motion.div>
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
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-blue/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
