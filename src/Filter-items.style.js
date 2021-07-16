import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	typography: {
		fontFamily: '"Indie Flower", cursive',
		fontSize: '18px',
	},
	
	filter: {
		display: 'flex',
		listStyle: 'none',
	},

	filterItems: {
		padding: 0,
	},

	filterButton: {
		height: '30px',
		padding: '0 3px',
		fontFamily: '"Indie Flower", cursive',
		fontSize: '18px',
		border: '1px ridge #000000',
	},
}));

export default useStyles;