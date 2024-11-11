/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#D4D4D4',
      'dark-grey': '#171717',
      'light-grey': '#2c2c2c',
      'blue': '#007acc',
      'light-blue': '#61DAFB',
    },
    animation: {
      'slide-in': 'slideInFromLeft 1s ease-out forwards',
    },
    keyframes: {
      slideInFromLeft: {
        '0%': { transform: 'translateX(-100px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
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