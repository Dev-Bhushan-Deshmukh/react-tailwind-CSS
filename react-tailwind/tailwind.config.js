/** @type {import('tailwindcss').Config} */
// url("./src/assets/—Pngtree—modern flat design concept of_5332896.png")
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': ' url("./src/assets/—Pngtree—modern flat design concept of_5332896.png")',
        
      },
      colors:{
navcolor:'#1d1d24',
        dark:'white',
        highlighter:'#0a0d16',
        cardcolor:'#161636',
        bgcol:'#e9e9e9',
        texthighlighter:'#9a17bf'
      }
    },
  },
  plugins: [],
}

