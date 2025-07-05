import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      <div className="flex justify-center items-center">
        <div className=" fixed bottom-2  bg-gray-900/70 border border-gray-600 text-center py-2 px-80 rounded-full">
          &copy; 2025 Sukant R. All rights reserved.
        </div>
      </div>    
    </>
  );
};

export default Footer;
