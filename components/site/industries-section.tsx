import { Sparkles, Smile, Eye, Heart, Syringe, Stethoscope } from "lucide-react";
import { Reveal } from "./motion";

const industries = [
  {
    icon: Smile,
    name: "Dental Clinics",
    desc: "Self-booking for cleanings and check-ups. Automated reminders. Recall campaigns for hygiene appointments.",
    color: "text-teal-300",
  },
  {
    icon: Syringe,
    name: "Skin & Cosmetics",
    desc: "Lead capture from Instagram and ads. Consultation booking flows. Follow-up sequences for treatment cycles.",
    color: "text-violet-300",
  },
  {
    icon: Heart,
    name: "Physiotherapy",
    desc: "Progress tracking. Automated recall for maintenance sessions. Referral workflows between specialists.",
    color: "text-blue-300",
  },
  {
    icon: Eye,
    name: "Eye Clinics",
    desc: "Multi-location booking. Annual check-up reminders. Prescription management and recall.",
    color: "text-teal-300",
  },
  {
    icon: Stethoscope,
    name: "Multi-specialty",
    desc: "Cross-department referrals. Unified patient timeline. Centralized booking across specialties.",
    color: "text-violet-300",
  },
];

export function IndustriesSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow eyebrow-health">
            <Sparkles size={13} />
            Industries
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Built for healthcare — by people who understand it.
          </h2>
          <p className="mt-5 max-w-2xl text-slate-400">
            Every clinic is different. We tailor automation systems to your
            specialty, patient volume, and existing workflow.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((x, i) => (
            <Reveal delay={i * 0.04} key={x.name}>
              <div className="glass-health group rounded-3xl p-7 transition hover:-translate-y-1">
                <x.icon className={x.color} size={28} />
                <h3 className="mt-5 text-xl font-bold text-slate-50">
                  {x.name}
                </h3>
                <p className="mt-3 text-slate-400">{x.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
