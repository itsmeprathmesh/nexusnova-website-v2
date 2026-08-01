import type { Metadata } from "next";
import Link from "next/link";
import { Check, Cpu, Globe, Layers, Zap, ArrowRight } from "lucide-react";
import { OrbGridBackground, Reveal } from "@/components/site/motion";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { MagneticButton } from "@/components/site/magnetic-button";
import { services } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — AI Engineering & Digital Products",
  description:
    "Four core systems — web development, AI automation, CRM & dashboards, branding & growth — built custom for your business.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Services | NexusNova",
    description:
      "Custom web development, AI automation, CRM, and branding solutions engineered for your business.",
    url: "/solutions",
    images: ["/opengraph-image"],
  },
};

const moduleIcons = [Cpu, Globe, Layers, Zap];

export default function SolutionsPage() {
  return (
    <div className="content-fade">
      <section className="relative overflow-hidden px-5 pb-24 pt-36">
        <OrbGridBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
        <div className="glow-orb left-0 top-20 h-80 w-80 bg-blue/20" />
        <div className="glow-orb right-0 top-36 h-96 w-96 bg-cyan/15" />
        <div className="relative mx-auto max-w-premium">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <span className="label-premium font-mono text-[10px]">_services()</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
            Four systems.
            <br />
            <span className="text-gradient-blue">Built custom for your business.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Each one is custom-built for your business — no templates, no
            one-size-fits-all.
          </p>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-premium">
          <div className="grid gap-8">
            {services.map((service, i) => {
              const Icon = moduleIcons[i];
              return (
                <Reveal key={service.title}>
                  <div className="glass-premium scroll-mt-28 rounded-5xl p-8 md:p-12">
                    <div className="grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue/10 text-blue ring-1 ring-blue/20">
                          <Icon size={28} />
                        </div>
                        <p className="mt-4 text-sm font-mono text-blue/60">
                          0{i + 1}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="mt-4 font-mono text-sm text-white/70">
                          <span className="text-blue/50">&gt;</span> {service.solution}
                        </p>
                        <div className="mt-6 flex gap-3">
                          <span className="mt-1 shrink-0 text-[10px] font-mono text-blue/50">&gt;</span>
                          <p className="font-mono text-sm text-white/60">{service.outcome}</p>
                        </div>
                        <MagneticButton>
                          <Link
                            href="/contact"
                            className="btn-primary mt-8 inline-flex gap-2"
                          >
                            Book a Call <ArrowRight size={16} />
                          </Link>
                        </MagneticButton>
                      </div>
                      <div className="glass-premium rounded-4xl p-6">
                        <p className="text-sm font-mono text-blue">
                          <span className="text-blue/50">&gt;</span> _included
                        </p>
                        <ul className="mt-4 space-y-3">
                          {[
                            "Custom setup for your business type",
                            "Team training & documentation",
                            "WhatsApp & email integration",
                            "Monthly performance reports",
                            "Ongoing support & optimization",
                          ].map((feat) => (
                            <li
                              key={feat}
                              className="flex items-center gap-3 font-mono text-sm text-white/75"
                            >
                              <span className="text-blue/40">&gt;</span>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-premium">
          <Reveal>
            <span className="label-premium font-mono text-[10px]">_pricing()</span>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
              Simple, transparent pricing.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Launch", price: "₹39,999", desc: "Single service, one industry use case.", features: ["Custom-built for your business type", "One core system", "2-week delivery", "Team training & documentation", "30-day post-launch support"], popular: false },
              { name: "Growth", price: "₹29,999/mo", desc: "Ongoing system + support retainer.", features: ["Everything in Launch", "Monthly performance reports", "Priority support & optimization", "Quarterly strategy review", "New feature development"], popular: true },
              { name: "Scale", price: "Custom", desc: "Multi-system builds, enterprise-scale.", features: ["Everything in Growth", "Multi-location support", "Custom integrations", "Cross-department automation", "Dedicated support"], popular: false },
            ].map((plan, i) => (
              <Reveal delay={i * 0.05} key={plan.name}>
                <div className={`glass-premium-card rounded-5xl p-8 ${plan.popular ? "ring-1 ring-blue/30" : ""}`}>
                  {plan.popular && (
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.12em] text-blue">
                      &gt; _popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold text-white ${plan.popular ? "mt-2" : ""}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-4xl font-bold text-white">{plan.price}</p>
                  <p className="mt-2 text-sm text-white/75">{plan.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-mono text-sm text-white/60">
                        <span className="shrink-0 text-blue/50">&gt;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[3.2px] px-5 py-2.5 text-sm font-medium transition ${
                        plan.popular
                          ? "bg-white text-black hover:bg-white/85"
                          : "border border-white/10 bg-transparent text-white hover:bg-white/5"
                      }`}
                    >
                      Get Started
                    </Link>
                  </MagneticButton>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="glass-premium-glow relative mx-auto max-w-premium overflow-hidden rounded-5xl px-6 py-16 text-center sm:px-10">
          <div className="glow-orb left-10 top-10 h-72 w-72 bg-blue/15" />
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-mono text-sm text-white/75">
              <span className="text-blue/50">&gt;</span> We&apos;ll map your current workflow and recommend the right
              system. No pressure, just clarity.
            </p>
            <MagneticButton>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Book a Free Strategy Call
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
