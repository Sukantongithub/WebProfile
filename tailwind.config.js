/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navc: "rgba(241, 231, 28, 0.266)",
      },
      fontFamily: {
        logo: ["Balsamiq Sans"],
        fill: ["Inter"],
      },
    },
  },
  plugins: [heroui(), require("tailwind-scrollbar")],
};
