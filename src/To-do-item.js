import { useState } from 'react';
import { ListItem, Checkbox, Button, TextField, Typography } from '@material-ui/core/';
import useStyles from './To-do-item.style.js';

function ToDoItem({ item, checkItem, editItem, deleteData, checkData }) {    
	const [todoText, setTodoText] = useState(item.name);
	const [isEditing, setIsEditing] = useState(false);
	const classes = useStyles();

	const editting = (e, id) => {
		setTodoText(e.target.value);
		if (e.key === 'Enter') {        
			editItem(todoText, uuid);
			hideInput();
		}
		if (e.key === 'Escape') {
			calcelEditting();
		}
	}

	const calcelEditting = () => {
		setTodoText(item.name);
		hideInput();
	}

	const hideInput = (e) => {
		setIsEditing(false);
	}

	return (
		<ListItem className={classes.todoLi}
			key={item.uuid}
			onDoubleClick={(e) => setIsEditing(true)}>
					<div className={classes.liInner}>
						<Checkbox 
							onClick={() => checkData(item, item.uuid)}
							type="checkbox" 
							id={'inp_' + item.uuid}
							defaultChecked={item.done}
							color="primary"
						/>
						{isEditing ?
							<TextField 
								autoFocus
								onBlur={() => calcelEditting()}
								value={todoText}
								onChange={(e) => editting(e, item.uuid)}
								onKeyDown={(e) => editting(e, item.uuid)}
								className={classes.editInp}
								type="text"
								id={'edit_' + item.uuid}
							/>
						:
							<Typography className={classes.typography}>{item.name}</Typography>
						}
					</div>
		  <div className={classes.liFunc}>
				<div className={classes.todoDate}>
					<Typography className={classes.typography}>
						{/* {item.time.substr(0, 10)} */}
					</Typography>
				</div>
				<Button variant="outlined" className={classes.delete} onClick={() => deleteData(item.uuid)}>
					<i className="far fa-trash-alt fa-lg"></i>
				</Button>
		  </div>
		</ListItem>
	);
}

export default ToDoItem;