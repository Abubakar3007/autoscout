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
      fontSize: {
        xxl: '28px',
      },
      colors: {
        'blue-500': '#347DFF',
        'blue-700': '#1F4D9D',
        'sell-bg': '#EBF2FF',
      },
      minHeight: {
        '943': '943px',
        '260': '260px',
        '350': '350px'
      },
      maxWidth: {
        '1160': '1160px',
        '711': '711px',
        '360': '360px',
        '408': '408px',
        '721': '721px',
        '250':'250px',
        '724' : '724px',
      },
      lineHeight: {
        '60': '60px',
        '12': '48px',
        '69': '69px',
        '54': '54px',
      },
      boxShadow: {
        'box': '0px 15px 40px 2px rgba(133, 133, 133, 0.10)',
        'btn-shadow': '0px 4px 14px 0px rgba(0, 0, 0, 0.15)',
        'card-shadow': `
          0px 273px 77px 0px rgba(150,141,141,0),
          0px 175px 70px 0px rgba(150,141,141,0.01),
          0px 98px 59px 0px rgba(150,141,141,0.03),
          0px 44px 44px 0px rgba(150,141,141,0.04),
          0px 11px 24px 0px rgba(150,141,141,0.05)
        `,
        'box-shadow':'0px 15px 40px 2px rgba(133, 133, 133, 0.10)',
      },
      height: {
        'h-50': '50px',
        '257': '257px',
      },
      gridTemplateColumns: {
        'car-grid': 'repeat(auto-fit, minmax(257px, 1fr))',
        'card-grid': 'repeat(auto-fill, minmax(318px, 1fr))',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))',
      },
      rotate: {
        '2': '2deg',
      },
      spacing: {
        '165': '165px',
        '350': '350px',
      },
    },
    plugins: [],
  }
}