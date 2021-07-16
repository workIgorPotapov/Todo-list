import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	typography: {
		fontFamily: '"Indie Flower", cursive',
		fontSize: '18px',
		userSelect: 'none',
	},

	todoLi: {
		position: 'relative',
		marginBottom: '10px',
		padding: '5px',
		width: '400px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '18px',
		border: '1px ridge #000000',
		borderRadius: '5px',
		wordBreak: 'break-word',
		boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
	},

	liInner: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	editInp: {
		position: 'absolute',
		top: '50%',
		left: '40px',
		zIndex: '2',
		transform: 'translateY(-50%)',
		width: '230px',
		height: '32px',
		fontFamily: '"Indie Flower", cursive',

	},

	liFunc: {
		minWidth: '105px',
		display: 'flex',
		alignItems: 'center',
	},

	todoDate: {
		paddingTop: '4px',
		marginRight: '5px',
	},

	delete: {
		minWidth: '30px', 
		minHeight: '30px',
		maxWidth: '30px',
		maxHeight: '30px',
		border: '1px ridge #000000',
	},
}));

export default useStyles;