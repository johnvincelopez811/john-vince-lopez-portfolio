import { motion } from "framer-motion";
import { workProcess } from "../../data/services";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export default function Process() {
  return (
    <section id="process" className="relative border-t border-line py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="04 · How I Work"
          title="A straightforward path from idea to handoff"
          description="You always know what is being built, what comes next, and where feedback fits into the project."
        />

        <motion.ol
          className="mt-10 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-line bg-surface sm:grid-cols-2 lg:grid-cols-5"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {workProcess.map((step, index) => (
            <motion.li
              key={step.number}
              variants={fadeUp}
              className={`relative min-h-52 p-5 sm:p-6 ${index < workProcess.length - 1 ? "border-b border-line sm:border-b-0 sm:border-r" : ""}`}
            >
              <span className="font-mono text-xs tracking-[0.18em] text-accent">{step.number}</span>
              <h3 className="mt-8 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-surface-2/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm font-semibold text-ink">Communication stays inside the agreed project channel.</p>
          <p className="text-xs leading-5 text-muted">Clear milestones · Reviewable progress · Honest scope updates</p>
        </motion.div>
      </Container>
    </section>
  );
}
