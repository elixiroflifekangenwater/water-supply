import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Mac2Img from "../../assets/Mac2.jpeg";
import Modal from "../modal";
import ContactForm from "../ContactForm";
const Mac2 = () => {
  const controls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => setIsModalOpen(false);
  
  useEffect(() => {
    // Start the animation sequence when component mounts
    controls.start("visible");
  }, [controls]);

  // Animation variants
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
      transition: { 
        delay: 1.2,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
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
        Kangen Water Machine Leveluk SD 501 Platinum
      </motion.h1>
      
      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-xl mb-8 shadow-md"
      >
        <img
          src={Mac2Img}
          alt="Leveluk SD 501 Platinum"
          className="w-full h-auto object-cover hover:brightness-110 transition duration-300"
        />
      </motion.div>

      <motion.p 
        className="text-gray-700 text-lg mb-6 leading-relaxed"
        variants={textVariants}
      >
        Imagine having a machine in your kitchen that doesn't just provide water—
        <strong> it transforms it into a powerhouse of hydration, beauty, and cleanliness</strong>. The
        Leveluk SD 501 Platinum takes everything you love about the standard Leveluk SD 501 and elevates
        it to a whole new level of sophistication.
      </motion.p>

      <motion.p 
        className="text-gray-700 text-lg mb-6 leading-relaxed"
        variants={textVariants}
      >
        With its sleek platinum finish, upgraded voice guidance in five languages, and cutting-edge water
        ionization technology, this machine is the perfect fusion of <strong>luxury and performance</strong>.
        Whether you're looking to get high quality drinking water, enhance your skincare routine, or sanitize
        your home naturally, the SD 501 Platinum delivers five types of functional water with just the press of a button.
      </motion.p>

      <motion.h2 
        className="text-2xl font-semibold text-gray-800 mb-4"
        variants={textVariants}
      >
        Why Upgrade to the Leveluk SD 501 Platinum?
      </motion.h2>
      
      <motion.ul 
        className="list-disc list-inside text-gray-700 space-y-3 mb-8"
        variants={containerVariants}
      >
        {[
          "<strong>Same Advanced Technology—Sleek New Design:</strong> Features the same 7 platinum-coated titanium plates, but with a modern platinum-colored finish to elevate your kitchen.",
          "<strong>Multilingual Voice Guidance:</strong> Supports five languages—English, German, French, Italian, and Spanish—for easier, clearer operation.",
          "<strong>Hydration, Beauty, and Home Cleaning – All in One:</strong> Produces five types of water for every need."
        ].map((item, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={listItemVariants}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </motion.ul>

      <motion.h2 
        className="text-2xl font-semibold text-gray-800 mb-4"
        variants={textVariants}
      >
        Types of Water It Produces:
      </motion.h2>
      
      <motion.ul 
        className="list-disc list-inside text-gray-700 space-y-3 mb-8"
        variants={containerVariants}
      >
        {[
          "<strong>Kangen Water (pH 8.5-9.5):</strong> Superior hydration with antioxidants and better absorption.",
          "<strong>Clean Water (pH 7.0):</strong> Ideal for baby formula and medication.",
          "<strong>Beauty Water (pH 6.0):</strong> Naturally tightens and refreshes skin for a glowing complexion.",
          "<strong>Strong Acidic Water (pH 2.5):</strong> A powerful, chemical-free disinfectant for sanitation.",
          "<strong>Strong Kangen Water (pH 11.5):</strong> Removes pesticides and chemicals from fruits and vegetables."
        ].map((item, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={listItemVariants}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </motion.ul>
      
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        className="flex justify-center mt-10"
      >
        <button onClick={() => setIsModalOpen(true)} className="bg-[#4DB6E2] hover:bg-[#3da7d5] text-white font-semibold py-3 px-8 rounded-full shadow-md transition">
          Contact Us
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <button className='bg-gradient-to-r from-[#4DB6E2] to-blue-500 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 p-4 rounded-full hover:scale-110 shadow-lg active:scale-95 flex items-center justify-center absolute top-4 right-4 ring-2 ring-white/20 hover:ring-blue-300/50' onClick={onClose}>
          <span className='text-xl font-semibold'>×</span>
        </button>
        {/* <ContactForm query="sd501" /> */}
        <ContactForm />
      </Modal>
      </motion.div>
    </motion.div>
  );
};

export default Mac2;