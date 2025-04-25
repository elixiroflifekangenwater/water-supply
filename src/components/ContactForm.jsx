import React from "react";
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = ({ number, handleNumberChange }) => (
  <section id="contact" className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 animate-pulse  text-[#4DB6E2] transition-all duration-500">Contact Us</h2>
      <div className="max-w-3xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <label htmlFor="name" className="block text-sm font-medium  animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-blue-200  rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100" placeholder="Your Name" />
          </div>
          <div className="relative group">
            <label htmlFor="email" className="block text-sm font-medium animate-pulse  text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100" placeholder="Your Email" />
          </div>
          <div className="md:col-span-2 relative group">
            <label htmlFor="number" className="block text-sm font-medium animate-pulse  text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Contact Number</label>
            <input type="tel" id="number" name="number" value={number} onChange={handleNumberChange} maxLength={10} className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100" placeholder="Your Contact Number" />
          </div>
          <div className="md:col-span-2 relative group">
            <label htmlFor="address" className="block animate-pulse  text-sm font-medium text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Address</label>
            <input type="text" id="address" className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100" placeholder="Your Address" />
          </div> 
          <div className="md:col-span-2 relative group">
            <label htmlFor="message" className="block text-sm font-medium animate-pulse  text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:scale-100" placeholder="Your Message"></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="button"
              onClick={() => toast.success("Our Team Will Contact You Shortly", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })}
              className="bg-[#4DB6E2] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  </section>
);

export default ContactForm;
