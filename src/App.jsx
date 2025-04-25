import React from "react";
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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
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