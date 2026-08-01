import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Heart, Shield } from "lucide-react";
import { OrbGridBackground, Reveal } from "@/components/site/motion";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { MagneticButton } from "@/components/site/magnetic-button";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About NexusNova",
  description:
    "We engineer AI-powered automation systems and premium digital experiences for growing businesses across India — from clinics and restaurants to real estate and coaching institutes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | NexusNova",
    description:
      "AI engineering studio — building automation systems and digital products for businesses across India.",
    url: "/about",
    images: ["/opengraph-image"],
  },
};

const values = [
  {
    icon: Target,
    title: "Outcome-focused",
    desc: "Every system we engineer has one goal: improve your operations and revenue.",
  },
  {
    icon: Heart,
    title: "Built for you",
    desc: "We study your workflow before writing a line of code. Our systems are designed around your business and the people who run it.",
  },
  {
    icon: Shield,
    title: "Built to last",
    desc: "Modern, scalable technology. Your system grows with you — no rewrites, no dead ends, no vendor lock-in.",
  },
];

export default function AboutPage() {
  return (
    <div className="content-fade">
      <section className="relative overflow-hidden px-5 pb-24 pt-36">
        <OrbGridBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
        <div className="glow-orb left-0 top-20 h-80 w-80 bg-blue/20" />
        <div className="glow-orb right-0 top-36 h-96 w-96 bg-cyan/15" />
        <div className="relative mx-auto max-w-premium">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <span className="label-premium font-mono text-[10px]">_about()</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
            We engineer systems,
            <br />
            <span className="text-gradient-blue">so you can focus on your business.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            NexusNova builds AI-powered automation systems and premium digital
            experiences for growing businesses across India — from clinics and
            restaurants to real estate and coaching institutes.
          </p>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-premium">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
                  Why we exist.
                </h2>
                <div className="mt-6 space-y-4 text-white/75">
                  <p className="font-mono text-sm text-white/70">
                    <span className="text-blue/50">&gt;</span> Most businesses run on scattered tools — WhatsApp, paper,
                    phone calls. It works until it doesn&apos;t.
                  </p>
                  <p className="font-mono text-sm text-white/70">
                    <span className="text-blue/50">&gt;</span> When volume grows, manual processes break. No-shows
                    increase. Leads get lost. Staff gets overwhelmed.
                  </p>
                  <p className="font-mono text-sm text-white/70">
                    <span className="text-blue/50">&gt;</span> We fix that. We engineer systems that handle the repetitive
                    work — booking, reminders, follow-ups, lead capture — so
                    your team can focus on what matters.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-premium rounded-5xl p-8">
                <h3 className="text-xl font-semibold text-white">
                  Our approach
                </h3>
                <div className="mt-6 space-y-6">
                  {[
                    ["Listen", "We start by understanding your workflow, pain points, and goals."],
                    ["Design", "We map the ideal system — not a template, but a custom solution."],
                    ["Build", "We develop and test your system. You see progress weekly."],
                    ["Support", "We don't disappear after launch. Ongoing optimization is part of the package."],
                  ].map(([step, desc]) => (
                    <div key={step} className="flex gap-4">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue/20 text-sm font-bold text-blue">
                        {step[0]}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{step}</p>
                        <p className="text-sm text-white/75">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-premium">
          <Reveal>
            <span className="label-premium font-mono text-[10px]">_values()</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
              How we work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal delay={i * 0.05} key={v.title}>
                <div className="glass-premium-card rounded-5xl p-8">
                  <v.icon className="text-blue" size={32} />
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-white/75">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-premium">
          <Reveal>
            <span className="label-premium font-mono text-[10px]">_trust()</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
              Data handling we take seriously.
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Encrypted connections, access-controlled admin panels, and secure
              hosting on every project by default. For clinics and healthcare
              clients specifically, we design patient-data flows around
              HIPAA-aligned practices as part of that engagement — happy to walk
              through exactly what that means for your system on a call, rather
              than a blanket certification claim that isn&apos;t ours to make yet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="glass-premium-glow relative mx-auto max-w-premium overflow-hidden rounded-5xl px-6 py-16 text-center sm:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              Ready to build?
            </h2>
            <MagneticButton>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Book a Strategy Call
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
