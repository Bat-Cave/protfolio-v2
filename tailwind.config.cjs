/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
      },
      boxShadow: {
        "bottom-inner": "inset 0 -15rem 30rem 5rem rgba(33,34,44,1)",
        "bottom-inner-small": "inset 0 -4rem 2rem -1rem  rgba(33,34,44,1)",
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
        "2xs": "375px",
        xs: "420px",
      },
    },
  },
  plugins: [require("daisyui")],
};
