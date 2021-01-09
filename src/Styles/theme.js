export default {
	palette: {
		primary: {
			light: '#1f1f1f',
			main: 'rgb(15, 15, 15)',
			dark: '#1f1f1f',
			contrastText: '#959b9b',
		},
		secondary: {
			light: '#959b9b',
			main: '#5e3333',
			dark: '#959b9b',
			contrastText: '#959b9b',
		},
	},
	formStyle: {
		form: {
			textAlign: 'center',
		},
		image: {
			margin: '20px auto 20px auto',
		},
		pageTitle: {
			margin: '10px auto 10px auto',
		},
		button: {
			marginTop: 20,
			position: 'relative',
		},
		root: {
			background: 'transparent',
			'&$error': {
				color: '#54100a',
			},
		},
		asterisk: {
			'&$error': {
				color: '#54100a',
			},
		},
		underline: {
			'&$error:after': {
				borderBottomColor: '#54100a',
			},
		},
		error: {},
		customError: {
			color: '#54100a',
			fontSize: '0.8rem',
		},
		progress: {
			position: 'absolute',
			opacity: '0.5',
		},
		input: {
			color: '#959b9b',
		},
	},
};
