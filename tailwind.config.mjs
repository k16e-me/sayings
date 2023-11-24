/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
            fontFamily: {
                display: 'Limelight, sans- serif'
            },
            colors: {
                brand: {
                    '50': '#f7f7ef',
                    '100': '#efeedf',
                    '200': '#dfdebf',
                    '300': '#cecd9f',
                    '400': '#bebd7f',
                    '500': '#aeac5f',
                    '600': '#8b8a4c',
                    '700': '#686739',
                    '800': '#464526',
                    '900': '#232213'
                }
            }
        },
	},
	plugins: [],
}
