import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const HomePage = () => {
	return (
		<div>
			<h1>Главная страница</h1>
      <ul>
        <Button component={Link} to="/about" variant="contained">About us Page</Button>
        <li><Link to="/">Main Page</Link></li>
      </ul>
		</div>
	);
};
export default HomePage;
