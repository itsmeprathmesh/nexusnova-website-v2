import type { Metadata } from "next";
import Link from "next/link";
import { Smile, Eye, Heart, Syringe, Stethoscope, ArrowRight } from "lucide-react";
import { OrbGridBackground, Reveal } from "@/components/site/motion";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Industries — Healthcare Automation",
  description:
    "Automation systems for dental clinics, skin & cosmetics, physiotherapy, eye clinics, and multi-specialty healthcare providers.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Healthcare Industries | NexusNova Studio",
    description:
      "Tailored automation solutions for every healthcare specialty.",
    url: "/industries",
    images: ["/opengraph-image"],
  },
};

const industries = [
  {
    id: "dental",
    icon: Smile,
    name: "Dental Clinics",
    challenge:
      "High no-show rates for hygiene appointments. Staff spending hours on booking calls.",
    solution:
      "Self-scheduling portal, automated WhatsApp reminders, and 6-month recall campaigns.",
    results: "40% fewer no-shows. Staff reclaims 15+ hours per week.",
    color: "text-teal-300",
  },
  {
    id: "skin",
    icon: Syringe,
    name: "Skin & Cosmetics",
    challenge:
      "Leads coming from Instagram and ads but no systematic follow-up. Consultations going cold.",
    solution:
      "Multi-channel lead CRM, automated consultation booking, treatment cycle follow-ups.",
    results: "60% of leads book within 48 hours. 4x ROI on ad spend.",
    color: "text-violet-300",
  },
  {
    id: "physio",
    icon: Heart,
    name: "Physiotherapy",
    challenge:
      "Patients complete treatment and never return. No recall system for maintenance.",
    solution:
      "Progress tracking, automated recall at 3/6/12 month intervals, referral workflows.",
    results: "35% increase in repeat visits. Automated recall for 200+ past patients.",
    color: "text-blue-300",
  },
  {
    id: "eye",
    icon: Eye,
    name: "Eye Clinics",
    challenge:
      "Annual check-up reminders are manual. Multi-location scheduling is chaotic.",
    solution:
      "Automated annual recall, multi-location booking, prescription management.",
    results: "Centralized booking. 25% increase in patient retention.",
    color: "text-teal-300",
  },
  {
    id: "multi",
    icon: Stethoscope,
    name: "Multi-specialty",
    challenge:
      "Cross-department referrals are manual. No unified view of patient journey.",
    solution:
      "Cross-specialty referral automation, unified patient timeline, centralized booking.",
    results: "30% more cross-referrals. Complete patient visibility.",
    color: "text-violet-300",
  },
];

export default function IndustriesPage() {
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
            <span>Industries</span>
          </nav>
          <p className="eyebrow eyebrow-health">Industries</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Built for healthcare — by people who understand it.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Every specialty has unique workflows. We tailor automation systems
            to your clinic type, patient volume, and existing tools.
          </p>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.id} delay={i * 0.06}>
                  <div
                    id={ind.id}
                    className="glass-health scroll-mt-28 rounded-[2rem] p-8 md:p-10"
                  >
                    <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
                      <div>
                        <div className="flex items-center gap-3">
                          <Icon className={ind.color} size={28} />
                          <h2 className="text-3xl font-bold text-slate-50">
                            {ind.name}
                          </h2>
                        </div>
                        <div className="mt-6 space-y-4">
                          <div className="glass rounded-2xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
                              Challenge
                            </p>
                            <p className="mt-2 text-slate-300">
                              {ind.challenge}
                            </p>
                          </div>
                          <div className="glass rounded-2xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                              Solution
                            </p>
                            <p className="mt-2 text-slate-300">
                              {ind.solution}
                            </p>
                          </div>
                          <div className="glass rounded-2xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                              Results
                            </p>
                            <p className="mt-2 text-slate-300">
                              {ind.results}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="btn-lux btn-lux-health mt-6 inline-flex gap-2 px-6 py-3"
                        >
                          Discuss Your Clinic <ArrowRight size={16} />
                        </Link>
                      </div>
                      <div className="glass-health rounded-3xl p-6">
                        <p className="text-sm font-semibold text-teal-300">
                          Common automations for {ind.name.toLowerCase()}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {[
                            "Automated patient intake forms",
                            "Self-booking appointment portal",
                            "WhatsApp & SMS reminders",
                            "Post-visit follow-up sequences",
                            "Recall & re-engagement campaigns",
                            "Multi-channel lead CRM",
                          ].map((feat) => (
                            <li
                              key={feat}
                              className="flex items-center gap-3 text-sm text-slate-300"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
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
    </>
  );
}
