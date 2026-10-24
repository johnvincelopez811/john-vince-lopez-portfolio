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
      className="flex flex-col gap-9"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className={project.mobileImage ? "grid grid-cols-2 items-start gap-4 sm:gap-5" : ""}>
        <div>
          {project.mobileImage && <p className="eyebrow mb-3">{project.webPreviewLabel || "Web application"}</p>}
          <DeviceFrame
            image={project.coverImage}
            alt={`${project.title} preview`}
            deviceType={project.deviceType}
            isPrivate={project.isPrivate}
            placeholderTitle={project.placeholderTitle}
            placeholderMessage={project.placeholderMessage}
            matchedHeight={project.mobileImage ? "large" : false}
          />
        </div>

        {project.mobileImage && (
          <div>
            <p className="eyebrow mb-3 text-center">Mobile app</p>
            <DeviceFrame
              image={project.mobileImage}
              alt={`${project.title} mobile application preview`}
              deviceType="mobile"
              matchedHeight="large"
            />
          </div>
        )}
      </div>

      <div className="grid gap-5 border-t border-line pt-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div>
        <span className="eyebrow">{project.category}</span>
        <div className="flex flex-wrap gap-2 -mt-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-faint border border-line rounded-md px-2 py-0.5">
            {project.status}
          </span>
          {project.contributionType && (
            <span className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
              {project.contributionType}
            </span>
          )}
        </div>
        <h3 className="font-display text-3xl font-semibold text-ink">{project.title}</h3>
        </div>

        <div className="flex flex-col items-start gap-4">
        <p className="text-muted leading-relaxed">{project.overview}</p>

        <ul className="flex flex-col gap-2 mt-1">
          {project.features.slice(0, 2).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-muted leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="keycap font-mono text-[11px] rounded-md px-2.5 py-1 text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <RouterLink to={`${linkPrefix}/${project.slug}`}>
            <Button variant="primary" icon={FaArrowRight}>
              View Details
            </Button>
          </RouterLink>
        </div>
        </div>
      </div>
    </motion.article>
  );
}
