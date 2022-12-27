/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      background: "#000212",
      "white-a08": "rgba(255, 255, 255, 0.08)",
      gray: "rgb(138, 143, 152)",
      "gray-dark": "#222326",
    },
    fontSize: {
      "5xl": ["8rem", "1"],
      lg: ["2.2rem", "1.3"],
      md: "1.6rem",
      sm: "1.4rem",
      xs: "1.3rem",
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
      "navigation-height": "var(--navigation-height)",
    },
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%);",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
  },
  plugins: [],
};
