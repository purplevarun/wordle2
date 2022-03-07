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

	const r10 = useRef();
	const r11 = useRef();
	const r12 = useRef();

	const r20 = useRef();
	const r21 = useRef();
	const r22 = useRef();

	const r30 = useRef();
	const r31 = useRef();
	const r32 = useRef();

	const r40 = useRef();
	const r41 = useRef();
	const r42 = useRef();

	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setRowLimit(5);
		setColumnLimit(3);
		// console.log(`row = ${row}, column = ${column}`);
		if (!loaded) {
			setR([
				[r00, r01, r02],
				[r10, r11, r12],
				[r20, r21, r22],
				[r30, r31, r32],
				[r40, r41, r42],
			]);
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
			console.log(
				`row limit = ${rowLimit} , column limit = ${columnLimit}`
			);
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
					<Input ref={r00} textAlign="center" readOnly={true}></Input>
					<Input ref={r01} textAlign="center" readOnly={true}></Input>
					<Input ref={r02} textAlign="center" readOnly={true}></Input>
				</HStack>
				<HStack spacing={4}>
					<Input ref={r10} textAlign="center" readOnly={true}></Input>
					<Input ref={r11} textAlign="center" readOnly={true}></Input>
					<Input ref={r12} textAlign="center" readOnly={true}></Input>
				</HStack>
				<HStack spacing={4}>
					<Input ref={r20} textAlign="center" readOnly={true}></Input>
					<Input ref={r21} textAlign="center" readOnly={true}></Input>
					<Input ref={r22} textAlign="center" readOnly={true}></Input>
				</HStack>
				<HStack spacing={4}>
					<Input ref={r30} textAlign="center" readOnly={true}></Input>
					<Input ref={r31} textAlign="center" readOnly={true}></Input>
					<Input ref={r32} textAlign="center" readOnly={true}></Input>
				</HStack>
				<HStack spacing={4}>
					<Input ref={r40} textAlign="center" readOnly={true}></Input>
					<Input ref={r41} textAlign="center" readOnly={true}></Input>
					<Input ref={r42} textAlign="center" readOnly={true}></Input>
				</HStack>
			</VStack>
		</div>
	);
};

export default WordBoxNoob;
