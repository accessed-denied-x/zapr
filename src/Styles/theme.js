import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(15, 15, 15)',
			contrastText: '#959b9b',
		},
		secondary: {
			main: '#5e3333',
			contrastText: '#959b9b',
		},
	},
});

export default theme;
