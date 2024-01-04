/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        base:{
          100:"#222"
        },
        dark :{
          100:"#002365",
          300:"#333"
        },
        sky:{
          100:"#e9f3fd"
        }
      },
      backgroundImage:{
        repos: "url('https://re-pos.in/wp-content/uploads/2020/11/New-Home-Header-min.png')",
      },
      boxShadow:{
        header:"0 1px 0 rgba(0,0,0,.1)",
        box:"6px 6px 18px 0px rgba(0,0,0,0.3)",
        card:"6px 6px 18px 0px rgba(0,0,0,0.2)"

      },
    
   
    
      
    },
   
  },
  plugins: [],
}

