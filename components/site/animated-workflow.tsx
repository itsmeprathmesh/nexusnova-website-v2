"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  "Systems Audit",
  "Custom Training",
  "14-Day Deployment",
  "Optimization",
];

const descriptions = [
  "We map your clinic's intake bottlenecks and response delays.",
  "We train your custom AI agent on your practice's services, pricing, and EHR rules.",
  "Seamless integration with zero downtime or disruption to your front desk.",
  "Continuous monitoring and prompt tweaking to maximize conversion rates.",
];

export function AnimatedWorkflow() {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      const idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActiveStep(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-5 py-32">
      <div className="mx-auto max-w-premium">
        <div className="text-center">
          <span className="label-premium font-mono text-[10px]">_integration.process()</span>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            4-Step{" "}
            <span className="text-gradient-blue">System Integration</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-mono text-white/30">
            From audit to deployment in 14 days. Scroll to see each phase.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.04]" />
          <div
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue via-purple to-cyan transition-all duration-300"
            style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
          />

          <div className="relative space-y-16">
            {steps.map((step, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;
              return (
                <div
                  key={step}
                  className={`flex items-center gap-6 transition-all duration-700 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${isActive ? "opacity-100" : "opacity-20"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="font-mono text-xs text-blue/50">0{i + 1}</span>
                    <h3 className={`mt-1 text-2xl font-bold transition-colors ${isCurrent ? "text-white" : "text-white/60"}`}>
                      {step}
                    </h3>
                    <p className="mt-1 text-sm text-white/30 font-mono">
                      {descriptions[i]}
                    </p>
                  </div>

                  <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    isCurrent
                      ? "border-blue bg-blue/20 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                      : isActive
                        ? "border-blue/40 bg-blue/10"
                        : "border-white/10 bg-white/[0.02]"
                  }`}>
                    {isCurrent && (
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-blue/40" />
                    )}
                    <span className={`h-2 w-2 rounded-full ${isActive ? "bg-blue" : "bg-white/20"}`} />
                  </div>

                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
