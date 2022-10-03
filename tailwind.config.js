/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['retro'],
  },
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
    },
  },
  plugins: [require('daisyui')],
};
