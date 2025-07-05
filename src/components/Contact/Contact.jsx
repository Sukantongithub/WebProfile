import React from "react";
import { motion } from "framer-motion";
import { PiMessengerLogoFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import Contactinfo from "../Contactinfo/Contactinfo";
import Folder from "../Socialfolders/Folder";

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-between relative p-40">
      <div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <form
            className="flex flex-col items-center border-3  border-amber-500 rounded-3xl justify-between text-white p-10 bg-gray-900/40 backdrop-blur-md"
            style={{ boxShadow: "0 0px 20px rgb(233, 0, 116)  " }}
          >
            <h1 className="flex text-4xl font-bold mb-6">
              <PiMessengerLogoFill className="text-amber-400 mr-2 mt-2" />
              ping
              <span className="text-emerald-400 balsamiq-sans-bold  mt-2">
                .Me
              </span>
            </h1>
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-2 w-96 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <div className="space-x-4">
              <select className="mb-4 p-2 w-40 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="Manual">Manual</option>
                <option value="+1">USA, Canada, etc. (+1)</option>

                <option value="+7">Russia, Kazakhstan (+7)</option>

                <option value="+20">Egypt (+20)</option>
                <option value="+27">South Africa (+27)</option>

                <option value="+30">Greece (+30)</option>
                <option value="+31">Netherlands (+31)</option>
                <option value="+32">Belgium (+32)</option>
                <option value="+33">France (+33)</option>
                <option value="+34">Spain (+34)</option>
                <option value="+36">Hungary (+36)</option>
                <option value="+39">Italy (+39)</option>

                <option value="+40">Romania (+40)</option>
                <option value="+41">Switzerland (+41)</option>
                <option value="+43">Austria (+43)</option>
                <option value="+44">UK (+44)</option>
                <option value="+45">Denmark (+45)</option>
                <option value="+46">Sweden (+46)</option>
                <option value="+47">Norway (+47)</option>
                <option value="+48">Poland (+48)</option>
                <option value="+49">Germany (+49)</option>

                <option value="+51">Peru (+51)</option>
                <option value="+52">Mexico (+52)</option>
                <option value="+53">Cuba (+53)</option>
                <option value="+54">Argentina (+54)</option>
                <option value="+55">Brazil (+55)</option>
                <option value="+56">Chile (+56)</option>
                <option value="+57">Colombia (+57)</option>
                <option value="+58">Venezuela (+58)</option>

                <option value="+60">Malaysia (+60)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+62">Indonesia (+62)</option>
                <option value="+63">Philippines (+63)</option>
                <option value="+64">New Zealand (+64)</option>
                <option value="+65">Singapore (+65)</option>
                <option value="+66">Thailand (+66)</option>

                <option value="+81">Japan (+81)</option>
                <option value="+82">South Korea (+82)</option>
                <option value="+84">Vietnam (+84)</option>
                <option value="+86">China (+86)</option>

                <option value="+90">Turkey (+90)</option>

                <option value="+91">India (+91)</option>
                <option value="+92">Pakistan (+92)</option>
                <option value="+93">Afghanistan (+93)</option>
                <option value="+94">Sri Lanka (+94)</option>
                <option value="+95">Myanmar (+95)</option>
                <option value="+98">Iran (+98)</option>

                <option value="+212">Morocco (+212)</option>
                <option value="+213">Algeria (+213)</option>
                <option value="+216">Tunisia (+216)</option>

                <option value="+220">Gambia (+220)</option>
                <option value="+221">Senegal (+221)</option>
                <option value="+222">Mauritania (+222)</option>
                <option value="+223">Mali (+223)</option>
                <option value="+224">Guinea (+224)</option>
                <option value="+225">Ivory Coast (+225)</option>
                <option value="+226">Burkina Faso (+226)</option>
                <option value="+227">Niger (+227)</option>
                <option value="+228">Togo (+228)</option>
                <option value="+229">Benin (+229)</option>
              </select>
              <input
                type="number"
                placeholder="Your Phone Number"
                className="mb-4 p-2 w-52 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-2 w-96 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              placeholder="Your Message"
              className="mb-4 p-2 w-96 h-32 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 w-full bg-gradient-to-l from-amber-400 to-pink-700 text-gray-900 font-semibold rounded hover:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-between space-y-30">
        <Contactinfo />
        <Folder size={1.5} />
      </div>
    </div>
  );
};

export default Contact;
