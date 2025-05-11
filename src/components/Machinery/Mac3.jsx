import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Contact from "../Contact";
import Mac3Image from "../../assets/Mac3.jpg"; // Assuming
const Mac3 = () => {
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
        Kangen Water Machine Leveluk K8
      </motion.h2>

      {/* Product Image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac3Image}
          alt="Kangen Water Machine Leveluk K8"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Detailed description between image and first video */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The Revolutionary Leveluk K8
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Leveluk K8</strong> represents the pinnacle of Enagic's water ionization technology. As their most powerful antioxidant machine, it features an impressive <strong>8 platinum-coated titanium plates</strong> for unmatched electrolysis efficiency and water quality.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The K8 boasts Enagic's largest electrode surface area ever, allowing it to produce the strongest antioxidant water with exceptional ORP (Oxidation-Reduction Potential) values. This cutting-edge model is designed for those who demand nothing but the absolute best in water ionization technology.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Like other Enagic models, the K8 produces 5 types of water:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
          <li><strong>Kangen Water®</strong> (pH 8.5-9.5) - Enhanced with higher antioxidant potential</li>
          <li><strong>Clean Water</strong> (pH 7.0) - Purified water perfect for medication</li>
          <li><strong>Beauty Water</strong> (pH 6.0) - Superior beauty and skin care water</li>
          <li><strong>Strong Acidic Water</strong> (pH 2.5) - Powerful sanitizing properties</li>
          <li><strong>Strong Kangen Water</strong> (pH 11.5) - Ultimate cleaning solution</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          The K8 distinguishes itself with its larger water chamber, improved water flow rate, and automatic cleaning system, making it the flagship model of the entire Kangen Water® lineup.
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
          src="https://www.youtube.com/embed/_cNDySmGQZo"
          title="Leveluk K8 Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Comparison table between videos */}
      <motion.div
        variants={textVariants}
        className="mb-10 overflow-x-auto"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Leveluk K8 vs. Leveluk SD 501 - A Comprehensive Comparison
        </h3>
        
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Feature
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk K8
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk SD 501
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Electrode Plates
              </td>
              <td className="px-6 py-4 border border-gray-200">
                8 Platinum-Coated Titanium
              </td>
              <td className="px-6 py-4 border border-gray-200">
                7 Platinum-Coated Titanium
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Electrode Surface Area
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Larger (Approx. 385 sq. cm)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard (Approx. 340 sq. cm)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Power Consumption
              </td>
              <td className="px-6 py-4 border border-gray-200">
                230W (Enhanced power)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                200W (Standard)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Cleaning System
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Enhanced Automatic Cleaning
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard Automatic Cleaning
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Flow Rate
              </td>
              <td className="px-6 py-4 border border-gray-200">
                4.5-7.6 L/min (Improved)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                4-7.5 L/min (Standard)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Design
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Modern Streamlined Design
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Classic Design
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                ORP Values
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Superior (Higher negative ORP)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Excellent (Standard ORP range)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Water Chamber
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Larger Capacity
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard Capacity
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Display/Interface
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Advanced LCD with Enhanced Features
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard LCD Display
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Price Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Premium (Flagship Model)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Mid-Range (Standard Model)
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
          src="https://www.youtube.com/embed/aMixdrnaPNY"
          title="Leveluk K8 Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Additional image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src="https://i0.wp.com/www.waterionizer.org/wp-content/uploads/2018/08/enagic-leveluk-k8-replacement-filter-1.jpg"
          alt="Leveluk K8 Inside View"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Additional details section */}
      <motion.div variants={textVariants} className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose the K8?
        </h3>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          The <strong>Leveluk K8</strong> is Enagic's flagship model, representing the pinnacle of water ionization technology. Here's why health-conscious consumers and those seeking the absolute best are choosing the K8:
        </p>
        
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {[
            "<strong>Maximum Antioxidant Potential</strong> – The most powerful antioxidant water production in the Enagic lineup.",
            "<strong>Enhanced Electrolysis Chamber</strong> – 8 platinum-coated titanium plates provide superior ionization.",
            "<strong>Improved Flow Rate</strong> – Get your Kangen Water® faster with enhanced water production capacity.",
            "<strong>Automatic Cleaning System</strong> – Advanced self-cleaning technology keeps maintenance simple.",
            "<strong>Energy Efficiency</strong> – Despite its power, the K8 is designed for optimal energy usage.",
            "<strong>Smart Design</strong> – Contemporary aesthetics with intuitive controls and display.",
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

      {/* YouTube Video 3 */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md aspect-video"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/prD2mkMAX-c"
          title="Leveluk K8 Benefits"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          The K8 Advantage
        </h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3"
          variants={containerVariants}
        >
          {[
            "<strong>Industry-Leading Technology</strong> – The cutting edge of water ionization with 8 electrode plates.",
            "<strong>Highest Quality Materials</strong> – Premium components ensure durability and performance.",
            "<strong>Superior Antioxidant Production</strong> – Creates water with the highest negative ORP values for maximum antioxidant benefits.",
            "<strong>Versatile Water Options</strong> – All five water types with improved quality across each pH level.",
            "<strong>Advanced Filtration</strong> – Enhanced internal filter removes more impurities while preserving beneficial minerals.",
            "<strong>Statement of Excellence</strong> – Represents a commitment to the highest standards of health and wellness.",
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

      {/* Technical specifications */}
      <motion.div 
        variants={textVariants}
        className="mt-10 mb-10 bg-gray-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Technical Specifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Machine Specifications</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Dimensions:</span> 345mm x 156mm x 350mm</li>
              <li><span className="font-medium">Weight:</span> Approximately 6.4 kg</li>
              <li><span className="font-medium">Power Supply:</span> 100-240V AC, 50/60Hz</li>
              <li><span className="font-medium">Power Consumption:</span> Approx. 230W</li>
              <li><span className="font-medium">Production Rate:</span> 4.5-7.6 liters/minute</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Water Production</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Electrode Plates:</span> 8 platinum-coated titanium plates</li>
              <li><span className="font-medium">Electrode Surface Area:</span> Approx. 385 sq. cm</li>
              <li><span className="font-medium">pH Range:</span> 2.5 to 11.5</li>
              <li><span className="font-medium">ORP Values:</span> Up to -850mV (Kangen Water®)</li>
              <li><span className="font-medium">Filter Life:</span> Approximately 6,000 liters</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-bold text-gray-800 mb-2">Additional Features</h4>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Voice Guidance:</span> Multiple language options</li>
            <li><span className="font-medium">Display:</span> Advanced LCD display with water type indicators</li>
            <li><span className="font-medium">Cleaning System:</span> Enhanced automatic cleaning system</li>
            <li><span className="font-medium">Warranty:</span> 5-year limited warranty</li>
            <li><span className="font-medium">Certifications:</span> WQA Gold Seal, ISO 9001, ISO 14001</li>
          </ul>
        </div>
      </motion.div>

      <motion.div variants={buttonVariants} className="flex justify-center mt-10">
        <button
          onClick={() => setShowContactPopup(true)}
          className="bg-[#4DB6E2] hover:bg-[#3da7d5] text-white font-semibold py-3 px-8 rounded-full shadow-md transition transform hover:scale-105"
        >
          Book Demo
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
              query="leveluk-k8"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac3;