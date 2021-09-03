module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#FFBE00',
				dark: '#262626',
				darkPink: '#C62368',
				light: '#f3f3f3',
			},
			zIndex: {
				'-1': '-1',
				'-10': '-10',
			},
			screens: {
				print: { raw: 'print' },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
