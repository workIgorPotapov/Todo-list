import axios from 'axios';
import {useState, useEffect} from 'react';
import ToDoForm from './To-do-form';
import FilterItems from "./Filter-items";
import SortItems from "./Sort-items";
import ToDoItem from './To-do-item';
import Pages from './Pages';
import { Typography, List, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useStyles from './App.style.js';


function App() {
	const [items, setItems] = useState([]);
	const [filter, setFilter] = useState('');
	const [sort, setSort] = useState('asc');
	const [error, setError] = useState('');
	const [isShown, setIsShown] = useState(false);
	const [page, setPage] = useState(1);
	// const [requestTime, setRequestTime] = useState(Date.now());
	const itemsPerPage = 5;
	const classes = useStyles();

	const lastItemIndex = page * itemsPerPage;
	const firstItemIndex = lastItemIndex - itemsPerPage;
	const currentPage = items.slice(firstItemIndex, lastItemIndex);

	const getLink = 'https://todo-api-learning.herokuapp.com/v1/tasks/2';
	const baseUrl = 'https://todo-api-learning.herokuapp.com/v1/task/2';

	useEffect(() => {
		getData();
	}, [filter, sort]);

	const getData = async () => {
		const res = await axios.get(`${getLink}`, {
			params : {
				filterBy: filter,
				order: sort,
			}
		});
			setItems(res.data);
		}

	const postData = async (task) => {
		if (task) try {
			await axios.post(baseUrl, {name: task, done: false});
			getData();
		}
		catch(error) {
			const errorMessage = error.response.data.message;
			showError(errorMessage);
		}
	}

	const deleteData = async (id) => {
		// const now = Date.now();
		
		// if ((now - requestTime) < 500) {
		// 	getData();
		// 	return;
		// }
		
		// setRequestTime(Date.now());

		try {
			await axios.delete(`${baseUrl}/${id}`)
			getData();
		}
		catch(error) {
			const errorMessage = error.response.data.message;
			showError(errorMessage);
		}

		if (items.length > 1 && currentPage.length === 1) {
			setPage(page - 1)
		}
	}

	const checkData = async (item, id) => {
		await axios.patch(`${baseUrl}/${id}`, {done: !item.done})
		getData();
	}

	const editData = async (todoText, id) => {
		try {
			await axios.patch(`${baseUrl}/${id}`, {name: todoText})
			getData();
		}
		catch(error) {
			const errorMessage = error.response.data.message;
			showError(errorMessage);
		}
	}

	const showError = (message) => {
			setIsShown(true);
			setError(message);	
	}

		const showAll = () => {
			setFilter('');
			setPage(1);
		}

		const showDone = () => {
			setFilter('done');
			setPage(1);
		}

		const showUndone = () => {
			setFilter('undone');
			setPage(1);
		}

		const sortUp = () => {
			setSort('desc');
		}

		const sortDown = () => {
			setSort('asc');
		}

		const handleClose = (event, reason) => {
			if(reason === 'clickaway') {
				return;
			}
			
			if(reason === 'timeout' || event.type === 'click') {
				setIsShown(false)
			}
			console.log(event, reason)
		}

	return (
		<main className={classes.main}>
			<header className={classes.header}>
				<Typography className={classes.heading} variant="h1">ToDo</Typography>
				<ToDoForm 
				postData={postData}
				/>
				<div className={classes.formButtons}>
					<FilterItems
						showAll={showAll}
						showDone={showDone}
						showUndone={showUndone}
					/>
					<SortItems
						sortUp={sortUp}
						sortDown={sortDown}
					/>
				</div>
			</header>
			<List
				className={classes.todoUl}
			>
				{
					currentPage.map((item) => 
					(<ToDoItem 
						 item={item}
						 key={item.uuid}
						 deleteData={deleteData}
						 checkData={checkData}
						 editData={editData}
					 />
					))
				}
			</List>
			{ items.length > 5 &&
							<Pages 
							setPage={setPage}
							page={page}
							itemsPerPage={itemsPerPage}
							totalItems={items.length}
							lastItemIndex={lastItemIndex}
							/>
			}
				<Snackbar open={isShown} autoHideDuration={4000} onClose={handleClose}>
					<Alert onClose={(e) => handleClose(e)} severity="error">
						{error}
					</Alert>
				</Snackbar>

		</main>
	);
}

export default App;


