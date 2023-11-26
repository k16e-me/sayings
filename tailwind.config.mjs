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
            // colors: {
            //     'brand': {
            //         '50': '#f7f7f8',
            //         '100': '#efeef0',
            //         '200': '#dbdadd',
            //         '300': '#bcbabf',
            //         '400': '#98959b',
            //         '500': '#7b787f',
            //         '600': '#646168',
            //         '700': '#524f55',
            //         '800': '#454448',
            //         '900': '#3d3b3f',
            //         '950': '#242325',
            //     },
            // }
        },
	}
}