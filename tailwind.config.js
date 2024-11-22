/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['general', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'rober-regular': ['robert-regular', 'sans-serif'],
      },
      colors: {
        blue :{
          50:'#DFDFF0',
          70:'#DFDFF2',
          100:'#f0f2fA',
          200:'#010101',
          300:'#4FB7DD',
        },
        violet: {
          300: '#5724FF',
        },
        yellow : {
          100: '#8e983f',
          300: '#edff66',
        }
      }
    },
  },
  plugins: [],
}