import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterLogo from "../assets/FooterLogo.png";
const Footer = () => (
  <footer className="bg-blue-950 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden">
              <img 
                src={FooterLogo}
                alt="Enagic Global Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-medium text-lg">Enagic Global Distributor</span>
          </div>
          <p className="text-white text-sm">
            Authorized Global Independent Distributor for
            Enagic India Kangen Water Pvt Ltd.
            Bengaluru.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <p className="text-white text-sm mb-2">
            📧 Email: <a href="mailto:elixiroflifekangenwater@gmail.com" className="underline text-white">elixiroflifekangenwater@gmail.com</a>
          </p>
          <p className="text-white text-sm mb-2">
            📞 Phone: <a href="tel:+91 9220390182" className="underline text-white">+91 9220390182</a>
          </p>
          <p className="text-white text-sm">
            📍 Address:
            <span className="ml-4">
            C-126,Industrial Area,Phase 1 , 
            <br />
            <span className="ml-5">Naraina, Delhi 110028</span>
            </span>
          </p>
        </div>

        {/* Demo Message */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get a Free Demo</h3>
          <p className="text-white text-sm">
            Interested in experiencing Kangen Water? Contact us now to schedule a free demo at your convenience.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6E2] transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6E2] transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6E2] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://x.com/sehgal_sum40499?t=BgpuE22muNLDuyI5AKWHtQ&s=09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#4DB6E2] transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="text-white text-sm mt-4">
            Follow us on social media for updates, tips, and more information about Kangen Water.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} Enagic Global Distributor. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
