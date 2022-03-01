import { Button } from "@chakra-ui/react";
import React from "react";
import "./../styles/Levels.css";
const Levels = () => {
	return (
		<div className="levels">
			<header>Select Difficulty Level</header>
			<div className="level-selection-buttons">
				<Button size="lg" colorScheme="yellow">
					<div className="insidebtn">
						<span>Noob</span>
						<img src="images/fetus.png" alt="" width="40px" />
					</div>
				</Button>
				<Button size="lg" colorScheme="blue">
					<div className="insidebtn">
						<span>Standard</span>
						<img src="images/man.png" alt="" width="40px" />
					</div>
				</Button>
				<Button size="lg" colorScheme="red">
					<div className="insidebtn">
						<span>Original</span>
						<img src="images/alien.png" alt="" width="40px" />
					</div>
				</Button>
			</div>
		</div>
	);
};

export default Levels;
