import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac6Img from "../../assets/Mac6.jpg";
import Contact from "../Contact";

const Mac6 = () => {
  const controls = useAnimation();
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.5 }
    }
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto mt-20 mb-10"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        variants={textVariants}
        className="text-3xl font-bold text-center mb-6 text-[#4DB6E2]"
      >
        Anespa DX – Turn Your Bathroom into a Luxury Spa
      </motion.h2>

      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac6Img}
          alt="Anespa DX"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      <motion.p
        variants={textVariants}
        className="text-gray-700 text-lg mb-6 leading-relaxed"
      >
        Ever dream of turning your ordinary bathroom into a natural hot spring resort? The Anespa DX makes that dream a reality. Designed to transform your shower into a spa-like experience, the Anespa DX creates a continuous stream of healthy, ionized mineral water. Say goodbye to harmful chemicals in your water and hello to softer skin, healthier hair, and a more relaxing bath.
      </motion.p>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why You’ll Love the Anespa DX:</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {["<strong>Natural Spa Water at Home:</strong> Mimics the therapeutic effects of a Japanese hot spring.",
            "<strong>Healthier Skin and Hair:</strong> Removes chlorine and harmful pollutants for gentler bathing.",
            "<strong>Relaxing Mineral Stones:</strong> Infuses your bath with calming and energizing ions.",
            "<strong>Safe and Natural:</strong> Eco-friendly—operates without electricity.",
            "<strong>Easy Installation:</strong> Quick setup, fits easily into any bathroom."]
            .map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 + 0.5 }
                  }
                }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
        </motion.ul>
      </motion.div>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Specifications:</h3>
        <motion.div className="overflow-x-auto" variants={containerVariants}>
          <table className="w-full text-left table-auto border border-gray-300">
            <tbody>
              {[
                { label: "Filtration Media", value: "Large ceramic cartridge that removes almost 100% of chlorine and harmful substances" },
                { label: "Special Stones", value: "Tufa, MIC stone, and Power stone from Futamata Radium hot spring, Japan" },
                { label: "Generates", value: "Mineral ion water for your bath or shower" },
                { label: "pH Range", value: "Same as tap water" },
                { label: "Wattage", value: "Does not use electricity" },
                { label: "Total Weight", value: "2.5 kg" },
                { label: "Dimensions (W × Diameter)", value: "130 mm × 346 mm" },
                { label: "Production Rate", value: "2.6 liters per minute" },
                { label: "Ease of Use", value: "Very simple to install and operate" },
                { label: "Warranty", value: "3 (Three) years" }
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-300"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 + 0.8 }
                    }
                  }}
                >
                  <td className="p-2 font-semibold">{row.label}</td>
                  <td className="p-2">{row.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>

      <motion.div
        variants={buttonVariants}
        className="flex justify-center mt-10"
      >
        <button onClick={() => setShowContactPopup(true)} className="bg-[#4DB6E2] hover:bg-[#3da7d5] text-white font-semibold py-3 px-8 rounded-full shadow-md transition transform hover:scale-105">
          Contact Us
        </button>
      </motion.div>

      {/* Contact Popup */}
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
              query="anespa-dx"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac6;