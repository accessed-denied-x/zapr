import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	li: {
		listStyleType: 'none',
	},
	blogcard: {
		width: '100%',
		maxWidth: '720px',
		marginBottom: '20px',
		boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)',
		//boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px, rgba(0, 0, 0, 0.15) 10px 10px, rgba(0, 0, 0, 0.1) 15px 15px, rgba(0, 0, 0, 0.075) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px',
		backgroundColor: 'rgba(0,0,0,0.3)',
		margin: '0 auto',
	},
	card: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		color: 'grey',
		width: '100%',
	},
	avatar: {
		backgroundColor: '#4b7475',
		color: 'black',
		fontWeight: 'bold',
	},
	media: {
		paddingTop: '56.25%',
	},
	footer: {
		display: 'inline-block',
	},
	exp: {
		position: 'relative',
		marginLeft: '560px',
	},
	expand: {
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
