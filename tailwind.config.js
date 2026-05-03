/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1F4E",
        "navy-mid": "#1A3272",
        "navy-light": "#254799",
        crimson: "#C0182A",
        "crimson-light": "#E02030",
        "crimson-dark": "#8C1020",
        ivory: "#F8F9FC",
        "ivory-dark": "#E8ECF4",
        silver: "#A8B4C8",
        slate: "#5A6680",
        cream: "#FAFBFF",
        // Aliases so existing JSX still compiles
        gold: "#C0182A",
        "gold-light": "#E02030",
        "gold-dark": "#8C1020",
        forest: "#0D1F4E",
        "forest-mid": "#1A3272",
        "forest-light": "#254799",
        charcoal: "#0D1F4E",
        stone: "#5A6680",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
