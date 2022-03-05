import { HStack, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import "./../../styles/WordBox.css";
const WordBoxNoob = ({
	row,
	column,
	setRow,
	setColumn,
	pressedKeyFromKeyboard,
}) => {
	const rowLimit = 4,
		columnLimit = 3;
	const r00 = useRef();
	const r01 = useRef();
	const r02 = useRef();
	const R = [[r00, r01, r02], [], []];

	useEffect(() => {
		if (row < 0 || row >= rowLimit || column < 0 || column >= columnLimit) {
			console.log("limit exceed");
			return;
		} else {
			console.log(`row = ${row}, column = ${column}`);
		}
	});
	return (
		<div className="wordbox">
			<VStack spacing={4} flex={1} justify="center" ml="2" mr={2}>
				<HStack spacing={4}>
					<Input ref={r00}></Input>
					<Input ref={r01}></Input>
					<Input ref={r02}></Input>
				</HStack>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
			</VStack>
		</div>
	);
};

export default WordBoxNoob;
