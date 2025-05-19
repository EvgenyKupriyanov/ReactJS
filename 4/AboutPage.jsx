import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
	return (
		<div>
			<h1>О нас</h1>
			<ul>
				<li><Link to="/home">Home Page</Link></li>
				<li><Link to="/">Main Page</Link></li>
			</ul>
		</div>
	);
};
export default AboutPage;
