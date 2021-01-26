import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	viewA: {
		width: '40%',
		height: '100%',
		maxHeight: '83.9vh',
		overflowY: 'scroll',
		position: 'relative',
		paddingLeft: '20px',
		paddingTop: '2vh',
	},
	viewB: {
		width: '60%',
		overflowY: 'scroll',
		padding: '2% 5%',
		display: 'flex',
	},
	home: {
		display: 'flex'
	},
}));

export { useStyles };
