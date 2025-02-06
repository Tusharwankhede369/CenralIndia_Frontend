import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';

const AuditPage = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [seoSuggestions, setSeoSuggestions] = useState('');
  const [animationData, setAnimationData] = useState(null);

  // Load Lottie JSON dynamically from public folder
  useEffect(() => {
    fetch('/audit-animation.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie JSON:', error));
  }, []);

  // Perform SEO Audit & Fetch SEO Suggestions
  const performAudit = async () => {
    if (!url) {
      setResult({ text: 'Please enter a valid URL.', audit: null });
      return;
    }

    // Simulated audit result
    const auditResults = {
      performance: Math.floor(Math.random() * 100),
      accessibility: Math.floor(Math.random() * 100),
      seo: Math.floor(Math.random() * 100),
      bestPractices: Math.floor(Math.random() * 100),
    };

    setResult({ text: url, audit: auditResults });

    try {
      const response = await fetch('http://localhost:5000/api/gemini/seo-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogUrl: url }),
      });

      const data = await response.json();

      if (response.ok) {
        setSeoSuggestions(data.seoSuggestions);
      } else {
        setSeoSuggestions('No SEO suggestions available.');
      }
    } catch (error) {
      console.error('Error fetching SEO suggestions:', error);
      setSeoSuggestions('Error fetching SEO suggestions.');
    }
  };

  return (
    <>
      <div 
        style={{ width: '900px', minHeight: '100vh', padding: '0 50px' }}
        className="relative flex items-center justify-center overflow-hidden scroll-container">
        <Helmet>
          <title>Audit Page</title>
          <meta name="description" content="Analyze website performance and SEO with our audit tool." />
          <meta name="keywords" content="Website Audit, SEO Analysis, Performance Check" />
        </Helmet>

        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-10">
          {/* Lottie Animation Background */}
          <div className="absolute inset-0 z-0">
            {animationData && <Lottie animationData={animationData} loop={true} className="w-full h-full" />}
          </div>

          {/* Audit Form */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-6xl mx-4 shadow-lg p-10 rounded-lg border bg-gradient-to-r from-blue-200 to-purple-300 text-white"
          >
            <h1 className="text-2xl font-bold text-center mb-4">Website Audit</h1>
            <motion.input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              className="w-full p-3 border rounded outline-none text-gray-900"
              whileFocus={{ scale: 1.05 }}
            />

            <motion.button
              onClick={performAudit}
              className="w-full mt-4 p-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
              whileTap={{ scale: 0.95 }}
            >
              Perform Audit
            </motion.button>

            {result && (
              <motion.div
                className="mt-4 p-3 border rounded shadow-md bg-white text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <strong>Audited URL:</strong> {result.text} <br />
                {result.audit ? (
                  <>
                    <strong>Performance Score:</strong> {result.audit.performance}% <br />
                    <strong>Accessibility Score:</strong> {result.audit.accessibility}% <br />
                    <strong>SEO Score:</strong> {result.audit.seo}% <br />
                    <strong>Best Practices Score:</strong> {result.audit.bestPractices}% <br />
                  </>
                ) : (
                  <strong>Please enter a valid URL.</strong>
                )}
              </motion.div>
            )}

            {seoSuggestions && (
              <motion.div
                className="mt-4 p-3 border rounded shadow-md bg-white text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <strong>SEO Suggestions:</strong> <br />
                <pre>{seoSuggestions}</pre>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AuditPage;
 