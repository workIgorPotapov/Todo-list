import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
		textAlign: 'center',
		userSelect: 'none',
	},

	footerUl: {
		margin: '0 auto',
		marginTop: '30px',
		width: '290px',
		display: 'flex',
		justifyContent: 'center',
		listStyle: 'none',
	},

	page: {
		marginRight: '5px',
		width: '45px',
		height: '35px',
		fontSize: '20px',
		textAlign: 'center',
		border: '1px ridge #000000',
		borderRadius: '5px',
		color: '#000000',
		cursor: 'pointer',
		transition: 'all 0.1s linear',
		boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
		'&:hover': {
			backgroundColor: '#3f50b5',
			"& $pageLink": {
        color: "#ffffff"
      }
		},
	},

	pageActive: {
		marginRight: '5px',
		width: '45px',
		height: '35px',
		fontSize: '20px',
		textAlign: 'center',
		border: '1px ridge #000000',
		borderRadius: '5px',
		color: '#000000',
		backgroundColor: '#3f50b5',
		cursor: 'pointer',
		boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
	},

	pageLink: {
		color: '#000000',
		textDecoration: 'none',
		transition: 'all 0.1s linear',
		'&:hover': {
			textDecoration: 'none',
		},
	},

	pageLinkActive: {
		color: '#ffffff',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
		},
	},

}));

export default useStyles;