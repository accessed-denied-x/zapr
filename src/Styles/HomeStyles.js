import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	viewA: {
		width: '40%',
		height: '100%',
		maxHeight: '83.8vh',
		overflowY: 'scroll',
		position: 'relative',
		paddingLeft: '20px',
		paddingTop: '2vh',
	},
	viewB: {
		width: '60%',
		maxHeight: '83.8vh',
		overflowY: 'scroll',
		padding: '1% 3%',
		display: 'flex',
	},
	home: {
		display: 'flex',
		maxHeight: '83.8vh',
	},
}));

export { useStyles };
