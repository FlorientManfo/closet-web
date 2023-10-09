/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1185D4',
        'secondary': '#9D580F',
        'tertiary': '#EBB68F',
        'error': '#FF1744',
        'text_primary': '#1E1E1E',
        'text_secondary': '#808080',
        'shadow': '#808080'
      }
    },
  },
  plugins: [],
}
