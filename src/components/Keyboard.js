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
			<VStack spacing="0">
				<HStack p="1" spacing="1.5">
					<Button onClick={() => handleCharacter("Q")} size="lg">
						Q
					</Button>
					<Button onClick={() => handleCharacter("W")} size="lg">
						W
					</Button>
					<Button onClick={() => handleCharacter("E")} size="lg">
						E
					</Button>
					<Button onClick={() => handleCharacter("R")} size="lg">
						R
					</Button>
					<Button onClick={() => handleCharacter("T")} size="lg">
						T
					</Button>
					<Button onClick={() => handleCharacter("Y")} size="lg">
						Y
					</Button>
					<Button onClick={() => handleCharacter("U")} size="lg">
						U
					</Button>
					<Button onClick={() => handleCharacter("I")} size="lg">
						I
					</Button>
					<Button onClick={() => handleCharacter("O")} size="lg">
						O
					</Button>
					<Button onClick={() => handleCharacter("P")} size="lg">
						P
					</Button>
					<IconButton
						icon={<TiBackspaceOutline />}
						size="lg"
						onClick={() => handleBackspace()}
					/>
				</HStack>
				<HStack p="1" spacing="1.5">
					<Button onClick={() => handleCharacter("A")} size="lg">
						A
					</Button>
					<Button onClick={() => handleCharacter("S")} size="lg">
						S
					</Button>
					<Button onClick={() => handleCharacter("D")} size="lg">
						D
					</Button>
					<Button onClick={() => handleCharacter("F")} size="lg">
						F
					</Button>
					<Button onClick={() => handleCharacter("G")} size="lg">
						G
					</Button>
					<Button onClick={() => handleCharacter("H")} size="lg">
						H
					</Button>
					<Button onClick={() => handleCharacter("J")} size="lg">
						J
					</Button>
					<Button onClick={() => handleCharacter("K")} size="lg">
						K
					</Button>
					<Button onClick={() => handleCharacter("L")} size="lg">
						L
					</Button>
					<IconButton
						icon={<AiOutlineEnter />}
						size="lg"
						onClick={() => handleEnter()}
					/>
				</HStack>
				<HStack p="1" spacing="1.5">
					<Button onClick={() => handleCharacter("Z")} size="lg">
						Z
					</Button>
					<Button onClick={() => handleCharacter("X")} size="lg">
						X
					</Button>
					<Button onClick={() => handleCharacter("C")} size="lg">
						C
					</Button>
					<Button onClick={() => handleCharacter("V")} size="lg">
						V
					</Button>
					<Button onClick={() => handleCharacter("B")} size="lg">
						B
					</Button>
					<Button onClick={() => handleCharacter("N")} size="lg">
						N
					</Button>
					<Button onClick={() => handleCharacter("M")} size="lg">
						M
					</Button>
				</HStack>
			</VStack>
		</div>
	);
};

export default Keyboard;
