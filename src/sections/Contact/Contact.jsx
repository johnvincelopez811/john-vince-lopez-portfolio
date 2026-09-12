import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personal, socials, formspreeEndpoint } from "../../data/site";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import { fadeUp, viewportOnce } from "../../lib/motion";

const initialForm = { name: "", email: "", projectType: "", subject: "", message: "" };

const projectTypes = [
  "Business website or landing page",
  "Dashboard or internal system",
  "Mobile application",
  "Website fixes or maintenance",
  "Something else",
];

const contactDetails = [
  { icon: FaEnvelope, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FaPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, "")}` },
  { icon: FaMapMarkerAlt, label: "Location", value: personal.location, href: undefined },
];

const socialLinks = [
  { key: "github", Icon: FaGithub, label: "GitHub" },
  { key: "linkedin", Icon: FaLinkedin, label: "LinkedIn" },
  { key: "facebook", Icon: FaFacebook, label: "Facebook" },
  { key: "upwork", Icon: SiUpwork, label: "Upwork" },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.projectType.trim() || !form.subject.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields before sending.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    // Without a configured Formspree endpoint, fall back to a mailto link
    // so no fake "message sent" confirmation is ever shown.
    if (!formspreeEndpoint) {
      const body = encodeURIComponent(
        `Project type: ${form.projectType}\n\n${form.message}\n\n— ${form.name} (${form.email})`,
      );
      const subject = encodeURIComponent(form.subject);
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email app so you can send this message.");
      setForm(initialForm);
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.target),
      });

      if (response.ok) {
        toast.success("Message sent. Thanks for reaching out!");
        setForm(initialForm);
      } else {
        toast.error("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 border-t border-line">
      <Container>
        <SectionTitle
          eyebrow="08 · Start a Project"
          title="Tell me what you need to build or improve"
          description="Share the goal, current setup, and most important requirement. I can help define a practical next step before development begins."
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
          <motion.div
            className="flex flex-col gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="card flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-faint">{label}</p>
                  {href ? (
                    <a href={href} className="focus-ring text-ink hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-ink">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card rounded-2xl p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-faint mb-2">Elsewhere</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ key, Icon, label }) => {
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
                  {!socials.github && !socials.linkedin && !socials.facebook && !socials.upwork && (
                    <p className="text-sm text-faint">Social links coming soon.</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Prefer email? Messages sent through the form open directly in your email app —
                nothing is sent silently.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="card flex flex-col gap-5 rounded-2xl p-5 sm:p-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <Field
              label="Project Type"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              options={projectTypes}
              required
            />
            <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} required />
            <Field label="Message" name="message" value={form.message} onChange={handleChange} required textarea />
            <Button type="submit" variant="primary" icon={FaPaperPlane} disabled={submitting} className="self-start">
              {submitting ? "Sending…" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required, textarea, options }) {
  const commonProps = {
    id: name,
    name,
    value,
    onChange,
    required,
    className: textarea
      ? "focus-ring w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-accent/60"
      : "focus-ring w-full h-12 rounded-xl border border-line bg-surface-2 px-4 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-accent/60",
  };

  return (
    <div className={textarea ? "sm:col-span-2 flex flex-col gap-2" : "flex flex-col gap-2"}>
      <label htmlFor={name} className="text-xs font-mono uppercase tracking-widest text-faint">
        {label}
      </label>
      {options ? (
        <select {...commonProps}>
          <option value="" disabled>Select a project type</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : textarea ? (
        <textarea rows={5} placeholder="Tell me a bit about your project or opportunity…" {...commonProps} />
      ) : (
        <input type={type} placeholder={label} {...commonProps} />
      )}
    </div>
  );
}
