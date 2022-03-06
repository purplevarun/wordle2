import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useColorMode,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const { colorMode, toggleColorMode } = useColorMode();
	const navigate = useNavigate();
	return (
		<>
			<Button
				ref={btnRef}
				colorScheme="gray"
				onClick={onOpen}
				ml="10px"
				mt="10px"
			>
				Settings
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Wordle2.0 Settings</DrawerHeader>

					<DrawerBody>
						<VStack height="60px"></VStack>
						<VStack>
							<Button onClick={toggleColorMode}>
								{colorMode === "dark"
									? "Light Mode"
									: "Dark Mode"}
							</Button>
							<Button
								colorScheme={"blue"}
								onClick={() => navigate("/wordle2/")}
							>
								Homepage
							</Button>
							<Button
								colorScheme="facebook"
								onClick={() => navigate("/wordle2/rules")}
							>
								Rules
							</Button>
							<VStack height="60px"></VStack>

							<Button
								colorScheme="pink"
								onClick={() => navigate("/wordle2/about")}
							>
								About the Developer
							</Button>
						</VStack>
					</DrawerBody>

					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Sidebar;
