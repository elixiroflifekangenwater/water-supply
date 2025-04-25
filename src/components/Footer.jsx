import React from "react";

const Footer = () => (
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
);

export default Footer;
