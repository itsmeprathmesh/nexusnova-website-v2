import Link from "next/link";
import { Reveal } from "./motion";

export function CTASection() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="neuro-glass-glow relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10 md:py-20">
        <div className="neuro-orb left-10 top-10 h-72 w-72 bg-blue-500/15" />
        <div className="neuro-orb bottom-0 right-10 h-56 w-56 bg-purple-500/10" />
        <Reveal>
          <p className="eyebrow-neuro">Begin the next chapter</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-bold tracking-tight text-[#F1F5F9] sm:text-5xl md:text-6xl">
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
            <Link className="btn-neuro px-8 py-4 text-base" href="/contact">
              Book a Strategy Call
            </Link>
            <Link className="btn-neuro-outline px-8 py-4 text-base" href="/portfolio">
              View Case Studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
