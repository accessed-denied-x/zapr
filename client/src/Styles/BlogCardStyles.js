import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	li: {
		listStyleType: 'none',
	},
	blogcard: {
		width: '100%',
		maxWidth: '400px',
		marginBottom: '20px',
		boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)',
		//boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px, rgba(0, 0, 0, 0.15) 10px 10px, rgba(0, 0, 0, 0.1) 15px 15px, rgba(0, 0, 0, 0.075) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px',
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	card: {
		backgroundColor: 'rgba(0,0,0,0.3)',
		color: 'grey',
		width: '400px',
	},
	avatar: {
		backgroundColor: 'rgba(50,30,30,0.5)',
	},
	media: {
		height: '144px',
		width: '100%',
	},
	footer: {
		display: 'inline-block',
	},
	exp: {
		position: 'relative',
		paddingLeft: '240px',
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
