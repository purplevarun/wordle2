import React, { useEffect, useState } from "react";
import "./../styles/Definition.css";
const Definition = ({ title, body }) => {
	const [words, setWords] = useState(-1);
	const chances = 4;
	useEffect(() => {
		title === "Noob"
			? setWords(3)
			: title === "Standard"
			? setWords(4)
			: setWords(5);
	});
	return (
		<div className="definition">
			<h1
				style={{
					color:
						title === "Noob"
							? "yellow"
							: title === "Standard"
							? "teal"
							: "red",
					fontSize: "25px",
				}}
			>
				{title} - {words} letter words
			</h1>
		</div>
	);
};

export default Definition;
