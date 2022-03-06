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
					<Button onClick={() => handleCharacter("Q")} size="xs">
						Q
					</Button>
					<Button onClick={() => handleCharacter("W")} size="xs">
						W
					</Button>
					<Button onClick={() => handleCharacter("E")} size="xs">
						E
					</Button>
					<Button onClick={() => handleCharacter("R")} size="xs">
						R
					</Button>
					<Button onClick={() => handleCharacter("T")} size="xs">
						T
					</Button>
					<Button onClick={() => handleCharacter("Y")} size="xs">
						Y
					</Button>
					<Button onClick={() => handleCharacter("U")} size="xs">
						U
					</Button>
					<Button onClick={() => handleCharacter("I")} size="xs">
						I
					</Button>
					<Button onClick={() => handleCharacter("O")} size="xs">
						O
					</Button>
					<Button onClick={() => handleCharacter("P")} size="xs">
						P
					</Button>
					<IconButton
						icon={<TiBackspaceOutline />}
						size="sm"
						onClick={() => handleBackspace()}
					/>
				</HStack>
				<HStack p="1" spacing="1.5">
					<Button onClick={() => handleCharacter("A")} size="xs">
						A
					</Button>
					<Button onClick={() => handleCharacter("S")} size="xs">
						S
					</Button>
					<Button onClick={() => handleCharacter("D")} size="xs">
						D
					</Button>
					<Button onClick={() => handleCharacter("F")} size="xs">
						F
					</Button>
					<Button onClick={() => handleCharacter("G")} size="xs">
						G
					</Button>
					<Button onClick={() => handleCharacter("H")} size="xs">
						H
					</Button>
					<Button onClick={() => handleCharacter("J")} size="xs">
						J
					</Button>
					<Button onClick={() => handleCharacter("K")} size="xs">
						K
					</Button>
					<Button onClick={() => handleCharacter("L")} size="xs">
						L
					</Button>
					<IconButton
						icon={<AiOutlineEnter />}
						size="sm"
						onClick={() => handleEnter()}
					/>
				</HStack>
				<HStack p="1" spacing="1.5">
					<Button onClick={() => handleCharacter("Z")} size="xs">
						Z
					</Button>
					<Button onClick={() => handleCharacter("X")} size="xs">
						X
					</Button>
					<Button onClick={() => handleCharacter("C")} size="xs">
						C
					</Button>
					<Button onClick={() => handleCharacter("V")} size="xs">
						V
					</Button>
					<Button onClick={() => handleCharacter("B")} size="xs">
						B
					</Button>
					<Button onClick={() => handleCharacter("N")} size="xs">
						N
					</Button>
					<Button onClick={() => handleCharacter("M")} size="xs">
						M
					</Button>
				</HStack>
			</VStack>
		</div>
	);
};

export default Keyboard;
