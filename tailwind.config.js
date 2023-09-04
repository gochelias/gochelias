/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'2k': '2000px',
			},
			maxWidth: {
				'1k': '1000px',
				'2k': '2000px',
			},
			colors: {
				dark: '#111111',
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
				success: '#0070F3',
				'success-lighter': '#D3E5FF',
				'success-light': '#3291FF',
				'success-dark': '#0761D1',
				error: 'red',
				'error-lighter': '#F7D4D6',
				'error-light': '#F33',
				'error-dark': '#E60000',
				warning: '#f5a623',
				'warning-lighter': '##ffefcf',
				'warning-light': '#f7b955',
				'warning-dark': '#ab570a',
			},
		},
		fontFamily: {
			sans: ['var(--font-clash-display)'],
			body: ['var(--font-telegraf)'],
			mono: ['var(--font-jetbrains-mono)'],
		},
	},
};
