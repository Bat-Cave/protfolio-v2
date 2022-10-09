/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "bottom-inner": "inset 0 -20rem 30rem -5rem rgba(33,34,44,1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
