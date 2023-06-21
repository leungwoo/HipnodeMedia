/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      white: '#fff',
      // primary colors
      darkBlue: '#3373FF',
      primary: {
        orange: '#FF4401',
        salmon: '#FD7240',
        gold: '#EA942C',
        blue: '#347AE2',
        violet: '#6570F7',
        green: '#0ECC8D',
        yellow: '#F9DFC0',
        borderyellow: '#EA942C',
        yellow90: '#EC9F41',
      },
      // background colors text colors
      layoutBackground: '#F7F7F7',
      dark1: '#151A1E',
      dark2: '#1E252B',
      dark3: '#262D34',
      dark4: '#2C353D',
      light1: '#FFFFFF', // figma design - Secondary Color/Background
      light2: '#F7F7F7', // figma design - Secondary Color/Background 2
      light3: '#F4F6F8', // figma design - Secondary Color/Secondary 6
      button: '#FF6934',
      button2: '#FF8F67',
      orange100: '#FFECE6',
      yellow100: '#FDF4EA',
      blue100: '#EBF2FC',
      // text color
      darkNavy: '#192351', // figma design - Secondary Color/Secondary 1
      darkGray: '#3F4354', // figma design - Secondary Color/Secondary 2
      lightGray: '#97989D', // figma design - Secondary Color/Secondary 3
      slateGray: '#858EAD', // figma design - Secondary Color/Secondary 4
      slateGrayLight: '#C5D0E6', // figma design - Secondary Color/Secondary 5
    },
    extend: {
      fontFamily: {
        body: [' "Source Sans Pro" ', 'sans-serif'],
      },
      scrollbar: {
        /* Hide scrollbar in all browsers */
        '*::-webkit-scrollbar, *::-moz-scrollbar, *::-ms-scrollbar': {
          display: 'none',
        },
        signincontainer: {
          display: 'flex',
          width: '100%',
          padding: '0',
          height: '100vh',
          margin: '-10px 0 0 -10px',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /bg-.*/,
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/,
    },
    {
      pattern: /(w|h)-[0-9]+/,
    },
  ],
};
