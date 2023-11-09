const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'public/preline/dist/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Rubik"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'gold': '#986D1F'
			}
		},
	},
	plugins: [
		require('preline/plugin'),
		require('@tailwindcss/forms'),
	],
}
