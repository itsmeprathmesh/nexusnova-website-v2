"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import KineticMetalShader from "@/components/site/kinetic-metal-shader";

const marqueeItems = ["CLINICOS", "∞", "AI BOOKING", "∞", "24/7 INTAKE", "∞"];

const HeroSection = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen space-y-24 relative max-w-screen overflow-x-hidden font-sans">
      {/* Kinetic Metal Shader background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <KineticMetalShader />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex items-center bg-purple/20 border border-purple/50 rounded-full pl-2 pr-4 py-1 text-purple mb-8 tracking-wider font-light"
        >
          <span className="bg-purple text-white px-3 py-1 rounded-full mr-2 text-xs font-light">2026</span>
          Next-Gen ClinicOS Engine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
          className="text-5xl sm:text-7xl font-bold leading-tight font-light"
        >
          AI-Driven Patient Success.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
          className="text-5xl sm:text-7xl font-bold leading-tight mb-6 font-light "
        >
          Redefining Clinic Operations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
          className="text-sm max-w-lg mb-2 font-light"
        >
          ClinicOS deploys 24/7 AI booking agents that turn every patient inquiry into a booked consultation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" as const }}
          className="text-sm max-w-lg mb-8 font-light"
        >
          Automated intake, instant scheduling, and patient reactivation — built for private practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-16"
        >
          <Link
            href="/contact"
            className="bg-white text-black px-5 py-2 cursor-pointer hover:bg-purple/40 rounded-md text-sm text-center transition-colors"
          >
            Schedule Practice Audit
          </Link>
          <Link
            href="/solutions"
            className="bg-white/10 text-white px-5 py-2 cursor-pointer hover:bg-purple rounded-md text-sm text-center transition-colors"
          >
            Explore ClinicOS Engine
          </Link>
        </motion.div>

        {/* Infinite Moving Fading Carousel */}
        <div className="w-full max-w-xl mx-auto overflow-hidden relative h-10 mb-20 z-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex w-max whitespace-nowrap text-white/60 text-xl"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-6">
                {item}
              </span>
            ))}
          </motion.div>
          {/* Fading gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-[400px] bg-gradient-to-t from-purple/50 via-purple/20 to-transparent rounded-t-full opacity-80 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
