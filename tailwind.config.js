/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{ejs,js}', './src/**/*.{ejs,js}'],
  theme: {
    extend: {
      fontFamily: {
        'general': ['General Sans', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      }
    },
  },
  corePlugins: {
    preflight: false,
  }
}

