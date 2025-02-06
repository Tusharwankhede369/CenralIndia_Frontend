import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "a892316a-ad75-4542-afd1-bb0aece5f667");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Error submitting form");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gradient-to-r from-[#FFD9B3] to-[#A1B8F3] p-6 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition"
          >
            Send Message
          </motion.button>
        </form>
        {result && <p className="mt-3 text-center text-gray-800">{result}</p>}
      </motion.div>
    </div>
  );
};

export default ContactForm;
