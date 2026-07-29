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
    "AI automation systems, premium websites, and SaaS platforms for healthcare and service businesses.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Services | NexusNova",
    description:
      "Custom AI automation, websites, and digital platforms engineered for your business.",
    url: "/solutions",
    images: ["/opengraph-image"],
  },
};

const icons = [Cpu, Globe, Layers, Zap];
const moduleIcons = [Cpu, Globe, Layers, Zap];

export default function SolutionsPage() {
  return (
    <div className="content-fade">
      <section className="relative overflow-hidden px-5 pb-24 pt-36">
        <OrbGridBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
        <div className="glow-orb left-0 top-20 h-80 w-80 bg-ember/20" />
        <div className="glow-orb right-0 top-36 h-96 w-96 bg-crimson/15" />
        <div className="relative mx-auto max-w-premium">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <span className="label-premium">What We Build</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
            Systems engineered
            <br />
            <span className="text-gradient-ember">for growth.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/50">
            Four core capabilities that work together or standalone. Each one
            is custom-built for your business.
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
                  <div
                    id={["intake", "appointments", "recall", "crm"][i]}
                    className="glass-premium scroll-mt-28 rounded-5xl p-8 md:p-12"
                  >
                    <div className="grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/10 text-ember ring-1 ring-ember/20">
                          <Icon size={28} />
                        </div>
                        <p className="mt-4 text-sm font-mono text-ember/60">
                          0{i + 1}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-white/50">
                          {service.solution}
                        </p>
                        <div className="mt-6 flex gap-3">
                          <Check
                            className="mt-1 shrink-0 text-ember"
                            size={18}
                          />
                          <p className="text-white/60">{service.outcome}</p>
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
                        <p className="text-sm font-semibold text-ember">
                          What&apos;s included
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
                              className="flex items-center gap-3 text-sm text-white/50"
                            >
                              <Check size={16} className="text-ember" />
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
        <div className="glass-premium-glow relative mx-auto max-w-premium overflow-hidden rounded-5xl px-6 py-16 text-center sm:px-10">
          <div className="glow-orb left-10 top-10 h-72 w-72 bg-ember/15" />
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/50">
              We&apos;ll map your current workflow and recommend the right
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
