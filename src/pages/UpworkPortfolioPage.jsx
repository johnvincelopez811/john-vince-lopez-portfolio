import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import { personal, socials } from "../data/site";
import Container from "../components/Container/Container";
import JVLMark from "../components/JVLMark/JVLMark";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import Button from "../components/Button/Button";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import Services from "../sections/Services/Services";
import Process from "../sections/Process/Process";
import { fadeUp, staggerContainer } from "../lib/motion";

const credibility = [
  { icon: FaBriefcase, label: "Current role", value: "Web Developer" },
  { icon: FaCheckCircle, label: "Experience", value: "Web, mobile & QA" },
  { icon: FaMapMarkerAlt, label: "Location", value: personal.location },
];

export default function UpworkPortfolioPage() {
  const location = useLocation();
  const featured = projects.find((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  useEffect(() => {
    document.title = "John Vince Lopez | Web & Mobile Developer for Upwork";
    const target = location.state?.scrollTo;
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
    return () => {
      document.title = "John Vince Lopez | Web & Mobile Developer";
    };
  }, [location.state]);

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/95">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <JVLMark size="sm" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:inline">
              Upwork Portfolio
            </span>
          </div>
          <ThemeToggle />
        </Container>
      </header>

      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="keyboard-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <Container className="relative">
          <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.p variants={fadeUp} className="eyebrow">Web & Mobile Development</motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            >
              Practical digital products for business workflows and customer experiences
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              I help businesses build responsive websites, internal dashboards, and cross-platform mobile apps with a clear scope, reviewable progress, and dependable handoff.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <Button href="#upwork-projects" variant="primary" icon={FaArrowRight}>View Case Studies</Button>
              {socials.upwork && (
                <Button href={socials.upwork} target="_blank" rel="noreferrer noopener" variant="secondary">
                  Message Me on Upwork
                </Button>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {credibility.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card flex items-center gap-3 rounded-xl p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Services compact />

      <section id="upwork-projects" className="border-t border-line py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Selected Case Studies</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Relevant work, role, and product decisions
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Each case study separates professional work from academic projects and states my contribution clearly.
            </p>
          </div>

          {featured && (
            <div className="mt-10">
              <FeaturedProject project={featured} linkPrefix="/upwork/projects" />
            </div>
          )}

          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((project) => (
              <ProjectCard key={project.id} project={project} linkPrefix="/upwork/projects" />
            ))}
          </div>
        </Container>
      </section>

      <Process />

      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface px-6 py-10 text-center sm:px-10">
            <p className="eyebrow">Ready to discuss the scope?</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink">Let&apos;s build the right next step</h2>
            <p className="mt-4 leading-7 text-muted">
              Send the goal, required features, and current setup through Upwork so we can define the project clearly.
            </p>
            {socials.upwork ? (
              <Button href={socials.upwork} target="_blank" rel="noreferrer noopener" icon={FaArrowRight} className="mt-7">
                Message Me on Upwork
              </Button>
            ) : (
              <p className="mt-7 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm font-medium text-ink">
                Return to my Upwork profile to send a project message.
              </p>
            )}
          </div>
          <p className="mt-8 text-center text-xs text-faint">© {new Date().getFullYear()} {personal.fullName}</p>
        </Container>
      </section>
    </main>
  );
}
