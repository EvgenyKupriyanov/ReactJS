import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


//Задание 2: Список дел с Material UI

//Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

function TodoList() {
	const [list, listSet] = useState([]);
	const [note, noteSet] = useState("");
	function submit() {
		listSet((prevList) => [...prevList, note]);
		noteSet("");
	}
	function delNote(note) {
		listSet(list.filter((listNote) => listNote !== note));
	}

	return (
		<>
			<div className="inputNote">
				<TextField
					id="outlined-basic"
					label="Enter new note"
					variant="outlined"
					value={note}
					onChange={(e) => {
						noteSet(e.target.value);
					}}
				/>
				<Button variant="contained" onClick={submit}>Submit</Button>
			</div>
			<ul>
				{list.map((item, index) => (
					<div className="todoNote">
						<li className="todoNote__text" key={index}>
							{item}
						</li>
						<DeleteIcon onClick={() => delNote(item)} />
					</div>
				))}
			</ul>
		</>
	);
}

export default TodoList;