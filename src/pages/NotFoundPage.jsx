import { Link as RouterLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";

export default function NotFoundPage() {
  return (
    <main className="pt-40 pb-24">
      <Container className="flex flex-col items-start gap-5 max-w-xl">
        <span className="eyebrow">404</span>
        <h1 className="font-display text-4xl font-semibold text-ink">This page doesn't exist</h1>
        <p className="text-muted leading-relaxed">
          The page or project you're looking for isn't here — it may have been moved or the link may be
          incorrect.
        </p>
        <RouterLink to="/">
          <Button variant="primary" icon={FaArrowLeft}>
            Back to Home
          </Button>
        </RouterLink>
      </Container>
    </main>
  );
}
