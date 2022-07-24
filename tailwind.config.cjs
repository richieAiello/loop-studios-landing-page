/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      sm: '375px',
      hero: '450px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'Josefin Sans, sans-serif',
        body: 'Alata, sans-serif',
      },
    },
  },
  plugins: [],
};
