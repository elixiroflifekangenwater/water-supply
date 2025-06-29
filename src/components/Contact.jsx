import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/2/d/198Y55Wli7Sj6jciZGF-oMabKc9MS5Ss6O1qtkn5e6wQ/formResponse";

const Contact = ({ isPopup = false, onClose, query = 'enquiry', pageTitle = 'Get in Touch' }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    query: query,
    message: '',
    waterQualityImportance: '',
    familyIllness: '',
    waterQualities: '',
    phAwareness: '',
    alkalinityBelief: '',
    ionizerInterest: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const showToast = (message, type = 'info') => {
    const toastOptions = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    };

    // Clear any existing toasts before showing a new one
    toast.dismiss();

    if (type === 'success') {
      toast.success(message, toastOptions);
    } else if (type === 'error') {
      toast.error(message, toastOptions);
    } else {
      toast.info(message, toastOptions);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setForm({ ...form, contactNumber: value });
    } else {
      showToast('Please enter numeric value only!', 'error');
    }
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      showToast('Please enter your name!', 'error');
      return false;
    }
    if (!form.email.trim()) {
      showToast('Please enter your email!', 'error');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      showToast('Please enter a valid email address!', 'error');
      return false;
    }
    if (!form.contactNumber.trim()) {
      showToast('Please enter your contact number!', 'error');
      return false;
    }
    if (!/^\d{10}$/.test(form.contactNumber)) {
      showToast('Contact number must be 10 digits!', 'error');
      return false;
    }
    if (!isPopup && !form.address.trim()) {
      showToast('Please enter your address!', 'error');
      return false;
    }
    if (!isPopup && !form.message.trim()) {
      showToast('Please enter your message!', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);

    const formData = new FormData();
    formData.append("entry.1751663619", form.contactNumber);  // Contact-Number
    formData.append("entry.1636520389", form.address);        // Address
    formData.append("entry.1391655276", form.query);          // Query
    formData.append("entry.769728327", form.name);            // Name
    formData.append("entry.1813797865", form.email);          // Email
    formData.append("entry.1709919803", form.message);        // Message
    
    // Additional fields for homepage form only
    if (!isPopup) {
      formData.append("entry.1136388333", form.waterQualityImportance);  // Water quality importance
      formData.append("entry.1806172113", form.familyIllness);           // Family illness
      formData.append("entry.1305439477", form.waterQualities);          // Water qualities
      formData.append("entry.1169780326", form.phAwareness);             // PH awareness
      formData.append("entry.1210444564", form.alkalinityBelief);        // Alkalinity belief
      formData.append("entry.1056712023", form.ionizerInterest);         // Ionizer interest
    }

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      
      // Show single success message
      showToast('Thank you! Our team will contact you shortly.', 'success');
      
      // Reset form
      setForm({ 
        name: '', 
        email: '', 
        contactNumber: '', 
        address: '', 
        query: query, 
        message: '',
        waterQualityImportance: '',
        familyIllness: '',
        waterQualities: '',
        phAwareness: '',
        alkalinityBelief: '',
        ionizerInterest: ''
      });
      
      // Close the popup if it's in a modal
      if (onClose) {
        setTimeout(() => onClose(), 2000);
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('Failed to send message. Please try again or call us directly.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const renderRatingQuestion = (name, label, value) => (
    <div className="group">
      <label className="block text-sm font-medium text-[#4DB6E2] mb-2">{label}</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => setForm({ ...form, [name]: rating.toString() })}
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
              value === rating.toString()
                ? 'bg-[#4DB6E2] text-white border-[#4DB6E2]'
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#4DB6E2]'
            }`}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );

  const renderYesNoQuestion = (name, label, value) => (
    <div className="group">
      <label className="block text-sm font-medium text-[#4DB6E2] mb-2">{label}</label>
      <div className="flex gap-4">
        {['Yes', 'No'].map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={handleChange}
              className="text-[#4DB6E2] focus:ring-[#4DB6E2]"
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const formContent = (
    <div className={`max-w-full mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full ${isPopup ? 'md:max-w-md' : 'md:max-w-2xl'}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 animate-pulse text-[#4DB6E2] transition-all duration-500">
       {pageTitle}
      </h2>
      {!isPopup && (
        <p className="text-center text-gray-600 mb-6 sm:mb-10 px-2 sm:px-4">
          Need help purchasing a Kangen Water machine? We're here to assist you! Please fill out the form below, and we'll respond to your inquiry promptly.
        </p>
      )}
      <form className="grid grid-cols-1 gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <div className="group">
          <label htmlFor="name" className="block text-sm font-medium text-[#4DB6E2] mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 focus:ring-2 focus:ring-blue-300 text-sm hover:shadow-md hover:scale-[1.01] transition-transform"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="group">
          <label htmlFor="email" className="block text-sm font-medium text-[#4DB6E2] mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 focus:ring-2 focus:ring-blue-300 text-sm hover:shadow-md hover:scale-[1.01] transition-transform"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="group">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-[#4DB6E2] mb-1">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleNumberChange}
            maxLength={10}
            className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 focus:ring-2 focus:ring-blue-300 text-sm hover:shadow-md hover:scale-[1.01] transition-transform"
            placeholder="Your Contact Number"
            required
          />
        </div>

        {!isPopup && (
          <div className="group">
            <label htmlFor="address" className="block text-sm font-medium text-[#4DB6E2] mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 focus:ring-2 focus:ring-blue-300 text-sm hover:shadow-md hover:scale-[1.01] transition-transform"
              placeholder="Your Address"
              required
            />
          </div>
        )}

        {!isPopup && (
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-[#4DB6E2] mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 focus:ring-2 focus:ring-blue-300 text-sm hover:shadow-md hover:scale-[1.01] transition-transform"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        )}

        {/* Additional fields for homepage form only */}
        {!isPopup && (
          <>
            {renderRatingQuestion('waterQualityImportance', 'How important is water quality to you?', form.waterQualityImportance)}
            
            {renderYesNoQuestion('familyIllness', 'Any illness in family?', form.familyIllness)}
            
            <div className="group">
              <label htmlFor="waterQualities" className="block text-sm font-medium text-[#4DB6E2] mb-1">What qualities do you look for in drinking water?</label>
              <input
                type="text"
                id="waterQualities"
                name="waterQualities"
                value={form.waterQualities}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-200 rounded-lg bg-white text-blue-800 focus:ring-2 focus:ring-blue-300 text-sm hover:shadow-md hover:scale-[1.01] transition-transform"
                placeholder="e.g., purity, taste, health benefits"
              />
            </div>
            
            {renderRatingQuestion('phAwareness', 'How aware are you of the PH levels in water?', form.phAwareness)}
            
            {renderRatingQuestion('alkalinityBelief', 'Do you believe that alkalinity in water contributes to health?', form.alkalinityBelief)}
            
            {renderRatingQuestion('ionizerInterest', 'How interested are you in learning about water ionizers?', form.ionizerInterest)}
          </>
        )}

        <div className="sm:col-span-2 text-center">
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
        <div>{formContent}</div>
      ) : (
        <section id="contact" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            {formContent}
          </div>
        </section>
      )}
    </>
  );
};

export default Contact;
