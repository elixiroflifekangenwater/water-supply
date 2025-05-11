import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";

const KangenDemo = () => {
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
              src={img1}
              alt="Kangen Demo"
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
              Kangen Water Demonstration
            </motion.h1>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Experience the revolutionary power of Kangen Water firsthand with our comprehensive demonstration service. Our expert sales representatives will guide you through an immersive journey of water transformation.
              </p>

              {/* Video Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="my-8"
              >
                <h2 className="text-2xl font-semibold text-[#4DB6E2] mb-4">Watch Our Demo Video</h2>
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/IUxQNqWJWsk"
                    title="Kangen Water Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#4DB6E2] mb-4">What to Expect:</h2>
                <ul className="space-y-3">
                  {[
                    "Personalized home visit at your convenience",
                    "In-depth explanation of Kangen Water science",
                    "Live demonstration of machine capabilities",
                    "Hands-on operation training",
                    "E-cleaning process walkthrough",
                    "Comprehensive Q&A session"
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
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-8 text-center"
              >
                <button className="bg-[#4DB6E2] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Book Your Demo Now
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KangenDemo; 