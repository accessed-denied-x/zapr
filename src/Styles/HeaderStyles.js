import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	space: {
		height: '70px',
	},
	logo: {
		maxWidth: '100px',
		filter: 'brightness(61%)',
	},
	menuButton: {
		marginRight: theme.spacing(4),
	},
	title: {
		marginLeft: theme.spacing(2),
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.2),
		},
		width: '100%',
		marginLeft: theme.spacing(20),
		marginRight: theme.spacing(40),
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
		paddingLeft: theme.spacing(6),
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		transition: theme.transitions.create('width'),
		width: '100%',
	},
	usernav: {
		position: 'absolute',
		right: '10px',
	},
	userButton: {
		margin: '0 7px',
		'&:hover': {
			color: '#5e3333',
		},
	},
}));

export { useStyles };
