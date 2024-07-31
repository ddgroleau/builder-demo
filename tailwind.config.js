module.exports = {
  content: ["./docs/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      spacing: {
        100: "25rem",
      },
      borderWidth: {
        3: "3px",
        14: "14px",
      },
      width: {
        mc: "max-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
