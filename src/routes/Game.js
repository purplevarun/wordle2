import { Badge } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard";
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
		<div>
			<div className="levelindicator">
				<Badge colorScheme={"teal"}>{currLevel}</Badge>
			</div>
			<div className="game">
				<Keyboard />
			</div>
		</div>
	);
};

export default Game;
