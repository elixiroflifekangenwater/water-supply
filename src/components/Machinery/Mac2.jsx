import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac2Img from "../../assets/Mac2.jpeg"; // Make sure to have this image in your assets
import Contact from "../Contact";

const Mac2 = () => {
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
        Kangen Water Machine Leveluk SD 501 Platinum
      </motion.h2>

      {/* Product Image */}
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac2Img}
          alt="Kangen Water Machine Leveluk SD 501 Platinum"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Detailed description between image and first video */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The Premium Leveluk SD 501 Platinum
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Leveluk SD 501 Platinum</strong> is the elevated version of Enagic's flagship water ionizer. With its sleek, modern platinum exterior, this machine is designed for those who want both superior performance and elegant aesthetics. 
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          This premium model features the same powerful 7 platinum-coated titanium plates as the original SD 501, but adds multilingual voice guidance in <strong>five languages</strong> (English, German, French, Italian, and Spanish), making it the perfect choice for international households and luxury kitchens.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          Like its counterpart, the SD 501 Platinum produces 5 types of water with varying pH levels:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
          <li><strong>Kangen Water®</strong> (pH 8.5-9.5) - Perfect for daily drinking and cooking</li>
          <li><strong>Clean Water</strong> (pH 7.0) - Ideal for taking medications</li>
          <li><strong>Beauty Water</strong> (pH 6.0) - Excellent for skin care and hygiene</li>
          <li><strong>Strong Acidic Water</strong> (pH 2.5) - Powerful cleaning and sanitizing</li>
          <li><strong>Strong Kangen Water</strong> (pH 11.5) - Great for removing pesticides and cleaning</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          The Leveluk SD 501 Platinum is not just a water ionizer—it's a statement piece for your kitchen that delivers exceptional performance while enhancing your home's aesthetic appeal.
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
          src="https://www.youtube.com/embed/iRPYUg97eY4"
          title="Leveluk SD 501 Platinum Overview"
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
          Leveluk SD 501 vs. Leveluk SD 501 Platinum - Which One Should You Choose?
        </h3>
        
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Feature
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk SD 501
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Leveluk SD 501 Platinum
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Electrode Plates
              </td>
              <td className="px-6 py-4 border border-gray-200">
                7 Platinum-Coated Titanium
              </td>
              <td className="px-6 py-4 border border-gray-200">
                7 Platinum-Coated Titanium
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Design
              </td>
              <td className="px-6 py-4 border border-gray-200">
                White Plastic Finish
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Sleek Platinum Exterior
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Voice Guidance
              </td>
              <td className="px-6 py-4 border border-gray-200">
                English & Japanese
              </td>
              <td className="px-6 py-4 border border-gray-200">
                English, German, French, Italian, Spanish
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Technology
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Advanced Water Ionization
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Same, with a Sleek Premium Look
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Best For
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Those looking for the core benefits of Kangen Water
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Those who want both performance and a stylish kitchen upgrade
              </td>
            </tr>
            {/* Additional rows I've added */}
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Price Range
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard Premium
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Ultra Premium
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Display
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard LCD
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Enhanced LCD with Improved Visibility
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Aesthetic Appeal
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Functional Design
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Luxury Statement Piece
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Installation
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard Counter-Top or Under-Counter
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Standard Counter-Top or Under-Counter with Premium Fittings
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
                5-year limited warranty
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
          src="https://www.youtube.com/embed/-4ldTVRvBgc"
          title="Leveluk SD 501 Platinum Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Additional details section */}
      <motion.div variants={textVariants} className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose the SD 501 Platinum?
        </h3>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          The <strong>Leveluk SD 501 Platinum</strong> elevates the water ionizer experience with its elegant design and enhanced features. While it shares the same powerful ionization technology as the standard SD 501, the Platinum edition offers:
        </p>
        
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {[
            "<strong>Multilingual Convenience</strong> – Voice guidance in 5 international languages for global households.",
            "<strong>Premium Aesthetics</strong> – Sleek platinum exterior that enhances any modern kitchen design.",
            "<strong>Statement Piece</strong> – Not just an appliance, but a luxury addition to your home.",
            "<strong>Same Powerful Benefits</strong> – All the health advantages of the original, in a more elegant package.",
            "<strong>Perfect Gift</strong> – An impressive present for health-conscious individuals with discerning taste.",
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
          The Platinum Advantage
        </h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3"
          variants={containerVariants}
        >
          {[
            "<strong>International Appeal</strong> – Perfect for diverse households with its multilingual capabilities.",
            "<strong>Kitchen Enhancement</strong> – Elevates your kitchen's appearance while providing healthy water.",
            "<strong>Same Reliable Technology</strong> – All the trusted Enagic engineering in a more luxurious package.",
            "<strong>User-Friendly Interface</strong> – Intuitive controls with enhanced visual and audio guidance.",
            "<strong>Conversation Starter</strong> – A unique appliance that sparks health discussions with guests.",
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
              query="sd501-platinum"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac2;