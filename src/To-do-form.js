import { useState } from "react";
import { TextField } from '@material-ui/core';
import useStyles from './To-do-form.style.js'



function ToDoForm({ postData }) {
	const [inputValue, setInputValue] = useState('');
	const classes = useStyles();

	const handleChange = (e) => {
		setInputValue(e.currentTarget.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		postData(inputValue)
		setInputValue('');
	}

	const handleKeyPress = (e) => {        
		if (e.key === 'Enter') {
			handleSubmit(e);            
		}
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField 
				value={inputValue}
				className={classes.formInput} 
				type="text" 
				onChange={handleChange}
				onKeyDown={handleKeyPress}
				label="Type something..."
				variant="outlined"
			/>
		</form>
	);
}

export default ToDoForm;