import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Target, Heart, Shield } from "lucide-react";
import { OrbGridBackground, Reveal } from "@/components/site/motion";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About NexusNova Studio",
  description:
    "We build AI automation systems that help healthcare clinics reduce no-shows, capture leads, and automate patient communication.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | NexusNova Studio",
    description:
      "Automation systems designed for healthcare. Built by people who understand clinics.",
    url: "/about",
    images: ["/opengraph-image"],
  },
};

const values = [
  {
    icon: Target,
    title: "Outcome-focused",
    desc: "We don't build technology for the sake of it. Every system we create has one goal: improve your clinic's operations and revenue.",
  },
  {
    icon: Heart,
    title: "Healthcare-first",
    desc: "We study clinic workflows before writing a line of code. Our systems are designed around patients and the teams who care for them.",
  },
  {
    icon: Shield,
    title: "Built to last",
    desc: "We use modern, scalable technology. Your system grows with your clinic — no rewrites, no dead ends, no vendor lock-in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="lux-bg noise relative overflow-hidden px-5 pb-24 pt-36">
        <OrbGridBackground className="opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
        <div className="orb left-0 top-20 h-80 w-80 bg-teal-500/20" />
        <div className="orb right-0 top-36 h-96 w-96 bg-blue-500/15" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link className="transition hover:text-teal-300" href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>About</span>
          </nav>
          <p className="eyebrow eyebrow-health">
            <Sparkles size={13} />
            About
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            We automate clinics so they can focus on patients.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            NexusNova Studio builds AI-powered automation systems for
            healthcare businesses across India. We&apos;re based in Nagpur but
            serve clinics nationwide.
          </p>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  Why we exist.
                </h2>
                <div className="mt-6 space-y-4 text-slate-400">
                  <p>
                    Most healthcare clinics run on scattered tools: WhatsApp for
                    booking, paper for records, phone calls for reminders. This
                    works — until it doesn&apos;t.
                  </p>
                  <p>
                    When patient volume grows, manual processes break.
                    No-shows increase. Leads get lost. Staff gets overwhelmed.
                  </p>
                  <p>
                    We exist to fix that. We build automation systems that
                    handle the repetitive work — booking, reminders, follow-ups,
                    lead capture — so your team can focus on what matters:
                    patient care.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-health rounded-[2rem] p-8">
                <h3 className="text-xl font-bold text-slate-50">
                  Our approach
                </h3>
                <div className="mt-6 space-y-6">
                  {[
                    ["Listen", "We start by understanding your clinic workflow, pain points, and goals."],
                    ["Design", "We map the ideal automated system — not a template, but a custom solution."],
                    ["Build", "We develop and test your system. You see progress weekly."],
                    ["Support", "We don&apos;t disappear after launch. Monthly optimization is part of the package."],
                  ].map(([step, desc]) => (
                    <div key={step} className="flex gap-4">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-400/20 text-sm font-bold text-teal-300">
                        {step[0]}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-50">{step}</p>
                        <p className="text-sm text-slate-400">{desc}</p>
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
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow eyebrow-health">Values</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
              How we work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal delay={i * 0.05} key={v.title}>
                <div className="glass-health rounded-[2rem] p-8">
                  <v.icon className="text-teal-300" size={32} />
                  <h3 className="mt-5 text-2xl font-bold text-slate-50">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-slate-400">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="lux-bg noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-teal-400/20 px-6 py-14 text-center sm:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold text-[#F8FAFC] sm:text-5xl">
              Ready to automate your clinic?
            </h2>
            <Link
              href="/contact"
              className="btn-lux btn-lux-health mt-8 inline-flex px-8 py-4"
            >
              Book a Strategy Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
