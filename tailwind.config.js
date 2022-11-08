// https://github.com/fireship-io/tailwind-dashboard/blob/main/tailwind.config.js
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config } */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // https://tailwindcss.com/docs/dark-mode
    darkMode: 'class', //https://github.com/saadeghi/theme-change
    theme: {
        extend: {
            colors: {
                gray: {
                    900: '#202225',
                    800: '#2f3136',
                    700: '#36393f',
                    600: '#4f545c',
                    400: '#d4d7dc',
                    300: '#e3e5e8',
                    200: '#ebedef',
                    100: '#f2f3f5',
                },
            },
            spacing: {
                88: '22rem',
            },
        },
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        require("@tailwindcss/typography"),
    ],
    daisyui: {
        themes: ["business", "corporate"], // https://daisyui.com/docs/themes/
    },

}
