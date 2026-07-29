import { Reveal } from "./motion";

const benefits = [
  {
    metric: "40%",
    label: "Fewer No-Shows",
    desc: "Automated reminders via WhatsApp and SMS reduce forgotten appointments dramatically.",
  },
  {
    metric: "60%",
    label: "Less Admin Work",
    desc: "Self-booking and automated follow-ups free your staff for higher-value work.",
  },
  {
    metric: "24/7",
    label: "Patient Intake",
    desc: "New patients can discover, inquire, and book — even when your clinic is closed.",
  },
  {
    metric: "3x",
    label: "More Bookings",
    desc: "Faster follow-up and recall campaigns turn leads into booked appointments.",
  },
];

export function BenefitsSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow-neuro">Outcomes</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#F1F5F9] md:text-6xl">
            What changes after automation.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal delay={i * 0.05} key={b.label}>
              <div className="neuro-glass rounded-[2rem] p-7 text-center">
                <p className="text-5xl font-bold text-gradient-blue">
                  {b.metric}
                </p>
                <p className="mt-4 text-xl font-bold text-slate-50">
                  {b.label}
                </p>
                <p className="mt-3 text-sm text-slate-400">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
