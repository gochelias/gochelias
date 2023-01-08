const LineClamp = require('@tailwindcss/line-clamp');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray6light: '#F2F2F7',
				gray5light: '#E5E5EA',
				gray4light: '#D1D1D6',
				gray3light: '#C7C7CC',
				gray2light: '#AEAEB2',
				gray: '#8F8F93',
				gray2dark: '#626266',
				gray3dark: '#474749',
				gray4dark: '#3B3B3D',
				gray5dark: '#2C2C2D',
				gray6dark: '#1C1C1E',
			},
		},
		fontFamily: {
			display: ['"Clash Display"'],
			body: ['Telegraf'],
			mono: ['JetBrains Mono'],
		},
	},
	plugins: [LineClamp],
};
