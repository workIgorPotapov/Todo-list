import { useState } from 'react';
import { ListItem, Checkbox, Button, TextField, Typography } from '@material-ui/core/';
import useStyles from './To-do-item.style.js';

function ToDoItem({ item, deleteData, checkData, editData }) { 
	const [todoText, setTodoText] = useState(item.name);
	const [isEditing, setIsEditing] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const classes = useStyles();

	const editting = (e, todoText) => {
		setTodoText(e.target.value);
		if (e.key === 'Enter') {        
			editData(todoText, item.uuid);
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

	const hideInput = () => {
		setIsEditing(false);
	}

	const deleting = async (id) => {
		setIsDisabled(true);
		const response = await deleteData(id);
		if (response) {
			setIsDisabled(false);
		}
	}

	return (
		<ListItem className={classes.todoLi}
			key={item.uuid}>
					<div className={classes.liInner}>
						<Checkbox 
							onClick={() => checkData(item, item.uuid)}
							type="checkbox" 
							id={'inp_' + item.uuid}
							checked={item.done}
							color="primary"
						/>
						{isEditing ?
							<TextField 
								autoFocus
								onBlur={() => calcelEditting()}
								value={todoText}
								onKeyDown={(e) => editting(e, todoText, item.uuid)}
								onChange={(e) => editting(e, todoText, item.uuid)}
								className={classes.editInp}
								type="text"
								id={'edit_' + item.uuid}
							/>
						:
							<Typography onDoubleClick={(e) => setIsEditing(true)}
							className={classes.typography}>{item.name}</Typography>
						}
					</div>
		  <div className={classes.liFunc}>
				<div className={classes.todoDate}>
					<Typography className={classes.typography}>
						{item.createdAt.substr(0, 10)}
					</Typography>
				</div>
				<Button variant="outlined" disabled={isDisabled}className={classes.delete} onClick={() => deleting(item.uuid)}>
					<i className="far fa-trash-alt fa-lg"></i>
				</Button>
		  </div>
		</ListItem>
	);
}

export default ToDoItem;