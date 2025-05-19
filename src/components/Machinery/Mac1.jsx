import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac1Img from "../../assets/Mac1.png";
import Contact from "../Contact";

const Mac1 = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
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
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1.5 },
    },
  };

  const [showContactPopup, setShowContactPopup] = useState(false);

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
        Kangen Water Machine Leveluk SD 501
      </motion.h2>

      {/* Product Image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac1Img}
          alt="Kangen Water Machine Leveluk SD 501"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* ADDED: Detailed description between image and first video */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The Revolutionary Leveluk SD 501
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Leveluk SD 501</strong> is Enagic's flagship water ionizer and the gold standard in the industry. This premium machine is built with precision Japanese engineering and has earned its reputation as the most trusted name in water ionization technology worldwide.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          At the heart of the SD 501 are <strong>7 solid platinum-coated titanium plates</strong> that provide the perfect surface area for optimal electrolysis. This sophisticated system produces 5 types of water:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
          <li><strong>Kangen Water®</strong> (pH 8.5-9.5) - Perfect for daily drinking and cooking</li>
          <li><strong>Clean Water</strong> (pH 7.0) - Ideal for taking medications</li>
          <li><strong>Beauty Water</strong> (pH 6.0) - Excellent for skin care and hygiene</li>
          <li><strong>Strong Acidic Water</strong> (pH 2.5) - Powerful cleaning and sanitizing</li>
          <li><strong>Strong Kangen Water</strong> (pH 11.5) - Great for removing pesticides and cleaning</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          With its large LCD display, multiple language voice prompts, and automatic cleaning cycle, the SD 501 is designed to be as user-friendly as it is effective. This machine represents a significant investment in your health and wellbeing that will serve your household for many years to come.
        </p>
      </motion.div>

      {/* YouTube Video 1 */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md aspect-video"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xJDhxn7Bd3I"
          title="Kangen Water Machine preview in 40 seconds"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* ADDED: Detailed specification table between videos */}
      <motion.div
        variants={textVariants}
        className="mb-10 overflow-x-auto"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Leveluk SD 501 - Technical Specifications
        </h3>
        
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Feature
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Specification
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Benefit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Electrode Plates
              </td>
              <td className="px-6 py-4 border border-gray-200">
                7 Platinum-Coated Titanium (230cm²)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Maximum surface area for efficient electrolysis
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Power Supply
              </td>
              <td className="px-6 py-4 border border-gray-200">
                AC 100-240V, 50/60Hz
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Compatible worldwide with appropriate adapter
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Power Consumption
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Approx. 230W (in operation)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Energy efficient despite powerful performance
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Water Settings
              </td>
              <td className="px-6 py-4 border border-gray-200">
                5 types (3 alkaline, 1 neutral, 2 acidic)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Versatile solutions for drinking, cooking, and cleaning
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                pH Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                2.5 to 11.5 pH
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Widest range available for maximum versatility
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                ORP Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                +1130mV to -800mV
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Strong antioxidant potential at negative ORP levels
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Dimensions
              </td>
              <td className="px-6 py-4 border border-gray-200">
                264mm (W) × 338mm (H) × 171mm (D)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Compact design fits easily on countertops
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Weight
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Approx. 6.3 kg (13.9 lbs)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Solid construction ensuring durability
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Flow Rate
              </td>
              <td className="px-6 py-4 border border-gray-200">
                4.5-7.6 liters per minute
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Efficient water production without long waits
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Warranty
              </td>
              <td className="px-6 py-4 border border-gray-200">
                5-year limited warranty
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Long-term protection for your investment
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* YouTube Video 2 */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md aspect-video"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/StC4g7jcxM0"
          title="Kangen Water Detailed Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.p
        variants={textVariants}
        className="text-gray-700 text-lg mb-6 leading-relaxed"
      >
        The <strong>Leveluk SD 501</strong> is the <strong>flagship Kangen Water machine</strong>,
        renowned worldwide for its performance and reliability. It's not just a water ionizer,
        it's a <strong>lifestyle transformation tool</strong> that promotes better health,
        enhanced cooking, and a cleaner home environment.
      </motion.p>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Water That Works for You
        </h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {[
            "<strong>Hydrate Like Never Before</strong> – Smoother, fresher, deeply hydrating water.",
            "<strong>Wash Fruits & Vegetables Naturally</strong> – Remove residues using <strong>Strong Kangen Water (pH 11.5)</strong>.",
            "<strong>Gentle Skincare with Beauty Water</strong> – Achieve glowing skin with <strong>Beauty Water (pH 6.0)</strong>.",
            "<strong>Eco-Friendly Cleaning & Disinfection</strong> – Eliminate chemicals with <strong>Strong Acidic Water (pH 2.5)</strong>.",
            "<strong>Safe & Pure for the Whole Family</strong> – Perfect for babies, cooking, and daily use.",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 + 0.5 },
                },
              }}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </motion.ul>
      </motion.div>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          What Sets the Leveluk SD 501 Apart?
        </h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3"
          variants={containerVariants}
        >
          {[
            "<strong>Platinum-Coated Titanium Plates</strong> – Ensures optimal water ionization and long lifespan.",
            "<strong>Large LCD Panel</strong> – Easy-to-read screen with voice prompts for effortless operation.",
            "<strong>Compact Yet Powerful</strong> – Fits neatly into any kitchen without sacrificing performance.",
            "<strong>Energy Efficient</strong> – Low energy consumption, promoting sustainable living.",
            "<strong>Trusted Worldwide</strong> – Used by health professionals, celebrities, and athletes across the globe.",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 + 0.8 },
                },
              }}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </motion.ul>
      </motion.div>

      <motion.div variants={buttonVariants} className="flex justify-center mt-10">
        <button
          onClick={() => setShowContactPopup(true)}
          className="bg-[#4DB6E2] hover:bg-[#3da7d5] text-white font-semibold py-3 px-8 rounded-full shadow-md transition transform hover:scale-105"
        >
          Book a Demo
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
              query="sd501"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac1;