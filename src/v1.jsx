// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";

const V1 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "h-16 shadow-md" : "h-20"
        }`}
        style={{ backgroundColor: "#8ecae6" }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`transition-transform duration-300 ${scrolled ? "scale-85" : "scale-100"}`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <span
                    className="text-xl font-bold"
                    style={{ color: "#8ecae6" }}
                  >
                    IE
                  </span>
                </div>
                <span className="text-white font-medium text-lg">
                  Enagic India Kangen Water
                </span>
              </div>
            </div>
          </div>

          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200 pb-1 border-b-2 border-white whitespace-nowrap cursor-pointer !rounded-button"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200 pb-1 hover:border-b-2 hover:border-white whitespace-nowrap cursor-pointer !rounded-button"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200 pb-1 hover:border-b-2 hover:border-white whitespace-nowrap cursor-pointer !rounded-button"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200 pb-1 hover:border-b-2 hover:border-white whitespace-nowrap cursor-pointer !rounded-button"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#kangen"
                  className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200 pb-1 hover:border-b-2 hover:border-white whitespace-nowrap cursor-pointer !rounded-button"
                >
                  Kangen Water Machine
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="pt-20 min-h-screen bg-white flex items-center justify-center"
        >
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Welcome to Enagic India Kangen Water
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience the transformative power of Kangen Water for your
                health and wellness journey.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                    <i
                      className={`fas fa-${item === 1 ? "tint" : item === 2 ? "heart" : "home"} text-2xl`}
                      style={{ color: "#8ecae6" }}
                    ></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                    {item === 1
                      ? "Water Analysis"
                      : item === 2
                        ? "Health Consultation"
                        : "Home Installation"}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {item === 1
                      ? "Get your water quality tested by our experts to understand what you are consuming daily."
                      : item === 2
                        ? "Learn how Kangen Water can help improve your specific health concerns with personalized advice."
                        : "Professional installation of Kangen Water systems in your home with complete setup guidance."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  About Kangen Water
                </h2>
                <p className="text-gray-600 mb-4">
                  Kangen Water is alkaline, antioxidant-rich, and
                  micro-clustered water produced by Enagic's ionization process.
                  It's designed to help neutralize acid in the body and provide
                  superior hydration.
                </p>
                <p className="text-gray-600 mb-6">
                  Our Kangen Water machines use advanced electrolysis technology
                  to transform ordinary tap water into hydrogen-rich, alkaline
                  water that many believe offers significant health benefits.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
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

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Benefits of Kangen Water
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Hydration",
                  icon: "tint",
                  desc: "Superior hydration due to micro-clustered water molecules",
                },
                {
                  title: "Alkalinity",
                  icon: "balance-scale",
                  desc: "Helps balance your body's pH levels",
                },
                {
                  title: "Antioxidants",
                  icon: "shield-alt",
                  desc: "Rich in antioxidants to help neutralize free radicals",
                },
                {
                  title: "Minerals",
                  icon: "gem",
                  desc: "Contains essential minerals beneficial for your health",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <i
                      className={`fas fa-${benefit.icon} text-xl`}
                      style={{ color: "#8ecae6" }}
                    ></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Contact Us
            </h2>
            <div className="max-w-3xl mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Subject"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    style={{ backgroundColor: "#8ecae6" }}
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
                  <span
                    className="text-xl font-bold"
                    style={{ color: "#8ecae6" }}
                  >
                    IE
                  </span>
                </div>
                <span className="text-white font-medium">Enagic India</span>
              </div>
              <p className="text-gray-400 text-sm">
                Providing high-quality Kangen Water machines and solutions for a
                healthier lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    K8
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    SD501
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Leveluk R
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt w-5 text-center mr-2"></i>
                  <span>123 Water Street, New Delhi, India</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone w-5 text-center mr-2"></i>
                  <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope w-5 text-center mr-2"></i>
                  <span>info@enagic-india.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Enagic India Kangen Water. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default V1;
