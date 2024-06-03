/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1500px',
    },
    fontFamily: {
      sans: 'Plus Jakarta Sans, sans-serif',
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': { maxHeight: '0px', opacity: 0 },
          '100%': { maxHeight: '1000px', opacity: 1 },
        },
        slideUp: {
          '0%': { maxHeight: '1000px', opacity: 1 },
          '100%': { maxHeight: '0px', opacity: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
