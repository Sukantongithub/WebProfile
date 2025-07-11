import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Naviagtion.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navitems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  return (
    <header className="flex fixed top-0 left-0 w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      {/* Logo - Responsive */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br from-amber-400 to-pink-600 bg-clip-text text-transparent balsamiq-sans-bold font-logo text-glow transition-all duration-500 ease-in-out hover:text-amber-300 hover:tracking-wider cursor-pointer">
        Sukant.on
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center bg-white/10 border border-white/20 rounded-full px-3 xl:px-4 py-2 space-x-4 xl:space-x-8 backdrop-blur-md shadow-xl shadow-white/20">
        {navitems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={`text-sm xl:text-lg text-amber-200 font-bold px-2 py-1 relative group ${
                index !== 0 ? "border-l-2 border-gray-400 pl-4 xl:pl-6" : ""
              }`}
            >
              <span className="inline-block transition-transform duration-300 ease-out group-hover:scale-125 inter">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 group relative z-50"
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-blur-sm backdrop-blur-md z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen p-4">
          {/* Mobile Navigation Container with Same Theme */}
          <div
            className={`bg-gray-900/70 border border-white/20 rounded-3xl w-full max-w-xs backdrop-blur-md shadow-xl shadow-white/20 overflow-hidden transform transition-all duration-500 ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col space-y-2">
                {navitems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="group w-full block"
                  >
                    <div
                      className={`text-lg text-amber-200 font-bold px-4 py-3 relative text-center transition-all duration-300 group-hover:bg-white/10 w-full transform group-hover:scale-105 ${
                        index !== navitems.length - 1
                          ? "border-b border-gray-400/70"
                          : ""
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <span className="inline-block transition-transform duration-300 ease-out group-hover:scale-110 inter">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/10 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navigation;
