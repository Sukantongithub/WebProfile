import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Naviagtion.css";

const Navigation = () => {
  const navitems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex fixed top-0 left-0 w-full items-center justify-between px-20 py-6 z-50">
      <h1 className="text-4xl bg-gradient-to-br from-amber-400 to-pink-600 bg-clip-text text-transparent balsamiq-sans-bold font-logo text-glow transition-all duration-500 ease-in-out hover:text-amber-300 hover:tracking-wider cursor-pointer">
        Sukant.on
      </h1>
      <nav className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 space-x-8 backdrop-blur-md shadow-xl shadow-white/20">
        {navitems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={`text-lg text-amber-200 font-bold px-2 py-1 relative group ${
                index !== 0 ? "border-l-2 border-gray-400 pl-10" : ""
              }`}
            >
              <span className="inline-block transition-transform duration-300 ease-out group-hover:scale-125 inter">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
