/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      primary: {
        light: "#303641",
        DEFAULT: "#23272e",
        dark: "#13161a",
      },
      secondary: {
        DEFAULT: "#387bb2",
        dark: "#2c6593",
      },
      accent: "#97c278",
      red: "#d86972",
      orange: "#bb8b5e",
      purple: "#c678dd",
      white: "#fff",
      slate: colors.slate,
      transparent: "transparent"
    },
    container: {
      center: true,
      padding: "1.5rem"
    },
    screens: {
      sm: "25em",
      md: "45em",
      lg: "60em"
    },
    fontFamily: {
      body: "Raleway, sans-serif",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "clamp(1.2rem, 2vw, 1.333rem)",
      xl: "clamp(1.44rem, 3vw, 1.777rem)",
      "2xl": "clamp(1.728rem, 4.5vw, 2.369rem)",
      "3xl": ["clamp(2.074rem, 5.75vw, 3.157rem)", "1.3"],
      "4xl": ["clamp(2.488rem, 6.75vw, 4.209rem)", "1.2"],
      "5xl": ["clamp(2.986rem, 7.5vw, 5.61rem)", "1.1"],
    }
  }
};
