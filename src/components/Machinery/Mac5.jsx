import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac5Img from "../../assets/Mac5.jpg";
import Modal from "../modal";
import Contact from "../Contact";
const Mac5 = () => {
  const controls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => setIsModalOpen(false);

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
      className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mt-20 mb-10"
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

      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac5Img}
          alt="Leveluk Super 501 Machine"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      <motion.p
        variants={textVariants}
        className="text-gray-700 text-lg mb-6 leading-relaxed"
      >
        The Leveluk Super 501 is the <strong>Powerhouse Kangen Water Ionizer</strong> designed for high-demand environments.
        Whether you're running a café, restaurant, clinic, or have a large family, this machine delivers 
        exceptional performance and capacity without compromising quality.
      </motion.p>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why the Leveluk Super 501 is the Perfect Water Solution:</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {["<strong>Unmatched Water Production Capacity:</strong> Generates up to 7 liters per minute, making it perfect for businesses and large households.",
            "<strong>Advanced Dual Plate System:</strong> Combines 7 plates for Strong Kangen/Acidic water and 5 for regular Kangen and Beauty water types.",
            "<strong>Five Types of Water:</strong>",
            "<strong>Efficient Twin Hose System:</strong> Easily switch between water types and fill large containers quickly.",
            "<strong>User-Friendly LCD Display:</strong> Simple push-button operation and large screen for ease of use.",
            "<strong>Automatic Cleaning System:</strong> Reduces manual maintenance.",
            "<strong>Smart Filter Technology:</strong> Notifies you when it’s time to replace the filter.",
            "<strong>Compact Yet Powerful:</strong> Fits neatly into kitchens or business environments while delivering robust features."]
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
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3"
          variants={containerVariants}
        >
          {["<strong>Kangen Water (pH 8.5–9.5):</strong> Supports optimal hydration.",
            "<strong>Clean Water (pH 7.0):</strong> Safe for baby formula and meds.",
            "<strong>Beauty Water (pH 6.0):</strong> Enhances skincare and natural glow.",
            "<strong>Strong Acidic Water (pH 2.5):</strong> Perfect for chemical-free sanitation.",
            "<strong>Strong Kangen Water (pH 11.5):</strong> Ideal for cleaning and detoxifying produce."]
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
        <button onClick={() => setIsModalOpen(true)} className="bg-[#4DB6E2] hover:bg-[#3da7d5] text-white font-semibold py-3 px-8 rounded-full shadow-md transition transform hover:scale-105">
          Contact Us
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <button className='bg-gradient-to-r from-[#4DB6E2] to-blue-500 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 p-4 rounded-full hover:scale-110 shadow-lg active:scale-95 flex items-center justify-center absolute top-4 right-4 ring-2 ring-white/20 hover:ring-blue-300/50' onClick={onClose}>
          <span className='text-xl font-semibold'>×</span>
        </button>
        {/* <ContactForm query="sd501" /> */}
        <Contact query="super501" />
      </Modal>
      </motion.div>
    </motion.div>
  );
};

export default Mac5;