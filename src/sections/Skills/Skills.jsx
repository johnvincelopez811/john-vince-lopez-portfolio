import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronDown,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiConfluence,
  SiFirebase,
  SiFlutter,
  SiGitea,
  SiJira,
  SiMysql,
  SiReadthedocs,
  SiSourcetree,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbApi,
  TbCalculator,
  TbCode,
  TbDeviceMobile,
  TbFileSpreadsheet,
  TbPalette,
  TbReportAnalytics,
} from "react-icons/tb";
import { skillGroups } from "../../data/skills";
import Container from "../../components/Container/Container";
import Marquee from "../../components/Marquee/Marquee";
import { viewportOnce } from "../../lib/motion";

const iconMap = {
  react: FaReact,
  javascript: FaJs,
  html5: FaHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  responsive: TbDeviceMobile,
  flutter: SiFlutter,
  php: FaPhp,
  mysql: SiMysql,
  firebase: SiFirebase,
  api: TbApi,
  database: FaDatabase,
  python: FaPython,
  data: TbReportAnalytics,
  report: TbReportAnalytics,
  excel: TbFileSpreadsheet,
  sheets: TbFileSpreadsheet,
  git: FaGitAlt,
  github: FaGithub,
  vscode: TbCode,
  androidstudio: SiAndroidstudio,
  sourcetree: SiSourcetree,
  gitea: SiGitea,
  figma: FaFigma,
  canva: TbPalette,
  jira: SiJira,
  confluence: SiConfluence,
  docs: SiReadthedocs,
  calculator: TbCalculator,
};

const allSkills = skillGroups.flatMap((group) => group.skills);

const marqueeRowA = allSkills.filter(
  (_, index) => index % 2 === 0,
);

const marqueeRowB = allSkills.filter(
  (_, index) => index % 2 !== 0,
);

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SkillChip({ skill }) {
  const Icon = iconMap[skill.icon];

  return (
    <span className="flex max-w-[85vw] items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-surface-2 px-4 py-2.5 text-sm text-ink sm:max-w-none">
      {Icon && (
        <Icon
          className="shrink-0 text-base text-accent"
          aria-hidden="true"
        />
      )}

      <span className="truncate sm:overflow-visible sm:text-clip">
        {skill.name}
      </span>
    </span>
  );
}

function SkillGroup({ group, groupIndex }) {
  const groupNumber = String(groupIndex + 1).padStart(2, "0");

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 12,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full min-w-0 flex-col border-t border-line pt-5"
    >
      <div className="flex w-full items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
          Group {groupNumber}
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
          {groupNumber}
        </span>
      </div>

      <h3 className="mt-3 min-h-[3.25rem] break-words font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
        {group.label}
      </h3>

      <ul className="mt-4 space-y-3">
        {group.skills.map((skill, skillIndex) => {
          const Icon = iconMap[skill.icon];

          return (
            <motion.li
              key={`${group.id}-${skill.name}`}
              initial={{
                opacity: 0,
                x: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.35,
                delay: skillIndex * 0.04,
                ease: "easeOut",
              }}
              className="flex min-w-0 items-center gap-3 text-sm text-muted"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                {Icon && (
                  <Icon
                    className="text-sm"
                    aria-hidden="true"
                  />
                )}
              </span>

              <span className="min-w-0 break-words">
                {skill.name}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const visibleGroups = showAllSkills
    ? skillGroups
    : skillGroups.slice(0, 3);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-line py-16 sm:py-24"
    >
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid min-w-0 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"
        >
          <motion.div
            variants={itemVariants}
            className="min-w-0"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                06
              </span>

              <span className="h-px w-8 bg-accent" />

              <span className="font-mono text-xs uppercase tracking-[0.22em] text-faint">
                Skills
              </span>
            </div>

            <h2 className="mt-5 max-w-[34rem] break-words font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Tools I use to build and deliver projects
            </h2>

            <motion.div
              className="mt-6 flex min-w-0 items-center gap-2 overflow-hidden font-mono text-xs text-accent sm:text-sm"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={viewportOnce}
              transition={{
                delay: 0.35,
              }}
            >
              <motion.span
                className="shrink-0"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                &gt;
              </motion.span>

              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "18ch",
                }}
                viewport={viewportOnce}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: "linear",
                }}
                className="max-w-full overflow-hidden whitespace-nowrap"
              >
                loading skill set...
              </motion.span>

              <motion.span
                className="h-4 w-[2px] shrink-0 bg-accent"
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex min-w-0 items-end"
          >
            <div className="min-w-0 max-w-2xl">
              <p className="break-words text-base leading-7 text-muted sm:text-lg">
                A practical stack used across professional retail support,
                full-stack academic projects, and continuous development.
              </p>

              <div className="mt-6 flex min-w-0 items-center gap-4">
                <span className="h-px min-w-0 flex-1 bg-line" />

                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  {allSkills.length} tools listed
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="mt-10 flex min-w-0 flex-col gap-3 overflow-hidden border-y border-line py-5"
        initial={{
          opacity: 0,
          y: 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={viewportOnce}
        transition={{
          duration: 0.55,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Marquee
          items={marqueeRowA}
          direction="left"
          renderItem={(skill) => (
            <SkillChip skill={skill} />
          )}
        />

        <Marquee
          items={marqueeRowB}
          direction="right"
          renderItem={(skill) => (
            <SkillChip skill={skill} />
          )}
        />
      </motion.div>

      <Container className="mt-12">
        {skillGroups.length > 3 && (
          <motion.div
            className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-surface-2/50 px-5 py-4 sm:flex-row"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewportOnce}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div>
              <p className="text-sm font-semibold text-ink">
                {showAllSkills
                  ? "All skill categories are displayed"
                  : "Showing featured skill categories"}
              </p>

              <p className="mt-1 text-xs text-muted">
                {showAllSkills
                  ? `${skillGroups.length} categories are currently visible.`
                  : `Showing 3 of ${skillGroups.length} categories.`}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setShowAllSkills((current) => !current)
              }
              aria-expanded={showAllSkills}
              className="focus-ring group inline-flex shrink-0 items-center gap-3 rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-canvas shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:shadow-lg"
            >
              {showAllSkills
                ? "Show Less Skills"
                : "View All Skills"}

              <FaChevronDown
                aria-hidden="true"
                className={`text-xs transition-transform duration-300 ${
                  showAllSkills ? "rotate-180" : ""
                }`}
              />
            </button>
          </motion.div>
        )}

        <motion.div
          layout
          className="grid min-w-0 grid-cols-1 items-stretch gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence
            initial={false}
            mode="popLayout"
          >
            {visibleGroups.map((group, groupIndex) => (
              <SkillGroup
                key={group.id}
                group={group}
                groupIndex={groupIndex}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
