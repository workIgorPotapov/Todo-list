import { ListItem, List, Link } from '@material-ui/core';
import useStyles from './Pages.style.js';

// itemsPerPage, totalItems, page, setPage
function Pages ({ totalItems, page, setPage }) {
	const classes = useStyles();
	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalItems / 5); i++) {
		pageNumber.push(i);
	}

	let showStart;
	let showEnd;

	if (pageNumber.length > 5) {
		if (pageNumber.indexOf(page) > 2) {
			showStart = page - 3;
			showEnd = page + 2;
		} else {
			showStart = 0;
			showEnd = 5;
		}
	
		if (pageNumber.lastIndexOf(page) > pageNumber.length - 4) {
			showStart = pageNumber.length - 5;
			showEnd = pageNumber.length;
		}
	}

		return (
			<footer className={classes.footer}>
				<List className={classes.footerUl}>
					{
						(page > 1) &&
						<ListItem className={classes.page} onClick={() => setPage(page - 1)}>
							<Link className={classes.pageLink}>{'<<'}</Link>
						</ListItem>
					}
					{
						pageNumber.slice(showStart, showEnd).map(number => (
							<ListItem className={`${number === page ? classes.pageActive : classes.page}`} key={number} onClick={() => setPage(number)}>
								<Link className={`${number === page ? classes.pageLinkActive : classes.pageLink}`}
								>
									{number}
								</Link>
							</ListItem>
						))
					}
					{
						(page < pageNumber.length) &&
						<ListItem className={classes.page} onClick={() => setPage(page + 1)}>
							<Link className={classes.pageLink}>{'>>'}</Link>
						</ListItem>
					}
				</List>
			</footer>
		);
}

export default Pages;