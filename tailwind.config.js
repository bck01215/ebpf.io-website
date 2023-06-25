/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Elza', 'Elza Fallback', ...defaultTheme.fontFamily.sans],
      text: ['Elza Text', 'Elza Text Fallback', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#1A1A1A',
      white: '#FFFFFF',
      primary: {
        yellow: '#FFE100',
        orange: '#FFA41D',
      },
      secondary: {
        green: '#5CCC6F',
        'green-1': '#C6ECC6',
        'green-2': '#94D194',
        blue: '#00ACE5',
        'blue-1': '#BEE1F4',
        'blue-2': '#99CBE5',
        red: '#F46666',
        'red-1': '#F9DCE4',
        'red-2': '#E3ABBA',
        'yellow-light': '#FEF9E7',
        'yellow-1-light': '#FEFBF0',
        'green-light': '#EBFAEB',
        'green-1-light': '#F3FCF3',
        'blue-light': '#E7F6FE',
        'blue-1-light': '#F0F9FE',
        'red-light': '#FCEEF2',
        'red-1-light': '#FDF6F8',
      },
      gray: {
        15: '#272727',
        20: '#333333',
        30: '#4D4D4D',
        40: '#666666',
        50: '#808080',
        60: '#999999',
        70: '#B3B3B3',
        80: '#CCCCCC',
        90: '#E6E6E6',
        94: '#F2F2F2',
        96: '#F6F6F6',
        98: '#FAFAFA',
      },
      code: {
        'green-1': '#47D18C',
        'blue-1': '#66A3FF',
        'red-1': '#F6558C',
        'orange-1': '#FFBF66',
        'gray-1': '#B3B3B3',
        'gray-2': '#808080',
        'brown-1': '#BA8C5E',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '413px' },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
      '4xl': '26px',
      '5xl': '28px',
      '6xl': '32px',
      '7xl': '36px',
      '8xl': '40px',
      '9xl': '44px',
      '10xl': '50px',
      '11xl': '60px',
    },
    backgroundImage: () => ({
      'button-gradient': 'linear-gradient(82.18deg, #EC6113 -0.66%, #FF9900 97.55%)',
    }),
    extend: {
      lineHeight: {
        dense: '1.125',
      },
      letterSpacing: {
        'middle-wide': '0.03em',
        category: '0.91px',
      },
      dropShadow: {
        book: '0px 8px 24px rgba(61, 61, 61, 0.16)',
      },
      boxShadow: {
        category: 'inset 0px -2px 0px rgba(255, 225, 0, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area'), require('@tailwindcss/typography')],
};
