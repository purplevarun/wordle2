import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Homepage.css";

const Homepage = () => {
	const navigation = useNavigate();
	const gotoLevelsPage = () => {
		navigation("/difficulty-selection");
	};
	return (
		<div className="homepage">
			<div className="main-section">
				<div className="heading">
					Wordle on Steroids &nbsp;
					<img
						src="images/arm-muscle.png"
						alt=""
						className="arm-muscle-image"
					/>
				</div>
				<Button
					colorScheme="green"
					size="lg"
					onClick={() => gotoLevelsPage()}
				>
					Click to Play Wordle 2.0
				</Button>
			</div>
		</div>
	);
};

export default Homepage;
