"use client";

import { motion } from "framer-motion";
import { HeroSection as HeroOdyssey } from "@/components/ui/hero-odyssey";

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
  return (
    <>
      <HeroOdyssey />
      <LogoMarquee />
    </>
  );
}
