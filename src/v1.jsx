import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from 'lucide-react';
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.jpeg";
import cer1 from './assets/cer1.jpeg';
import cer2 from './assets/cer2.png';
import cer3 from './assets/cer3.jpeg';
import cer4 from './assets/cer4.jpeg';
import cer5 from './assets/cer5.png';
import SimpleSlider from "./components/HomeSlider";

const V1 = () => {
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

  // Add the missing scrollToContact function
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    } else {
      toast.error('Please enter numeric value only!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: false,
        draggable: true,
        theme: 'colored',
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <ToastContainer />
      
      {/* Header Section */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "h-16 shadow-md" : "h-20"
        }`}
        style={{ backgroundColor: "#4DB6E2" }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <div className={`transition-transform duration-300 ${scrolled ? "scale-85" : "scale-100"}`}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <span className="text-xl font-bold text-[#4DB6E2]">IE</span>
                </div>
                <span className="text-white font-medium text-lg leading-tight">
                  The Elixir of Life<br />Kangen Water
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Home
                </button>
              </li>
              <li className="relative group">
                <button
                  onClick={() => scrollToSection('machinery')}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  Machinery
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="py-1">
                    {machineItems.map((machine, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection('machinery')}
                        className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        {machine}
                      </button>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('distributor')}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Become a Distributor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white absolute w-full left-0 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "top-full opacity-100 visible" : "-top-96 opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
  <button
    onClick={() => {
      setMobileMachineOpen(!mobileMachineOpen); 
    }}
    className="flex justify-between items-center w-full py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
  >
    Machinery
    <span className={`ml-2 transition-transform duration-300 ${mobileMachineOpen ? 'rotate-180' : ''}`}>
      ▼
    </span>
  </button>
  <div className={`pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ${mobileMachineOpen ? 'max-h-96' : 'max-h-0'}`}>
    {machineItems.map((machine, index) => (
      <button
        key={index}
        onClick={() => { scrollToSection('machinery'); setMobileMenuOpen(false); }}
        className="block w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200 text-sm border-l-2 border-gray-200"
      >
        {machine}
      </button>
    ))}
  </div>
</li>
              <li>
                <button
                  onClick={() => { scrollToSection('distributor'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
                >
                  Become a Distributor
                </button>
              </li>
              <li>
                <button
                  onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <main>
        {/* Hero Section */}
        {/* <section id="home" className="pt-20 min-h-screen bg-white flex items-center justify-center">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Welcome to Enagic India Kangen Water
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience the transformative power of Kangen Water for your health and wellness journey.
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-[#4DB6E2] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section> */}
        <SimpleSlider/>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 pl-5">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Kangen Water</h2>
                <p className="text-gray-600 mb-4">
                  Kangen Water is alkaline, antioxidant-rich, and micro-clustered water produced by Enagic's ionization process.
                  It's designed to help neutralize acid in the body and provide superior hydration.
                </p>
                <p className="text-gray-600 mb-6">
                  Our Kangen Water machines use advanced electrolysis technology to transform ordinary tap water into hydrogen-rich,
                  alkaline water that many believe offers significant health benefits.
                </p>
                <button onClick={scrollToContact} className="bg-[#4DB6E2] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Discover More
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={img4}
                    alt="Kangen Water Machine"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Services */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#4DB6E2] animate-pulse ">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: img1,
                  title: "Kangen Demo",
                  description: "Our Sales representative will visit your residence to explain all about the benefits of Kangen Water Machine and educate you on operation and e-cleaning.",
                  extra: "Book Your Appointment Now!"
                },
                {
                  image: img2,
                  title: "Machine Installation",
                  description: "Get your Enagic Kangen Water Ionizer installed by your washbasin—sleek, swift, and ready in under an hour with flexible wall or platform mounting!",
                  extra: "1 Year Free Maintenance – Minimal Charges Thereafter"
                },
                {
                  image: img3,
                  title: "Deep Cleaning",
                  description: "Annual deep cleaning service using submersible motor and citric acid to maintain optimal machine performance.",
                  extra: "Minimal Service Charges"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                >
                  {/* Image Container with Fixed Height */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container with Fixed Padding and Flex Grow */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Animated Title Underline */}
                    <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 relative pb-2">
                      {service.title}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#4DB6E2] transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2"></span>
                    </h3>

                    {/* Description with min-height to ensure consistent height */}
                    <div className="min-h-40 flex flex-col">
                      <p className="text-gray-600 mb-4 flex-grow transition-colors duration-300 group-hover:text-gray-800">
                        {service.description}
                      </p>

                      {service.extra && (
                        <p className="text-center text-sm text-[#4DB6E2] font-medium mb-4">
                          {service.extra}
                        </p>
                      )}
                    </div>

                    {/* Button Container - Always at Bottom */}
                    <div className="text-center mt-auto pt-4">
                      <button
                        onClick={scrollToContact}
                        className="bg-[#4DB6E2] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
                                  transition-all duration-300 w-full hover:scale-105 hover:shadow-lg
                                  transform origin-bottom"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Removed duplicate */}
        <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 animate-pulse  text-[#4DB6E2] transition-all duration-500">
              Contact Us
            </h2>
            <div className="max-w-3xl mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-medium  animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-blue-200  rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium animate-pulse  text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Email"
                  />
                </div>

                <div className="md:col-span-2 relative group">
                  <label htmlFor="number" className="block text-sm font-medium animate-pulse  text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    maxLength={10}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Contact Number"
                  />
                </div>

                <div className="md:col-span-2 relative group">
                  <label htmlFor="address" className="block animate-pulse  text-sm font-medium text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Address"
                  />
                </div> 

                <div className="md:col-span-2 relative group">
                  <label htmlFor="message" className="block text-sm font-medium animate-pulse  text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      toast.success("Our Team Will Contact You Shortly", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      })
                    }
                    className="bg-[#4DB6E2] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and About */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <span className="text-xl font-bold text-blue-700">EG</span>
                </div>
                <span className="text-white font-medium text-lg">Enagic Global Distributor</span>
              </div>
              <p className="text-white text-sm">
                Distributing premium Kangen Water machines worldwide for a healthier and more energized lifestyle.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <p className="text-white text-sm mb-2">
                📧 Email: <a href="mailto:info@enagicglobal.com" className="underline text-white">info@enagicglobal.com</a>
              </p>
              <p className="text-white text-sm">
                📞 Phone: <a href="tel:+911234567890" className="underline text-white">+91 12345 67890</a>
              </p>
            </div>

            {/* Demo Message */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Get a Free Demo</h3>
              <p className="text-white text-sm">
                Interested in experiencing Kangen Water? Contact us now to schedule a free demo at your convenience.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-blue-700 mt-10 pt-6 text-center text-white text-sm">
            <p>© {new Date().getFullYear()} Enagic Global Distributor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default V1;