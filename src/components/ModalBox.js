import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalBox = ({ openModalBox, level, setOpenModalBox }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		if (openModalBox) {
			onOpen();
			setOpenModalBox(false);
		}
	});
	const navigate = useNavigate();
	const gotoSameLevel = () => {
		window.location.reload(false);
	};
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>You Have Won!</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Congratulation on completing Wordle2.0 on{" "}
							<span style={{ color: "aqua" }}>{level}</span> mode.
						</Text>
					</ModalBody>

					<ModalFooter flex={1} justifyContent="space-between">
						<Button
							colorScheme="blue"
							onClick={() => navigate("/wordl2/")}
						>
							Homepage
						</Button>
						<Button
							colorScheme="red"
							onClick={() =>
								navigate("/wordle2/difficulty-selection")
							}
						>
							Try Another Level
						</Button>
						<Button onClick={() => gotoSameLevel()}>
							Replay This Level
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalBox;
