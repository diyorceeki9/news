/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  variants: {
    extend: {},
  },
  plugins: [],
  "files.associations": {
  "*.css": "tailwindcss"
}
}
