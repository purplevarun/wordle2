import { Badge } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard";
import "./../styles/Game.css";
import WordBoxNoob from "./../components/WordBoxes/WordBoxNoob";
import WordBoxOriginal from "./../components/WordBoxes/WordBoxOriginal";
import WordBoxStandard from "./../components/WordBoxes/WordBoxStandard";
const Game = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [pageLoaded, setPageLoaded] = useState(false);
	const [currLevel, setCurrLevel] = useState(null);
	const [wordLength, setWordLength] = useState(-1);
	useEffect(() => {
		if (pageLoaded === false) {
			if (location.state && location.state.level) {
				setCurrLevel(location.state.level);
			} else {
				navigate("/notFound");
			}
		}
		setPageLoaded(true);
		if (currLevel === "Noob") setWordLength(3);
		if (currLevel === "Standard") setWordLength(4);
		if (currLevel === "Original") setWordLength(5);
	}, [currLevel, location.state, navigate, pageLoaded, setPageLoaded]);
	return (
		<div>
			<div className="levelindicator">
				<Badge colorScheme={"teal"}>{currLevel}</Badge>
			</div>
			<div className="game">
				<div className="wordbox">
					{wordLength === 3 ? (
						<WordBoxNoob />
					) : wordLength === 4 ? (
						<WordBoxStandard />
					) : wordLength === 5 ? (
						<WordBoxOriginal />
					) : (
						""
					)}
				</div>
				<div className="keyboard">
					<Keyboard />
				</div>
			</div>
		</div>
	);
};

export default Game;
