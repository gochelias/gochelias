const LineClamp = require('@tailwindcss/line-clamp');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			display: ['"Clash Display"'],
			body: ['Telegraf'],
			mono: ['JetBrains Mono'],
		},
	},
	plugins: [LineClamp],
};
