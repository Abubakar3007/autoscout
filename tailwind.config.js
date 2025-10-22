module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],

  safelist: [
    {
      pattern: /^[a-z\d-]+\[.*?\]$/,
    },
  ],

  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        racing: ['Racing Sans One'],
      },
      screens: {
        mid: '900px',
        desk: '1440px',
        sxl: '1200px',
        sxs: '400px',
        xmd: '800px',
        xsm: '680px',
      },
      colors: {
        'blue-500': '#347DFF',
        'blue-700': '#1F4D9D',
      },
      minHeight: {
        '943': '943px',
      },
      maxWidth: {
        '1160': '1160px',
        '711': '711px',
        '360': '360px',
        '408': '408px',
      },
      lineHeight: {
        '60': '60px',
        '12': '48px',
        '69':'69px',
      },
      boxShadow: {
        'box': '0px 15px 40px 2px rgba(133, 133, 133, 0.10)',
        'btn-shadow': '0px 4px 14px 0px rgba(0, 0, 0, 0.15)',
      },
      height:{
        'h-50':'50px',
      }
    },
  },
  plugins: [],
}