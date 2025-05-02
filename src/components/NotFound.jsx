import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold text-gray-200"
          >
            404
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-bold text-gray-800"
          >
            Page Not Found
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-600 max-w-md mx-auto"
          >
            The page you're looking for doesn't exist. But don't worry, you can still explore our amazing water solutions!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="space-y-4"
          >
            <Link
              to="/"
              className="inline-block bg-[#4DB6E2] hover:bg-[#3da7d5] text-white font-semibold py-3 px-8 rounded-full shadow-md transition transform hover:scale-105"
            >
              Go Home
            </Link>

            <div className="flex justify-center space-x-6">
              <Link
                to="/machinery"
                className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-6 rounded-full border border-gray-300 transition hover:shadow-md"
              >
                View Machines
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-6 rounded-full border border-gray-300 transition hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;