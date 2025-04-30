/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto Mono, serif'
      },
      colors: {
        primary: '#C1121F', // Bright Red - CTAs, highlights
        primaryDark: '#780000', // Deep Red - hover states, headings
        lightBg: '#FDF0D5', // Background - soft and warm
        darkBlue: '#003049', // Text or backgrounds - clean, techy
        accentBlue: '#669BBC' // Accent - hover, borders, buttons
      }
    }
  },
  plugins: []
}

