import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiMessengerLogoFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from "react-icons/fa";
import Contactinfo from "../Contactinfo/Contactinfo";
import Folder from "../Socialfolders/Folder";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully! 🎉");
      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-between relative p-8 lg:p-40">
      {/* Enhanced Form Section */}
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Section */}
          <div className="mb-8 text-center">
            <motion.h1
              className="flex items-center justify-center text-5xl font-bold mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <PiMessengerLogoFill className="text-amber-400 mr-3 animate-pulse" />
              <span className="text-white">ping</span>
              <span className="text-emerald-400 balsamiq-sans-bold">.Me</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Let's build something amazing together!
            </motion.p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative p-8 lg:p-10 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-3xl border border-amber-500/30 shadow-2xl"
            style={{ boxShadow: "0 0px 30px rgba(245, 158, 11, 0.3)" }}
          >
            {/* Success Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                {submitMessage}
              </motion.div>
            )}

            {/* Name Field */}
            <motion.div
              className="relative mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <FaUser size={25} className="absolute left-3 top-3 text-amber-400 z-10" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80"
              />
            </motion.div>

            {/* Phone Section */}
            <motion.div
              className="flex gap-4 mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-3 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80"
              >
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+33">France (+33)</option>
                <option value="+86">China (+86)</option>
                <option value="+81">Japan (+81)</option>
                <option value="+61">Australia (+61)</option>
                {/* ...existing options... */}
              </select>
              <div className="relative flex-1">
                <BiSolidPhoneCall size={25} className="absolute left-3 top-3 text-amber-400 z-10" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80"
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="relative mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <FaEnvelope size={25} className="absolute left-3 top-3 text-amber-400 z-10" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80 resize-none"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-4 bg-gradient-to-r from-amber-400 to-orange-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-[1.02] active:scale-[0.98]"
              }`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-lg" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Right Side Components */}
      <motion.div
        className="hidden lg:flex flex-col items-center justify-between space-y-12 "
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Contactinfo />
        <Folder size={1.5} className="-mb-25 mt-25" />
      </motion.div>
    </div>
  );
};

export default Contact;
