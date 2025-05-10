import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Contact from "../Contact";
import Mac5Image from "../../assets/Mac5.jpg"; 
const Mac5 = () => {
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
        Kangen Water Machine Leveluk Super 501
      </motion.h2>

      {/* Main Product Image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac5Image}
          alt="Leveluk Super 501 Machine"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Detailed description */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The High-Performance Leveluk Super 501
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Leveluk Super 501</strong> is Enagic's commercial-grade water ionization powerhouse, designed specifically for high-demand environments. With its superior production capacity and robust engineering, it's the perfect solution for restaurants, cafés, clinics, wellness centers, or large families with significant water needs.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          What truly sets the Super 501 apart is its <strong>innovative dual plate technology</strong>. This machine combines 5 plates for regular Kangen Water® and Beauty Water production with 7 plates for Strong Kangen Water and Strong Acid Water. This revolutionary approach ensures optimal performance across all water types while extending the machine's lifespan.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The Super 501 delivers commercial-grade performance with:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
          <li><strong>Higher Flow Rate:</strong> Produces up to 7 liters per minute</li>
          <li><strong>Continuous Operation:</strong> Designed for extended use without overheating</li>
          <li><strong>Advanced Filtration:</strong> High-capacity filter system for busy environments</li>
          <li><strong>Twin Hose System:</strong> Efficient water distribution for multiple users</li>
          <li><strong>Dual Platinum-Coated Titanium Electrode Plates:</strong> 5 plates + 7 plates configuration</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          The Leveluk Super 501 delivers exceptional performance while maintaining all the quality standards Enagic is known for, making it the go-to option for commercial applications or large residential settings.
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
          src="https://www.youtube.com/embed/PBTC40A8zRc"
          title="Leveluk Super 501 Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Short demonstration video */}
      <motion.div
        variants={textVariants}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Quick Demonstration
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-xl shadow-md aspect-video"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UaTw88S8nkk"
              title="Leveluk Super 501 Quick Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
          
          <motion.div 
            variants={textVariants}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-700 leading-relaxed">
              See the Leveluk Super 501 in action! This quick demonstration shows the powerful flow rate and ease of use that makes this machine perfect for commercial settings. Note how quickly it produces water and how the intuitive controls make operation simple even in busy environments.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Comparison table */}
      <motion.div
        variants={textVariants}
        className="mb-10 overflow-x-auto"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Leveluk Super 501 vs. Other Commercial Models
        </h3>
        
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Feature
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk Super 501
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Standard Commercial Units
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Industrial Ionizers
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Electrode Technology
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Dual System: 5 + 7 Platinum-Coated Titanium Plates
              </td>
              <td className="px-6 py-4 border border-gray-200">
                7-9 Plates (Single System)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                10+ Plates (Single System)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Production Capacity
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Up to 7 L/min (Optimized for all water types)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                5-6 L/min (Standard throughput)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                8+ L/min (High volume)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Continuous Operation
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Excellent (Commercial grade)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Good (With cooling periods)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Excellent (Built for continuous use)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Energy Efficiency
              </td>
              <td className="px-6 py-4 border border-gray-200">
                High (Optimized dual system)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Medium (Higher energy consumption)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Low (Highest energy demand)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Water Type Flexibility
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Superior (Optimized plates for each water type)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Good (All water types from same plates)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Limited (Often focused on specific applications)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Installation Complexity
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Moderate (Counter-top or under-counter)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Moderate (Similar options)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Complex (Often requires professional installation)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Price Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Premium Commercial
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Mid-Range Commercial
              </td>
              <td className="px-6 py-4 border border-gray-200">
                High-End Industrial
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Additional feature image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src="https://euwater.com/wp-content/uploads/2022/06/leveluk-super-501-02.jpg"
          alt="Leveluk Super 501 Features"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Why choose section with enhanced details */}
      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why the Leveluk Super 501 Outperforms Other Commercial Units</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {[
            "<strong>Innovative Dual Plate System:</strong> The revolutionary design uses separate plate systems for different water types, ensuring optimal electrolysis for each application while significantly extending the lifespan of the machine.",
            "<strong>Superior Water Production Capacity:</strong> With up to 7 liters per minute production, the Super 501 easily meets the demands of busy restaurants, cafés, wellness centers, or large families.",
            "<strong>Enhanced ORP Values:</strong> Achieves deeper negative ORP (antioxidant potential) levels than standard ionizers, making it ideal for health-focused businesses.",
            "<strong>Continuous Operation Capability:</strong> Built with commercial-grade components that allow for extensive daily use without performance degradation.",
            "<strong>Intelligent Twin Hose System:</strong> Enables efficient simultaneous collection of both alkaline and acidic water, maximizing productivity and convenience.",
            "<strong>Advanced Control Panel:</strong> Features an intuitive LCD control panel with one-touch operation for busy commercial environments.",
            "<strong>Exceptional Durability:</strong> Constructed with premium materials and Enagic's legendary Japanese craftsmanship for years of reliable service.",
            "<strong>Commercial-Grade Filtration:</strong> High-capacity filter system handles greater water volume while maintaining excellent filtration quality.",
            "<strong>Lower Long-Term Maintenance:</strong> The dual plate system reduces plate stress, extending component life and reducing maintenance requirements."
          ].map((item, index) => (
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
          The Super 501's Five Water Types: Commercial Applications
        </h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Kangen Water® (pH 8.5–9.5)</h4>
            <p className="text-gray-700">
              <strong>Commercial Applications:</strong> Perfect for restaurants and cafés to offer premium alkaline water to customers, brew specialty coffees and teas, prepare soups and rice dishes with enhanced flavor, and create beverage mixes with better dissolution and taste profiles.
            </p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Clean Water (pH 7.0)</h4>
            <p className="text-gray-700">
              <strong>Commercial Applications:</strong> Ideal for pharmaceutical preparations, medical facilities needing neutral pH water, mixing areas requiring pure water without ionization, and serving customers with special dietary needs.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Beauty Water (pH 6.0)</h4>
            <p className="text-gray-700">
              <strong>Commercial Applications:</strong> Essential for spas and salons for facial treatments, toning services, hair rinses after chemical treatments, flower shop freshness preservation, and anywhere mild acidic water is needed for cleaning glass surfaces streak-free.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Strong Kangen Water (pH 11.5)</h4>
            <p className="text-gray-700">
              <strong>Commercial Applications:</strong> Powerful solution for restaurant kitchens to remove pesticides from produce, break down oil and grease from food preparation, pre-soak tough stains from linens, and clean surfaces without harsh chemicals.
            </p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Strong Acidic Water (pH 2.5)</h4>
            <p className="text-gray-700">
              <strong>Commercial Applications:</strong> Essential sanitizing solution for food preparation areas, utensil sanitization in restaurants, hand sanitizing stations, clinical sanitization requirements, and anywhere high-level sanitization is needed without chemical residues.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Technical specifications - expanded for Super 501 */}
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
              <li><span className="font-medium">Dimensions:</span> 345mm × 230mm × 375mm</li>
              <li><span className="font-medium">Weight:</span> Approximately 9 kg</li>
              <li><span className="font-medium">Power Supply:</span> 100-240V AC, 50/60Hz</li>
              <li><span className="font-medium">Power Consumption:</span> Approx. 230W (maximum)</li>
              <li><span className="font-medium">Production Rate:</span> Up to 7 liters/minute</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Electrode Technology</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Electrode Plates:</span> Dual system with 5 and 7 platinum-coated titanium plates</li>
              <li><span className="font-medium">pH Range:</span> 2.5 to 11.5</li>
              <li><span className="font-medium">ORP Values:</span> Up to -850mV (depending on source water)</li>
              <li><span className="font-medium">Electrode Cleaning:</span> Advanced automatic cleaning system</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-bold text-gray-800 mb-2">Commercial Features</h4>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Water System:</span> Twin hose system for efficient water collection</li>
            <li><span className="font-medium">Display:</span> Large LCD display with water type indicators</li>
            <li><span className="font-medium">Filtration:</span> High-capacity filter system (approx. 6,000 liters depending on source water)</li>
            <li><span className="font-medium">Warranty:</span> 5-year limited warranty</li>
            <li><span className="font-medium">Certifications:</span> Meets international safety and health standards</li>
            <li><span className="font-medium">Installation Options:</span> Counter-top installation with professional under-counter options available</li>
          </ul>
        </div>
      </motion.div>

      {/* Ideal business applications */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-gray-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Ideal for These Business Applications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Food & Beverage</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Restaurants & Cafés</li>
              <li>• Juice & Smoothie Bars</li>
              <li>• Health Food Establishments</li>
              <li>• Catering Services</li>
              <li>• Commercial Kitchens</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Health & Wellness</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Medical Clinics</li>
              <li>• Wellness Centers</li>
              <li>• Spas & Salons</li>
              <li>• Fitness Centers</li>
              <li>• Physical Therapy Facilities</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Hospitality</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Hotels & Resorts</li>
              <li>• Conference Centers</li>
              <li>• Lodges & Retreats</li>
              <li>• Corporate Offices</li>
              <li>• VIP Lounges</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Specialty Applications</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Agricultural Uses</li>
              <li>• Food Processing</li>
              <li>• Large Residential Estates</li>
              <li>• Community Centers</li>
              <li>• Educational Institutions</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Customer testimonials - based on video content */}
      
          

      {/* Call to action */}
      <motion.div variants={buttonVariants} className="flex flex-col items-center mt-10">
        
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
              query="super501"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac5;