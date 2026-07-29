import { Sparkles } from "lucide-react";
import { Reveal } from "./motion";

const metrics = [
  { value: "40%", label: "Fewer No-Shows", desc: "Automated reminders via WhatsApp and SMS reduce forgotten appointments." },
  { value: "60%", label: "Less Admin Work", desc: "Self-booking and automated follow-ups free your staff for higher-value work." },
  { value: "24/7", label: "Patient Intake", desc: "New patients can discover, inquire, and book — even when your clinic is closed." },
  { value: "3x", label: "More Bookings", desc: "Faster follow-up and recall campaigns turn leads into booked appointments." },
];

export function MetricsSection() {
  return (
    <section className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb right-1/4 top-0 h-96 w-96 bg-crimson/10" />
      <div className="mx-auto max-w-premium">
        <Reveal>
          <span className="label-premium">
            <Sparkles size={13} />
            Outcomes
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Results that speak.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal delay={i * 0.06} key={m.label}>
              <div className="glass-premium-card rounded-4xl p-8 text-center">
                <p className="text-5xl font-bold text-gradient-ember">
                  {m.value}
                </p>
                <p className="mt-4 text-xl font-semibold text-white">
                  {m.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/50">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
