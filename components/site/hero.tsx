"use client";

import { ArrowRight, Activity, BarChart3, Code, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const floatingCards = [
  {
    icon: Zap,
    label: "AI Automation",
    value: "92%",
    sub: "faster workflows",
    delay: 1.4,
    className: "top-[15%] right-[5%] w-44 md:top-[12%] md:right-[8%] md:w-52",
  },
  {
    icon: Code,
    label: "Webships",
    value: "24+",
    sub: "premium launches",
    delay: 1.8,
    className: "top-[45%] -right-[2%] w-40 md:top-[42%] md:right-0 md:w-48",
  },
  {
    icon: BarChart3,
    label: "Client Growth",
    value: "3.2x",
    sub: "avg. ROI",
    delay: 2.2,
    className: "top-[72%] right-[8%] w-44 md:top-[70%] md:right-[12%] md:w-52",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-32 pb-20 sm:pt-40 md:pt-44">
      {/* Ambient glow layers */}
      <div className="glow-orb left-1/4 top-[10%] h-[600px] w-[600px] bg-ember/20" />
      <div className="glow-orb right-1/3 top-[20%] h-[400px] w-[400px] bg-crimson/15" />
      <div className="glow-orb left-[45%] top-[40%] h-[300px] w-[300px] bg-gold/10" />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-premium">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: Text */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="label-premium">AI Engineering Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              We engineer AI
              <br />
              <span className="text-gradient-ember">systems & digital</span>
              <br />
              experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 sm:text-xl"
            >
              Custom AI automation, premium websites, and SaaS platforms for
              businesses that want to move faster, work smarter, and stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link href="/contact" className="btn-primary group">
                Start Your Project
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
              <Link href="/portfolio" className="btn-secondary group">
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual + floating cards */}
          <div className="relative hidden lg:block">
            {/* Central hero graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative mx-auto h-[520px] w-[520px]"
            >
              {/* Outer glow ring */}
              <div className="glow-orb absolute inset-0 bg-ember/20 animate-glow-pulse" />

              {/* Concentric rings */}
              <svg
                viewBox="0 0 520 520"
                className="absolute inset-0 h-full w-full animate-float-slow"
              >
                <circle
                  cx="260" cy="260" r="200"
                  fill="none"
                  stroke="rgba(254,117,1,0.08)"
                  strokeWidth="1"
                />
                <circle
                  cx="260" cy="260" r="155"
                  fill="none"
                  stroke="rgba(255,233,70,0.05)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Orbital nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute h-2 w-2 rounded-full bg-ember/40"
                  style={{
                    top: `calc(50% + ${155 * Math.sin(angle * Math.PI / 180)}px)`,
                    left: `calc(50% + ${155 * Math.cos(angle * Math.PI / 180)}px)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Abstract core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex h-28 w-28 items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-full border border-ember/20" />
                  <div className="absolute inset-4 rounded-full border border-gold/10" />
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ember/30 to-gold/20 blur-sm" />
                </motion.div>

                {/* Center glow */}
                <div className="glow-orb absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 bg-ember/15" />
              </div>

              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white/20"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    delay: Math.random() * 3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`glass-premium-card absolute ${card.className} p-4 animate-float-slower`}
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ember/10">
                    <card.icon size={14} className="text-ember" />
                  </div>
                  <span className="text-xs text-white/50">{card.label}</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-white">
                  {card.value}
                </p>
                <p className="text-xs text-white/40">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile floating cards */}
        <div className="mt-12 flex flex-wrap gap-3 lg:hidden">
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay }}
              className="glass-premium-card flex-1 p-3 text-center min-w-[100px]"
            >
              <card.icon size={14} className="mx-auto text-ember" />
              <p className="mt-1 text-lg font-bold text-white">{card.value}</p>
              <p className="text-[10px] text-white/40">{card.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
