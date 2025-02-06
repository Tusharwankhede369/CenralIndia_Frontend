import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Spam = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mt-10 mx-auto shadow-lg p-6 rounded-lg border border-gray-500 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <motion.input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter text to check for spam"
        className="w-full p-3 border rounded outline-none text-gray-900"
        whileFocus={{ scale: 1.05 }}
      />
      
      <motion.div 
        className="mt-4 p-3 border rounded bg-white text-gray-900 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <strong>Result:</strong> {searchTerm}
      </motion.div>
    </motion.div>
  );
};

export default Spam;
