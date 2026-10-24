import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import { aboutPreview } from "../../data/site";
import Container from "../../components/Container/Container";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line py-16 sm:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 xl:gap-20">
          {/* Left side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="min-w-0"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                04
              </span>

              <span className="h-px w-8 bg-accent" />

              <span className="font-mono text-xs uppercase tracking-[0.22em] text-faint">
                About
              </span>
            </div>

            <h2 className="mt-5 max-w-lg font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              A little about me
            </h2>

            <div className="mt-5 min-h-7 font-mono text-sm text-accent sm:text-base">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1500,
                  "Problem Solver",
                  1500,
                  "Continuous Learner",
                  1500,
                  "Retail Web Experience",
                  1500,
                ]}
                speed={55}
                repeat={Infinity}
                cursor
              />
            </div>

            <div className="mt-7 h-px w-16 bg-accent" />
          </motion.div>

          {/* Right side */}
          <motion.div
            className="flex min-w-0 flex-col gap-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="max-w-2xl text-base leading-7 text-muted">
              {aboutPreview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <motion.dl
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-surface-2/35 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {aboutPreview.facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className={`flex min-h-32 flex-col justify-between px-5 py-5 sm:px-6 ${
                    index < aboutPreview.facts.length - 1
                      ? "border-b border-line md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    {fact.label}
                  </dt>

                  <dd className="mt-4 break-words text-base font-semibold leading-6 text-ink">
                    {fact.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            <RouterLink
              to="/about"
              className="focus-ring group inline-flex w-fit items-center gap-3 rounded-full border border-accent bg-accent px-5 py-3 text-sm font-semibold text-accent-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-canvas hover:shadow-md"
            >
              Learn More About Me

              <FaArrowRight
                aria-hidden="true"
                className="text-xs transition-transform duration-200 group-hover:translate-x-1"
              />
            </RouterLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
