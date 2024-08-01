/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brunoAceSC: ['Bruno Ace SC', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
          500: "#A2A2A2",
          0: "#090B0D"
        },
        secondary: "#A03AFF",

      },
      backgroundImage: {
        'bg-image': "url('./assets/Mask group.png')",
        'bg-image-1': "url('./assets/MaskGroup-1.png')"
      },
      backgroundSize: {
        '50p': '50% auto'
      }
    },
  },
  plugins: [],
}

