import Link from "next/link";
import { ImageWithSkeleton, Reveal, TiltCard } from "./motion";
import { ArrowUpRight } from "lucide-react";
import { demoProjects } from "@/lib/data";

function projectSlug(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

type Project = {
  title: string;
  industry: string;
  summary: string;
  results?: string;
  challenge?: string;
  solution?: string;
  image_url?: string;
};

export function CaseStudies({
  projects = demoProjects,
}: {
  projects?: Project[];
}) {
  return (
    <section className="section-padding relative overflow-hidden px-5">
      <div className="glow-orb left-0 top-1/3 h-96 w-96 bg-crimson/8" />
      <div className="mx-auto max-w-premium">
        <Reveal>
          <span className="label-premium">Case Studies</span>
          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Real results from
            <br />
            <span className="text-gradient-ember">businesses like yours.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal delay={index * 0.06} key={projectSlug(project.title)}>
              <Link
                href={`/portfolio/${projectSlug(project.title)}`}
                className="group block"
              >
                <TiltCard className="glass-premium-card overflow-hidden rounded-4xl">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-ember/20 via-crimson/10 to-midnight">
                    {project.image_url && (
                      <ImageWithSkeleton
                        alt={`${project.title} case study`}
                        className="absolute inset-0"
                        src={project.image_url}
                      />
                    )}
                    <div className="absolute inset-4 rounded-2xl border border-white/10 bg-white/[.03] backdrop-blur-[2px] transition group-hover:scale-[1.02]" />
                    <span className="absolute left-5 top-5 rounded-full bg-midnight/70 px-3 py-1 text-sm text-ember/80 backdrop-blur-sm">
                      {project.industry}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white transition group-hover:text-ember">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-white/30 transition group-hover:text-ember"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {project.summary}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-ember">
                      {project.results}
                    </p>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
