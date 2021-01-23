import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	header: {},
	space: {
		height: '70px',
	},
	li: {
		listStyleType: 'none',
	},
	logo: {
		maxWidth: '100px',
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
		margin: '0 3px',
	},
	blogcard: {
		maxWidth: '640px',
		marginBottom: '20px',
		boxShadow: '10px 10px 5px black',
	},
	card: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		color: 'grey',
	},
	avatar: {
		backgroundColor: 'rgba(50,30,30,0.5)',
	},
	media: {
		height: '360px',
		width: '640px',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

export { useStyles };
