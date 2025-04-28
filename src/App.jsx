import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
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


