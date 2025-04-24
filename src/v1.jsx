import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleSlider from "./componensts/HomeSlider";

const V1 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [number, setNumber] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToService = () => {
    const serviceSection = document.getElementById('service');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToMachinery = () => {
    const machinerySection = document.getElementById('machinery');
    if (machinerySection) {
      machinerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen">
      <ToastContainer />
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "h-16 shadow-md" : "h-20"
        } bg-blue-700`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <div className={`transition-transform duration-300 ${scrolled ? "scale-85" : "scale-100"}`}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <span className="text-xl font-bold text-blue-500">IE</span>
                </div>
                <span className="text-white font-medium text-lg">
                  The Elixir of Life Kangen Water
                </span>
              </div>
            </div>
          </div>

          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-blue-200/20 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-blue-200/20 hover:-translate-y-0.5 hover:shadow-md">
                  Services
                </a>
              </li>
              <li>
                <a href="#certification" className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-blue-200/20 hover:-translate-y-0.5 hover:shadow-md">
                  Certification
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-blue-200/20 hover:-translate-y-0.5 hover:shadow-md">
                  Machinery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-blue-200/20 hover:-translate-y-0.5 hover:shadow-md">
                  Contact Us
                </a>
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
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
                <button   onClick={scrollToContact} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Discover More
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20sleek%20Kangen%20water%20purification%20machine%20with%20blue%20glowing%20display%20on%20kitchen%20counter%2C%20clean%20minimalist%20design%2C%20high-end%20appliance%20with%20water%20flowing%20into%20glass%2C%20professional%20product%20photography%20with%20soft%20lighting%20and%20white%20background&width=600&height=400&seq=1&orientation=landscape"
                    alt="Kangen Water Machine"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center animate-pulse mb-12 text-gray-800 animate-fade-in-up">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "/src/assets/img1.png",
                  title: "Kangen Demo",
                  description: "Our Sales representative will visit your residence to explain all about the benefits of Kangen Water Machine and educate you on operation and e-cleaning.",
                  extra: "Book Your Appointment Now!"
                },
                {
                  image: "/src/assets/img2.png",
                  title: "Machine Installation",
                  description: "Professional installation of Enagic Kangen Water Ionizer near your washbasin. Completed in under 1 hour with wall or platform mounting options.",
                  extra: "*Additional charges for special installations"
                },
                {
                  image: "/src/assets/img3.png",
                  title: "Deep Cleaning",
                  description: "Annual deep cleaning service using submersible motor and citric acid to maintain optimal machine performance.",
                  extra: "Service Charge: ₹2500/-"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
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
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2"></span>
                    </h3>
                    
                    {/* Description with min-height to ensure consistent height */}
                    <div className="min-h-40 flex flex-col">
                      <p className="text-gray-600 mb-4 flex-grow transition-colors duration-300 group-hover:text-gray-800">
                        {service.description}
                      </p>
                      
                      {service.extra && (
                        <p className="text-center text-sm text-blue-600 font-medium mb-4 animate-pulse">
                          {service.extra}
                        </p>
                      )}
                    </div>
                    
                    {/* Button Container - Always at Bottom */}
                    <div className="text-center mt-auto pt-4">
                      <button 
                        onClick={scrollToContact}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
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
    
{/* MAchinery Section1 */}
<section id="machinery" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center animate-pulse mb-12 text-gray-800 animate-fade-in-up">
              Available Machinery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "/src/assets/img1.png",
                  title: "Kangen Demo",
                  description: "Our Sales representative will visit your residence to explain all about the benefits of Kangen Water Machine and educate you on operation and e-cleaning.",
                  extra: "Book Your Appointment Now!"
                },
                {
                  image: "/src/assets/img2.png",
                  title: "Machine Installation",
                  description: "Professional installation of Enagic Kangen Water Ionizer near your washbasin. Completed in under 1 hour with wall or platform mounting options.",
                  extra: "*Additional charges for special installations"
                },
                {
                  image: "/src/assets/img3.png",
                  title: "Deep Cleaning",
                  description: "Annual deep cleaning service using submersible motor and citric acid to maintain optimal machine performance.",
                  extra: "Service Charge: ₹2500/-"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
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
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2"></span>
                    </h3>
                    
                    {/* Description with min-height to ensure consistent height */}
                    <div className="min-h-40 flex flex-col">
                      <p className="text-gray-600 mb-4 flex-grow transition-colors duration-300 group-hover:text-gray-800">
                        {service.description}
                      </p>
                      
                      {service.extra && (
                        <p className="text-center text-sm text-blue-600 font-medium mb-4 animate-pulse">
                          {service.extra}
                        </p>
                      )}
                    </div>
                    
                    {/* Button Container - Always at Bottom */}
                    <div className="text-center mt-auto pt-4">
                      <button 
                        onClick={scrollToContact}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg 
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




        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 animate-pulse  text-blue-500 transition-all duration-300 ">
              Contact Us
            </h2>
            <div className="max-w-3xl mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-medium text-blue-500 mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-blue-200 animate-pulse rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-medium text-blue-500 mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white animate-pulse text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Email"
                  />
                </div>

                <div className="md:col-span-2 relative group">
                  <label htmlFor="number" className="block text-sm font-medium text-blue-500 mb-1  transition-transform duration-200 group-hover:-translate-y-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    maxLength={10}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 animate-pulse focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Contact Number"
                  />
                </div>

                <div className="md:col-span-2 relative group">
                  <label htmlFor="message" className="block text-sm font-medium  text-blue-500 mb-1 transition-transform duration-200 group-hover:-translate-y-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border animate-pulse border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  <button
                    type="button"
                    className="bg-blue-300 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <span className="text-xl font-bold text-blue-500">IE</span>
                </div>
                <span className="text-white font-medium">Enagic India</span>
              </div>
              <p className="text-gray-400 text-sm">
                Providing high-quality Kangen Water machines and solutions for a healthier lifestyle.
              </p>
            </div>
            
            {/* Footer sections remain same as original */}
            
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Enagic India Kangen Water. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default V1;