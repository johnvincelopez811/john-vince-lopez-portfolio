import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import DeviceFrame from "../DeviceFrame/DeviceFrame";
import Button from "../Button/Button";
import { fadeUp, viewportOnce } from "../../lib/motion";

/**
 * Large case-study presentation for the flagship project. Alternates
 * text/visual order isn't needed since there's only one featured slot,
 * but the layout intentionally uses the full section width.
 */
export default function FeaturedProject({ project, linkPrefix = "/projects" }) {
  return (
    <motion.article
      className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div>
        <DeviceFrame
          image={project.coverImage}
          alt={`${project.title} preview`}
          deviceType={project.deviceType}
          isPrivate={project.isPrivate}
          placeholderTitle={project.placeholderTitle}
          placeholderMessage={project.placeholderMessage}
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className="eyebrow">{project.category}</span>
        <div className="flex flex-wrap gap-2 -mt-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-faint border border-line rounded-md px-2 py-0.5">
            {project.status}
          </span>
          {project.contributionType && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint border border-line rounded-md px-2 py-0.5">
              {project.contributionType}
            </span>
          )}
        </div>
        <h3 className="font-display text-3xl font-semibold text-ink">{project.title}</h3>
        <p className="text-muted leading-relaxed">{project.overview}</p>

        <ul className="flex flex-col gap-2 mt-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-muted leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech) => (
            <span key={tech} className="keycap font-mono text-[11px] rounded-md px-2.5 py-1 text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <RouterLink to={`${linkPrefix}/${project.slug}`}>
            <Button variant="primary" icon={FaArrowRight}>
              View Case Study
            </Button>
          </RouterLink>
        </div>
      </div>
    </motion.article>
  );
}
