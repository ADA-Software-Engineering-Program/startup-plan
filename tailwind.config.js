/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF4500",
        brown: "#21DE06",
        lightOrange: "rgba(255, 69, 0, 0.41)",
        aboutBg: "(255, 69, 0, 0.2)",
      },
      screens: {
        "2md": "992px",
      },
    },
  },
  plugins: [],
};
