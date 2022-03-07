import { Button, HStack, IconButton, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./../styles/Keyboard.css";
import { AiOutlineEnter } from "react-icons/ai";
import { TiBackspaceOutline } from "react-icons/ti";
const Keyboard = ({
	row,
	column,
	setRow,
	setColumn,
	R,
	setR,
	rowLimit,
	columnLimit,
	handleSubmit,
	gameOver,
}) => {
	const handleBackspace = () => {
		console.log(`row = ${row}, column = ${column}`);

		console.log("you pressed backspace ");
		setColumn(column - 1);
		if (column < 0) setColumn(0);
		if (row < 0 || row >= rowLimit || column < 0 || column >= columnLimit) {
			console.log("limit exceed");
			console.log(`row = ${row}, column = ${column}`);
			if (column >= columnLimit) setColumn(columnLimit - 1);
			if (row >= rowLimit) setRow(rowLimit - 1);
			if (column < 0) setColumn(0);
			if (row < 0) setRow(0);
			return;
		}
		R[row][column].current.style.background = "none";
		R[row][column].current.value = "";
		return;
	};
	const handleEnter = () => {
		console.log(`row = ${row}, column = ${column}`);
		console.log("you pressed enter");
		handleSubmit();
		return;
	};
	const handleCharacter = (char) => {
		console.log(`row = ${row}, column = ${column}`);
		// console.log("you pressed ", char);
		setColumn(column + 1);
		if (column >= columnLimit) setColumn(columnLimit - 1);
		if (row < 0 || row >= rowLimit || column < 0 || column >= columnLimit) {
			console.log("limit exceed");
			console.log(`row = ${row}, column = ${column}`);
			console.log(`row = ${row}, column = ${column}`);
			if (column >= columnLimit) setColumn(columnLimit - 1);
			if (row >= rowLimit) setRow(rowLimit - 1);
			if (column < 0) setColumn(0);
			if (row < 0) setRow(0);
			return;
		}
		// R[row][column].current.style.borderColor = "red";
		R[row][column].current.value = char;
		return;
	};
	const handleKeyDown = (event) => {
		if (event.keyCode === 8) {
			handleBackspace();
			return;
		}
		if (event.keyCode === 13) {
			handleEnter();
			return;
		}
		if (event.keyCode >= 65 && event.keyCode <= 90) {
			const pressedKey = String.fromCharCode(event.keyCode);
			handleCharacter(pressedKey);
			return;
		} else {
		}
	};
	useEffect(() => {
		if (!gameOver) {
			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		}
	});
	return (
		<div className="keyboard">
			<VStack spacing="1">
				<HStack spacing="1">
					<Button onClick={() => handleCharacter("Q")}>Q</Button>
					<Button onClick={() => handleCharacter("W")}>W</Button>
					<Button onClick={() => handleCharacter("E")}>E</Button>
					<Button onClick={() => handleCharacter("R")}>R</Button>
					<Button onClick={() => handleCharacter("T")}>T</Button>
					<Button onClick={() => handleCharacter("Y")}>Y</Button>
					<Button onClick={() => handleCharacter("U")}>U</Button>
					<Button onClick={() => handleCharacter("I")}>I</Button>
					<Button onClick={() => handleCharacter("O")}>O</Button>
					<Button onClick={() => handleCharacter("P")}>P</Button>
				</HStack>
				<HStack spacing="1">
					<Button onClick={() => handleCharacter("A")}>A</Button>
					<Button onClick={() => handleCharacter("S")}>S</Button>
					<Button onClick={() => handleCharacter("D")}>D</Button>
					<Button onClick={() => handleCharacter("F")}>F</Button>
					<Button onClick={() => handleCharacter("G")}>G</Button>
					<Button onClick={() => handleCharacter("H")}>H</Button>
					<Button onClick={() => handleCharacter("J")}>J</Button>
					<Button onClick={() => handleCharacter("K")}>K</Button>
					<Button onClick={() => handleCharacter("L")}>L</Button>
				</HStack>
				<HStack spacing="1">
					<IconButton
						icon={<AiOutlineEnter />}
						onClick={() => handleEnter()}
					/>

					<Button onClick={() => handleCharacter("Z")}>Z</Button>
					<Button onClick={() => handleCharacter("X")}>X</Button>
					<Button onClick={() => handleCharacter("C")}>C</Button>
					<Button onClick={() => handleCharacter("V")}>V</Button>
					<Button onClick={() => handleCharacter("B")}>B</Button>
					<Button onClick={() => handleCharacter("N")}>N</Button>
					<Button onClick={() => handleCharacter("M")}>M</Button>
					<IconButton
						icon={<TiBackspaceOutline />}
						onClick={() => handleBackspace()}
					/>
				</HStack>
			</VStack>
		</div>
	);
};

export default Keyboard;
