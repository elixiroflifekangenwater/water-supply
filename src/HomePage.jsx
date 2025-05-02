import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import SimpleSlider from "./components/HomeSlider";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { scrollToSection, scrollToContact } from "./utils/scroll";
import { handleNumberChange as validateNumberChange } from "./utils/validation";
import Contact from "./components/Contact";
import { motion } from 'framer-motion';
const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [number, setNumber] = useState('');
  const [mobileMachineOpen, setMobileMachineOpen] = useState(false);

  const machineItems = [
    "Kangen Water Machine SD 501",
    "Kangen Water Machine SD 501 Platinum",
    "Kangen Water Machine K8",
    "Kangen Water Machine JRIV",
    "Kangen Water Machine Super 501",
    "Bathroom Filtration Anespa DX"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Wrapper for validation util
  const handleNumberChange = (e) => validateNumberChange(e, setNumber, toast);

  const [showContactPopup, setShowContactPopup] = useState(true);

  const handleContactClick = () => {
    setShowContactPopup(true);
  };

  const handleClosePopup = () => {
    setShowContactPopup(false);
  };

  return (
    <div className="min-h-screen">
      <ToastContainer />
      <Navbar
        scrolled={scrolled}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMachineOpen={mobileMachineOpen}
        setMobileMachineOpen={setMobileMachineOpen}
        machineItems={machineItems}
        scrollToSection={scrollToSection}
        toggleMobileMenu={toggleMobileMenu}
        onContactClick={handleContactClick}
      />
      <main>
        {/* Contact Popup - without black background, always visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={showContactPopup ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-lg p-6 relative w-full max-w-lg shadow-xl mx-4 pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowContactPopup(false)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors z-50 text-xl font-bold"
            >
              ×
            </motion.button>
            <Contact 
              isPopup={true} 
              onClose={handleClosePopup}
            />
          </motion.div>
        </motion.div>

        <SimpleSlider />
        <About scrollToContact={scrollToContact} />
        <Services scrollToContact={scrollToContact} />
        {/* <ContactForm number={number} handleNumberChange={handleNumberChange} /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
