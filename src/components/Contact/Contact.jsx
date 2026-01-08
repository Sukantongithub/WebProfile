import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PiMessengerLogoFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Contactinfo from "../Contactinfo/Contactinfo";
import Folder from "../Socialfolders/Folder";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      // Initialize EmailJS with public key
      emailjs.init("kozSxIoeJGlm-rL5p");

      const result = await emailjs.sendForm(
        "service_portfolio", // Your Service ID
        "template_nsm6ooi", // Your Template ID
        formRef.current
      );

      console.log("EmailJS Success:", result);
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
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      console.error("Error text:", error.text);
      console.error("Error status:", error.status);
      setIsSubmitting(false);
      setSubmitError(
        `Failed to send message: ${
          error.text || "Please check your EmailJS configuration"
        }`
      );

      setTimeout(() => {
        setSubmitError("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between relative p-4 sm:p-6 md:p-8 lg:p-16 xl:p-20 2xl:p-40">
      {/* Enhanced Form Section */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 mt-25 lg:mt-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Section */}
          <div className="mb-6 sm:mb-8 text-center">
            <motion.h1
              className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <PiMessengerLogoFill className="text-amber-400 mr-2 sm:mr-3 animate-pulse text-3xl sm:text-4xl md:text-5xl" />
              <span className="text-white">ping</span>
              <span className="text-emerald-400 balsamiq-sans-bold">.Me</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg px-4 sm:px-0"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Let's build something amazing together!
            </motion.p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-amber-500/30 shadow-2xl mx-2 sm:mx-0"
            style={{ boxShadow: "0 0px 30px rgba(245, 158, 11, 0.3)" }}
          >
            {/* Success Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center text-sm sm:text-base"
              >
                {submitMessage}
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center text-sm sm:text-base"
              >
                {submitError}
              </motion.div>
            )}

            {/* Name Field */}
            <motion.div
              className="relative mb-4 sm:mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <FaUser
                size={20}
                className="absolute left-3 top-3 sm:top-3.5 text-amber-400 z-10 sm:text-[25px]"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80 text-sm sm:text-base"
              />
            </motion.div>

            {/* Phone Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-full sm:w-auto px-3 py-3 sm:py-3.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80 text-sm sm:text-base"
              >
                <option value="+91">India (+91)</option>
                <option value="+1">USA (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+33">France (+33)</option>
                <option value="+86">China (+86)</option>
                <option value="+81">Japan (+81)</option>
                <option value="+61">Australia (+61)</option>
              </select>
              <div className="relative flex-1">
                <BiSolidPhoneCall
                  size={20}
                  className="absolute left-3 top-3 sm:top-3.5 text-amber-400 z-10 sm:text-[25px]"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Your Phone Number"
                  required
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80 text-sm sm:text-base"
                />
              </div>
              {/* Hidden field for EmailJS */}
              <input
                type="hidden"
                name="phone"
                value={`${formData.countryCode} ${formData.phone}`}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="relative mb-4 sm:mb-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <FaEnvelope
                size={20}
                className="absolute left-3 top-3 sm:top-3.5 text-amber-400 z-10 sm:text-[25px]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80 text-sm sm:text-base"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="mb-4 sm:mb-6"
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
                className="w-full px-4 py-3 sm:py-3.5 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:bg-gray-700/80 resize-none text-sm sm:text-base"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-orange-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base ${
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
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-gray-900"></div>
                  <span className="ml-2">Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-sm sm:text-lg" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Right Side Components */}
      <motion.div
        className="w-full  lg:w-1/2 xl:flex xl:flex-col lg:flex-col items-center justify-center lg:justify-between space-y-6 lg:space-y-12"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex justify-center scale-80 lg:scale-100 ">
          <Contactinfo />
        </div>
        <div className="w-full flex justify-center mt-20 xl:mt-0">
          <Folder
            size={1.2}
            className="sm:scale-125 lg:scale-130 xl:-mb-25 xl:mt-28"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
