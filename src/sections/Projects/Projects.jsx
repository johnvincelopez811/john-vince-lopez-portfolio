import { projects } from "../../data/projects";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const currentProjects = projects.filter((project) => project.current);
  const otherProjects = projects.filter((project) => !project.current);

  return (
    <section id="projects" className="relative py-14 sm:py-20 border-t border-line">
      <Container>
        <SectionTitle
          eyebrow="02 · Selected Work"
          title="Selected projects"
          description="Professional systems I currently handle, followed by selected academic work."
        />

        {currentProjects.length > 0 && (
          <div className="mt-10">
            <div className="mb-6 flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(173,170,113,0.12)]" />
                  Active professional work
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Currently handling</h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted sm:text-right">
                Systems I maintain, update, and support in my current web developer role.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} current />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="shrink-0 font-mono text-xs uppercase tracking-widest text-faint">Academic Projects</h3>
              <span className="h-px flex-1 bg-line" />
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-accent sm:block">Web · Mobile · Systems</span>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
