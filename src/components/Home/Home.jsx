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
      <div className="flex items-center justify-center ">
        <svg viewBox="0 0 400 100" className="absolute top-25 w-64 h-32">
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
      <div className="flex items-center justify-between h-screen p-40   balsamiq-sans-regular">
        <div className="flex flex-col">
          <h1 className="text-4xl text-white font-bold mb-4">
            Hi, there! I am{" "}
            <span className="text-emerald-400 balsamiq-sans-bold">Sukant</span>,
            <span className="font-sans">
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
                className="text-4xl text-amber-400 font-bold mb-4"
              />
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 w-xl text-justify inter">
            I’m a developer who designs, a designer who codes, and a technophile
            who’s always curious. With full-stack skills, a sharp eye for
            detail, and a relentless drive to improve, I turn ideas into
            responsive, reliable, and polished digital products.
          </p>
          <div className="flex space-x-4 mt-5">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
              }}
            >
              <a
                href={Resume}
                download="Sukant_Resume.pdf"
                type="application/pdf"
              >
                <button className="px-8 py-4 rounded-3xl bg-gray-800 hover:bg-gray-700 border-2 border-amber-400 text-xl font-semibold text-amber-400 hover:text-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/20 hover:scale-95 cursor-pointer">
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
            >
              <Link to="/contact">
                <button className="px-8 py-4 rounded-3xl border-2 bg-amber-400 hover:bg-amber-500 text-xl font-semibold text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-95 cursor-pointer">
                  Ping Me!
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        {/*Profile section*/}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <div className="relative">
            <motion.div
              drag
              dragConstraints={{ left: -100, right: 50, top: 0, bottom: 250 }}
              whileDrag={{ scale: 0.9 }}
              dragElastic={0.2}
            >
              <h1 className="absolute text-xl text-gray-900 bg-amber-400 font-bold border-2 border-white py-2 px-4 rounded-full rotate-12 -mt-8 -ml-16 shadow-lg z-10 hover:scale-110 transition-all duration-300">
                Developer
              </h1>
            </motion.div>
            <motion.div
              drag
              dragConstraints={{ left: -10, right: 80, top: -80, bottom: 50 }}
              whileDrag={{ scale: 0.9 }}
              dragElastic={0.2}
            >
              <h1 className="absolute text-xl text-white font-bold border-3 py-2 px-4 rounded-full -rotate-12 mt-40 ml-60 shadow-lg z-10 hover:scale-110 transition-all duration-300">
                Explorer
              </h1>
            </motion.div>
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-amber-400 to-pink-600 p-2 shadow-2xl hover:shadow-amber-400/50 transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden ">
                <img
                  src={ProfileNo}
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-500"
                  alt="Profile"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-gray-900 text-amber-400 px-4 py-2 rounded-full border-2 border-amber-400 font-semibold text-sm shadow-lg hover:scale-110 transition-all duration-300">
              Available for Work
            </div>

            {/* Decorative contrast circles */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full shadow-xl hover:scale-120 hover:shadow-amber-400 transition-all duration-300"></div>
            <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-gradient-to-bl from-amber-400 to-amber-400 rounded-full shadow-2xl hover:shadow-pink-400 hover:scale-110 transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
