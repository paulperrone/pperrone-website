module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "85screen": "85vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
