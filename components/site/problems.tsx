import { Zap, CalendarX, Users, MessageCircle } from "lucide-react";
import { Reveal, TiltCard } from "./motion";

const items = [
  {
    icon: CalendarX,
    title: "30% of patients don't show up",
    desc: "Every no-show is lost revenue. Manual reminder calls are time-consuming and inconsistent. Your staff has better things to do.",
  },
  {
    icon: MessageCircle,
    title: "Leads fall through the cracks",
    desc: "Inquiries come through Instagram, WhatsApp, and phone — with no central system. You're losing potential patients without knowing it.",
  },
  {
    icon: Users,
    title: "No follow-up means no repeat visits",
    desc: "Patients complete treatment and never come back. Without a recall system, you're leaving money on the table — every single day.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow-neuro">
            <Zap size={13} />
            Problems we solve
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#F1F5F9] md:text-6xl">
            Three things costing your clinic revenue every day.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal delay={i * 0.06} key={item.title}>
              <TiltCard className="neuro-glass rounded-[2rem] p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                  <item.icon size={20} />
                </div>
                <h3 className="text-2xl font-bold text-[#F1F5F9]">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
