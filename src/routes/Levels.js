import {
	Button,
	IconButton,
	Tooltip,
	useColorMode,
	useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Levels.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Levels = () => {
	const navigate = useNavigate();
	const [loaded, setLoaded] = useState(false);
	const toast = useToast();
	useEffect(() => {
		if (!loaded) {
			toast({
				status: "error",
				duration: "5000",
				title: "Only Noob Level Available",
				description:
					"Visit About Page to know more. Click on Settings ➡️ About Developer",
			});
		}
		setLoaded(true);
	}, [loaded, toast]);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<div className="levels">
			<header>Select Difficulty Level</header>
			<div className="homepage-mode-changer">
				{colorMode === "dark" ? (
					<IconButton icon={<FaMoon />} onClick={toggleColorMode} />
				) : (
					<IconButton icon={<FaSun />} onClick={toggleColorMode} />
				)}
			</div>
			<div className="level-selection-buttons">
				<Tooltip label="3 letter words" placement="right">
					<Button
						size="lg"
						colorScheme="yellow"
						onClick={() =>
							navigate("/wordle2/play", {
								state: { level: "Noob" },
							})
						}
					>
						<div className="insidebtn">
							<span>Noob</span>
							<img
								src={
									process.env.PUBLIC_URL + "/images/fetus.png"
								}
								alt=""
								width="40px"
							/>
						</div>
					</Button>
				</Tooltip>

				<Tooltip placement="right" label="4 letter words">
					<Button
						size="lg"
						colorScheme="blue"
						disabled={true}
						onClick={() =>
							navigate("/wordle2/play", {
								state: { level: "Standard" },
							})
						}
					>
						<div className="insidebtn">
							<span>Standard</span>
							<img
								src={process.env.PUBLIC_URL + "/images/man.png"}
								alt=""
								width="40px"
							/>
						</div>
					</Button>
				</Tooltip>

				<Tooltip placement="right" label="5 letter words">
					<Button
						size="lg"
						colorScheme="red"
						disabled={true}
						onClick={() =>
							navigate("/wordle2/play", {
								state: { level: "Original" },
							})
						}
					>
						<div className="insidebtn">
							<span>Original</span>
							<img
								src={
									process.env.PUBLIC_URL + "/images/alien.png"
								}
								alt=""
								width="40px"
							/>
						</div>
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};

export default Levels;
