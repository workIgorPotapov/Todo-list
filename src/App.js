import {useState} from 'react';
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
	const currentPage = filteredItems.slice(firstItemIndex, lastItemIndex);

		const addItem = (inputValue) => {
			if (inputValue) {
				const newItem = {
					id: Math.random().toString().substr(2,5),
					task: inputValue,
					done: false,
					time: new Date(),
				}
				items.push(newItem);
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
			const removedAdday = items.filter((item) => item.id !== id);
			setItems([...removedAdday]);
			setFilteredItems([...removedAdday]);
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
			const sortUpArray = items.sort((a, b) => b.time - a.time);
			setFilteredItems([...sortUpArray]);
		}

		const sortDown = () => {
			const sortDownArray = items.sort((a, b) => a.time - b.time);
			setFilteredItems([...sortDownArray]);
		}

	return (
		<main className={classes.main}>
			<header className={classes.header}>
				<Typography className={classes.heading} variant="h1">ToDo</Typography>
				<ToDoForm addItem={addItem}/>
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
						 key={item.id}
						 checkItem={checkItem}
						 removeItem={removeItem}
					 />
					))
				}
			</List>
			{ filteredItems.length > 5 &&
							<Pages 
							setPage={setPage}
							page={page}
							itemsPerPage={itemsPerPage}
							totalItems={filteredItems.length}
							/>
			}
		</main>
	);
}

export default App;


