import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { aboutPage, personal } from "../data/site";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import useSectionNav from "../hooks/useSectionNav";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

// Resume expected at src/assets/resume/<personal.resumeFileName>.
// import resumeFile from `../assets/resume/${personal.resumeFileName}`;
const resumeFile = null;

export default function AboutPage() {
  const goToSection = useSectionNav();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="pt-32 pb-24">
      <Container>
        <RouterLink
          to="/"
          className="focus-ring inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-faint hover:text-accent transition-colors"
        >
          <FaArrowLeft aria-hidden="true" /> Back to home
        </RouterLink>

        <motion.div
          className="mt-6 max-w-3xl"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3"
          >
            {personal.fullName}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed mt-4">
            {personal.summary}
          </motion.p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10">
          <div className="flex flex-col gap-12">
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">My journey</h2>
              <p className="text-muted leading-relaxed">{aboutPage.journey}</p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">How I approach projects</h2>
              <p className="text-muted leading-relaxed">{aboutPage.approach}</p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-3">What I'm working on next</h2>
              <p className="text-muted leading-relaxed mb-1">{aboutPage.goals}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {aboutPage.currentlyLearning.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs rounded-full border border-line px-3 py-1.5 text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div className="card rounded-2xl p-6">
              <p className="eyebrow mb-3">Education</p>
              <p className="text-ink font-medium">{personal.education}</p>
              <p className="text-sm text-muted mt-1">Technological Institute of the Philippines – Quezon City</p>
            </div>

            <div className="card rounded-2xl p-6">
              <p className="eyebrow mb-3">Values I work by</p>
              <ul className="flex flex-col gap-3">
                {aboutPage.values.map((value) => (
                  <li key={value} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card rounded-2xl p-6 flex flex-col gap-3">
              <Button
                variant="primary"
                href={resumeFile || undefined}
                disabled={!resumeFile}
                icon={FaDownload}
                download
                className="w-full"
                aria-label={
                  resumeFile
                    ? "Download resume"
                    : `Resume not uploaded yet. Add ${personal.resumeFileName} to src/assets/resume`
                }
              >
                Download Resume
              </Button>
              <Button variant="secondary" icon={FaArrowRight} className="w-full" onClick={() => goToSection("contact")}>
                Get in Touch
              </Button>
            </div>
          </motion.aside>
        </div>
      </Container>
    </main>
  );
}
