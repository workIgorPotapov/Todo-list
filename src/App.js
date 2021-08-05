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
	const [totalItems, setTotalItems] = useState(0);
	const classes = useStyles();

	const baseUrl = 'http://localhost:5000/';

	const getData = async () => {
		const res = await axios.get(`${baseUrl}`, {
			params : {
				page: page,
				order: sort,
				filterBy: filter,
			}
		});
		console.log(res)
			setTotalItems(res.data.count);
			setItems(res.data.rows);
		}

	const postData = async (task) => {
		if (task) try {
			await axios.post(`${baseUrl}`, {name: task});
			getData();
		}
		catch(error) {
			const errorMessage = error.response.data[0].msg;
			showError(errorMessage);
			console.log(error.response)
		}
	}

	const deleteData = async (id) => {
		try {
			await axios.delete(`${baseUrl}${id}`);
			getData();
		}
		catch(error) {
			console.log(error.response)
		}

		if (totalItems > 1 && items.length === 1) {
			setPage(page - 1)
		}
	}

	const checkData = async (item, id) => {
		await axios.patch(`${baseUrl}${id}`, {done: !item.done})
		getData();
	}

	const editData = async (todoText, id) => {
		try {
			await axios.patch(`${baseUrl}${id}`, {name: todoText})
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

	const filtration = (props) => {
		if (props === 'all') {
			setFilter('');
		}
		if (props === 'done') {
			setFilter('done')
		}
		if (props === 'undone') {
			setFilter('undone');
		}
		setPage(1);
	}
	
	const sorting = (props) => {
		if (props === 'asc') {
			setSort('asc');
		}
		if (props === 'desc') {
			setSort('desc');
		}
	}

	const handleClose = (event, reason) => {
		if(reason === 'clickaway') {
			return;
		}
		
		if(reason === 'timeout' || event.type === 'click') {
			setIsShown(false);
		}
	}

	useEffect(() => {
		getData();
	}, [filter, sort, page]);

	return (
		<main className={classes.main}>
			<header className={classes.header}>
				<Typography className={classes.heading} variant="h1">ToDo</Typography>
				<ToDoForm 
				postData={postData}
				/>
				<div className={classes.formButtons}>
					<FilterItems
						filtration={filtration}
					/>
					<SortItems
						sorting={sorting}
					/>
				</div>
			</header>
			<List
				className={classes.todoUl}
			>
				{
					items.map((item) => 
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
			{ totalItems > 5 &&
							<Pages 
							setPage={setPage}
							page={page}
							totalItems={totalItems}
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


