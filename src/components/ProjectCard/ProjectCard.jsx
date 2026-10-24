import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import DeviceFrame from "../DeviceFrame/DeviceFrame";
import { fadeUp, viewportOnce } from "../../lib/motion";

/**
 * Consistent project card used across the professional and academic grids.
 * Links straight to the project's detail route.
 */
export default function ProjectCard({ project, linkPrefix = "/projects", current = false }) {
  return (
    <motion.article
      className={`card group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-lg sm:p-6 ${current ? "border-accent/30" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ y: -3 }}
    >
      <div className={`items-start ${project.mobileImage ? "grid grid-cols-[minmax(0,1fr)_112px] gap-3 sm:grid-cols-[minmax(0,1fr)_128px]" : "block"}`}>
        <div className="min-w-0">
          {project.mobileImage && (
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-faint">Web</p>
          )}
          <DeviceFrame
            image={project.coverImage}
            alt={`${project.title} preview`}
            deviceType={project.deviceType}
            isPrivate={project.isPrivate}
            placeholderTitle={project.placeholderTitle}
            placeholderMessage={project.placeholderMessage}
            matchedHeight
            imageFit={project.deviceType === "browser" ? "cover" : "contain"}
          />
        </div>

        {project.mobileImage && (
          <div className="min-w-0">
            <p className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-faint">Mobile</p>
            <DeviceFrame
              image={project.mobileImage}
              alt={`${project.title} mobile application preview`}
              deviceType="mobile"
              matchedHeight
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {current && (
          <div className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Currently handling
          </div>
        )}
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
            <p className="mt-2 inline-flex rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
              {project.contributionType}
            </p>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed">{project.summary}</p>
      </div>

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
        className="focus-ring group mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-line bg-surface-2 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent/50 hover:bg-accent hover:text-accent-ink"
      >
        View Details
        <FaArrowRight aria-hidden="true" className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
      </RouterLink>
    </motion.article>
  );
}
