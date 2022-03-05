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
				</HStack>
			</VStack>
		</div>
	);
};

export default Keyboard;
