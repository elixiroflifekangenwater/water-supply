import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const machineryLinks = [
  { name: "Kangen Water Machine SD 501", path: "/machinery/sd501" },
  { name: "Kangen Water Machine SD 501 Platinum", path: "/machinery/sd501platinum" },
  { name: "Kangen Water Machine K8", path: "/machinery/k8" },
  { name: "Kangen Water Machine JRIV", path: "/machinery/jriv" },
  { name: "Kangen Water Machine Super 501", path: "/machinery/super501" },
  { name: "Bathroom Filtration Anespa DX", path: "/machinery/anespadx" },
];

const Navbar = ({ scrolled, dropdownOpen, setDropdownOpen, mobileMachineOpen, setMobileMachineOpen, machineItems, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <li><NavLink to="/home"><button onClick={() => scrollToSection('home')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Home</button></NavLink></li>
          <li className="relative group">
            <button
              className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Machinery
            </button>
            <div
              className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transition-all duration-200 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="py-1">
                {machineryLinks.map((machine, index) => (
                  <NavLink
                    key={index}
                    to={machine.path}
                    className={({ isActive }) =>
                      `block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] transition-colors duration-200 border-b border-gray-100 last:border-b-0${isActive ? ' font-bold underline' : ''}`
                    }
                    onClick={() => setDropdownOpen(false)}
                  >
                    {machine.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
          <li><NavLink to="/distributor"><button onClick={() => scrollToSection('distributor')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Become a Distributor</button></NavLink></li>
          <li><NavLink to="/home"><button onClick={() => scrollToSection('services')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Services</button></NavLink></li>
          <li><NavLink to="/home"><button onClick={() => scrollToSection('contact')} className="text-white opacity-80 hover:opacity-100 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md">Contact Us</button></NavLink></li>
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
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-[#4DB6E2] rounded-lg transition-colors duration-200 ${isActive ? 'font-bold underline' : ''}`
              }
              onClick={() => scrollToSection('services')}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
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
