import { Reveal } from "./motion";
import { Rocket, Search, FileCode, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We map your workflows, pain points, patient volume, and existing tools to design the right system.",
  },
  {
    icon: FileCode,
    title: "Design & Build",
    desc: "We create the automation blueprint and develop your custom system — patient intake, booking flow, reminder cadence, recall sequences.",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We deploy, train your team, and hand over documentation. Ongoing support ensures everything runs smoothly.",
  },
  {
    icon: HeartHandshake,
    title: "Grow",
    desc: "We don't disappear after launch. Monthly optimization and support keep your system evolving with your business.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb right-1/4 top-0 h-80 w-80 bg-gold/8" />
      <div className="mx-auto max-w-premium">
        <Reveal>
          <span className="label-premium">Process</span>
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            From discovery to launch
            <br />
            <span className="text-gradient-ember">in weeks, not months.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal delay={i * 0.08} key={step.title}>
              <div className="glass-premium-card rounded-4xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember ring-1 ring-ember/20">
                  <step.icon size={22} />
                </div>
                <p className="mt-4 text-sm font-mono text-ember/60">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-white/50">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn-primary group">
              Start Your Project
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
