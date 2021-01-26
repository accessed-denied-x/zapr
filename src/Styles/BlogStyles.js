import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	li: {
		listStyleType: 'none',
	},
	blogcard: {
		maxWidth: '600px',
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
		height: '300px',
		width: '100%',
	},
	footer: {
		display: 'inline-block',
	},
	expand: {
		float: 'right',
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));

export { useStyles };
