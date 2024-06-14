/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem', 
        '9xl': '96rem', 
        '10xl': '104rem', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
