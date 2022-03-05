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
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
				<HStack spacing={4}>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
				<HStack spacing={4}>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
				<HStack spacing={4}>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
					<Input textAlign="center"></Input>
				</HStack>
			</VStack>
		</div>
	);
};

export default WordBoxStandard;
