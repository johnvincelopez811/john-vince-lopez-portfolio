import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import DeviceFrame from "../DeviceFrame/DeviceFrame";
import { fadeUp, viewportOnce } from "../../lib/motion";

/**
 * Compact secondary project card used in the grid below the featured
 * case study. Links straight to the project's detail route.
 */
export default function ProjectCard({ project, linkPrefix = "/projects" }) {
  return (
    <motion.article
      className="card group flex h-full flex-col gap-5 rounded-2xl p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center justify-center sm:min-h-[310px]">
        <DeviceFrame
          image={project.coverImage}
          alt={`${project.title} preview`}
          deviceType={project.deviceType}
          isPrivate={project.isPrivate}
          placeholderTitle={project.placeholderTitle}
          placeholderMessage={project.placeholderMessage}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
            {project.category}
          </span>
          <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">{project.title}</h3>
          {project.contributionType && (
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              {project.contributionType}
            </p>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed">{project.summary}</p>
      </div>

      {project.features?.length > 0 && (
        <div className="rounded-xl border border-line bg-surface-2/50 p-4">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
            Key highlights
          </p>
          <ul className="flex flex-col gap-2.5">
            {project.features.slice(0, 2).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="keycap font-mono text-[11px] rounded-md px-2.5 py-1 text-muted">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-faint">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      <RouterLink
        to={`${linkPrefix}/${project.slug}`}
        className="focus-ring mt-auto inline-flex w-full items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:bg-accent hover:text-accent-ink"
      >
        Explore Case Study
        <FaArrowRight aria-hidden="true" className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
      </RouterLink>
    </motion.article>
  );
}
