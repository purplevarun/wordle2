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
					<Button onClick={() => handleCharacter("Q")} size="sm">
						Q
					</Button>
					<Button onClick={() => handleCharacter("W")} size="sm">
						W
					</Button>
					<Button onClick={() => handleCharacter("E")} size="sm">
						E
					</Button>
					<Button onClick={() => handleCharacter("R")} size="sm">
						R
					</Button>
					<Button onClick={() => handleCharacter("T")} size="sm">
						T
					</Button>
					<Button onClick={() => handleCharacter("Y")} size="sm">
						Y
					</Button>
					<Button onClick={() => handleCharacter("U")} size="sm">
						U
					</Button>
					<Button onClick={() => handleCharacter("I")} size="sm">
						I
					</Button>
					<Button onClick={() => handleCharacter("O")} size="sm">
						O
					</Button>
					<Button onClick={() => handleCharacter("P")} size="sm">
						P
					</Button>
				</HStack>
				<HStack spacing="1">
					<Button onClick={() => handleCharacter("A")} size="sm">
						A
					</Button>
					<Button onClick={() => handleCharacter("S")} size="sm">
						S
					</Button>
					<Button onClick={() => handleCharacter("D")} size="sm">
						D
					</Button>
					<Button onClick={() => handleCharacter("F")} size="sm">
						F
					</Button>
					<Button onClick={() => handleCharacter("G")} size="sm">
						G
					</Button>
					<Button onClick={() => handleCharacter("H")} size="sm">
						H
					</Button>
					<Button onClick={() => handleCharacter("J")} size="sm">
						J
					</Button>
					<Button onClick={() => handleCharacter("K")} size="sm">
						K
					</Button>
					<Button onClick={() => handleCharacter("L")} size="sm">
						L
					</Button>
				</HStack>
				<HStack spacing="1">
					<IconButton
						icon={<AiOutlineEnter />}
						size="sm"
						onClick={() => handleEnter()}
					/>

					<Button onClick={() => handleCharacter("Z")} size="sm">
						Z
					</Button>
					<Button onClick={() => handleCharacter("X")} size="sm">
						X
					</Button>
					<Button onClick={() => handleCharacter("C")} size="sm">
						C
					</Button>
					<Button onClick={() => handleCharacter("V")} size="sm">
						V
					</Button>
					<Button onClick={() => handleCharacter("B")} size="sm">
						B
					</Button>
					<Button onClick={() => handleCharacter("N")} size="sm">
						N
					</Button>
					<Button onClick={() => handleCharacter("M")} size="sm">
						M
					</Button>
					<IconButton
						icon={<TiBackspaceOutline />}
						size="sm"
						onClick={() => handleBackspace()}
					/>
				</HStack>
			</VStack>
		</div>
	);
};

export default Keyboard;
