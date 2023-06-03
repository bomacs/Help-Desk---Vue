/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        originalBlue: '#072ac8',
        midBlue: '#1E96FC',
        safeBlue: '#0000ff',
        darkBlue: '#0c37f7',
        midLightBlue: '#A2D6F9',
        superLightBlue: '#E8F9FD',
        originalYellow: '#FCF300',
        midYellow: '#FFC600',
        originalWhite: '#F9FAFB',
        bgWhite: '#f2f2f2'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

