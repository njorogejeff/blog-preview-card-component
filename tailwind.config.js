/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        figTree: "'Figtree', sans-serif",
      },
      colors: {
        // Primary Colors
        blogYellow: 'hsl(47, 88%, 63%)',

        // Neutral Colors
        blogWhite: 'hsl(0, 0%, 100%)',
        blogGrey: 'hsl(0, 0%, 50%)',
        blogBlack: 'hsl(0, 0%, 7%)',
      },
      screens: {
        sm: '375px',
        md: '480px',
        lg: '640px',
        xl: '768px',
        '2xl': '976px',
        '3xl': '1024px',
        '4xl': '1280px',
        '5xl': '1440px',
        '6xl': '1536px',
        '7xl': '1600px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

