/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#B4720D",
        grey: "#4A4A4A",
      },
    },
    fontFamily: {
      mySans: ["Satoshi", "sans-serif"],
      mySerif: ["Cormorant Garamond", "serif"],
    },
    textUnderlineOffset: {
      8: "12px",
    },
  },
  plugins: [],
};
