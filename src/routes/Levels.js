import { Button, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Levels.css";
const Levels = () => {
	const navigate = useNavigate();
	return (
		<div className="levels">
			<header>Select Difficulty Level</header>
			<div className="level-selection-buttons">
				<Tooltip label="3 letter words" placement="right">
					<Button
						size="lg"
						colorScheme="yellow"
						onClick={() =>
							navigate("/play", { state: { level: "Noob" } })
						}
					>
						<div className="insidebtn">
							<span>Noob</span>
							<img src="images/fetus.png" alt="" width="40px" />
						</div>
					</Button>
				</Tooltip>

				<Tooltip placement="right" label="4 letter words">
					<Button
						size="lg"
						colorScheme="blue"
						onClick={() =>
							navigate("/play", { state: { level: "Standard" } })
						}
					>
						<div className="insidebtn">
							<span>Standard</span>
							<img src="images/man.png" alt="" width="40px" />
						</div>
					</Button>
				</Tooltip>

				<Tooltip placement="right" label="5 letter words">
					<Button
						size="lg"
						colorScheme="red"
						onClick={() =>
							navigate("/play", { state: { level: "Original" } })
						}
					>
						<div className="insidebtn">
							<span>Original</span>
							<img src="images/alien.png" alt="" width="40px" />
						</div>
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};

export default Levels;
