"use client";

import { Activity, Play } from "lucide-react";
import { motion } from "framer-motion";
import { HeroCards } from "./hero-cards";

const headlineLines = [
  "Monitor Your",
  "Neural Activity",
  "In Real Time",
];

export function Hero() {
  return (
    <section className="relative min-h-screen hero-bg overflow-hidden px-5 pb-20 pt-10 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(100% 80% at 50% 100%, rgba(255,233,70,0.12), transparent 60%)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "48px 48px" }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="z-10 max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
              <span className="label-glass">
                <Activity size={12} />
                Real-Time Focus Visualization
              </span>
            </motion.div>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium uppercase leading-[0.95] tracking-[-0.02em] text-white">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.25, 0.4, 0.25, 1] } }),
                  }}
                  initial="hidden"
                  animate="visible"
                  className={`block ${i === 1 ? "ml-4 sm:ml-8" : i === 2 ? "ml-8 sm:ml-16" : ""}`}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 flex items-start gap-3"
            >
              <div className="mt-0.5 grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className={`block h-1.5 w-1.5 rounded-[1px] ${[0, 2, 4, 6, 8].includes(i) ? "bg-white/40" : "bg-white/10"}`} />
                ))}
              </div>
              <div>
                <p className="text-[13px] font-medium uppercase leading-[1.6] tracking-[0.06em] text-white/60">
                  Advanced brain-computer interface analytics for cognitive performance optimization.
                </p>
                <p className="mt-1 text-[13px] text-white/40">Track, analyze, and improve your mental state.</p>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <HeroCards />
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 lg:-translate-y-24">
          <div className="relative mx-auto max-w-[500px] lg:ml-0 lg:max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative aspect-square w-full"
              style={{
                maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 70%)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-ember/15 via-crimson/10 to-transparent blur-3xl" />
              <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full">
                <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <circle cx="250" cy="250" r="130" fill="none" stroke="rgba(254,117,1,0.06)" strokeWidth="0.5" />
                <motion.circle cx="250" cy="250" r="80" fill="none" stroke="rgba(255,233,70,0.08)" strokeWidth="0.5"
                  animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>

              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.div key={angle}
                  className="absolute h-1.5 w-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "rgba(254,117,1,0.5)" : "rgba(255,233,70,0.4)",
                    top: `calc(50% + ${130 * Math.sin(angle * Math.PI / 180)}px)`,
                    left: `calc(50% + ${130 * Math.cos(angle * Math.PI / 180)}px)`,
                  }}
                  animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.6, 1] }}
                  transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
                />
              ))}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="flex h-32 w-32 items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-full border border-ember/15" />
                  <div className="absolute inset-3 rounded-full border border-gold/10" />
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-ember/25 via-gold/15 to-crimson/10 blur-sm" />
                </motion.div>
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/20 blur-[80px]" />
              </div>

              {[...Array(10)].map((_, i) => (
                <motion.div key={i}
                  className="absolute h-0.5 w-0.5 rounded-full bg-white/30"
                  style={{ top: `${15 + Math.random() * 70}%`, left: `${15 + Math.random() * 70}%` }}
                  animate={{ y: [0, -16, 0], opacity: [0, 0.7, 0] }}
                  transition={{ duration: 3 + Math.random() * 3, delay: Math.random() * 2, repeat: Infinity }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
            >
              <div className="btn-play flex flex-col items-center justify-center gap-0.5">
                <Play size={20} className="fill-white text-white" />
                <span className="text-[9px] font-medium uppercase tracking-[0.06em] text-white/60">Explore Your Mind</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:hidden"><HeroCards /></div>
    </section>
  );
}
