module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1208px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1636px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2080px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
