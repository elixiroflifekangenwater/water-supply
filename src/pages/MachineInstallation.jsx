import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/img2.png";

const MachineInstallation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="h-[500px] overflow-hidden relative">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={img2}
              alt="Machine Installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-8 md:p-12">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold text-[#4DB6E2] mb-8"
            >
              Professional Machine Installation
            </motion.h1>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Trust our certified technicians to install your Enagic Kangen Water Ionizer with precision and care. We ensure a seamless installation process that takes less than an hour.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-[#4DB6E2] mb-4">Installation Features:</h2>
                  <ul className="space-y-3">
                    {[
                      "Flexible mounting options",
                      "Quick installation (< 1 hour)",
                      "Professional water connection",
                      "Comprehensive testing",
                      "Basic operation training",
                      "Clean-up after installation"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-[#4DB6E2] mr-2">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-[#4DB6E2] mb-4">Maintenance Plan:</h2>
                  <ul className="space-y-3">
                    {[
                      "1 Year Free Maintenance",
                      "Regular check-ups",
                      "Performance optimization",
                      "Filter replacement service",
                      "Emergency support",
                      "Extended warranty options"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-[#4DB6E2] mr-2">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-8 text-center"
              >
                <button className="bg-[#4DB6E2] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Schedule Installation
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MachineInstallation;