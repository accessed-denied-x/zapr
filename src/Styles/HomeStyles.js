import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	viewA: {
		width: '50%',
		maxHeight: '10%',
		overflowY: 'scroll',
		padding: '0% 2%',
		display: 'flex',
		alignItems: 'center'
	},
	viewB: {
		width: '40%',
		overflowY: 'scroll',
		padding: '2% 5%',
		display: 'flex',
		alignItems: 'center'
	},
	home: {
		display: 'flex'
	},
}));

export { useStyles };
