import { certificates } from "../../data/certificates";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CertificateCard from "../../components/CertificateCard/CertificateCard";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-14 sm:py-20 border-t border-line">
      <Container>
        <SectionTitle
          eyebrow="06 · Learning Records"
          title="Learning Records"
          description="Click a certificate to view a larger preview and the skills it covers."
        />

        {certificates.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="mt-8 card rounded-2xl p-8 text-center text-muted">
            Certificates will be added here soon.
          </div>
        )}
      </Container>
    </section>
  );
}
