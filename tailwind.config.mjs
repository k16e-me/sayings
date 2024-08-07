/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme'),
    colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans Variable', ...defaultTheme.fontFamily.sans],
                display: 'Limelight, sans-serif'
            },
            colors: {
                secondary: colors.fuchsia
            }
        }
	},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}