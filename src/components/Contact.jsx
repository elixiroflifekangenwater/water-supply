import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/1ll7AUX9VraiJ9S89LtKUJWV4NSZho5hdNay3NUlfCo0/formResponse";

const Contact = ({ isPopup = false, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    query: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const toastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setForm({ ...form, contactNumber: value });
    } else {
      toast.error('Please enter numeric value only!', toastOptions);
    }
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error('Please enter your name!', toastOptions);
      return false;
    }
    if (!form.email.trim()) {
      toast.error('Please enter your email!', toastOptions);
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error('Please enter a valid email address!', toastOptions);
      return false;
    }
    if (!form.contactNumber.trim()) {
      toast.error('Please enter your contact number!', toastOptions);
      return false;
    }
    if (!/^\d{10}$/.test(form.contactNumber)) {
      toast.error('Contact number must be 10 digits!', toastOptions);
      return false;
    }
    if (!form.address.trim()) {
      toast.error('Please enter your address!', toastOptions);
      return false;
    }
    if (!form.message.trim()) {
      toast.error('Please enter your message!', toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitting(true);
    const formData = new FormData();
    formData.append("entry.98504594", form.name);  // Name
    formData.append("entry.690186531", form.email); // Email
    formData.append("entry.1369128842", form.contactNumber); // Contact Number
    formData.append("entry.864243374", form.address); // Address
    formData.append("entry.2011894093", form.message); // Message

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      toast.success("Our Team Will Contact You Shortly", toastOptions);
      setForm({ name: '', email: '', contactNumber: '', address: '', query: '', message: '' });
      if (onClose) onClose();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", toastOptions);
    }
    setSubmitting(false);
  };

  const formContent = (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg relative z-50 w-full">
      <h2 className="text-4xl font-bold text-center mb-12 animate-pulse text-[#4DB6E2] transition-all duration-500">Contact Us</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="relative group">
          <label htmlFor="name" className="block text-sm font-medium animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="relative group">
          <label htmlFor="email" className="block text-sm font-medium animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="relative group">
          <label htmlFor="contactNumber" className="block text-sm font-medium animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleNumberChange}
            maxLength={10}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            placeholder="Your Contact Number"
            required
          />
        </div>
        <div className="relative group">
          <label htmlFor="address" className="block text-sm font-medium animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            placeholder="Your Address"
            required
          />
        </div>
        <div className="md:col-span-2 relative group">
          <label htmlFor="message" className="block text-sm font-medium animate-pulse text-[#4DB6E2] mb-1 transition-transform duration-200 group-hover:-translate-y-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-300 text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#4DB6E2] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );

  return (
    <>
      {isPopup ? (
        <div>
          {formContent}
          <ToastContainer />
        </div>
      ) : (
        <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            {formContent}
            <ToastContainer />
          </div>
        </section>
      )}
    </>
  );
};

export default Contact;