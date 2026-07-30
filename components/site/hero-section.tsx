"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HoldButton } from "./hold-button";
import LightningShader from "./lightning-shader";

interface FeatureBadgeProps {
  name: string;
  value: string;
  position: string;
}

function FeatureBadge({ name, value, position }: FeatureBadgeProps) {
  return (
    <div className={`absolute ${position} z-10 transition-all duration-300 hover:scale-110`}>
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-2 w-2 rounded-full bg-blue" />
          <div className="absolute -inset-1 animate-pulse rounded-full bg-blue/20 blur-sm" />
        </div>
        <div>
          <div className="font-mono text-xs font-medium text-white">{name}</div>
          <div className="font-mono text-[10px] text-white/50">{value}</div>
          <div className="absolute -inset-2 -z-10 rounded-lg bg-white/[0.03] opacity-70 blur-md" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [touchLine, setTouchLine] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="relative z-20 mx-auto max-w-premium px-5 py-6 sm:px-8 lg:px-12 h-screen">
        {/* Hero content area */}
        <div className="relative z-30 flex flex-col items-center pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="label-premium font-mono text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              PROPRIETARY AI INFRASTRUCTURE FOR HEALTHCARE & CLINICS
            </span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-center max-w-4xl"
          >
            <motion.span variants={itemVariants} className="block font-display text-[clamp(2rem,5vw,4rem)] font-light text-white leading-[1.1]">
              Stop Losing Patients to
            </motion.span>
            <motion.span variants={itemVariants} className="block font-display text-[clamp(2rem,5vw,4rem)] font-light bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 bg-clip-text text-transparent leading-[1.1]">
              Unanswered Inquiries &amp;
            </motion.span>
            <motion.span variants={itemVariants} className="block font-display text-[clamp(2rem,5vw,4rem)] font-light text-white leading-[1.1]">
              Slow Follow-Ups
              <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-blink bg-blue align-middle" />
            </motion.span>
          </motion.h1>

          {/* Floating feature badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div variants={itemVariants}>
              <FeatureBadge name="AI Booking" value="24/7 lead capture" position="left-[5%] top-[30%]" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureBadge name="ClinicOS" value="operations platform" position="left-[22%] top-[18%]" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureBadge name="Patient Reactivation" value="automated sequences" position="right-[22%] top-[18%]" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureBadge name="EHR Sync" value="zero disruption" position="right-[5%] top-[30%]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-6 max-w-2xl text-center"
            onMouseEnter={() => setTouchLine(true)}
            onMouseLeave={() => setTouchLine(false)}
          >
            <p className="font-mono text-sm leading-7 text-white/40">
              We deploy custom AI booking agents, instant intake workflows, and unified CRM infrastructure directly into your practice—guaranteeing 24/7 lead response and more booked consultations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <HoldButton href="/contact" label="Book a Systems Demo" />
            <a href="/solutions" className="btn-secondary flex h-14 items-center px-6 font-mono text-xs uppercase tracking-[0.15em]">
              &gt; How ClinicOS Works
            </a>
          </motion.div>
        </div>

      </div>

      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70" />
        <LightningShader hue={220} speed={1.6} intensity={0.6} size={2} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-blue/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
