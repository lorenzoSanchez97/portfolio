/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'bright-white': '#FFFFFF',
      'white': '#D4D4D4',
      'dark-grey': '#171717',
      'light-grey': '#2c2c2c',
      'light-light-grey':'#3a3a3a',
      'grey-4': '#464646',
      'blue': '#007acc',
      'light-blue': '#61DAFB',
    },
    animation: {
      'show-in': 'showIn 2.2s ease-out forwards',
    },
    keyframes: {
      showIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    backgroundImage: {
      'radial': 'radial-gradient(theme("colors.light-grey") 1px, transparent 0)',
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};