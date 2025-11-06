import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import bg from "./Assetes/bg.png";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const [waveActive, setWaveActive] = useState(false);

  useEffect(() => {
    setWaveActive(true);
    const timer = setTimeout(() => setWaveActive(false), 1100); // ⬅️ Slightly longer to match slower transition
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* ✅ Glowing wave overlay */}
      <AnimatePresence>
        {waveActive && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }} // ⬅️ Slowed down
            className="absolute inset-0 z-40 bg-gradient-to-r from-cyan-500 via-teal-400 to-transparent blur-2xl opacity-70 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* ✅ Page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.98 }}
          transition={{ duration: 0.9, ease: "easeInOut" }} // ⬅️ 50% slower for smoother fade
          className="relative z-10"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const backgroundStyle = isHomePage
    ? { backgroundColor: "white" }
    : {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Navbar />
        <main
          className="flex-grow relative transition-all duration-700 ease-in-out"
          style={backgroundStyle}
        >
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RootApp;
