import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac3Image from "../../assets/Mac3.jpg";
import Modal from "../modal";
import Contact from "../Contact";
const Mac3 = () => {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.5
      }
    })
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
      <motion.h1
        className="text-3xl font-bold text-center mb-6 text-[#4DB6E2]"
        variants={textVariants}
      >
        Kangen Water Machine Leveluk K8
      </motion.h1>

      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac3Image}
          alt="Leveluk K8 Machine"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      <motion.p
        className="text-gray-700 text-lg mb-6 leading-relaxed"
        variants={textVariants}
      >
        <strong>Experience the Next Level of Kangen Water Technology</strong>
        <br />
        The Leveluk K8 (Kangen 8) is the most advanced Kangen Water machine ever created. With 8 platinum-coated
        titanium plates, it delivers the highest level of water ionization, producing super-antioxidant water with
        exceptional efficiency. Whether you need water for drinking, cooking, skincare, or cleaning, the K8 provides
        5 different water types at the touch of a button—making it an essential upgrade for your home.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold text-gray-800 mb-4"
        variants={textVariants}
      >
        Why the Leveluk K8 Stands Out
      </motion.h2>

      <motion.ul
        className="list-disc list-inside text-gray-700 space-y-3 mb-8"
        variants={containerVariants}
      >
        <motion.li
          custom={0}
          variants={listItemVariants}
          className="ml-4"
        >
          <strong>Unmatched Power and Antioxidant Benefits:</strong> With 8 high-quality electrolysis plates, the K8 boosts
          ionization for greater antioxidant potential (up to -850 mV ORP). Enjoy smoother, cleaner water that supports your well-being.
        </motion.li>

        <motion.li
          custom={1}
          variants={listItemVariants}
          className="ml-4"
        >
          <strong>Five Versatile Water Types for Every Need:</strong>
          <motion.ul
            className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700"
            variants={containerVariants}
          >
            <motion.li
              custom={0}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "<strong>Kangen Water (pH 8.5–9.5):</strong> Ideal for daily hydration with rich antioxidants." }}
            />
            <motion.li
              custom={1}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "<strong>Clean Water (pH 7.0):</strong> Neutral water for baby formula and medication." }}
            />
            <motion.li
              custom={2}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "<strong>Beauty Water (pH 6.0):</strong> Perfect for refreshing and hydrating your skin." }}
            />
            <motion.li
              custom={3}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "<strong>Strong Acidic Water (pH 2.5):</strong> Natural disinfectant for home sanitization." }}
            />
            <motion.li
              custom={4}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "<strong>Strong Kangen Water (pH 11.5):</strong> Removes pesticides and chemicals from produce." }}
            />
          </motion.ul>
        </motion.li>

        <motion.li
          custom={2}
          variants={listItemVariants}
          className="ml-4"
        >
          <strong>Cutting-Edge Features for Effortless Use:</strong>
          <motion.ul
            className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-700"
            variants={containerVariants}
          >
            <motion.li
              custom={0}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "8 Platinum-Coated Titanium Plates – Delivers premium ionized water quality." }}
            />
            <motion.li
              custom={1}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "Full Touchscreen LCD Panel – Simple, user-friendly operation with voice guidance." }}
            />
            <motion.li
              custom={2}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "Sleek, Modern Design – A stylish fit for any kitchen decor." }}
            />
            <motion.li
              custom={3}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "Multilingual Support – Speaks 8 languages (English, German, French, Italian, Spanish, Portuguese, Japanese, and Chinese)." }}
            />
            <motion.li
              custom={4}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "Energy-Efficient Smart Tech – Automatically shuts off when idle to save energy." }}
            />
            <motion.li
              custom={5}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "Convenient Cleaning System – Automated cleaning for easy maintenance (manual cleaning still recommended)." }}
            />
            <motion.li
              custom={6}
              variants={listItemVariants}
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: "Worldwide Voltage Compatibility – Supports 100-240V power supply for global usage." }}
            />
          </motion.ul>
        </motion.li>
      </motion.ul>

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
        <Contact query="k8" />
      </Modal>
      </motion.div>
    </motion.div>
  );
};

export default Mac3;