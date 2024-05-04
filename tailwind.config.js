/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'eaffd0': '#EAFFD0',
          'F38181': '#F38181',
          'FCE38A': '#FCE38A',
          '95E1D3': '#95E1D3',
        },
      },
    },
    fontFamily: {
      'sans': ['"Proxima Nova"', "system-ui", "sans-serif"],
    }
  },
  plugins: [],
}

