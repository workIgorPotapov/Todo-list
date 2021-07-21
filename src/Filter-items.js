import { ListItem, List, Button, Typography, Box } from '@material-ui/core';
import useStyles from './Filter-items.style.js'

function FilterItems({ filtration }) {
	const classes = useStyles();

	return (
		<List className={classes.filter}>
			<ListItem className={classes.filterItems}>
				<Box ml={'3px'}>
					<Button 
						onClick={() => filtration('all')}
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
						onClick={() => filtration('done')}
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
					onClick={() => filtration('undone')}
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