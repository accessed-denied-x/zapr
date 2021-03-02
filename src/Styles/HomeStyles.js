import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	viewA: {
		width: '100%',
		height: '100%',
		maxHeight: '100%',
		position: 'relative',
		paddingLeft: '20px',
		paddingTop: '2vh',
	},
	viewB: {
		width: '60%',
		maxHeight: '83.8vh',
		overflowY: 'hidden',
		padding: '1% 3%',
		display: 'flex',
	},
	home: {
		display: 'flex',
		maxHeight: '83.8vh',
	},
	blog: {
		overflow: 'auto',
	},
}));

export { useStyles };
