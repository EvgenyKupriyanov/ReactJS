import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//Задание 1: Температурный конвертер с Material UI

//Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

function TemperatureConverter() {
	const [cels, celsSet] = useState("");
	const [fahr, farhSet] = useState("");
	const [history, historySet] = useState([]);

	function convert() {
		if (cels) {
			const farVal = (Number(cels) * 9) / 5 + 32;
			farhSet(farVal);
			historySet((prevHistory) => [...prevHistory, farVal]);
		} else if (fahr) {
			const celVal = ((Number(fahr) - 32) * 5) / 9;
			celsSet(celVal);
			historySet((prevHistory) => [...prevHistory, celVal]);
		}
	}

	return (
		<>
			<div className="degrees">
				<TextField
					className="cels"
					id="outlined-basic"
					label="Celsius"
					variant="outlined"
					value={cels}
					onChange={(e) => {
						celsSet(e.target.value);
						farhSet("");
					}}
				/>
				<TextField
					className="fahr"
					id="outlined-basic"
					label="Fahrenheit"
					variant="outlined"
					value={fahr}
					onChange={(e) => {
						farhSet(e.target.value);
						celsSet("");
					}}
				/>
			</div>
			<Button variant="contained" onClick={convert}>
				
				Convert
			</Button>
			<ul>
				{history.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default TemperatureConverter;


