import { Badge, Button, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard";
import "./../styles/Game.css";
import WordBoxNoob from "./../components/WordBoxes/WordBoxNoob";
import WordBoxOriginal from "./../components/WordBoxes/WordBoxOriginal";
import WordBoxStandard from "./../components/WordBoxes/WordBoxStandard";
import dictionary from "./../data/dict";
import ModalBox from "../components/ModalBox";
const Game = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [pageLoaded, setPageLoaded] = useState(false);
	const [currLevel, setCurrLevel] = useState(null);
	const [wordLength, setWordLength] = useState(-1);
	const [row, setRow] = useState(0);
	const [column, setColumn] = useState(0);
	const [R, setR] = useState(null);
	const [rowLimit, setRowLimit] = useState(null);
	const [columnLimit, setColumnLimit] = useState(null);
	const [answer, setAnswer] = useState(null);
	const toast = useToast();
	const [openModalBox, setOpenModalBox] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const gameWon = () => {
		toast({
			status: "success",
			title: "That was the correct Word!",
			duration: "2000",
		});
		setTimeout(() => {
			setOpenModalBox(true);
		}, 1000);
		setGameOver(true);
	};
	const gameLost = () => {
		toast({
			status: "error",
			title: "You have run out of tries! Game Over",
			duration: "2000",
		});
		answerReveal.current.style.display = "block";
		setGameOver(true);
	};

	const answerReveal = useRef();

	const handleSubmit = () => {
		var submittedWord = "";
		for (var idx = 0; idx < columnLimit; ++idx) {
			submittedWord += R[row][idx].current.value;
			console.log(R[row][idx].current.value);
		}
		submittedWord = submittedWord.toLowerCase();
		if (dictionary.includes(submittedWord)) {
			// alert("YES");
			var equal = true;
			for (var i = 0; i < columnLimit; ++i) {
				if (submittedWord[i] === answer[i]) {
					R[row][i].current.style.background = "green";
				} else {
					equal = false;
					if (answer.includes(submittedWord[i])) {
						R[row][i].current.style.background =
							"linear-gradient(orange,green)";
					} else {
						R[row][i].current.style.background =
							"linear-gradient(brown,red)";
					}
				}
			}
			if (equal) {
				gameWon();
			}
			if (row === rowLimit - 1) {
				console.log("no more chances");
				gameLost();
			}
			setColumn(0);
			setRow(row + 1);
		} else {
			// alert("No");
			toast({
				status: "error",
				title: "This word does not exist",
				duration: 2000,
			});
		}
	};

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
				{/* <Badge colorScheme={"red"}>{answer}</Badge>  */}
				{/* shows answer*/}
			</div>
			<div className="game">
				<div className="wordbox">
					{wordLength === 3 ? (
						<WordBoxNoob
							row={row}
							setRow={setRow}
							column={column}
							setColumn={setColumn}
							R={R}
							setR={setR}
							setRowLimit={setRowLimit}
							setColumnLimit={setColumnLimit}
							setAnswer={setAnswer}
						/>
					) : wordLength === 4 ? (
						<WordBoxStandard
							row={row}
							setRow={setRow}
							column={column}
							setColumn={setColumn}
							R={R}
							setR={setR}
							setAnswer={setAnswer}
						/>
					) : wordLength === 5 ? (
						<WordBoxOriginal
							row={row}
							setRow={setRow}
							column={column}
							setColumn={setColumn}
							R={R}
							setR={setR}
							setAnswer={setAnswer}
						/>
					) : (
						""
					)}
				</div>
				<div className="answer-reveal" ref={answerReveal}>
					<Text>
						The Word was{" "}
						<Badge colorScheme={"green"}>{answer}</Badge>
					</Text>
				</div>
				<div className="modalboxwrapper">
					<ModalBox
						openModalBox={openModalBox}
						level={currLevel}
						setOpenModalBox={setOpenModalBox}
					/>
				</div>
				<div className="submit-word-btn">
					<Button
						colorScheme={"yellow"}
						onClick={() => handleSubmit()}
					>
						Submit Word
					</Button>
				</div>
				<div className="keyboard">
					<Keyboard
						row={row}
						setRow={setRow}
						column={column}
						setColumn={setColumn}
						R={R}
						setR={setR}
						rowLimit={rowLimit}
						columnLimit={columnLimit}
						handleSubmit={handleSubmit}
						gameOver={gameOver}
					/>
				</div>
			</div>
		</div>
	);
};

export default Game;
