import { Button, HStack, IconButton, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./../styles/Keyboard.css";
import { AiOutlineEnter } from "react-icons/ai";
import { TiBackspaceOutline } from "react-icons/ti";
const Keyboard = () => {
	const handleBackspace = () => {
		console.log("you pressed backspace");
	};
	const handleEnter = () => {
		console.log("you pressed enter");
	};
	const handleCharacter = (char) => {
		console.log("you pressed ", char);
	};
	const handleKeyDown = (event) => {
		if (event.keyCode === 8) {
			handleBackspace();
		}
		if (event.keyCode === 13) {
			handleEnter();
		}
		if (event.keyCode >= 65 && event.keyCode <= 90) {
			const pressedKey = String.fromCharCode(event.keyCode);
			handleCharacter(pressedKey);
		} else {
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
	});
	return (
		<div className="keyboard">
			<VStack spacing="0">
				<HStack p="1" spacing="3">
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
					<IconButton
						icon={<TiBackspaceOutline />}
						size="lg"
						onClick={() => handleBackspace()}
					/>
				</HStack>
				<HStack p="1" spacing="3">
					<Button onClick={() => handleCharacter("A")}>A</Button>
					<Button onClick={() => handleCharacter("S")}>S</Button>
					<Button onClick={() => handleCharacter("D")}>D</Button>
					<Button onClick={() => handleCharacter("F")}>F</Button>
					<Button onClick={() => handleCharacter("G")}>G</Button>
					<Button onClick={() => handleCharacter("H")}>H</Button>
					<Button onClick={() => handleCharacter("J")}>J</Button>
					<Button onClick={() => handleCharacter("K")}>K</Button>
					<Button onClick={() => handleCharacter("L")}>L</Button>
					<IconButton
						icon={<AiOutlineEnter />}
						size="lg"
						onClick={() => handleEnter()}
					/>
				</HStack>
				<HStack p="1" spacing="3">
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
			</VStack>
		</div>
	);
};

export default Keyboard;
