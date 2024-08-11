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
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideInFromRight': {
          '0%': {opacity: '0', transform: 'translateX(100%)'},
          '100%': {opacity: '1', transform: 'translateX(0%)'}
        }
      },
      animation: {
        'slide-in-from-left-1.5': 'slideInFromLeft 11.5s ease-out forwards',
        'slide-in-from-left-2': 'slideInFromLeft 12s ease-out forwards',
        'slide-in-from-left-3.5': 'slideInFromLeft 13.5s ease-out forwards',
        'slide-in-from-left-6': 'slideInFromLeft 16s ease-out forwards',
        'slide-in-from-left-7': 'slideInFromLeft 17s ease-out forwards',
        'slide-in-from-left-8': 'slideInFromLeft 18s ease-out forwards',
        'slide-in-from-left-9': 'slideInFromLeft 19s ease-out forwards',
        'slide-in-from-left-10': 'slideInFromLeft 20s ease-out forwards',
        'slide-in-from-left-11': 'slideInFromLeft 21s ease-out forwards',
        'slide-in-from-left-12': 'slideInFromLeft 22s ease-out forwards',
        'slide-in-from-left-13': 'slideInFromLeft 23s ease-out forwards',
        'slide-in-from-left-14': 'slideInFromLeft 24s ease-out forwards',
        'fade-in-1': 'fade-in 0.5s ease-in-out forwards',
        'fade-in-2': 'fade-in 0.5s ease-in-out forwards 0.1s',
        'fade-in-3': 'fade-in 0.5s ease-in-out forwards 0.2s',
        'fade-in-4': 'fade-in 0.5s ease-in-out forwards 0.3s',
        'fade-in-5': 'fade-in 0.5s ease-in-out forwards 0.4s',
        'fade-in-6': 'fade-in 0.5s ease-in-out forwards 0.5s',
        'fade-in-7': 'fade-in 0.5s ease-in-out forwards 0.6s',
        'fade-in-8': 'fade-in 0.5s ease-in-out forwards 0.7s',
        'fade-in-9': 'fade-in 0.5s ease-in-out forwards 0.8s',
        'fade-in-10': 'fade-in 0.5s ease-in-out forwards 0.9s',
        'fade-in-11': 'fade-in 0.5s ease-in-out forwards 1.0s',
        'fade-in-12': 'fade-in 0.5s ease-in-out forwards 1.1s',
        'fade-in-13': 'fade-in 0.5s ease-in-out forwards 1.2s',
        'fade-in-14': 'fade-in 0.5s ease-in-out forwards 1.3s',
        'fade-in-15': 'fade-in 0.5s ease-in-out forwards 1.4s',
        'fade-in-16': 'fade-in 0.5s ease-in-out forwards 1.5s',
        'fade-in-17': 'fade-in 0.5s ease-in-out forwards 1.6s',
        'fade-in-18': 'fade-in 0.5s ease-in-out forwards 1.7s',
        'slide-in-from-right': 'slideInFromRight 2s ease-out forwards',

      },
    },
  },
  plugins: [],
}

