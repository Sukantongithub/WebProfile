import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
    const {  } = props;
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50 bg-blur-lg backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3" ></div>
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>
      <p className="text-gray-700 mb-4"></p>
      <div></div>
    </section>
  );
};

Modal.propTypes = {};

export default Modal;
