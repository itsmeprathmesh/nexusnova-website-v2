import { Reveal } from "./motion";

const steps = [
  ["Discovery", "We map your clinic workflows, pain points, patient volume, and existing tools to design the right system."],
  ["Design", "We create the automation blueprint — patient intake, booking flow, reminder cadence, recall sequences."],
  ["Build", "We develop and test your custom system. Self-booking portal, CRM, reminders — everything integrated."],
  ["Launch", "We deploy, train your team, and hand over documentation. Ongoing support ensures everything runs smoothly."],
];

export function ProcessSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow eyebrow-health">Process</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            From discovery to launch in weeks, not months.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map(([s, d], i) => (
            <Reveal delay={i * 0.06} key={s}>
              <div className="glass-health rounded-3xl p-7">
                <p className="text-sm text-teal-300/70">0{i + 1}</p>
                <h3 className="mt-4 text-2xl font-black">{s}</h3>
                <p className="mt-3 text-slate-400">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
