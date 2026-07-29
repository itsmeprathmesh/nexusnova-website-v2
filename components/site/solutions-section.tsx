import { Check, Stethoscope, Calendar, RefreshCw, Database } from "lucide-react";
import { Reveal, TiltCard } from "./motion";
import { services } from "@/lib/data";

const icons = [Stethoscope, Calendar, RefreshCw, Database];

export function SolutionsSection() {
  return (
    <section id="solutions" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[.8fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-health">Solutions</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] text-[#F8FAFC] sm:text-5xl lg:text-6xl">
                Automate your clinic operations — from first call to follow-up.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-400 lg:justify-self-end">
              Custom automation systems for patient intake, appointment
              management, recall campaigns, and lead CRM. Built for your
              workflow.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal delay={index * 0.04} key={service.title}>
                <TiltCard className="service-card glass-health group rounded-[1.6rem] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-6">
                    <div className="accent-gradient-health flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-[0_12px_32px_rgba(20,184,166,.22)]">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-medium tracking-[0.24em] text-teal-300/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-.03em] text-[#F8FAFC] sm:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-400">
                    {service.solution}
                  </p>
                  <div className="mt-7 flex gap-3 border-t border-white/10 pt-5">
                    <Check className="mt-1 shrink-0 text-teal-300" size={16} />
                    <p className="text-sm leading-6 text-slate-300">
                      {service.outcome}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
