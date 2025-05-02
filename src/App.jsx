// App.js
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./components/Navbar";
import Mac1 from "./components/Machinery/Mac1";
import Mac2 from "./components/Machinery/Mac2";
import Mac3 from "./components/Machinery/Mac3";
import Mac4 from "./components/Machinery/Mac4";
import Mac5 from "./components/Machinery/Mac5";
import Mac6 from "./components/Machinery/Mac6";
import Distributor from "./pages/Distributor";
<<<<<<< HEAD
import Contact from "./components/Contact";

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMachineOpen, setMobileMachineOpen] = useState(false);
    
    // Force popup to be visible initially
    const [showContactPopup, setShowContactPopup] = useState(true);

    // Manual trigger from any component
    const handleContactClick = () => {
        setShowContactPopup(true);
    };

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // For demo purposes - comment this out for production to always show popup
    // useEffect(() => {
    //     const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    //     if (hasSeenPopup) {
    //         setShowContactPopup(false);
    //     } else {
    //         localStorage.setItem('hasSeenPopup', 'true');
    //     }
    // }, []);

    return (
        <div className="relative">
            <Navbar
                scrolled={scrolled}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                mobileMachineOpen={mobileMachineOpen}
                setMobileMachineOpen={setMobileMachineOpen}
                machineItems={[
                    "Kangen Water Machine SD 501",
                    "Kangen Water Machine SD 501 Platinum",
                    "Kangen Water Machine K8",
                    "Kangen Water Machine JRIV",
                    "Kangen Water Machine Super 501",
                    "Bathroom Filtration Anespa DX"
                ]}
                onContactClick={handleContactClick}
            />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/distributor" element={<Distributor />} />
                <Route path="/machinery/sd501" element={<Mac1 />} />
                <Route path="/machinery/sd501platinum" element={<Mac2 />} />
                <Route path="/machinery/k8" element={<Mac3 />} />
                <Route path="/machinery/jriv" element={<Mac4 />} />
                <Route path="/machinery/super501" element={<Mac5 />} />
                <Route path="/machinery/anespadx" element={<Mac6 />} />
            </Routes>

            {/* Contact Popup - without black background, always visible */}
            {showContactPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    <div className="bg-white rounded-lg p-6 relative w-full max-w-lg shadow-xl mx-4 pointer-events-auto">
                        <button
                            onClick={() => setShowContactPopup(false)}
                            className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors z-50 text-xl font-bold"
                        >
                            ×
                        </button>
                        <Contact 
                            isPopup={true} 
                            onClose={() => setShowContactPopup(false)}
                        />
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default App;
=======
import Modal from "./components/modal";
import ContactForm from "./components/ContactForm";
const App = () => {
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <Navbar
        scrolled={scrolled}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMachineOpen={mobileMachineOpen}
        setMobileMachineOpen={setMobileMachineOpen}
        machineItems={machineItems}
        scrollToSection={() => { }} // define or pass as needed
        toggleMobileMenu={toggleMobileMenu}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/machinery/sd501" element={<Mac1 />} />
        <Route path="/machinery/sd501platinum" element={<Mac2 />} />
        <Route path="/machinery/k8" element={<Mac3 />} />
        <Route path="/machinery/jriv" element={<Mac4 />} />
        <Route path="/machinery/super501" element={<Mac5 />} />
        <Route path="/machinery/anespadx" element={<Mac6 />} />
      </Routes>
    </>
  );
};

export default App;


// import React, { useState } from 'react';
// import Modal from './components/modal';
// import ContactForm from './components/ContactForm';
// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const onClose = () => setIsModalOpen(false);
//   return (
//     <div className="flex justify-center items-center h-screen ">
//       <button className='bg-[#4DB6E2] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md mt-20' onClick={() => setIsModalOpen(true)}>Open Modal</button>
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <button className='bg-gradient-to-r from-[#4DB6E2] to-blue-500 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 p-4 rounded-full hover:scale-110 shadow-lg active:scale-95 flex items-center justify-center absolute top-4 right-4 ring-2 ring-white/20 hover:ring-blue-300/50' onClick={onClose}>
//           <span className='text-xl font-semibold'>×</span>
//         </button>
//         <ContactForm />
//       </Modal>
//     </div>
//   );
// }

// export default App;
>>>>>>> 51999170a3aae68e2888618438bd87250d541513
