/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        64:['Sixtyfour']
      },
      colors: {
        primary: "#fff",
        secondary: "#FD624B",
        tertiary: "#30312F",
      },
      spacing:{
        side:'140px',
        top:'20px'
      }
    },
  },
  plugins: [],
}

