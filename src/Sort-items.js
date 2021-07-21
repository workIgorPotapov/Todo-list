import { Button, Typography, Box } from '@material-ui/core';
import useStyles from './Sort-items.style.js';

function SortItems({ sorting }) {
	const classes = useStyles();

	return (
		<div className={classes.sort}>
			<Box mr={1}>
				<Typography className={classes.typography}>Sort by date</Typography>
			</Box>
			<Box mr={'3px'}>
				<Button
					onClick={() => sorting('desc')}
					className={classes.sortButton}
					variant="contained"
					color="default">
						<i className="fas fa-arrow-up fa-2x"></i>
				</Button>
			</Box>
			<Box mr={'3px'}>
				<Button
					onClick={() => sorting('asc')}
					className={classes.sortButton}
					variant="contained"
					color="default">
						<i className="fas fa-arrow-down fa-2x"></i>
				</Button>
			</Box>
		</div>
	);
}

export default SortItems;