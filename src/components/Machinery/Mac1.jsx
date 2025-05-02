import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac1Img from "../../assets/Mac1.jpg";
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Water That Works for You</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {["<strong>Hydrate Like Never Before</strong> – Smoother, fresher, deeply hydrating water.",
            "<strong>Wash Fruits & Vegetables Naturally</strong> – Remove residues using <strong>Strong Kangen Water (pH 11.5)</strong>.",
            "<strong>Gentle Skincare with Beauty Water</strong> – Achieve glowing skin with <strong>Beauty Water (pH 6.0)</strong>.",
            "<strong>Eco-Friendly Cleaning & Disinfection</strong> – Eliminate chemicals with <strong>Strong Acidic Water (pH 2.5)</strong>.",
            "<strong>Safe & Pure for the Whole Family</strong> – Perfect for babies, cooking, and daily use."]
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Sets the Leveluk SD 501 Apart?</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3"
          variants={containerVariants}
        >
          {["<strong>Platinum-Coated Titanium Plates</strong> – Ensures optimal water ionization and long lifespan.",
            "<strong>Large LCD Panel</strong> – Easy-to-read screen with voice prompts for effortless operation.",
            "<strong>Compact Yet Powerful</strong> – Fits neatly into any kitchen without sacrificing performance.",
            "<strong>Energy Efficient</strong> – Low energy consumption, promoting sustainable living.",
            "<strong>Trusted Worldwide</strong> – Used by health professionals, celebrities, and athletes across the globe."]
            .map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1 + 0.8 }
                  }
                }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
        </motion.ul>
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
              query="sd501"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mac1;