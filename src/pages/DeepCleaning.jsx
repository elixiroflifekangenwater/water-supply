import React from "react";
import { motion } from "framer-motion";
import img3 from "../assets/img3.png";

const DeepCleaning = () => {
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
              src={img3}
              alt="Deep Cleaning"
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
              Annual Deep Cleaning Service
            </motion.h1>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Maintain your Kangen Water machine's optimal performance with our annual deep cleaning service. Our specialized cleaning process ensures your machine continues to produce the highest quality water.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-[#4DB6E2] mb-4">Cleaning Process:</h2>
                  <ul className="space-y-3">
                    {[
                      "Submersible motor cleaning",
                      "Citric acid treatment",
                      "Filter inspection",
                      "Performance testing",
                      "Water quality check",
                      "Maintenance report"
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
                  <h2 className="text-xl font-semibold text-[#4DB6E2] mb-4">Service Benefits:</h2>
                  <ul className="space-y-3">
                    {[
                      "Extended machine lifespan",
                      "Improved water quality",
                      "Preventive maintenance",
                      "Expert inspection",
                      "Performance optimization",
                      "Peace of mind"
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
                  Schedule Cleaning
                </button>
              </motion.div>
            </motion.div>
    </div>
        </motion.div>
  </div>
    </motion.div>
);
};

export default DeepCleaning; 