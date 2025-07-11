import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import Profile from "../../assets/Profile_edit.png";
import ProfileNo from "../../assets/Profile_editnoBg.png";
import Footer from "../Footer/Footer";
import Resume from "../../assets/MERN Resume.pdf";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Welcome SVG - Responsive */}
      <div className="flex items-center justify-center">
        <svg
          viewBox="0 0 400 100"
          className="absolute top-16 sm:top-20 md:top-25 w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="100"
            fontFamily="Dancing Script, cursive"
            className="welcome-text"
          >
            Welcome
          </text>
        </svg>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-8 mt-20 md:px-16 lg:px-20 xl:px-40 xl:mt-10 py-20 lg:py-40 balsamiq-sans-regular">
        {/* Text Content */}
        <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white font-bold mb-4 ">
            Hi, there! I am{" "}
            <span className="text-emerald-400 balsamiq-sans-bold">Sukant</span>,
            <span className="font-sans block sm:inline mt-2 sm:mt-0">
              <Typewriter
                options={{
                  strings: [
                    "A MERN Stack Developer",
                    "UI/UX Designer",
                    "A Tech Explorer",
                    "Bug Hunter in Action ",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  cursor: "|",
                }}
                className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-amber-400 font-bold"
              />
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-none sm:max-w-xl md:max-w-2xl lg:max-w-xl text-justify inter leading-relaxed">
            I'm a developer who designs, a designer who codes, and a technophile
            who's always curious. With full-stack skills, a sharp eye for
            detail, and a relentless drive to improve, I turn ideas into
            responsive, reliable, and polished digital products.
          </p>

          {/* Buttons - Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mt-5 items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
              }}
              className="w-full sm:w-auto"
            >
              <a
                href={Resume}
                download="Sukant_Resume.pdf"
                type="application/pdf"
                className="block w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-3xl bg-gray-800 hover:bg-gray-700 border-2 border-amber-400 text-base sm:text-lg md:text-xl font-semibold text-amber-400 hover:text-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/20 hover:scale-95 cursor-pointer">
                  Resume CV
                </button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
              }}
              className="w-full sm:w-auto"
            >
              <Link to="/contact" className="block w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-3xl border-2 bg-amber-400 hover:bg-amber-500 text-base sm:text-lg md:text-xl font-semibold text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-95 cursor-pointer">
                  Ping Me!
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Profile Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Draggable Tags - Responsive */}
            <motion.div
              drag
              dragConstraints={{ left: -50, right: 30, top: 0, bottom: 100 }}
              whileDrag={{ scale: 0.9 }}
              dragElastic={0.2}
              className="hidden sm:block"
            >
              <h1 className="absolute text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 bg-amber-400 font-bold border-2 border-white py-1 sm:py-2 px-2 sm:px-4 rounded-full rotate-12 -mt-4 sm:-mt-6 md:-mt-8 -ml-8 sm:-ml-12 md:-ml-16 shadow-lg z-10 hover:scale-110 transition-all duration-300">
                Developer
              </h1>
            </motion.div>

            <motion.div
              drag
              dragConstraints={{ left: -5, right: 40, top: -40, bottom: 25 }}
              whileDrag={{ scale: 0.9 }}
              dragElastic={0.2}
              className="hidden sm:block"
            >
              <h1 className="absolute text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold border-3 py-1 sm:py-2 px-2 sm:px-4 rounded-full -rotate-12 mt-20 sm:mt-32 md:mt-40 ml-32 sm:ml-48 md:ml-60 shadow-lg z-10 hover:scale-110 transition-all duration-300">
                Explorer
              </h1>
            </motion.div>

            {/* Profile Image - Responsive */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-amber-400 to-pink-600 p-2 shadow-2xl hover:shadow-amber-400/50 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={ProfileNo}
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-500"
                  alt="Profile"
                />
              </div>
            </div>

            {/* Status Badge - Responsive */}
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-gray-900 text-amber-400 px-2 sm:px-4 py-1 sm:py-2 rounded-full border-2 border-amber-400 font-semibold text-xs sm:text-sm shadow-lg hover:scale-110 transition-all duration-300">
              Available for Work
            </div>

            {/* Decorative Circles - Responsive */}
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full shadow-xl hover:scale-120 hover:shadow-amber-400 transition-all duration-300"></div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-bl from-amber-400 to-amber-400 rounded-full shadow-2xl hover:shadow-pink-400 hover:scale-110 transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="flex justify-center items-center">
        <div className="bottom-2 fixed bg-gray-900/70 border border-gray-600 text-center py-2 px-4 sm:px-6 md:px-10 mx-4 sm:mx-0 sm:max-w-sm md:max-w-md rounded-full text-xs lg:max-w-400 lg:w-3xl sm:text-sm">
          &copy; 2025 Sukant R. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Home;
