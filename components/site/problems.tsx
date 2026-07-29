import { Cpu, Globe, Layers, Zap } from "lucide-react";
import { Reveal, TiltCard } from "./motion";

const services = [
  {
    icon: Cpu,
    title: "AI Automation Systems",
    desc: "Custom AI agents and automation pipelines that eliminate manual workflows, capture every lead, and keep your operations running 24/7.",
  },
  {
    icon: Globe,
    title: "Premium Websites",
    desc: "High-performance websites built with Next.js. Cinematic animations, flawless UX, and conversion-optimized flows that set you apart.",
  },
  {
    icon: Layers,
    title: "SaaS & Platforms",
    desc: "Full-stack SaaS platforms with AI integration, real-time data, and dashboards. From concept to deployed product in weeks.",
  },
  {
    icon: Zap,
    title: "Digital Growth",
    desc: "End-to-end digital strategy: automation pipelines, CRM integration, analytics, and systems that multiply your output without adding headcount.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb left-1/3 top-0 h-80 w-80 bg-ember/10" />
      <div className="mx-auto max-w-premium">
        <Reveal>
          <span className="label-premium">What We Build</span>
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Engineering that moves
            <br />
            <span className="text-gradient-ember">your business forward.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/50">
            We don&apos;t build templates. Every system, website, and platform
            is engineered from the ground up for your specific needs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal delay={i * 0.08} key={s.title}>
              <TiltCard className="glass-premium-card group rounded-4xl p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember ring-1 ring-ember/20 transition group-hover:bg-ember/15 group-hover:ring-ember/30">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-4 leading-7 text-white/50">{s.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
