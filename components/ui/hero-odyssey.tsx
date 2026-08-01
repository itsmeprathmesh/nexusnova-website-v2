"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LightningShader from "@/components/site/lightning-shader";

interface FeatureItemProps {
  name: string;
  value: string;
  position: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
  return (
    <div className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}>
      <div className="flex items-center gap-2 relative">
        {/* Dot with constant glow */}
        <div className="relative">
          <div className="w-2 h-2 bg-blue rounded-full group-hover:animate-pulse"></div>
          <div className="absolute -inset-1 bg-blue/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-white relative">
          <div className="font-mono text-xs font-medium group-hover:text-white transition-colors duration-300">
            {name}
          </div>
          <div className="text-white/75 text-sm group-hover:text-white/70 transition-colors duration-300">
            {value}
          </div>
          {/* Constant white glow that intensifies on hover */}
          <div className="absolute -inset-2 bg-white/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

interface HeroSectionProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  hue = 220,
  xOffset = 0,
  speed = 1.6,
  intensity = 0.6,
  size = 2,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Main container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-20 h-screen">
        {/* Floating feature badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full z-20 top-[30%] relative"
        >
          <motion.div variants={itemVariants}>
            <FeatureItem name="AI Booking" value="24/7 lead capture" position="left-0 sm:left-10 top-40" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="ClinicOS" value="operations platform" position="left-1/4 top-24" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="Patient Reactivation" value="automated sequences" position="right-1/4 top-24" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="EHR Sync" value="zero disruption" position="right-0 sm:right-10 top-40" />
          </motion.div>
        </motion.div>

        {/* Main hero content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex min-h-full flex-col items-center justify-center text-center max-w-4xl mx-auto pt-32 pb-10"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-light mb-2">
            Stop Losing Private Patients
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl pb-3 font-light bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent"
          >
            to Unanswered Inquiries & Delays
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-300 mb-9 max-w-2xl">
            ClinicOS deploys custom 24/7 AI booking agents, instant intake workflows, and automated scheduling directly into your practice — so every patient inquiry becomes a booked consultation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                Schedule Practice Audit
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 backdrop-blur-sm rounded-full text-gray-200 hover:text-white hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Explore ClinicOS Engine
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Glowing circle */}
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"></div>

        {/* Central light beam */}
        <div className="absolute top-0 w-[100%] left-1/2 transform -translate-x-1/2 h-full">
          <LightningShader
            hue={hue}
            xOffset={xOffset}
            speed={speed}
            intensity={intensity}
            size={size}
          />
        </div>

        {/* Planet/sphere */}
        <div className="z-10 absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] backdrop-blur-3xl rounded-full bg-[radial-gradient(circle_at_25%_90%,_#1e386b_15%,_#000000de_70%,_#000000ed_100%)]"></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
