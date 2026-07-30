"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "UI" },
  { name: "Three.js", category: "3D" },
  { name: "GSAP", category: "Animation" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Lenis", category: "Scroll" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Backend" },
  { name: "Clerk", category: "Auth" },
  { name: "OpenAI", category: "AI" },
  { name: "Vercel", category: "Platform" },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-premium">Technology Stack</span>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Modern tools.{" "}
            <span className="text-gradient-blue">Scalable systems.</span>
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group rounded-[3.2px] border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 transition hover:border-blue/30 hover:bg-blue/[0.04]"
            >
              <span className="text-sm font-medium text-white/70 transition group-hover:text-white">{tech.name}</span>
              <span className="ml-2 text-[10px] uppercase tracking-wider text-white/20">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
