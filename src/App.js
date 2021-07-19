import axios from 'axios';
import {useState, useEffect} from 'react';
import ToDoForm from './To-do-form';
import FilterItems from "./Filter-items";
import SortItems from "./Sort-items";
import ToDoItem from './To-do-item';
import Pages from './Pages';
import { Typography, List } from '@material-ui/core';
import useStyles from './App.style.js'


function App() {
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [page, setPage] = useState(1);
	const [itemsPerPage] = useState(5);
	const classes = useStyles();

	const lastItemIndex = page * itemsPerPage;
	const firstItemIndex = lastItemIndex - itemsPerPage;
	const currentPage = items.slice(firstItemIndex, lastItemIndex);

	const getLink = 'https://todo-api-learning.herokuapp.com/v1/tasks/2';
	const postLink = 'https://todo-api-learning.herokuapp.com/v1/task/2';
	const patchLink = (id) => {
		return `https://todo-api-learning.herokuapp.com/v1/task/2/${id}`
	}

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const res = await axios.get(getLink);
		console.log(res.data);
			setItems([...res.data]);
		}

	const postData = async (task) => {
		if (task) {
			await axios.post(postLink, {name: task, done: false});
			getData();
		}
	}

	const deleteData = async (id) => {
		await axios.delete(patchLink(id))
		getData();
	}

	const checkData = async (item, id) => {
		await axios.patch(patchLink(id), {done: !item.done})
		getData();
		console.log(id)
	}

	const editData = async (item, todoText, uuid) => {
		await axios.patch(patchLink(uuid), {name: todoText})
		getData();
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
				let newArray = items.map((item) => item.id === id ? {...item, task: newValue} : {...item});
				setItems([...newArray]);
				setFilteredItems([...newArray]);
			}
		}
		
		const removeItem = (id) => {
			const removedArray = items.filter((item) => item.id !== id);
			setItems([...removedArray]);
			setFilteredItems([...removedArray]);
		}

		const checkItem = (id) => {
			const checkArray = items.map((item) => item.id === id ? {...item, done: !item.done} : {...item});
			setItems([...checkArray]);
			setFilteredItems([...checkArray]);
		}

		const showAll = () => {
			setFilteredItems([...items]);
		}
		
		const showDone = () => {
			const doneArray = items.filter((item) => { return item.done !== false});
			setFilteredItems([...doneArray]);
				setPage(1);
		}
		
		const showUndone = () => {
			const undoneArray = items.filter((item) => { return item.done === false});
			setFilteredItems([...undoneArray]);
				setPage(1);
		}

		const sortUp = () => {
			const sortUpArray = items.sort((a, b) => {
				if (a.time > b.time) {
					return -1;
				}
				if (a.time < b.time){
					return 1;
				}
				return 0;
				});
				
			setFilteredItems([...sortUpArray]);
			console.log(filteredItems);
			console.log(items);
		}

		const sortDown = () => {
			const sortDownArray = items.sort((a, b) => {
				if (a.time < b.time) {
					return -1;
				}
				if (a.time > b.time){
					return 1;
				}
				return 0;
				});

			setFilteredItems([...sortDownArray]);
			console.log(filteredItems);
			console.log(items);
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
						filteredItems={[...filteredItems]}
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
							/>
			}
		</main>
	);
}

export default App;


