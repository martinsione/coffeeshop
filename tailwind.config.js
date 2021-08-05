module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      textColor: ["disabled"],
      invert: ["dark", "hover"],
    },
  },
  plugins: [],
};
