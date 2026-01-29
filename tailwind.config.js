/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: "#FDFBF7",
          dark: "#F5F1EA",
        },
        burgundy: {
          DEFAULT: "#800020",
          light: "#A01B35",
          dark: "#5A0016",
        },
        gold: {
          DEFAULT: "#D4AF37",
          muted: "#B89B49",
        },
        ink: {
          DEFAULT: "#4A4A4A",
          dark: "#2A2A2A",
        },
        paper: "#FDFBF7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -5px rgba(128, 0, 32, 0.02)",
        gold: "0 0 0 1px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [],
};
