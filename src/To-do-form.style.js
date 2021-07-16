import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	formInput: {
		width: '400px',
		marginTop: '7px',
	},
}));

export default useStyles;