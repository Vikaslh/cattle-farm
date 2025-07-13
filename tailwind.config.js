/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#b9e5b9',
          300: '#8dd28d',
          400: '#5eb85e',
          500: '#3a9d3a',
          600: '#2d7d2d',
          700: '#266526',
          800: '#1f4f1f',
          900: '#1a421a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f1',
          200: '#f9f0e3',
          300: '#f3e4cd',
          400: '#ebd3b3',
          500: '#e1c199',
          600: '#d4ad7f',
          700: '#c39865',
          800: '#a67c54',
          900: '#8b6647',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
};