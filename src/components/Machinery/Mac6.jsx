import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Contact from "../Contact";
import Mac6Img from "../../assets/Mac6.jpg"; 
import Anespa from "../../assets/Anespa.png"; 
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

      {/* Main Product Image */}
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

      {/* Detailed description */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The Luxury Spa Experience at Home
        </h3>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Anespa DX</strong> is Enagic's premium home spa system, designed to transform your ordinary bathroom into a luxurious hot spring experience. By recreating the therapeutic effects of Japan's most famous hot springs, this remarkable system brings the healing power of mineral-rich water directly into your home.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          What makes the Anespa DX truly special is its <strong>advanced mineral infusion technology</strong>. Using a combination of natural mineral stones sourced from the renowned Futamata Radium hot spring in Japan, this system effectively removes chlorine and harmful chemicals while infusing your water with beneficial minerals that revitalize your skin and hair.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          The Anespa DX delivers exceptional benefits with:
        </p>
        
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
          <li><strong>Chlorine Removal:</strong> Eliminates up to 95% of residual chlorine in your water</li>
          <li><strong>Mineral Enrichment:</strong> Infuses water with beneficial minerals like calcium, magnesium, and potassium</li>
          <li><strong>Eco-Friendly Design:</strong> Operates without electricity for energy efficiency</li>
          <li><strong>pH Neutrality:</strong> Maintains natural water pH while enhancing mineral content</li>
          <li><strong>Easy Installation:</strong> Simple to attach to your existing shower or bath faucet</li>
        </ul>
        
        <p className="text-gray-700 leading-relaxed">
          Experience the difference that mineral-rich water can make for your skin, hair, and overall well-being with the Anespa DX—bringing the authentic Japanese hot spring experience into your daily routine.
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
          src="https://www.youtube.com/embed/3ws8Oe5wNkM"
          title="Anespa DX Overview"
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
              src="https://www.youtube.com/embed/cokkns4ECoY"
              title="Anespa DX Quick Demo"
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
              See the Anespa DX in action! This quick demonstration shows how easily the system attaches to your existing shower setup and begins providing mineral-rich, chlorine-free water immediately. Note how the water feels softer and more luxurious—just like the natural hot springs that inspired this innovation.
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
          Anespa DX vs. Regular Shower Filters
        </h3>
        
        <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Feature
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Anespa DX
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Standard Shower Filters
              </th>
              <th className="px-6 py-4 font-semibold border border-blue-200">
                Basic Shower Heads
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Filtration Technology
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Advanced ceramic filter + Natural mineral stones
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Basic carbon filtration
              </td>
              <td className="px-6 py-4 border border-gray-200">
                None
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Chlorine Removal
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Up to 95% removal
              </td>
              <td className="px-6 py-4 border border-gray-200">
                30-70% removal
              </td>
              <td className="px-6 py-4 border border-gray-200">
                0% removal
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Mineral Infusion
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Yes (Tufa, MIC stone, Power stone)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Limited or None
              </td>
              <td className="px-6 py-4 border border-gray-200">
                None
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Filter Lifespan
              </td>
              <td className="px-6 py-4 border border-gray-200">
                12 months or 24,000 liters
              </td>
              <td className="px-6 py-4 border border-gray-200">
                3-6 months
              </td>
              <td className="px-6 py-4 border border-gray-200">
                N/A
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Hot Spring Simulation
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Yes (Futamata Hot Spring minerals)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                No
              </td>
              <td className="px-6 py-4 border border-gray-200">
                No
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Installation Complexity
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Simple (No tools required)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Simple
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Simple
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border border-gray-200 font-medium">
                Quality Construction
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Premium (Japanese craftsmanship)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Variable (Mostly plastic)
              </td>
              <td className="px-6 py-4 border border-gray-200">
                Basic
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
          src={Anespa}
          alt="Anespa DX Installation"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      {/* Benefits section with enhanced details */}
      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose the Anespa DX Mineral Spa System</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {[
            "<strong>Your Daily Hot Spring Experience:</strong> The Anespa DX recreates the therapeutic effects of Japan's renowned Futamata Radium hot spring, giving you access to mineral-rich water that's prized for skin and wellness benefits.",
            "<strong>Healthier Skin & Hair:</strong> By removing chlorine and harsh chemicals while infusing beneficial minerals, your skin and hair will feel softer, look healthier, and experience less dryness and irritation.",
            "<strong>Authentic Mineral Stones:</strong> Each unit contains genuine Tufa, MIC stone, and Power stone sourced from the famous Futamata Radium hot spring in Japan, known for their therapeutic properties.",
            "<strong>No Electricity Required:</strong> The Anespa DX operates through water pressure alone, requiring no electrical connection, making it both safe and energy-efficient.",
            "<strong>Simple Installation:</strong> Attaches easily to your existing shower system with no special tools or plumbing required—most users complete installation in under 15 minutes.",
            "<strong>Long-Lasting Performance:</strong> High-capacity filter cartridge lasts approximately 12 months or 24,000 liters before needing replacement.",
            "<strong>Quality-Built Construction:</strong> Premium materials and Enagic's renowned Japanese engineering ensure durability and reliable performance for years.",
            "<strong>Versatile Application:</strong> Works with both shower and bathtub setups, letting you enjoy mineral-enriched water however you prefer.",
            "<strong>pH Neutral Water:</strong> Unlike some water treatment systems, the Anespa DX maintains the natural pH balance of your water while enhancing it with minerals."
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

      {/* Mineral stones explanation */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-gray-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          The Power of Futamata Hot Spring Minerals
        </h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Tufa Stones</h4>
            <p className="text-gray-700">
              Tufa stones are natural calcium deposits formed in mineral-rich hot springs. In the Anespa DX, these stones help create softer water that's gentler on skin and hair, reducing dryness and irritation while promoting healthier skin texture and appearance.
            </p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">MIC (Mineral Ion Ceramic) Stones</h4>
            <p className="text-gray-700">
              These specialized ceramic stones release beneficial minerals like calcium, magnesium, and potassium into your water. These minerals are readily absorbed by the skin, helping to maintain proper moisture balance, restore natural oils, and provide a subtle therapeutic effect similar to soaking in a natural hot spring.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <h4 className="font-bold text-gray-800">Power Stones</h4>
            <p className="text-gray-700">
              Sourced directly from the Futamata Radium hot spring, Power stones help neutralize water impurities while imparting trace minerals that have been valued for centuries in Japanese bathing culture. These stones help create the authentic onsen (hot spring) experience in your own bathroom.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Technical specifications - expanded for Anespa DX */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-blue-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Technical Specifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Device Specifications</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Dimensions:</span> 130mm × 346mm (Diameter × Width)</li>
              <li><span className="font-medium">Weight:</span> Approximately 2.5 kg</li>
              <li><span className="font-medium">Power Source:</span> No electricity required (water pressure powered)</li>
              <li><span className="font-medium">Flow Rate:</span> Up to 2.6 liters/minute</li>
              <li><span className="font-medium">Installation:</span> Universal fit for standard shower attachments</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Filtration System</h4>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Primary Filter:</span> Large-capacity ceramic filter</li>
              <li><span className="font-medium">Chlorine Removal:</span> Up to 95% of residual chlorine</li>
              <li><span className="font-medium">Filter Life:</span> Approximately 12 months (24,000 liters)</li>
              <li><span className="font-medium">Mineral Cartridge:</span> Contains authentic Japanese hot spring minerals</li>
              <li><span className="font-medium">Replacement Indicator:</span> Visual indicator shows when filter change is needed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-bold text-gray-800 mb-2">Special Features</h4>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Mineral Content:</span> Tufa stone, MIC stone, and Power stone from Futamata Radium hot spring</li>
            <li><span className="font-medium">pH Impact:</span> Maintains natural water pH (neutral)</li>
            <li><span className="font-medium">Water Temperature Range:</span> Compatible with both hot and cold water</li>
            <li><span className="font-medium">Warranty:</span> 3-year limited warranty</li>
            <li><span className="font-medium">Certifications:</span> Meets international safety and health standards</li>
            <li><span className="font-medium">Compatibility:</span> Works with standard shower fixtures and bathtub faucets</li>
          </ul>
        </div>
      </motion.div>

      {/* Ideal applications */}
      <motion.div 
        variants={textVariants}
        className="mb-10 bg-gray-50 p-6 rounded-xl shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#4DB6E2] mb-4">
          Perfect For These Home Applications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Beauty & Skincare</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Gentle facial cleansing</li>
              <li>• Reducing skin dryness and irritation</li>
              <li>• Improving hair shine and manageability</li>
              <li>• Supporting natural skin moisture</li>
              <li>• Minimizing chlorine damage to skin and hair</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Relaxation & Wellness</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Creating spa-like shower experiences</li>
              <li>• Enhancing mineral bath soaks</li>
              <li>• Post-workout recovery showers</li>
              <li>• Stress-reduction bathing rituals</li>
              <li>• Authentic Japanese onsen experience</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Family Health</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Safer water for children's baths</li>
              <li>• Gentle bathing for sensitive skin</li>
              <li>• Reducing exposure to chlorine and chemicals</li>
              <li>• Supporting overall family wellness</li>
              <li>• Creating healthy bathing habits</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2">Home Enhancement</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Luxury bathroom upgrade</li>
              <li>• Natural wellness home integration</li>
              <li>• Eco-friendly water improvement</li>
              <li>• Reducing the need for bath products</li>
              <li>• Creating a premium home spa environment</li>
            </ul>
          </div>
        </div>
      </motion.div>

     

      {/* Call to action */}
      <motion.div variants={buttonVariants} className="flex flex-col items-center mt-10">
       
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
              query="anespa-dx"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac6;