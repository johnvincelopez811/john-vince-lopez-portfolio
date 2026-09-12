import { useState } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { fadeUp, viewportOnce } from "../../lib/motion";

function CertFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-2">
      <FaCertificate className="text-3xl text-faint" aria-hidden="true" />
    </div>
  );
}

export default function CertificateCard({ certificate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring card group flex flex-col overflow-hidden rounded-2xl text-left transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        whileHover={{ y: -3 }}
        aria-haspopup="dialog"
      >
        <div className="relative h-36 overflow-hidden">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <CertFallback />
          )}
        </div>
        <div className="flex flex-col gap-1 p-5">
          <h3 className="font-display text-base font-semibold text-ink leading-snug">{certificate.title}</h3>
          <p className="text-xs text-muted">
            {certificate.issuer || "Issuer to be added"}
            {certificate.date ? ` · ${certificate.date}` : ""}
          </p>
        </div>
      </motion.button>

      <Modal isOpen={open} onClose={() => setOpen(false)} title={certificate.title}>
        <div className="flex flex-col gap-4 text-sm">
          <div className="rounded-xl overflow-hidden h-56">
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate preview`}
                className="h-full w-full object-contain bg-surface-2"
              />
            ) : (
              <CertFallback />
            )}
          </div>
          <p className="text-muted">
            {certificate.issuer || "Issuer to be added"}
            {certificate.date ? ` · ${certificate.date}` : ""}
          </p>
          {certificate.skills?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span key={skill} className="font-mono text-[11px] rounded-full border border-line px-2.5 py-1 text-muted">
                  {skill}
                </span>
              ))}
            </div>
          )}
          <Button
            variant="secondary"
            href={certificate.credentialUrl || undefined}
            disabled={!certificate.credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
            icon={FaExternalLinkAlt}
            className="self-start text-xs h-10 px-4"
          >
            View Credential
          </Button>
        </div>
      </Modal>
    </>
  );
}
