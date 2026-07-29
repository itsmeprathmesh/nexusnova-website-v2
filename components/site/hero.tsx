import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { OrbGridBackground, Reveal } from "./motion";
import { FloatingMockup } from "./floating-mockup";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="lux-bg noise relative isolate overflow-hidden px-5 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <OrbGridBackground className="opacity-85 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_78%)]" />
      <div className="orb -left-20 top-28 h-72 w-72 bg-teal-500/20" />
      <div className="orb -right-16 top-20 h-80 w-80 bg-blue-500/15" />
      <div className="hero-beam absolute left-1/2 top-24 h-px w-[min(72rem,90%)] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-health">
                <Sparkles size={13} />
                Healthcare Automation Systems
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-gradient-health mt-7 max-w-3xl text-[clamp(2.5rem,6.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
                Your clinic runs on appointments.
                <br />
                We make sure none slip through.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                NexusNova Studio builds AI-powered automation systems for
                healthcare clinics — reducing no-shows, capturing every lead,
                and automating patient communication so you can focus on care.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="btn-lux btn-lux-health px-7 py-4" href="/contact">
                  Book a Strategy Call
                </Link>
                <Link className="btn-outline gap-2 px-7 py-4" href="#solutions">
                  See How It Works <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
                {[
                  "40% fewer no-shows",
                  "60% less admin work",
                  "24/7 patient intake",
                ].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <Check className="text-teal-300" size={15} />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:pl-5">
            <FloatingMockup />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal delay={index * 0.04} key={stat}>
              <div className="glass-health h-full rounded-2xl px-4 py-5 sm:px-6 sm:py-6">
                <p className="text-sm font-semibold text-teal-300 sm:text-base">
                  {stat}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
