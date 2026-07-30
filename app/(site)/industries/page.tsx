import type { Metadata } from "next";
import Link from "next/link";
import { UtensilsCrossed, Stethoscope, Building2, Scissors, GraduationCap, Wrench, ArrowRight } from "lucide-react";
import { OrbGridBackground, Reveal } from "@/components/site/motion";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { MagneticButton } from "@/components/site/magnetic-button";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "AI automation, websites, and CRM systems for restaurants, clinics, real estate, salons, coaching institutes, and local service businesses across India.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | NexusNova",
    description:
      "Six industries. One standard of work. Custom systems for your business type.",
    url: "/industries",
    images: ["/opengraph-image"],
  },
};

const industries = [
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants & Cafés",
    challenge: "Phone-only reservations. Outdated menus. Orders lost in the shuffle.",
    solution: "Online ordering portal, table reservation system, and menu management dashboard.",
    results: "40% more online orders. 60% reduction in reservation phone calls.",
    color: "text-blue",
  },
  {
    id: "clinics",
    icon: Stethoscope,
    name: "Clinics & Doctors",
    challenge: "High no-show rates. Staff spending hours on booking calls.",
    solution: "Self-scheduling portal, automated reminders, and patient intake automation.",
    results: "40% fewer no-shows. Staff reclaims 15+ hours per week.",
    color: "text-purple",
  },
  {
    id: "real-estate",
    icon: Building2,
    name: "Real Estate & Builders",
    challenge: "Property inquiries scattered across WhatsApp, phone, and website — no central tracking.",
    solution: "Unified CRM with lead capture from all channels, automated follow-up sequences, and pipeline tracking.",
    results: "50% faster follow-up. Clear ROI on ad spend. Every lead captured.",
    color: "text-blue",
  },
  {
    id: "salons",
    icon: Scissors,
    name: "Salons & Beauty",
    challenge: "Phone-only booking system. Clients frustrated by long hold times.",
    solution: "Online booking portal with real-time slot availability, automated reminders, and staff allocation.",
    results: "70% of bookings moved online. 35% increase in client retention.",
    color: "text-purple",
  },
  {
    id: "coaching",
    icon: GraduationCap,
    name: "Coaching Institutes",
    challenge: "High ad spend but no automated follow-up. Leads go cold within hours.",
    solution: "Automated intake from social media → inquiry capture → batch registration → WhatsApp reminders.",
    results: "4x ROI on ad campaigns. 60% of inquiries convert within 48 hours.",
    color: "text-blue",
  },
  {
    id: "local-services",
    icon: Wrench,
    name: "Local Service Businesses",
    challenge: "Manual scheduling and paper invoices. No systematic customer follow-up.",
    solution: "End-to-end operations system with self-booking, automated invoicing, and customer recall campaigns.",
    results: "30% more repeat business. Automated invoicing saves 10+ hours/week.",
    color: "text-purple",
  },
];

export default function IndustriesPage() {
  return (
    <div className="content-fade">
      <section className="relative overflow-hidden px-5 pb-24 pt-36">
        <OrbGridBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
        <div className="glow-orb left-0 top-20 h-80 w-80 bg-blue/20" />
        <div className="glow-orb right-0 top-36 h-96 w-96 bg-cyan/15" />
        <div className="relative mx-auto max-w-premium">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <span className="label-premium font-mono text-[10px]">_industries()</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
            Six industries.
            <br />
            <span className="text-gradient-blue">One standard of work.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/50">
            Every industry has unique workflows. We tailor automation systems
            to your business type, volume, and existing tools.
          </p>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-premium">
          <div className="grid gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.id} delay={i * 0.06}>
                  <div
                    id={ind.id}
                    className="glass-premium scroll-mt-28 rounded-5xl p-8 md:p-10"
                  >
                    <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
                      <div>
                        <div className="flex items-center gap-3">
                          <Icon className={ind.color} size={28} />
                          <h2 className="text-3xl font-bold text-white">
                            {ind.name}
                          </h2>
                        </div>
                        <div className="mt-6 space-y-4">
                          <div className="glass-premium-card rounded-3xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan/80">
                              Challenge
                            </p>
                            <p className="mt-2 text-white/60">
                              {ind.challenge}
                            </p>
                          </div>
                          <div className="glass-premium-card rounded-3xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-blue/80">
                              Solution
                            </p>
                            <p className="mt-2 text-white/60">
                              {ind.solution}
                            </p>
                          </div>
                          <div className="glass-premium-card rounded-3xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-purple/80">
                              Results
                            </p>
                            <p className="mt-2 text-white/60">
                              {ind.results}
                            </p>
                          </div>
                        </div>
                        <MagneticButton>
                          <Link
                            href="/contact"
                            className="btn-primary mt-6 inline-flex gap-2"
                          >
                            Discuss Your Business <ArrowRight size={16} />
                          </Link>
                        </MagneticButton>
                      </div>
                      <div className="glass-premium rounded-4xl p-6">
                        <p className="text-sm font-semibold text-blue">
                          Common automations
                        </p>
                        <ul className="mt-4 space-y-3">
                          {[
                            "Automated intake forms",
                            "Self-booking portal",
                            "WhatsApp & SMS reminders",
                            "Post-service follow-up sequences",
                            "Recall & re-engagement campaigns",
                            "Multi-channel lead CRM",
                          ].map((feat) => (
                            <li
                              key={feat}
                              className="flex items-center gap-3 text-sm text-white/50"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
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
    </div>
  );
}
