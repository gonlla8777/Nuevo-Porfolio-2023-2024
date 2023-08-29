/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light:
          "bg-gradient-to-b from-slate-400 from-10% via-slate-800 via-30% to-slate-800 to-90%",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
