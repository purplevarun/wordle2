import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./../styles/Game.css";
const Game = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [pageLoaded, setPageLoaded] = useState(false);
	const [currLevel, setCurrLevel] = useState(null);
	useEffect(() => {
		if (pageLoaded === false) {
			if (location.state && location.state.level) {
				setCurrLevel(location.state.level);
			} else {
				navigate("/notFound");
			}
		}
		setPageLoaded(true);
	}, [location.state, navigate, pageLoaded, setPageLoaded]);
	return (
		<div className="game">
			<h1>{currLevel}</h1>
		</div>
	);
};

export default Game;
