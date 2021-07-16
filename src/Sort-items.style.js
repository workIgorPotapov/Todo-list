import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	typography: {
		fontFamily: '"Indie Flower", cursive',
		fontSize: '18px',
		userSelect: 'none',
	},

	sort: {
		display: 'flex',
		alignItems: 'center',
	},

	sortText: {
		marginRight: '10px',
	},

	sortButton: {
		minWidth: '30px', 
		minHeight: '30px',
		maxWidth: '30px',
		maxHeight: '30px',
		border: '1px ridge #000000',
	},
}));

export default useStyles;