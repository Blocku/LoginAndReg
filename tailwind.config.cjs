/** @type {import('tailwindcss').Config}*/
const colors = require("tailwindcss/colors")
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        
      }

    }
  },

  plugins: [],
};

module.exports = config;
