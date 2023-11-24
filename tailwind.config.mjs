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
                    50: '#eff0f0',
                    100: '#e0e1e1',
                    200: '#c0c3c3',
                    300: '#a1a6a5',
                    400: '#818887',
                    500: '#626a69',
                    600: '#4e5554',
                    700: '#3b403f',
                    800: '#272a2a',
                    900: '#141515'
                }
            }
        },
	},
	plugins: [],
}
