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
    fontSize: {
      "3xl": ["2.5rem", "3.125rem"],
      "2xl": ["1.5rem", "1.875rem"],
      xl: ["1.25rem", "1.875rem"],
      lg: ["1.125rem", "1.6875rem"],
      base: ["1rem", "1.5rem"],
      sm: ["0.75rem", "1.125rem"],
    },
  },
};
