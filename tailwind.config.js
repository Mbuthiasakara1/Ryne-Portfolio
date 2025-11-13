/** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         keyframes: {
           "fade-in": {
             "0%": { opacity: "0" },
             "100%": { opacity: "1" },
           },
           "slide-up": {
             "0%": { opacity: "0", transform: "translateY(30px)" },
             "100%": { opacity: "1", transform: "translateY(0)" },
           },
           blob: {
             "0%, 100%": { transform: "translate(0, 0) scale(1)" },
             "25%": { transform: "translate(20px, -50px) scale(1.1)" },
             "50%": { transform: "translate(-20px, 20px) scale(0.9)" },
             "75%": { transform: "translate(50px, 50px) scale(1.05)" },
           },
         },
         animation: {
           "fade-in": "fade-in 1s ease-out",
           "slide-up": "slide-up 0.8s ease-out",
           blob: "blob 7s infinite",
         },
       },
     },
     plugins: [],
   }