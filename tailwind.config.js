/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: '0.75rem',    // Extra Small
        sm: '0.875rem',   // Small
        base: '1rem',     // Base
        lg: '1.125rem',   // Large
        xl: '1.25rem',    // Extra Large
        '2xl': '1.5rem',  // 2X Large
        '3xl': '1.875rem', // 3X Large
        // Add more font sizes as needed
      },
      colors: {
        'dark-green':'#00501E',
        'light-green':'#DFFFB0',
        'popat':'#006B28',
        'neon':'#ABFE2C',
        'black-800': '#1E1E1E',
        'grey-600': '#676767',
        'grey-500': '#B0B0B0',
        'grey-300': '#414141',
        'off-white': '#D6D6D6',
        'dark-grey': '#1F1F1F',
        'light-grey': '#959292',
        'grey':'#424242',
        'off-grey':'#242527',
        'bright-green':'#3AFF7D',
        error: '#FF6584',
      },
    },
  },
  plugins: [],
}
