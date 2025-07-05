/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
