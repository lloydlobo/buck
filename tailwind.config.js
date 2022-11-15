// https://github.com/fireship-io/tailwind-dashboard/blob/main/tailwind.config.js
const colors = require('tailwindcss/colors');

// @next/font can be used with Tailwind CSS through a CSS variable.
// In the example below, we use the font Inter from @next/font/google (You can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter. Then, use inter.variable to add the CSS variable to your HTML document.
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config } */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    // https://tailwindcss.com/docs/dark-mode
    darkMode: 'class', //https://github.com/saadeghi/theme-change
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', ...fontFamily.sans],
            },
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
            animation: {
                demo: 'demo 5s ease-in-out',
            },
            keyframes: {
                demo: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '25%': {
                        transform: 'translateY(-10px)',
                    },
                    '75%': {
                        transform: 'translateY(-20px)',
                    },
                },
            },
        },
        theme: {
            screens: {
                // 'xs': '460px',
                // 'tablet': '640px',
                // => @media (min-width: 640px) { ... }
                // 'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }
                // 'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
    daisyui: {
        themes: ['business', 'corporate'], // https://daisyui.com/docs/themes/
    },
};
