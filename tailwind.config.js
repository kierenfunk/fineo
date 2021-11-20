module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/views/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/hero2.png')",
        'cube': "url('/cube2.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};