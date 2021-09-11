module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#FFBE00',
				dark: '#262626',
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
