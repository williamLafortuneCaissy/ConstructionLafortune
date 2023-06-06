/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'purple': '#1B1724',
        'purple-dark': '#140F1F',
        'purple-light': '#262132',
        'orange': '#E78D01',
        'orange-light': '#EFDEC5',
        'gray': '#EBEBEB',
      },
      fontFamily: {
        title: ['"Cabin Condensed"', 'sans-serif'],
        body: ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

