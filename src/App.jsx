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
import Contact from "./components/Contact";
import Services from "./components/Services";
import KangenDemo from "./pages/KangenDemo";
import MachineInstallation from "./pages/MachineInstallation";
import DeepCleaning from "./pages/DeepCleaning";
import Footer from "./components/Footer";

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
                <Route path="/services" element={<Services />} />
                <Route path="/services/kangen-demo" element={<KangenDemo />} />
                <Route path="/services/machine-installation" element={<MachineInstallation />} />
                <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
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

            <Footer/>
        </div>
    );
};

export default App;


