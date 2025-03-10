import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';

const FormComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);
  const [optimizedContent, setOptimizedContent] = useState('');
  const [animationData, setAnimationData] = useState(null);

  // Load Lottie JSON dynamically from public folder
  useEffect(() => {
    fetch('/spam-shield.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie JSON:', error));
  }, []);

  // Content Optimization API call
  const optimizeContent = async () => {
    if (!searchTerm) {
      setResult({ text: 'Please enter text.', score: null, isSpam: null });
      return;
    }

    try {
      const response = await fetch('https://keyword-research3.onrender.com/api/gemini/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: searchTerm }),
      });
      const data = await response.json();
      setOptimizedContent(data.optimizedContent);
    } catch (error) {
      console.error('Error optimizing content:', error);
    }
  };

  // Simulated Spam Check Logic (Replace with Backend Call)
  const checkSpam = () => {
    if (!searchTerm) {
      setResult({ text: 'Please enter text.', score: null, isSpam: null });
      return;
    }

    const spamWords = ['free', 'win', 'money', 'prize', 'click'];
    const words = searchTerm.toLowerCase().split(' ');
    const spamCount = words.filter(word => spamWords.includes(word)).length;
    const spamScore = (spamCount / words.length) * 100;
    const isSpam = spamScore > 30;

    setResult({ text: searchTerm, score: spamScore.toFixed(2), isSpam });
    optimizeContent(); // Call optimizeContent after checking spam
  };

  return (
    <>
      <div style={{ width: '900px', minHeight: '100vh', padding: '0 50px' }} className="relative flex items-center justify-center overflow-hidden">
        <Helmet>
          <title>Content Optimisation</title>
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
            <h1 className="text-2xl font-bold text-center mb-4">Content Optimisation</h1>
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
                className={`mt-4 p-3 border rounded shadow-md text-gray-900 ${result.isSpam ? 'bg-red-500 text-white' : 'bg-white'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <strong>Result:</strong> {result.text} <br />
                <strong>Spam Score:</strong> {result.score}% <br />
                <strong>Status:</strong> {result.isSpam ? '⚠️ Spam Detected' : '✅ Safe'}
              </motion.div>
            )}

            {optimizedContent && (
              <motion.div
                className="mt-4 p-3 border rounded shadow-md text-gray-900 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <strong>Optimized Content:</strong> <br />
                {optimizedContent}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
