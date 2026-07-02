/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#F8F0EA',
          200: '#F4E8DF',
          300: '#E8CFBD',
          400: '#B6642A',
          500: '#A45A26',
          600: '#925022',
          700: '#894B20',
          800: '#6D3C19',
          900: '#522D13',
          1000: '#40230F',
        },
        yellow: {
          100: '#FFF7EB',
          200: '#FFF3E1',
          300: '#FFE6C2',
          400: '#FFAF39',
          500: '#E69E33',
          600: '#CC8C2E',
          700: '#BF832B',
          800: '#996922',
          900: '#734F1A',
          1000: '#593D14',
        },
        neutral: {
          100: '#FDFCF8',
          200: '#FCFAF4',
          300: '#F9F5E9',
          400: '#ECDFB8',
          500: '#D4C9A6',
          600: '#BDB293',
          700: '#B1A78A',
          800: '#8E866E',
          900: '#6A6453',
          1000: '#534E40',
        },
        state: {
          error: '#FF0030',
          warning: '#FFBA00',
          success: '#00D55B',
        },
        text: {
          primary: '#1D1D1D',
          secondary: '#334655',
          muted: '#647F8B',
        },
        default: {
          white: '#FFFFFF',
          black: '#1D1D1D',
          bg: '#FAF5E8',
          card: '#FFFBF1',
        },
        pink: {
          400: '#FF97AF',
        },
      },
      spacing: {
        4.5: '18px',
        7.5: '30px',
      },
      borderRadius: {
        chat: '20px',
      },
      fontFamily: {
        'yde-street-bold': ['YdeStreetBold'],
        'yde-street-light': ['YdeStreetLight'],
      },
      fontSize: {
        'heading-h1': ['24px', { lineHeight: '38.4px', fontWeight: '700', letterSpacing: 0 }],
        'heading-h2': ['18px', { lineHeight: '28.8px', fontWeight: '700', letterSpacing: 0 }],
        'heading-h3': ['16px', { lineHeight: '25.6px', fontWeight: '700', letterSpacing: 0 }],
        'heading-h4': ['14px', { lineHeight: '22.4px', fontWeight: '700', letterSpacing: 0 }],
        'heading-h5': ['12px', { lineHeight: '19.2px', fontWeight: '700', letterSpacing: 0 }],
        'body-xl': ['18px', { lineHeight: '28.8px', fontWeight: '300', letterSpacing: 0 }],
        'body-l': ['16px', { lineHeight: '25.6px', fontWeight: '300', letterSpacing: 0 }],
        'body-m': ['14px', { lineHeight: '22.4px', fontWeight: '300', letterSpacing: 0 }],
        'body-s': ['12px', { lineHeight: '19.2px', fontWeight: '300', letterSpacing: 0 }],
        'body-xs': ['10px', { lineHeight: '16px', fontWeight: '300', letterSpacing: 0 }],
        'body-xxs': ['8px', { lineHeight: '12.8px', fontWeight: '300', letterSpacing: 0 }],
      },
    },
  },
  plugins: [],
};
