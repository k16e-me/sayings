/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans Variable', ...defaultTheme.fontFamily.sans],
                display: 'Limelight, sans- serif'
            },
            colors: {
                brand: {
                    100: '#efeedf',
                    200: '#dfdebf',
                    300: '#cecd9f',
                    400: '#bebd7f',
                    500: '#aeac5f',
                    600: '#8b8a4c',
                    700: '#686739',
                    800: '#464526',
                    900: '#232213'
                }
            }
        },
	},
	plugins: [],
}
