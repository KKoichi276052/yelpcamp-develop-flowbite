/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./public/**/*.{js,css}",
    "./views/**/*.ejs",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
