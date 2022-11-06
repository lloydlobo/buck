// require('@tailwindcss/aspect-ratio')

/** @type {import('tailwindcss').Config } */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        require("@tailwindcss/typography"),
    ],
    daisyui: {
        themes: ["business", "corporate"], // https://daisyui.com/docs/themes/
    },
    // https://tailwindcss.com/docs/dark-mode
    darkMode: 'class', //https://github.com/saadeghi/theme-change

}
