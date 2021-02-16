import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	newblog: {
		width: '100%',
		maxWidth: '700px',
		height: '450px',
		boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)',
		//boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px, rgba(0, 0, 0, 0.15) 10px 10px, rgba(0, 0, 0, 0.1) 15px 15px, rgba(0, 0, 0, 0.075) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px',
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	card: {
		backgroundColor: 'rgba(0,0,0,.3)',
		color: 'grey',
		width: '100%',
		height: '100%',
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '20px',
	},
	textfield: {
		color: 'grey',
		alignSelf: 'center',
		marginBottom: '10px',
		background: 'transparent',
		backgroundColor: 'rgba(0,0,0,0.1)',
	},
	button: {
		alignSelf: 'center',
		margin: '5px 0px',
	},
	input: {
		color: '#959b9b',
	},
}));

export { useStyles };
