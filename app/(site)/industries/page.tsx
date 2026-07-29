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
    title: "Industries | NexusNova",
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
    challenge: "High no-show rates. Staff spending hours on booking calls.",
    solution: "Self-scheduling portal, automated WhatsApp reminders, and 6-month recall campaigns.",
    results: "40% fewer no-shows. Staff reclaims 15+ hours per week.",
    color: "text-ember",
  },
  {
    id: "skin",
    icon: Syringe,
    name: "Skin & Cosmetics",
    challenge: "Leads going cold. No systematic follow-up after consultations.",
    solution: "Multi-channel lead CRM, automated consultation booking, treatment cycle follow-ups.",
    results: "60% of leads book within 48 hours. 4x ROI on ad spend.",
    color: "text-gold",
  },
  {
    id: "physio",
    icon: Heart,
    name: "Physiotherapy",
    challenge: "No recall system for maintenance. Patients complete treatment and never return.",
    solution: "Progress tracking, automated recall at 3/6/12 month intervals, referral workflows.",
    results: "35% increase in repeat visits. 200+ past patients re-engaged.",
    color: "text-ember",
  },
  {
    id: "eye",
    icon: Eye,
    name: "Eye Clinics",
    challenge: "Manual annual check-up reminders. Chaotic multi-location scheduling.",
    solution: "Automated annual recall, multi-location booking, prescription management.",
    results: "Centralized booking. 25% increase in patient retention.",
    color: "text-gold",
  },
  {
    id: "multi",
    icon: Stethoscope,
    name: "Multi-specialty",
    challenge: "Manual cross-department referrals. No unified patient view.",
    solution: "Cross-specialty referral automation, unified patient timeline, centralized booking.",
    results: "30% more cross-referrals. Complete patient visibility.",
    color: "text-ember",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36">
        <OrbGridBackground className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
        <div className="glow-orb left-0 top-20 h-80 w-80 bg-ember/20" />
        <div className="glow-orb right-0 top-36 h-96 w-96 bg-crimson/15" />
        <div className="relative mx-auto max-w-premium">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-white/45">
            <Link className="transition hover:text-ember" href="/">Home</Link>
            <span aria-hidden>/</span>
            <span>Industries</span>
          </nav>
          <span className="label-premium">Industries</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-[-0.03em] text-white md:text-7xl">
            Built for healthcare
            <br />
            <span className="text-gradient-ember">by people who get it.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/50">
            Every specialty has unique workflows. We tailor automation systems
            to your clinic type, patient volume, and existing tools.
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
                            <p className="text-xs font-semibold uppercase tracking-wider text-crimson/80">
                              Challenge
                            </p>
                            <p className="mt-2 text-white/60">
                              {ind.challenge}
                            </p>
                          </div>
                          <div className="glass-premium-card rounded-3xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-ember/80">
                              Solution
                            </p>
                            <p className="mt-2 text-white/60">
                              {ind.solution}
                            </p>
                          </div>
                          <div className="glass-premium-card rounded-3xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gold/80">
                              Results
                            </p>
                            <p className="mt-2 text-white/60">
                              {ind.results}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="btn-primary mt-6 inline-flex gap-2"
                        >
                          Discuss Your Clinic <ArrowRight size={16} />
                        </Link>
                      </div>
                      <div className="glass-premium rounded-4xl p-6">
                        <p className="text-sm font-semibold text-ember">
                          Common automations
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
                              className="flex items-center gap-3 text-sm text-white/50"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
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
