import { useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { getProjectBySlug } from "../data/projects";
import Container from "../components/Container/Container";
import DeviceFrame from "../components/DeviceFrame/DeviceFrame";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return <Navigate to="/projects/not-found" replace />;
  }

  return (
    <main className="pt-32 pb-24">
      <Container>
        <button
          type="button"
          onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
          className="focus-ring inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-faint hover:text-accent transition-colors"
        >
          <FaArrowLeft aria-hidden="true" /> Back to projects
        </button>

        <motion.div
          className="mt-6 max-w-3xl"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {project.category} · {project.status}
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
            {project.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed mt-4">
            {project.summary}
          </motion.p>

        </motion.div>

        <div
          className={`mt-10 ${
            project.mobileImage
              ? "grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_0.42fr]"
              : "max-w-2xl"
          }`}
        >
          <div>
            {project.mobileImage && (
              <p className="eyebrow mb-3">{project.webPreviewLabel || "Web application"}</p>
            )}
            <DeviceFrame
              image={project.coverImage}
              alt={`${project.title} preview`}
              deviceType={project.deviceType}
              isPrivate={project.isPrivate}
              placeholderTitle={project.placeholderTitle}
              placeholderMessage={project.placeholderMessage}
            />
          </div>

          {project.mobileImage && (
            <div>
              <p className="eyebrow mb-3 text-center">Mobile application</p>
              <DeviceFrame
                image={project.mobileImage}
                alt={`${project.title} mobile application preview`}
                deviceType="mobile"
              />
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10">
          <div className="flex flex-col gap-10">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <DetailCard title="The problem" body={project.problem} />
              <DetailCard title="The solution" body={project.solution} />
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">Key features</h2>
              <ul className="flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-muted leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.section>

            {project.challenges?.length > 0 && (
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">Main challenge</h2>
                <div className="flex flex-col gap-5">
                  {project.challenges.map((item) => (
                    <div key={item.challenge} className="card rounded-xl p-5">
                      <p className="text-ink font-medium mb-2">{item.challenge}</p>
                      <p className="text-sm text-muted leading-relaxed">{item.resolution}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {project.outcomes && <DetailSection title="Result" body={project.outcomes} />}
          </div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 h-fit"
          >
            <div className="card rounded-2xl p-6">
              <p className="eyebrow mb-3">My role</p>
              <p className="text-sm text-muted leading-relaxed">{project.role}</p>
              {project.contributionType && (
                <p className="font-mono text-[10px] uppercase tracking-wider text-faint border border-line rounded-md px-2 py-0.5 mt-3 w-fit">
                  {project.contributionType}
                </p>
              )}
            </div>
            <div className="card rounded-2xl p-6">
              <p className="eyebrow mb-3">{project.tagsLabel || "Technologies"}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="keycap font-mono text-[11px] rounded-md px-2.5 py-1 text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

      </Container>
    </main>
  );
}

function DetailSection({ title, body }) {
  return (
    <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <h2 className="font-display text-2xl font-semibold text-ink mb-3">{title}</h2>
      <p className="text-muted leading-relaxed">{body}</p>
    </motion.section>
  );
}

function DetailCard({ title, body }) {
  return (
    <div className="card rounded-xl p-5 sm:p-6">
      <p className="eyebrow mb-3">{title}</p>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </div>
  );
}
