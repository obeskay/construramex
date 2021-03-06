const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      arena: "#E4B363",
      dark: "#1E252F",
      gray: {
        dark: "#787C82",
        DEFAULT: "#BCBEC1",
        light: "#F4F4F5",
      },
      light: "#FFFFFF",
      success: "#E8FFA8",
      danger: "#F64949",
      transparent: "transparent",
      current: "currentColor",
      base: colors.gray["dark"],
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        "2xl": "6rem",
      },
    },
    boxShadow: {
      DEFAULT: `0 4px 32px 0 rgba(0,0,0,0.1)`,
    },
    fontSize: {
      "3xl": ["2.5rem", "2.5rem"],
      "2xl": ["1.8rem", "1.8rem"],
      xl: ["1.25rem", "1.875rem"],
      lg: ["1.125rem", "1.6875rem"],
      base: ["1rem", "1.5rem"],
      sm: ["0.75rem", "1.125rem"],
    },
    transitionDuration: {
      DEFAULT: "0.4s",
    },
    letterSpacing: {
      DEFAULT: "0",
      wide: "0.25rem",
    },
    borderRadius: {
      DEFAULT: "0",
      full: "50%",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(.2,.97,.68,.99)",
    },
  },
};
