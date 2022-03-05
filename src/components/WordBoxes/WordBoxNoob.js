import { HStack, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import "./../../styles/WordBox.css";
import threeLetterWords from "./../../data/words/three-letter-words";
const WordBoxNoob = ({
	row,
	column,
	setRow,
	setColumn,
	R,
	setR,
	setRowLimit,
	setColumnLimit,
	setAnswer,
}) => {
	const rowLimit = 4,
		columnLimit = 3;
	const r00 = useRef();
	const r01 = useRef();
	const r02 = useRef();
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setRowLimit(4);
		setColumnLimit(3);
		// console.log(`row = ${row}, column = ${column}`);
		if (!loaded) {
			setR([[r00, r01, r02], [], []]);
			const randomWord =
				threeLetterWords[
					Math.floor(Math.random() * threeLetterWords.length)
				];
			setAnswer(randomWord);
		}
		setLoaded(true);
		if (row < 0 || row >= rowLimit || column < 0 || column >= columnLimit) {
			console.log("limit exceed");
			console.log(`row = ${row}, column = ${column}`);
			if (column >= columnLimit) setColumn(columnLimit - 1);
			if (row >= rowLimit) setRow(rowLimit - 1);
			if (column < 0) setColumn(0);
			if (row < 0) setRow(0);
			return;
		}
	}, [
		row,
		column,
		loaded,
		setR,
		setRowLimit,
		setColumnLimit,
		setColumn,
		setRow,
		setAnswer,
	]);
	return (
		<div className="wordbox">
			<VStack spacing={4} flex={1} justify="center" ml="2" mr={2}>
				<HStack spacing={4}>
					<Input ref={r00} textAlign="center"></Input>
					<Input ref={r01} textAlign="center"></Input>
					<Input ref={r02} textAlign="center"></Input>
				</HStack>
				<HStack spacing={4}>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
				<HStack spacing={4}>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
				<HStack spacing={4}>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
			</VStack>
		</div>
	);
};

export default WordBoxNoob;
