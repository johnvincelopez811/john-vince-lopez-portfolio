import { motion } from "framer-motion";
import { FaClipboardList, FaPalette, FaCode, FaCheckDouble, FaCloudUploadAlt, FaSyncAlt, FaRocket } from "react-icons/fa";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const agileSteps = [
  { number: "01", title: "Plan", icon: FaClipboardList },
  { number: "02", title: "Design", icon: FaPalette },
  { number: "03", title: "Develop", icon: FaCode },
  { number: "04", title: "Test", icon: FaCheckDouble },
  { number: "05", title: "Deploy", icon: FaCloudUploadAlt },
  { number: "06", title: "Review", icon: FaSyncAlt },
  { number: "07", title: "Launch", icon: FaRocket },
];

export default function Process() {
  return (
    <section id="process" className="relative border-t border-line py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="03 · How I Work"
          title="Agile development cycle"
        />

        <motion.ol
          className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-line lg:block" aria-hidden="true" />

          {agileSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.li
                key={step.number}
                variants={fadeUp}
                className="group relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <span className="absolute right-3 top-3 font-mono text-[9px] tracking-[0.18em] text-faint">{step.number}</span>
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-accent/35 bg-accent-soft text-lg text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="relative z-10 mt-4 font-display text-base font-semibold text-ink">{step.title}</h3>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-7 flex w-fit items-center gap-3 rounded-full border border-line bg-surface-2/60 px-5 py-3 text-accent"
        >
          <FaSyncAlt aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em]">Feedback starts the next sprint</span>
        </motion.div>
      </Container>
    </section>
  );
}
