import Link from "next/link";
import { Reveal } from "./motion";
import { MagneticButton } from "./magnetic-button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-ember/15" />
      <div className="glow-orb left-1/3 top-1/3 h-80 w-80 bg-gold/10" />
      <div className="glow-orb right-1/4 bottom-1/4 h-60 w-60 bg-crimson/10" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="label-premium">Let&apos;s Build</span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Ready to engineer
            <br />
            <span className="text-gradient-ember">
              your next chapter?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            Book a strategy call. We&apos;ll map your current workflow, identify
            opportunities, and outline a system tailored to your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Link href="/contact" className="btn-primary group text-base">
                Book a Strategy Call
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/portfolio" className="btn-secondary text-base">
                View Our Work
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
