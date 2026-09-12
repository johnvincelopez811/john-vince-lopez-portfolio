import { projects } from "../../data/projects";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-14 sm:py-20 border-t border-line">
      <Container>
        <SectionTitle
          eyebrow="03 · Selected Work"
          title="Proof of how I approach real product needs"
          description="A private professional system and selected web and mobile builds, presented through the problem, solution, role, and result."
        />

        {featured && (
          <div className="mt-10">
            <FeaturedProject project={featured} />
          </div>
        )}

        {secondary.length > 0 && (
          <div className="mt-14">
            <h3 className="font-mono text-xs uppercase tracking-widest text-faint mb-6">Additional Projects</h3>
            <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {secondary.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
