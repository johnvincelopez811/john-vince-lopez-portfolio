import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaChevronDown,
  FaCopy,
  FaDownload,
  FaEnvelope,
  FaFileAlt,
  FaFilePdf,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import { SiViber } from "react-icons/si";
import { personal, heroContacts } from "../../data/site";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import PortraitFrame from "../../components/PortraitFrame/PortraitFrame";
import useSectionNav from "../../hooks/useSectionNav";
import { EASE, fadeUp, staggerContainer } from "../../lib/motion";

import resumeFile from "../../assets/resume/JohnVinceLopez_Resume.pdf";
import cvFile from "../../assets/resume/JohnVinceLopez_CV.pdf";

import portrait from "../../assets/images/JohnVinceLopez.png";

const RECIPIENT_EMAIL = "johnvincelopez811@gmail.com";
const EMAIL_SUBJECT = "Project Inquiry for John Vince Lopez";

const VIBER_NUMBER = "+639432143041";
const VIBER_DEEP_LINK = "viber://chat?number=%2B639432143041";
const VIBER_DOWNLOAD_URL = "https://www.viber.com/en/download/";

export default function Hero() {
  const goToSection = useSectionNav();

  const [downloadOpen, setDownloadOpen] = useState(false);
  const [viberFallbackOpen, setViberFallbackOpen] = useState(false);
  const [numberCopied, setNumberCopied] = useState(false);

  const downloadRef = useRef(null);

  useEffect(() => {
    if (!downloadOpen) return;

    function handleClickOutside(event) {
      if (
        downloadRef.current &&
        !downloadRef.current.contains(event.target)
      ) {
        setDownloadOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [downloadOpen]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setDownloadOpen(false);
        setViberFallbackOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = viberFallbackOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [viberFallbackOpen]);

  function openGmailCompose() {
    const emailBody = [
      "Hi John Vince,",
      "",
      "I reviewed your portfolio and would like to discuss a project or opportunity with you.",
      "",
      "Thank you.",
    ].join("\n");

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(RECIPIENT_EMAIL)}` +
      `&su=${encodeURIComponent(EMAIL_SUBJECT)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    const popupWidth = 720;
    const popupHeight = 650;

    const left = Math.max(
      0,
      window.screenX + (window.outerWidth - popupWidth) / 2,
    );

    const top = Math.max(
      0,
      window.screenY + (window.outerHeight - popupHeight) / 2,
    );

    const gmailWindow = window.open(
      gmailUrl,
      "gmailCompose",
      [
        "popup=yes",
        `width=${popupWidth}`,
        `height=${popupHeight}`,
        `left=${left}`,
        `top=${top}`,
        "resizable=yes",
        "scrollbars=yes",
      ].join(","),
    );

    if (!gmailWindow) {
      window.location.href = gmailUrl;
      return;
    }

    gmailWindow.focus();
  }

  function openViberChat() {
    let viberOpened = false;

    function markViberAsOpened() {
      viberOpened = true;
      cleanupDetection();
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        markViberAsOpened();
      }
    }

    function cleanupDetection() {
      window.removeEventListener("blur", markViberAsOpened);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    }

    window.addEventListener("blur", markViberAsOpened);
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    window.location.href = VIBER_DEEP_LINK;

    window.setTimeout(() => {
      cleanupDetection();

      if (!viberOpened) {
        setNumberCopied(false);
        setViberFallbackOpen(true);
      }
    }, 2000);
  }

  async function copyViberNumber() {
    try {
      await navigator.clipboard.writeText(VIBER_NUMBER);
      setNumberCopied(true);
    } catch {
      const temporaryInput = document.createElement("input");

      temporaryInput.value = VIBER_NUMBER;
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";

      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryInput);

      setNumberCopied(true);
    }

    window.setTimeout(() => {
      setNumberCopied(false);
    }, 2000);
  }

  function handleContactClick(event, contact) {
    if (contact.type === "email") {
      event.preventDefault();
      openGmailCompose();
      return;
    }

    if (contact.type === "viber") {
      event.preventDefault();
      openViberChat();
    }
  }

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center pb-16 pt-28 sm:pb-20 sm:pt-32"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
            <motion.div
              className="flex flex-col gap-3.5 lg:relative lg:z-10 lg:pr-10"
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeUp}
                className="text-base text-muted sm:text-lg"
              >
                {personal.heroGreeting}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-balance font-display text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.025em] text-ink sm:text-[3.5rem] lg:text-[3.75rem]"
              >
                {personal.fullName.replace(" T.", "")}
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="min-h-6 font-mono text-sm tracking-wide text-accent sm:text-base"
              >
                <TypeAnimation
                  sequence={personal.typingTitles.flatMap((title) => [
                    title,
                    1800,
                  ])}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  cursor
                />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="max-w-[34rem] text-[0.95rem] leading-7 text-muted sm:text-base"
              >
                {personal.heroStatement}
              </motion.p>

              <motion.ul
                variants={fadeUp}
                className="flex flex-wrap gap-2 pt-1"
                aria-label="Professional highlights"
              >
                {personal.availabilityTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line bg-surface-2/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    icon={FaArrowRight}
                    onClick={() => goToSection("services")}
                  >
                    View My Services
                  </Button>

                  <div className="relative" ref={downloadRef}>
                    <Button
                      variant="secondary"
                      icon={FaDownload}
                      onClick={() =>
                        setDownloadOpen((current) => !current)
                      }
                      aria-expanded={downloadOpen}
                      aria-haspopup="menu"
                      className="min-w-[210px]"
                    >
                      <span>Download Resume / CV</span>

                      <FaChevronDown
                        aria-hidden="true"
                        className={`ml-1 text-xs transition-transform duration-200 ${
                          downloadOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Button>

                    <AnimatePresence>
                      {downloadOpen && (
                        <motion.div
                          role="menu"
                          initial={{
                            opacity: 0,
                            y: 8,
                            scale: 0.97,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 6,
                            scale: 0.97,
                          }}
                          transition={{
                            duration: 0.18,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-[calc(100%+0.65rem)] z-30 w-full min-w-[230px] overflow-hidden rounded-xl border border-line bg-surface p-2 shadow-xl"
                        >
                          <a
                            href={resumeFile}
                            download="JohnVinceLopez_Resume.pdf"
                            role="menuitem"
                            onClick={() => setDownloadOpen(false)}
                            className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-accent-soft"
                          >
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                              <FaFileAlt aria-hidden="true" />
                            </span>

                            <span className="flex flex-col">
                              <span className="text-sm font-semibold text-ink">
                                Download Resume
                              </span>

                              <span className="font-mono text-[10px] text-faint">
                                Professional summary
                              </span>
                            </span>
                          </a>

                          <a
                            href={cvFile}
                            download="JohnVinceLopez_CV.pdf"
                            role="menuitem"
                            onClick={() => setDownloadOpen(false)}
                            className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-accent-soft"
                          >
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                              <FaFilePdf aria-hidden="true" />
                            </span>

                            <span className="flex flex-col">
                              <span className="text-sm font-semibold text-ink">
                                Download CV
                              </span>

                              <span className="font-mono text-[10px] text-faint">
                                Complete qualifications
                              </span>
                            </span>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {heroContacts.map((contact) => {
                    const Icon =
                      contact.type === "email"
                        ? FaEnvelope
                        : contact.type === "linkedin"
                          ? FaLinkedinIn
                          : SiViber;

                    return (
                      <a
                        key={contact.type}
                        href={
                          contact.type === "linkedin"
                            ? contact.href
                            : "#contact"
                        }
                        target={
                          contact.type === "linkedin"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          contact.type === "linkedin"
                            ? "noreferrer"
                            : undefined
                        }
                        onClick={(event) =>
                          handleContactClick(event, contact)
                        }
                        aria-label={`${contact.label}: ${contact.value}`}
                        title={`${contact.label}: ${contact.value}`}
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-2 text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-ink hover:shadow-md"
                      >
                        <Icon
                          aria-hidden="true"
                          className="text-base transition-transform duration-200 group-hover:scale-110"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: EASE,
              }}
              className="mx-auto w-full max-w-[480px] lg:-ml-6 lg:mx-0"
            >
              <PortraitFrame image={portrait} />
            </motion.div>
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {viberFallbackOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setViberFallbackOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="viber-error-title"
              className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 14,
                scale: 0.97,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                    <SiViber aria-hidden="true" className="text-lg" />
                  </span>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                      Connection error
                    </p>

                    <h2
                      id="viber-error-title"
                      className="mt-0.5 font-display text-xl font-semibold text-ink"
                    >
                      Viber could not be opened
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setViberFallbackOpen(false)}
                  aria-label="Close Viber message"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:border-accent hover:bg-accent-soft hover:text-ink"
                >
                  <FaTimes aria-hidden="true" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-muted">
                  Viber may not be installed or the browser may have blocked
                  the app from opening. You can try again, install Viber, or
                  copy the number below.
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
                      Viber number
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-ink">
                      {VIBER_NUMBER}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={copyViberNumber}
                    className="flex h-10 items-center gap-2 rounded-lg border border-line bg-canvas px-3 text-xs font-semibold text-muted transition-all duration-200 hover:border-accent hover:bg-accent-soft hover:text-ink"
                  >
                    <FaCopy aria-hidden="true" />

                    {numberCopied ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => {
                      setViberFallbackOpen(false);
                      openViberChat();
                    }}
                    className="flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-4 py-3 text-sm font-semibold text-canvas shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:shadow-lg"
                  >
                    <SiViber aria-hidden="true" />
                    Try Again
                  </button>

                  <a
                    href={VIBER_DOWNLOAD_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-line bg-surface-2 px-4 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft"
                  >
                    <FaDownload aria-hidden="true" />
                    Install Viber
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setViberFallbackOpen(false)}
                  className="mt-3 w-full rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
