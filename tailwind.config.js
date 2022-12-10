/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    },
    colors: {
      white: "#fff",
      background: "#000212",
    },
    fontSize: {
      "5xl": ["8rem", "1"],
      lg: ["2.2rem", "1.3"],
      md: "1.6rem",
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8.rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
    },
  },
  plugins: [],
};
