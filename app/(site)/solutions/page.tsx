import type { Metadata } from "next";
import Link from "next/link";
import { Check, Stethoscope, Calendar, RefreshCw, Database, ArrowRight } from "lucide-react";
import { OrbGridBackground, Reveal } from "@/components/site/motion";
import { services } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Healthcare Automation Solutions",
  description:
    "Patient intake automation, appointment management, follow-up & recall systems, and lead CRM for healthcare clinics across India.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Healthcare Automation Solutions | NexusNova Studio",
    description:
      "Custom automation modules for patient intake, appointments, recall, and lead management.",
    url: "/solutions",
    images: ["/opengraph-image"],
  },
};

const icons = [Stethoscope, Calendar, RefreshCw, Database];

export default function SolutionsPage() {
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
            <span>Solutions</span>
          </nav>
          <p className="eyebrow eyebrow-health">Solutions</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Automation modules designed for clinics.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Four automation modules that work together or standalone. Each one
            is custom-built for your clinic&apos;s workflow.
          </p>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8">
            {services.map((service, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={service.title}>
                  <div
                    id={["intake", "appointments", "recall", "crm"][i]}
                    className="glass-health scroll-mt-28 rounded-[2rem] p-8 md:p-12"
                  >
                    <div className="grid items-center gap-8 md:grid-cols-[1fr_1.5fr]">
                      <div>
                        <div className="accent-gradient-health flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                          <Icon size={28} />
                        </div>
                        <p className="mt-4 text-sm text-teal-300/60">
                          0{i + 1}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-50">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-slate-400">
                          {service.solution}
                        </p>
                        <div className="mt-6 flex gap-3">
                          <Check
                            className="mt-1 shrink-0 text-teal-300"
                            size={18}
                          />
                          <p className="text-slate-300">{service.outcome}</p>
                        </div>
                        <Link
                          href="/contact"
                          className="btn-lux btn-lux-health mt-8 inline-flex gap-2 px-6 py-3"
                        >
                          Book a Strategy Call <ArrowRight size={16} />
                        </Link>
                      </div>
                      <div className="glass rounded-3xl p-6">
                        <p className="text-sm font-semibold text-teal-300">
                          What&apos;s included
                        </p>
                        <ul className="mt-4 space-y-3">
                          {[
                            "Custom setup for your clinic type",
                            "Team training & documentation",
                            "WhatsApp & email integration",
                            "Monthly performance reports",
                            "Ongoing support & optimization",
                          ].map((feat) => (
                            <li
                              key={feat}
                              className="flex items-center gap-3 text-sm text-slate-300"
                            >
                              <Check size={16} className="text-teal-300" />
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
        <div className="lux-bg noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-teal-400/20 px-6 py-14 text-center sm:px-10">
          <div className="orb left-10 top-10 h-72 w-72 bg-teal-500/20" />
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold text-[#F8FAFC] sm:text-5xl">
              Not sure which module you need?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              We&apos;ll map your current workflow and recommend the right
              system. No pressure, just clarity.
            </p>
            <Link
              href="/contact"
              className="btn-lux btn-lux-health mt-8 inline-flex px-8 py-4"
            >
              Book a Free Strategy Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
