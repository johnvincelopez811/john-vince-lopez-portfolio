import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { navigateToSection } from "./lib/navigation";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import UpworkPortfolioPage from "./pages/UpworkPortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";

/** Handles a direct link like /#projects — jumps once, instantly. */
function InitialHashHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    const id = location.hash.replace("#", "");
    const frame = requestAnimationFrame(() => navigateToSection(id, { updateHash: false }));
    return () => cancelAnimationFrame(frame);
    // Only run for the initial load's hash, not on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

function AppContent({ loading }) {
  const location = useLocation();
  const upworkMode = location.pathname === "/upwork" || location.pathname.startsWith("/upwork/projects/");

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loading key="loading" />}</AnimatePresence>

      <ScrollProgress />
      {!upworkMode && <Navbar />}
      <InitialHashHandler />

      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "themed-transition",
          style: {
            background: "var(--color-surface)",
            color: "var(--color-ink)",
            border: "1px solid var(--color-line)",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/upwork" element={<UpworkPortfolioPage />} />
        <Route path="/upwork/projects/:slug" element={<ProjectDetailPage upworkMode />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!upworkMode && <Footer />}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Short, fixed-length intro — never delays the site for long.
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
        <ActiveSectionProvider>
          <AppContent loading={loading} />
        </ActiveSectionProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
