import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Contact from "../Contact";
import Mac4Image from "../../assets/Mac4.jpg"; 
import Mac4Image2 from "../../assets/Mac4Side.jpg";

const Mac4 = () => {
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
        Kangen Water Machine Leveluk JRIV
      </motion.h2>

      {/* Product Image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac4Image}
          alt="Leveluk JRIV Machine"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Detailed description */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The Accessible Leveluk JRIV
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Leveluk JRIV</strong> (also known as JR4) is designed for individuals and small households who want a convenient and efficient entry into the world of Kangen Water®. This compact, affordable ionizer provides an excellent balance of performance and value.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Featuring <strong>4 platinum-coated titanium electrode plates</strong>, the JRIV may be more compact than its premium counterparts, but it still delivers the essential Kangen Water® experience. Its streamlined design makes it perfect for apartments, small kitchens, or as a secondary unit.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Like all Enagic products, the JRIV produces 5 types of functional water:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
          <li><strong>Kangen Water®</strong> (pH 8.5-9.5) - For daily drinking and cooking</li>
          <li><strong>Clean Water</strong> (pH 7.0) - Neutral pH water for medication</li>
          <li><strong>Beauty Water</strong> (pH 6.0) - For skin care and as a natural toner</li>
          <li><strong>Strong Acidic Water</strong> (pH 2.5) - For sanitizing surfaces</li>
          <li><strong>Strong Kangen Water</strong> (pH 11.5) - For cleaning and food preparation</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          The JRIV is perfect for those who want the benefits of ionized water without the higher investment required for premium models, making it an excellent entry point into the Kangen Water® lifestyle.
        </p>
      </motion.div>

      {/* YouTube Video */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md aspect-video"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/S2D4lBSi7sU"
          title="Leveluk JRIV Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Comparison table */}
      <motion.div
        variants={textVariants}
        className="mb-10 overflow-x-auto"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Leveluk JRIV vs. Other Enagic Models - Finding Your Perfect Fit
        </h3>
        
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Feature
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk JRIV
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk SD 501
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk K8
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Electrode Plates
              </td>
              <td className="px-6 py-4 border border-gray-200">
                4 Platinum-Coated Titanium
              </td>
              <td className="px-6 py-4 border border-gray-200">
                7 Platinum-Coated Titanium
              </td>
              <td className="px-6 py-4 border border-gray-200">
                8 Platinum-Coated Titanium
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Power Consumption
              </td>
              <td className="px-6 py-4 border border-gray-200">
                120W (Energy Efficient)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                200W (Standard)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                230W (Enhanced Power)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Size
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Compact (Great for Small Spaces)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Larger Unit
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Flow Rate
              </td>
              <td className="px-6 py-4 border border-gray-200">
                3-4 L/min
              </td>
              <td className="px-6 py-4 border border-gray-200">
                4-7.5 L/min
              </td>
              <td className="px-6 py-4 border border-gray-200">
                4.5-7.6 L/min
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                ORP Values
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Good (Standard range)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Better (Enhanced range)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Best (Maximum negative ORP)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Best For
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Individuals, Small Households, Budget-Conscious Buyers
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Families, Those Wanting Premium Features
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Those Wanting the Ultimate Performance
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Price Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Entry-Level
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Mid-Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Premium
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Additional image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac4Image2}
          alt="Leveluk JRIV Side View"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Why choose section */}
      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why the Leveluk JRIV is a Smart Investment</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {["<strong>Affordable Without Compromising Quality:</strong> One of the most budget-friendly Kangen machines, offering premium water without the high-end price.",
            "<strong>Compact & Energy-Efficient for Small Households:</strong> Perfect for singles and couples, the JRIV saves space and uses less power than larger models.",
            "<strong>Five Types of Functional Water for Everyday Use:</strong> Creates all the essential water types you need for healthy living.",
            "<strong>User-Friendly & Low Maintenance:</strong> Comes with a simple LCD control panel, automatic cleaning system, and filter replacement alerts for hassle-free use.",
            "<strong>Excellent Entry Point:</strong> The perfect way to start your Kangen Water® journey without a significant initial investment.",
            "<strong>Space-Saving Design:</strong> Fits easily in apartments, condos, and small kitchens where counter space is valuable."]
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

      {/* Water types details */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-gray-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Five Essential Water Types from Your JRIV
        </h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Kangen Water® (pH 8.5–9.5)</h4>
            <p className="text-gray-700">Perfect for daily hydration, brewing coffee or tea, cooking rice and vegetables, and making soups. The antioxidant properties and optimal alkalinity make this ideal for your everyday drinking water.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Clean Water (pH 7.0)</h4>
            <p className="text-gray-700">Neutral pH water that's perfect for taking medications, preparing baby formula, or anytime pure, filtered water is needed without ionization.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Beauty Water (pH 6.0)</h4>
            <p className="text-gray-700">Slightly acidic water that works as a natural astringent for skin care, a gentle face wash, hair rinse after shampooing, or plant care. Many users report improved skin tone and softer hair.</p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Strong Kangen Water (pH 11.5)</h4>
            <p className="text-gray-700">This high-alkaline water is excellent for cleaning, removing tough stains, cleaning oils from foods, and soaking vegetables to remove pesticides.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Strong Acidic Water (pH 2.5)</h4>
            <p className="text-gray-700">This sanitizing water can be used for cleaning food preparation areas, as a hand sanitizer, for cleaning minor wounds, or anywhere you need natural disinfecting properties.</p>
          </div>
        </div>
      </motion.div>

      {/* Technical specifications */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Technical Specifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Machine Specifications</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Dimensions:</span> 264mm x 171mm x 338mm</li>
              <li><span className="font-medium">Weight:</span> Approximately 5 kg</li>
              <li><span className="font-medium">Power Supply:</span> 100-240V AC, 50/60Hz</li>
              <li><span className="font-medium">Power Consumption:</span> Approx. 120W</li>
              <li><span className="font-medium">Production Rate:</span> 3-4 liters/minute</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Water Production</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Electrode Plates:</span> 4 platinum-coated titanium plates</li>
              <li><span className="font-medium">pH Range:</span> 2.5 to 11.5</li>
              <li><span className="font-medium">Filter Life:</span> Approximately 3,000 liters (depending on source water quality)</li>
              <li><span className="font-medium">ORP Values:</span> Variable based on source water</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-bold text-gray-800 mb-2">Additional Features</h4>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Display:</span> LCD display with water type indicators</li>
            <li><span className="font-medium">Cleaning System:</span> Automatic cleaning system</li>
            <li><span className="font-medium">Warranty:</span> 3-year limited warranty</li>
            <li><span className="font-medium">Installation:</span> Easy counter-top installation with standard faucet diverter</li>
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
              query="jriv"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac4;