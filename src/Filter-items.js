import { ListItem, List, Button, Typography, Box } from '@material-ui/core';
import useStyles from './Filter-items.style.js'

function FilterItems({ showAll, showDone, showUndone }) {
	const classes = useStyles();

	return (
		<List className={classes.filter}>
			<ListItem className={classes.filterItems}>
				<Box ml={'3px'}>
					<Button 
						onClick={() => showAll()}
						className={classes.filterButton} 
						type="submit"
						variant="contained"
						color="primary">
							<Typography className={classes.typography}>All</Typography>
					</Button>
				</Box>
			</ListItem>
			<ListItem className={classes.filterItems}>
				<Box ml={'3px'}>
					<Button 
						onClick={() => showDone()}
						className={classes.filterButton}  
						type="submit"
						variant="contained"
						color="primary">
							<Typography className={classes.typography}>Done</Typography>
					</Button>
				</Box>
			</ListItem>
			<ListItem className={classes.filterItems}>
				<Box ml={'3px'}>
					<Button 
					onClick={() => showUndone()}
					className={classes.filterButton} 
					type="submit"
					variant="contained"
					color="primary">
						<Typography className={classes.typography}>Undone</Typography>
					</Button>
				</Box>
			</ListItem>
		</List>
	);
}

export default FilterItems;