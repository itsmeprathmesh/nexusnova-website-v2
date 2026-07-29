import Link from "next/link";
import { Reveal } from "./motion";

export function CTASection() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="lux-bg noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-teal-400/20 px-6 py-14 text-center shadow-2xl sm:px-10 md:py-20">
        <div className="orb left-10 top-10 h-72 w-72 bg-teal-500/20" />
        <div className="orb bottom-0 right-10 h-56 w-56 bg-blue-500/15" />
        <Reveal>
          <p className="eyebrow eyebrow-health">Begin the next chapter</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-semibold tracking-[-.055em] text-[#F8FAFC] sm:text-5xl md:text-6xl">
            Stop losing patients to manual processes.
            <br />
            Let&apos;s build your system.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Book a strategy call. We&apos;ll map your current workflow, identify
            automation opportunities, and outline a system tailored to your
            clinic.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="btn-lux btn-lux-health px-8 py-4" href="/contact">
              Book a Strategy Call
            </Link>
            <Link className="btn-outline px-8 py-4" href="/portfolio">
              View Case Studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
