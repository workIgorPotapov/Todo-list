import { useState } from 'react';
import { ListItem, Checkbox, Button, TextField, Typography } from '@material-ui/core/';
import useStyles from './To-do-item.style.js';

function ToDoItem({ item, checkItem, removeItem, editItem }) {    
	const [todoText, setTodoText] = useState(item.task);
	const [isEditing, setIsEditing] = useState(false);
	const classes = useStyles();

	const editting = (e, id) => {
		setTodoText(e.target.value);
		if (e.key === 'Enter') {        
			editItem(todoText, id);
			hideInput();
		}
		if (e.key === 'Escape') {
			calcelEditting();
		}
	}

	const calcelEditting = () => {
		setTodoText(item.task);
		hideInput();
	}

	const hideInput = (e) => {
		setIsEditing(false);
	}

	return (
		<ListItem className={classes.todoLi}
			key={item.id}
			onDoubleClick={(e) => setIsEditing(true)}>
					<div className={classes.liInner}>
						<Checkbox 
							onClick={() => checkItem(item.id)}
							type="checkbox" 
							id={'inp_' + item.id}
							defaultChecked={item.done}
							color="primary"
						/>
						{isEditing ?
							<TextField 
								autoFocus
								onBlur={() => calcelEditting()}
								value={todoText}
								onChange={(e) => editting(e, item.id)}
								onKeyDown={(e) => editting(e, item.id)}
								className={classes.editInp}
								type="text"
								id={'edit_' + item.id}
							/>
						:
							<Typography className={classes.typography}>{item.task}</Typography>
						}
					</div>
		  <div className={classes.liFunc}>
				<div className={classes.todoDate}>
					<Typography className={classes.typography}>
						{item.time.getDate()}/{item.time.getMonth() + 1}/{item.time.getFullYear()}
					</Typography>
				</div>
				<Button variant="outlined" className={classes.delete} onClick={() => removeItem(item.id)}>
					<i className="far fa-trash-alt fa-lg"></i>
				</Button>
		  </div>
		</ListItem>
	);
}

export default ToDoItem;