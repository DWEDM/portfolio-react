// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Quantico', 'sans-serif'],
        paragraph: ['Space Mono', 'monospace'],
        ui: ['Oxanium', 'sans-serif'],
        /*  */
      },
    },
  },
  plugins: [require("daisyui")],
}
