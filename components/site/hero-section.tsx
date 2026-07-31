"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HoldButton } from "./hold-button";

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

const specialties = [
  "Medical Aesthetics",
  "Dental Implants",
  "Dermatology",
  "Orthopedics",
  "Wellness & Longevity",
  "HRT Clinics",
  "Private Surgery",
  "Sleep Medicine",
];

function LogoMarquee() {
  const track = [...specialties, ...specialties];
  return (
    <section className="relative z-10 border-y border-white/[0.04] bg-black/80 backdrop-blur-xl">
      <div className="group relative mx-auto max-w-premium px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:border-white/[0.04] md:pr-6">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.12em] text-white/30 md:text-end">
              Built for private practices
            </p>
          </div>
          <div className="relative w-full overflow-hidden py-6 md:w-[calc(100%-11rem)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 36 }}
              className="flex w-max items-center gap-14 whitespace-nowrap"
            >
              {track.map((name, i) => (
                <span
                  key={i}
                  className="flex items-center gap-14 font-mono text-xs uppercase tracking-[0.2em] text-white/25"
                >
                  <span>{name}</span>
                  <span className="text-blue/40">/</span>
                </span>
              ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
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
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover opacity-40"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="relative z-20 mx-auto flex min-h-screen max-w-premium flex-col items-center justify-center px-5 py-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="label-premium font-mono text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              PROPRIETARY AI INFRASTRUCTURE FOR PRIVATE CLINICS & MEDICAL PRACTICES
            </span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-center max-w-4xl"
          >
            <motion.span variants={itemVariants} className="block font-display text-[clamp(2rem,5vw,4rem)] font-light text-white leading-[1.1]">
              Stop Losing Private Patients to
            </motion.span>
            <motion.span variants={itemVariants} className="block font-display text-[clamp(2rem,5vw,4rem)] font-light bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 bg-clip-text text-transparent leading-[1.1]">
              Unanswered Inquiries and
            </motion.span>
            <motion.span variants={itemVariants} className="block font-display text-[clamp(2rem,5vw,4rem)] font-light text-white leading-[1.1]">
              Front-Desk Delays.
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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-6 max-w-2xl text-center font-mono text-sm leading-7 text-white/40"
          >
            We deploy custom 24/7 AI booking agents, instant intake workflows, and automated consultation scheduling directly into your practice—guaranteeing faster response times and zero lost leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <HoldButton href="/contact" label="Schedule Practice Audit" />
            <a href="/solutions" className="btn-secondary flex h-14 items-center px-6 font-mono text-xs uppercase tracking-[0.15em]">
              &gt; Explore ClinicOS Engine
            </a>
          </motion.div>
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

      <LogoMarquee />
    </>
  );
}
