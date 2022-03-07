import { HStack, IconButton, VStack } from "@chakra-ui/react";
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
					<btn className="btn" onClick={() => handleCharacter("Q")}>
						Q
					</btn>
					<btn className="btn" onClick={() => handleCharacter("W")}>
						W
					</btn>
					<btn className="btn" onClick={() => handleCharacter("E")}>
						E
					</btn>
					<btn className="btn" onClick={() => handleCharacter("R")}>
						R
					</btn>
					<btn className="btn" onClick={() => handleCharacter("T")}>
						T
					</btn>
					<btn className="btn" onClick={() => handleCharacter("Y")}>
						Y
					</btn>
					<btn className="btn" onClick={() => handleCharacter("U")}>
						U
					</btn>
					<btn className="btn" onClick={() => handleCharacter("I")}>
						I
					</btn>
					<btn className="btn" onClick={() => handleCharacter("O")}>
						O
					</btn>
					<btn className="btn" onClick={() => handleCharacter("P")}>
						P
					</btn>
				</HStack>
				<HStack spacing="1">
					<btn className="btn" onClick={() => handleCharacter("A")}>
						A
					</btn>
					<btn className="btn" onClick={() => handleCharacter("S")}>
						S
					</btn>
					<btn className="btn" onClick={() => handleCharacter("D")}>
						D
					</btn>
					<btn className="btn" onClick={() => handleCharacter("F")}>
						F
					</btn>
					<btn className="btn" onClick={() => handleCharacter("G")}>
						G
					</btn>
					<btn className="btn" onClick={() => handleCharacter("H")}>
						H
					</btn>
					<btn className="btn" onClick={() => handleCharacter("J")}>
						J
					</btn>
					<btn className="btn" onClick={() => handleCharacter("K")}>
						K
					</btn>
					<btn className="btn" onClick={() => handleCharacter("L")}>
						L
					</btn>
				</HStack>
				<HStack spacing="1">
					<IconButton
						icon={<AiOutlineEnter />}
						size="lg"
						onClick={() => handleEnter()}
					/>

					<btn className="btn" onClick={() => handleCharacter("Z")}>
						Z
					</btn>
					<btn className="btn" onClick={() => handleCharacter("X")}>
						X
					</btn>
					<btn className="btn" onClick={() => handleCharacter("C")}>
						C
					</btn>
					<btn className="btn" onClick={() => handleCharacter("V")}>
						V
					</btn>
					<btn className="btn" onClick={() => handleCharacter("B")}>
						B
					</btn>
					<btn className="btn" onClick={() => handleCharacter("N")}>
						N
					</btn>
					<btn className="btn" onClick={() => handleCharacter("M")}>
						M
					</btn>
					<IconButton
						icon={<TiBackspaceOutline />}
						size="lg"
						onClick={() => handleBackspace()}
					/>
				</HStack>
			</VStack>
		</div>
	);
};

export default Keyboard;
