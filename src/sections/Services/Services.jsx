import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineSquares2X2,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { services } from "../../data/services";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useSectionNav from "../../hooks/useSectionNav";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const serviceVisuals = {
  "business-websites": {
    icon: HiOutlineGlobeAlt,
    label: "Design & Build",
  },
  "internal-systems": {
    icon: HiOutlineSquares2X2,
    label: "Organize & Automate",
  },
  "mobile-apps": {
    icon: HiOutlineDevicePhoneMobile,
    label: "Mobile Experience",
  },
  maintenance: {
    icon: HiOutlineWrenchScrewdriver,
    label: "Fix & Improve",
  },
};

export default function Services({ compact = false }) {
  const goToSection = useSectionNav();

  return (
    <section id="services" className="relative border-t border-line py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="02 · Services"
          title="Development support built around a clear outcome"
          description="Choose a focused service or bring a custom requirement. Each project starts with an agreed scope before development begins."
        />

        <motion.div
          className={`mt-10 grid grid-cols-1 gap-5 ${compact ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-4"}`}
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const visual = serviceVisuals[service.id];
            const Icon = visual.icon;

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="card group relative flex h-full flex-col overflow-hidden rounded-[26px] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl sm:p-6"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute -right-3 -top-6 font-display text-[7rem] font-semibold leading-none text-accent opacity-[0.045] transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-[0.075]"
                  aria-hidden="true"
                >
                  {service.number}
                </span>
                <span
                  className="pointer-events-none absolute -right-14 top-28 h-36 w-36 rounded-full bg-accent/5 blur-2xl transition-transform duration-500 group-hover:scale-125"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                      Service {service.number}
                    </span>
                    <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                      {visual.label}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface-2 text-2xl text-accent shadow-sm transition-all duration-300 group-hover:-rotate-3 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-ink">
                    <Icon aria-hidden="true" />
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.summary}</p>
                </div>

                <div className="relative mt-6 rounded-2xl border border-line bg-surface-2/45 p-4 transition-colors duration-300 group-hover:bg-surface-2/70">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                    What you receive
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-muted">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-[7px] text-accent">
                          <FaCheck aria-hidden="true" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-auto pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">Best for</p>
                  <p className="mt-2 min-h-10 text-xs font-medium leading-5 text-ink">{service.bestFor}</p>
                  <div className="mt-4 flex min-h-14 flex-wrap content-start gap-1.5">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="keycap h-fit rounded-md px-2 py-1 font-mono text-[9px] text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {!compact && (
                    <button
                      type="button"
                      onClick={() => goToSection("contact")}
                      className="focus-ring mt-5 flex w-full items-center justify-between border-t border-line pt-4 text-left text-xs font-semibold text-ink transition-colors hover:text-accent"
                    >
                      Discuss this service
                      <FaArrowRight
                        className="text-[10px] transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {!compact && (
          <motion.button
            type="button"
            onClick={() => goToSection("contact")}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="focus-ring group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-accent"
          >
            Have a different requirement? Let&apos;s discuss it
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </motion.button>
        )}
      </Container>
    </section>
  );
}
