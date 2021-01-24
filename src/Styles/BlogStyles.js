import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	li: {
		listStyleType: 'none',
	},
	blogcard: {
		maxWidth: '640px',
		marginBottom: '20px',
		boxShadow: '10px 10px 5px black',
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	card: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		color: 'grey',
		width: '600px',
	},
	avatar: {
		backgroundColor: 'rgba(50,30,30,0.5)',
	},
	media: {
		height: '360px',
		width: '100%',
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
