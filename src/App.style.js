import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	typography: {
		fontFamily: '"Indie Flower", cursive',
		fontSize: '18px',
	},

	main: {
		boxSizing: 'border-box',
		position: 'relative',
		width: '500px',
		height: '1vh',
		margin: '0 auto',
		fontFamily: '"Indie Flower", cursive',
	},

	header: {
		marginTop: '120px',
		textAlign: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	
	heading: {
		fontFamily: '"Indie Flower", cursive',
		userSelect: 'none',
	},

	formButtons: {
		marginTop: '25px',
		width: '470px',
		display: 'flex',
		justifyContent: 'space-between',
	},

	todoUl: {
		width: '320px',
		margin: '0 auto',
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default useStyles;