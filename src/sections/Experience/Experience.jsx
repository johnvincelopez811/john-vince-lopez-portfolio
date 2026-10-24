import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheck,
  FaExternalLinkAlt,
  FaStore,
} from "react-icons/fa";
import { experience } from "../../data/experience";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { fadeUp, viewportOnce } from "../../lib/motion";

function OverviewCard({ label, value, icon: Icon, href }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-2/60 px-4 py-4">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-accent">
          <Icon className="text-sm" aria-hidden="true" />
        </span>

        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
            {label}
          </p>

          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring mt-1 inline-flex items-center gap-2 break-words text-sm font-semibold leading-5 text-ink transition-colors hover:text-accent"
            >
              {value}
              <FaExternalLinkAlt className="shrink-0 text-[9px]" aria-hidden="true" />
            </a>
          ) : (
            <p className="mt-1 break-words text-sm font-semibold leading-5 text-ink">
              {value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ role, index }) {
  return (
    <motion.article
      className={`card group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[26px] p-5 sm:p-6 ${
        role.featured ? "lg:col-span-2" : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        delay: index * 0.08,
      }}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-2 font-mono text-xs font-semibold text-accent">
              {role.phase}
            </span>

            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                {role.experienceLabel}
              </p>

              <h3 className="mt-2 break-words font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                {role.role}
              </h3>
            </div>
          </div>

          <span className="hidden shrink-0 rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-faint sm:inline-flex">
            {role.employmentType}
          </span>
        </div>

        {role.companyUrl ? (
          <a
            href={role.companyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
          >
            {role.company}
            <FaExternalLinkAlt className="text-[9px]" aria-hidden="true" />
          </a>
        ) : (
          <p className="mt-4 text-sm font-medium text-accent">{role.company}</p>
        )}

        {role.organization && (
          role.organizationUrl ? (
            <a
              href={role.organizationUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring mt-1 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              {role.organization}
              <FaExternalLinkAlt className="text-[9px]" aria-hidden="true" />
            </a>
          ) : (
            <p className="mt-1 text-sm text-muted">{role.organization}</p>
          )
        )}

        {role.industry && (
          <p className="mt-2 max-w-2xl font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            {role.industry}
          </p>
        )}

        <div className="mt-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-2 text-xs text-muted">
            <FaCalendarAlt
              className="shrink-0 text-accent"
              aria-hidden="true"
            />

            {role.endDate
              ? `${role.startDate} – ${role.endDate}`
              : role.startDate}
          </span>
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-surface-2/40 p-4">
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
            Key Contributions
          </p>

          <ul className="flex flex-col gap-3">
            {role.highlights.slice(0, 2).map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-muted"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-[8px] text-accent">
                  <FaCheck aria-hidden="true" />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-5">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
            {role.tagsLabel || "Tools Used"}
          </p>

          <div className="flex flex-wrap gap-2">
            {role.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="keycap rounded-md px-2.5 py-1 font-mono text-[10px] text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const careerPath = [...experience.slice(1), experience[0]];

  return (
    <section
      id="experience"
      className="relative border-t border-line py-14 sm:py-20"
    >
      <Container>
        <SectionTitle
          eyebrow="06 · Experience"
          title="Professional experience"
        />

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <OverviewCard
            label="Current Brand"
            value="New Era Cap Philippines"
            icon={FaBriefcase}
            href="https://neweracap.ph/?srsltid=AfmBOoo1ffptB2OiylFrs83hNwyJBgoT9aq7FAlWZepnW9DfFrN60DDN"
          />

          <OverviewCard
            label="Company"
            value="Authentic Caps Retail, Inc."
            icon={FaBuilding}
            href="https://ahci.com.ph/"
          />

          <OverviewCard
            label="Industry"
            value="Retail / Apparel & Fashion"
            icon={FaStore}
          />
        </motion.div>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {experience.map((role, index) => (
            <ExperienceCard
              key={role.id}
              role={role}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 overflow-hidden rounded-[28px] border border-line bg-surface-2/40 p-5 sm:p-7"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">Career Map</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">From systems to the web</h3>
            </div>
            <span className="hidden h-px flex-1 bg-line sm:block" />
          </div>

          <ol className="relative mt-8 grid grid-cols-1 gap-5 before:absolute before:bottom-8 before:left-5 before:top-8 before:border-l before:border-dashed before:border-accent/50 md:grid-cols-3 md:before:bottom-auto md:before:left-[12%] md:before:right-[12%] md:before:top-5 md:before:border-l-0 md:before:border-t">
            {careerPath.map((role, index) => (
              <li
                key={role.id}
                className="relative z-10 grid grid-cols-[2.5rem_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:text-center"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-[9px] font-semibold shadow-sm ${role.featured ? "border-accent bg-accent text-accent-ink" : "border-accent/60 bg-canvas text-accent"}`}>
                  {role.phase}
                </span>

                <div className="rounded-2xl border border-line bg-canvas/70 px-4 py-4 md:w-full">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">Milestone {String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-ink">{role.role}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{role.company}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  );
}
