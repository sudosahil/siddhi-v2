import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Teachers from './pages/Teachers';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -12 },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/courses" element={<AnimatedPage><Courses /></AnimatedPage>} />
            <Route path="/results" element={<AnimatedPage><Results /></AnimatedPage>} />
            <Route path="/teachers" element={<AnimatedPage><Teachers /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/schedule" element={<AnimatedPage><Schedule /></AnimatedPage>} />
            <Route path="/admissions" element={<AnimatedPage><Admissions /></AnimatedPage>} />
            <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </HelmetProvider>
  );
}
