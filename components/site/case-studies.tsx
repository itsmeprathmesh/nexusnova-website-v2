import Link from "next/link";
import { ImageWithSkeleton, Reveal, TiltCard } from "./motion";
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

export function CaseStudies({ projects = demoProjects }: { projects?: Project[] }) {
  return (
    <section id="work" className="content-fade px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow eyebrow-health">Case Studies</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Real results from clinics like yours.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal delay={index * 0.05} key={projectSlug(project.title)}>
              <Link
                href={`/portfolio/${projectSlug(project.title)}`}
                className="group block"
              >
                <TiltCard className="glass-health overflow-hidden rounded-[2rem]">
                  <div className="relative h-52 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,.5),transparent_32%),radial-gradient(circle_at_70%_40%,rgba(13,110,253,.35),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(123,44,245,.55),transparent_36%)]">
                    {project.image_url && (
                      <ImageWithSkeleton
                        alt={`${project.title} case study`}
                        className="absolute inset-0 h-full w-full"
                        src={project.image_url}
                      />
                    )}
                    <div className="absolute inset-5 rounded-[1.5rem] border border-white/15 bg-white/[.04] backdrop-blur-[2px] transition group-hover:scale-[1.03]" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#0A0D14]/70 px-3 py-1 text-sm text-teal-200">
                      {project.industry}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-black group-hover:text-teal-300">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-400">{project.summary}</p>
                    <p className="mt-5 text-sm font-semibold text-teal-300">
                      {project.results}
                    </p>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            className="btn-outline mt-10 inline-flex px-6 py-3"
            href="/portfolio"
          >
            View all case studies
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
