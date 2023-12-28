/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "grays":"#D0D6F9",
       "bgrays":"rgba(255, 255, 255, 0.443)",
       "trans":"rgba(179, 179, 179, 0.1)"
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
           
      },    
      fontFamily: {
        "Bellefair":"Bellefair,serif",
        "Barlow":"Barlow",
        "condensed":"Barlow Condensed"
      }      
    },  
  },
  plugins: [],
}
