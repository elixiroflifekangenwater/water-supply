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
      />
      <main>
        <SimpleSlider />
        <About scrollToContact={scrollToContact} />
        <Services scrollToContact={scrollToContact} />
        <ContactForm number={number} handleNumberChange={handleNumberChange} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
