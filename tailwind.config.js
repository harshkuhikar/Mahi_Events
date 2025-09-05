/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#f05f75',
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d3dc',
          300: '#f4afc1',
          400: '#ec7fa1',
          500: '#f05f75',
          600: '#e04a64',
          700: '#bd3350',
          800: '#9e2f4a',
          900: '#862c44',
        },
        secondary: {
          DEFAULT: '#1abc9c',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eedd8',
          400: '#2dd4bf',
          500: '#1abc9c',
          600: '#16a085',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};