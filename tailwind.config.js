/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F3EFEA',
          300: '#E7E0D8',
          400: '#D5CBC0',
        },
        ink: {
          900: '#141413',
          800: '#232220',
          700: '#3A3835',
          600: '#57544F',
          500: '#7B7770',
          400: '#A4A099',
        },
        terracotta: {
          50: '#FAF2EE',
          100: '#F4E2D8',
          500: '#C86D51',
          600: '#B2563B',
          700: '#92412A',
        },
        sage: {
          50: '#F2F5F3',
          100: '#E1E9E4',
          500: '#5C7F6E',
          600: '#4A695A',
        },
        lilac: {
          50: '#F7F3F9',
          100: '#ECE2F2',
          400: '#8E6AA8',
          500: '#6B4E8C',
          600: '#563B72',
        },
        rosewood: {
          400: '#C4859A',
          500: '#AC687F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'fine-art': '0 10px 30px -10px rgba(20, 20, 19, 0.08)',
        'gallery': '0 20px 40px -15px rgba(20, 20, 19, 0.12)',
        'frame': '0 4px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
