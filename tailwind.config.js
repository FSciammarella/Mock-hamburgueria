module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        537: '537px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
