import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { navLinks, personal, socials, footerClosingLine } from "../../data/site";
import Container from "../Container/Container";
import useSectionNav from "../../hooks/useSectionNav";
import JVLMark from "../JVLMark/JVLMark";

const socialIcons = [
  { key: "github", Icon: FaGithub, label: "GitHub" },
  { key: "linkedin", Icon: FaLinkedin, label: "LinkedIn" },
  { key: "facebook", Icon: FaFacebook, label: "Facebook" },
  { key: "upwork", Icon: SiUpwork, label: "Upwork" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const goToSection = useSectionNav();

  return (
    <footer className="relative border-t border-line">
      <Container className="py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <JVLMark size="sm" className="mb-1.5" />
            <p className="font-display font-semibold text-lg text-ink">{personal.fullName}</p>
            <p className="text-sm text-muted mt-1">Web Developer &middot; New Era Cap Philippines</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <button
                  type="button"
                  onClick={() => goToSection(link.to)}
                  className="focus-ring cursor-pointer text-sm text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialIcons.map(({ key, Icon, label }) => {
              const url = socials[key];
              if (!url) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:text-accent hover:border-accent/60 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <p className="text-sm text-muted italic">{footerClosingLine}</p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-6 text-xs text-faint">
          <p>&copy; {year} {personal.fullName}. All rights reserved.</p>
          <button
            type="button"
            onClick={() => goToSection("hero")}
            className="focus-ring group cursor-pointer inline-flex items-center gap-2 text-muted hover:text-ink transition-colors"
            aria-label="Back to top"
          >
            Back to top{" "}
            <FaArrowUp aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
