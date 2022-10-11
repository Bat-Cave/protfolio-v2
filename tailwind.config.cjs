/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "bottom-inner": "inset 0 -15rem 30rem 5rem rgba(33,34,44,1)",
      },
      animation: {
        "fade-in": "fade-in 1s ease 1",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("daisyui")],
};
