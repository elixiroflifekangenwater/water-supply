import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac4Img from "../../assets/Mac4.jpg";
import Modal from "../modal";
import Contact from "../Contact";
const Mac4 = () => {
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

      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac4Img}
          alt="Leveluk JRIV Machine"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      <motion.p
        variants={textVariants}
        className="text-gray-700 text-lg mb-6 leading-relaxed"
      >
        Are you looking for an affordable way to experience the benefits of high-quality ionized water?
        The Leveluk JRIV (JR4) is designed for individuals and small households who want a convenient and efficient
        water solution.
      </motion.p>

      <motion.div variants={textVariants}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why the Leveluk JRIV is a Smart Investment</h3>
        <motion.ul
          className="list-disc list-inside text-gray-700 space-y-3 mb-8"
          variants={containerVariants}
        >
          {["<strong>Affordable Without Compromising Quality:</strong> One of the most budget-friendly Kangen machines, offering premium water without the high-end price.",
            "<strong>Compact & Energy-Efficient for Small Households:</strong> Perfect for singles and couples, the JRIV saves space and uses less power than larger models.",
            "<strong>Five Types of Functional Water for Everyday Use:</strong>",
            "<strong>User-Friendly & Low Maintenance:</strong> Comes with a simple LCD control panel, automatic cleaning system, and filter replacement alerts for hassle-free use."]
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
          {["<strong>Kangen Water (pH 8.5–9.5):</strong> Ideal for hydration, brewing tea, and cooking.",
            "<strong>Clean Water (pH 7.0):</strong> Perfect for baby formula and supplement intake.",
            "<strong>Beauty Water (pH 6.0):</strong> Natural toner and hair rinse.",
            "<strong>Strong Kangen Water (pH 11.5):</strong> Cleans fruits and vegetables thoroughly.",
            "<strong>Strong Acidic Water (pH 2.5):</strong> Great for natural surface sanitization."]
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
        <Contact query="jriv" />
      </Modal>
      </motion.div>
    </motion.div>
  );
};

export default Mac4;