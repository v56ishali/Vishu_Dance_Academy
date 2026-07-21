import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from '../Pages/Home';
import About from '../Pages/About';
import DanceStyles from '../Pages/DanceStyles';
import Admission from '../Pages/Admission';
import Gallery from '../Pages/Gallery';
import Events from '../Pages/Events';
import Contact from '../Pages/Contact';
import Faq from '../Pages/Faq';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Trainers from '../Pages/Trainers';
import Terms from '../Pages/Terms';
import Privacy from '../Pages/Privacy';
import ForgetPass from '../Pages/ForgetPass';
import Enquire from '../Pages/Enquire';
import AdminPanel from '../Pages/AdminPanel';
import Dashboard from '../Pages/Dashboard';

// Wrap each route's page component with this:
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/dance-styles" element={<PageTransition><DanceStyles /></PageTransition>} />
        <Route path="/admission" element={<PageTransition><Admission /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><Faq /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        <Route path="/trainers" element={<PageTransition><Trainers /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/forgot-password" element={<PageTransition><ForgetPass /></PageTransition>} />
        <Route path="/enquire" element={<PageTransition><Enquire /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><AdminPanel /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;