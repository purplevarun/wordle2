import React from "react";
import { useLocation } from "react-router-dom";
import "./../styles/About.css";
const About = () => {
	const location = useLocation();
	return (
		<div className="about">
			<h1>hello world</h1>
			<h2>{location.state.name}</h2>
		</div>
	);
};

export default About;
