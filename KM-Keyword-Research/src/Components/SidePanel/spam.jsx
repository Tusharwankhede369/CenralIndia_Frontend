import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';

const SpamDetection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  // Load Lottie JSON dynamically from public folder
  useEffect(() => {
    fetch('/spam-shield.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie JSON:', error));
  }, []);

  // Make API request for Spam Check
  const checkSpam = async () => {
    if (!searchTerm) {
      setResult({ explanation: 'Please enter text.' });
      return;
    }

    try {
      const response = await fetch('https://keyword-research3.onrender.com/api/gemini/analyze-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogText: searchTerm })
      });

      const data = await response.json();
      console.log('API Response:', data);  // Log the API response to inspect its structure

      if (response.ok) {
        const { analysisResult } = data; // Assuming analysisResult is returned in the response

        setResult({
          explanation: analysisResult || 'No detailed explanation available'
        });
      } else {
        setResult({
          explanation: 'Error: Unable to process the text.'
        });
      }
    } catch (error) {
      console.error('Error detecting spam:', error);
      setResult({
        explanation: 'Error: Unable to process the text.'
      });
    }
  };

  return (
    <>
      <div style={{ width: '900px', minHeight: '100vh', padding: '0 50px' }} className="relative flex items-center justify-center overflow-hidden">
        <Helmet>
          <title>Spam Detection</title>
          <meta name="description" content="Check your text for spam and optimize SEO with keyword analysis." />
          <meta name="keywords" content="Spam Detection, SEO Optimization, Keyword Analysis, Content Filtering" />
        </Helmet>

        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-10">
          {/* Lottie Animation Background */}
          <div className="absolute inset-0 z-0">
            {animationData && <Lottie animationData={animationData} loop={true} className="w-full h-full" />}
          </div>

          {/* Spam Detection Form */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-6xl mx-4 shadow-lg p-10 rounded-lg border bg-gradient-to-r from-blue-200 to-purple-300 text-white"
          >
            <h1 className="text-2xl font-bold text-center mb-4">Spam Detection</h1>
            <motion.input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter text to check for spam"
              className="w-full p-3 border rounded outline-none text-gray-900"
              whileFocus={{ scale: 1.05 }}
            />

            <motion.button
              onClick={checkSpam}
              className="w-full mt-4 p-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
              whileTap={{ scale: 0.95 }}
            >
              Check for Spam
            </motion.button>

            {result && (
              <motion.div
                className="mt-4 p-3 border rounded shadow-md text-gray-900 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <strong>Explanation:</strong>
                <p>{result.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SpamDetection;
