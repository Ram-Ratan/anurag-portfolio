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
        'bg-image-1': "url('./assets/bg-2.png')"
      },
      backgroundSize: {
        '50p': '50% auto'
      },
      animation: {
        'slide-in-from-left-1.5': 'slideInFromLeft 1.5s ease-out forwards',
        'slide-in-from-left-2': 'slideInFromLeft 2s ease-out forwards',
        'slide-in-from-left-3.5': 'slideInFromLeft 3.5s ease-out forwards',
        'slide-in-from-left-6': 'slideInFromLeft 6s ease-out forwards',
        'slide-in-from-left-7': 'slideInFromLeft 7s ease-out forwards',
        'slide-in-from-left-8': 'slideInFromLeft 8s ease-out forwards',
        'slide-in-from-left-9': 'slideInFromLeft 9s ease-out forwards',
        'slide-in-from-left-10': 'slideInFromLeft 10s ease-out forwards',
        'slide-in-from-left-11': 'slideInFromLeft 11s ease-out forwards',
        'slide-in-from-left-12': 'slideInFromLeft 12s ease-out forwards',
        'slide-in-from-left-13': 'slideInFromLeft 13s ease-out forwards',
        'slide-in-from-left-14': 'slideInFromLeft 14s ease-out forwards',
      },
    },
  },
  plugins: [],
}

