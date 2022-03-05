import { Badge, Button } from "@chakra-ui/react";
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
	const [row, setRow] = useState(0);
	const [column, setColumn] = useState(0);
	const [pressedKeyFromKeyboard, setPressedKeyFromKeyboard] = useState(0);
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
						<WordBoxNoob
							row={row}
							setRow={setRow}
							column={column}
							setColumn={setColumn}
							pressedKeyFromKeyboard={pressedKeyFromKeyboard}
						/>
					) : wordLength === 4 ? (
						<WordBoxStandard
							row={row}
							setRow={setRow}
							column={column}
							setColumn={setColumn}
							pressedKeyFromKeyboard={pressedKeyFromKeyboard}
						/>
					) : wordLength === 5 ? (
						<WordBoxOriginal
							row={row}
							setRow={setRow}
							column={column}
							setColumn={setColumn}
							pressedKeyFromKeyboard={pressedKeyFromKeyboard}
						/>
					) : (
						""
					)}
				</div>
				<div className="submit-word-btn">
					<Button colorScheme={"yellow"}>Submit Word</Button>
				</div>
				<div className="keyboard">
					<Keyboard
						row={row}
						setRow={setRow}
						column={column}
						setColumn={setColumn}
						pressedKeyFromKeyboard={pressedKeyFromKeyboard}
						setPressedKeyFromKeyboard={setPressedKeyFromKeyboard}
					/>
				</div>
			</div>
		</div>
	);
};

export default Game;
