import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {motion} from 'framer-motion';

const machineryLinks = [
  { name: "Kangen Water Machine SD 501", path: "/machinery/sd501" },
  { name: "Kangen Water Machine SD 501 Platinum", path: "/machinery/sd501platinum" },
  { name: "Kangen Water Machine K8", path: "/machinery/k8" },
  { name: "Kangen Water Machine JRIV", path: "/machinery/jriv" },
  { name: "Kangen Water Machine Super 501", path: "/machinery/super501" },
  { name: "Bathroom Filtration Anespa DX", path: "/machinery/anespadx" },
];
const servicesLinks = [
  {name: "Kangen Demo", path: "/services/kangendemo"},
  {name: "Machine Installation", path: "/services/machineinstallation"},
  {name: "Deep Cleaning", path: "/services/deepcleaning"},
];

const Navbar = ({ scrolled, mobileMachineOpen, setMobileMachineOpen, machineItems, scrollToSection }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [machineryDropdownOpen, setMachineryDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
  <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "h-16 shadow-md" : "h-20"}`}
    style={{ backgroundColor: "#4DB6E2" }}
  >
    <div className="container mx-auto px-4 h-full flex items-center justify-between">
      <div className="flex items-center">
        <div className={`transition-transform duration-300 ${scrolled ? "scale-85" : "scale-100"}`}>
          <div className="flex items-center">
            <motion.div 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4DB6E2] to-[#2a5885] font-['Poppins'] tracking-tight">EL</span>
            </motion.div>
            <span className="text-white font-medium text-lg leading-tight ml-1">
              The Elixir of Life<br />
              <span className="font-semibold text-white/90">Kangen Water</span>
            </span>
          </div>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li><NavLink to="/home"><button onClick={() => scrollToSection('home')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Home</button></NavLink></li>
          <li className="relative group">
            <button
              className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
              onMouseEnter={() => setMachineryDropdownOpen(true)}
              onMouseLeave={() => setMachineryDropdownOpen(false)}
            >
              Machinery
            </button>
            <div
              className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 ${machineryDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              onMouseEnter={() => setMachineryDropdownOpen(true)}
              onMouseLeave={() => setMachineryDropdownOpen(false)}
            >
              <div className="py-1">
                {machineryLinks.map((machine, index) => (
                  <NavLink
                    key={index}
                    to={machine.path}
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] transition-colors duration-200 border-b border-gray-100 last:border-b-0${isActive ? ' font-bold underline' : ''}`
                    }
                    onClick={() => setMachineryDropdownOpen(false)}
                  >
                    {machine.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
          <li><NavLink to="/distributor"><button onClick={() => scrollToSection('distributor')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Become a Distributor</button></NavLink></li>
          <li className="relative group">
            <button
              className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              Services
            </button>
            <div
              className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 ${servicesDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="py-1">
                {servicesLinks.map((service, index) => (
                  <NavLink
                    key={index}
                    to={service.path}
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] transition-colors duration-200 border-b border-gray-100 last:border-b-0${isActive ? ' font-bold underline' : ''}`
                    }
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
          <li><NavLink to="/contact"><button onClick={() => scrollToSection('contact')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Contact Us</button></NavLink></li>
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
      className={`md:hidden bg-white absolute w-full left-0 shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? "top-full opacity-100 visible" : "-top-96 opacity-0 invisible"}`}
    >
      <nav className="container mx-auto px-4 py-3">
        <ul className="space-y-2">
          <li><button onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200">Home</button></li>
          <li>
            <button
              onClick={() => setMobileMachineOpen(!mobileMachineOpen)}
              className="flex justify-between items-center w-full py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
            >
              Machinery
              <span className={`ml-2 transition-transform duration-300 ${mobileMachineOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ${mobileMachineOpen ? 'max-h-96' : 'max-h-0'}`}>
              {machineryLinks.map((machine, index) => (
                <NavLink
                  key={index}
                  to={machine.path}
                  className={({ isActive }) =>
                    `block w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200 text-sm border-l-2 border-gray-200${isActive ? ' font-bold underline' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {machine.name}
                </NavLink>
              ))}
            </div>
          </li>
          <li>
            <NavLink
              to="/distributor"
              className={({ isActive }) =>
                `block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200 ${isActive ? 'font-bold underline' : ''}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Become a Distributor
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200"
            >
              Services
              <span className={`ml-2 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
              {servicesLinks.map((service, index) => (
                <NavLink
                  key={index}
                  to={service.path}
                  className={({ isActive }) =>
                    `block w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200 text-sm border-l-2 border-gray-200${isActive ? ' font-bold underline' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200 ${isActive ? 'font-bold underline' : ''}`
              }
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
}

export default Navbar;
