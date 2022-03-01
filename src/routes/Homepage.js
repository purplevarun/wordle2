import { Button } from "@chakra-ui/react";
import React from "react";
import "./../styles/Homepage.css";

const Homepage = () => {
	return (
		<div className="homepage">
			<div className="main-section">
				<div className="heading">
					Wordle on Steroids &nbsp;
					<img src="images/arm-muscle.png" alt="" width="40px" />
				</div>
				<Button colorScheme="green" size="lg">
					Click to Play Wordle 2.0
				</Button>
			</div>
		</div>
	);
};

export default Homepage;
