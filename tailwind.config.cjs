/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
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
        "animate-star-1": "animate-star 15s linear infinite",
        "animate-star-2": "animate-star 22s linear infinite",
        "animate-star-3": "animate-star 29s linear infinite",
        "animate-star-4": "animate-star 36s linear infinite",
        "animate-star-5": "animate-star 43s linear infinite",
        "animate-star-6": "animate-star 50s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "animate-star": {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "25%": { opacity: 1 },
          "75%": { opacity: 1 },
          "100%": { transform: "translateY(-500px)", opacity: 0 },
        },
      },
      screens: {
        "2xs": "375px",
        xs: "420px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
