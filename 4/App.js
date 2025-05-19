import logo from "./logo.svg";
import "./App.css";
import Message from "./hw_1";
import CommentsList from "./hw_2";
import TemperatureConverter from "./hw_3_1";
import TodoList from "./hw_3_2";
import { Link, BrowserRouter as BrowserRouter, Router, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route
					path="/"
					element={
						<div className="App">
							<header className="App-header">
								<Message text="Это я" />
								<CommentsList />
								<TemperatureConverter />
								<TodoList />
                <div>
                  <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button component={Link} to="/home">Home Page</Button>
                    <Button component={Link} to="/about">About us Page</Button>
                    </ButtonGroup>
                </div>
							</header>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
