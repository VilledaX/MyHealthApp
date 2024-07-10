/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./www/**/*.{html,js}"],
  theme: {
    extend: {



      fontFamily: {
        "haken": ['"Hanken Grotesk"', 'sans-serif']
      },

      colors: {
        "light-slate-blue": "#0f766e",
        "light-royal-blue": "#115e59",
        "violet-blue": "#115e59",
        "persian-blue": "#134e4a",
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "#d1fae5",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "cream": '#f7f4e9',
        "rtca": "#cfd8dc",
        "rtcb": "#059669",
        "rtcc": "#047857"

      }

    },
  },
  plugins: [],
}

// npm install jquery
// npm install -D tailwindcss
// npx tailwindcss init