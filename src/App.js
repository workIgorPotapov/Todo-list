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
	// const [filteredItems, setFilteredItems] = useState([]);
	const [filter, setFilter] = useState('');
	const [sort, setSort] = useState('order=asc');
	const [resArr, setResArr] = useState([]);
	const [error, setError] = useState('');
	const [isShown, setIsShown] = useState(false);
	const [page, setPage] = useState(1);
	const [itemsPerPage] = useState(5);
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
		let q = '';
		if (filter.length > 1) {
			q = '&'
		}
		const res = await axios.get(`${getLink}` + '?' + filter + q + sort);
		console.log(`${getLink}` + '?' + filter + q + sort);
			setItems(res.data);
			setResArr(res.data);
		}

	const postData = async (task) => {
		if (task) try {
			await axios.post(baseUrl, {name: task, done: false});
			getData();
		}
		catch(error) {
			const errorCode = error.message.substr(error.message.length - 3);
			showError(errorCode);
		}
	}

	const deleteData = async (id) => {
		try {
			await axios.delete(`${baseUrl}/${id}`)
			getData();
		}
		catch(error) {
			const errorCode = error.message.substr(error.message.length - 3);
			showError(errorCode);
		}

		if (resArr.length > 1 && currentPage.length === 1) {
			setPage(page - 1)
		}
	}

	const checkData = async (item, id) => {
		await axios.patch(`${baseUrl}/${id}`, {done: !item.done})
		getData();
	}

	const editData = async (item, todoText, id) => {
		try {
			await axios.patch(`${baseUrl}/${id}`, {name: todoText})
			getData();
		}
		catch(error) {
			const errorCode = error.message.substr(error.message.length - 3);
			showError(errorCode);
		}
	}

	const showError = (message) => {
		if (message === '422') {
			setIsShown(true);
			setError('Item`s text must contain more than one symbol');
		}
		if (message === '404') {
			setIsShown(true);
			setError('Item is not found');
		}
		if (message === '400') {
			setIsShown(true);
			setError('Item has been already added');
		}		
	}

		const addItem = (task, id, status, time) => {
			if (task) {
				const newItem = {
					// id: Math.random().toString().substr(2,5),
					id: id,
					task: task,
					done: status,
					time: time,
				}
				const newArr = [...items];
				newArr.push(newItem);
				setItems([...newArr]);
				setFilteredItems([...items]);
			}
		}

		const editItem = (newValue, id) => {
			if (newValue) {
				let newArray = resArr.map((item) => item.id === id ? {...item, task: newValue} : {...item});
				setItems([...newArray]);
				setFilteredItems([...newArray]);
			}
		}
		
		const removeItem = (id) => {
			const removedArray = resArr.filter((item) => item.id !== id);
			setItems([...removedArray]);
			setFilteredItems([...removedArray]);
		}

		const checkItem = (id) => {
			const checkArray = resArr.map((item) => item.id === id ? {...item, done: !item.done} : {...item});
			setItems([...checkArray]);
			setFilteredItems([...checkArray]);
		}

		// const showAll = () => {
		// 	setFilter('', () => {
		// 		getData();
		//  });
		// }

		// const showDone = () => {
		// 	setFilter('filterBy=done', () => {
		// 		getData();
		//  });
		// }

		// const showUndone = () => {
		// 	setFilter('filterBy=undone', () => {
		// 		getData();
		//  });
		// }

		const showAll = () => {
			setFilter('');
		}

		const showDone = () => {
			setFilter('filterBy=done');

		}

		const showUndone = () => {
			setFilter('filterBy=undone');
		}

		
		// const showDone = () => {
		// 	const doneArray = resArr.filter((item) => { return item.done !== false});
		// 	setItems([...doneArray]);
		// 		setPage(1);
		// }
		
		// const showUndone = () => {
		// 	const undoneArray = resArr.filter((item) => { return item.done === false});
		// 	setItems([...undoneArray]);
		// 		setPage(1);
		// }

		// const sortUp = () => {
		// 	const desc = 'order=desc';

		// }

		const sortUp = () => {
			setSort('order=desc');
		}

		const sortDown = () => {
			setSort('order=asc');
		}

		// const sortUp = () => {
		// 	const sortUpArray = items.sort((a, b) => {
		// 		if (a.createdAt > b.createdAt) {
		// 			return -1;
		// 		}
		// 		if (a.createdAt < b.createdAt){
		// 			return 1;
		// 		}
		// 		return 0;
		// 		});
				
		// 	setItems([...sortUpArray]);
		// }

		// const sortDown = () => {
		// 	const sortDownArray = items.sort((a, b) => {
		// 		if (a.createdAt < b.createdAt) {
		// 			return -1;
		// 		}
		// 		if (a.createdAt > b.createdAt){
		// 			return 1;
		// 		}
		// 		return 0;
		// 		});

		// 	setItems([...sortDownArray]);
		// }

		const handleClose = (event, reason) => {
			if(reason === 'clickaway') {
				return
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
				addItem={addItem}
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
						 editItem={editItem}
						 item={item}
						 key={item.uuid}
						 checkItem={checkItem}
						 removeItem={removeItem}
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


