 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  //Especificamos los temas que queremos usar
  daisyui: {
    themes: ["coffee"],
  },
}
