import { HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import "./../../styles/WordBox.css";

const WordBoxStandard = () => {
	const rowLimit = 4,
		columnLimit = 4;
	return (
		<div className="wordbox">
			<VStack spacing={4} flex={1} justify="center" ml="2" mr={2}>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
				<HStack spacing={4}>
					<Input></Input>
					<Input></Input>
					<Input></Input>
					<Input></Input>
				</HStack>
			</VStack>
			{/* <h1>word length = {wordLength}</h1> */}
		</div>
	);
};

export default WordBoxStandard;
