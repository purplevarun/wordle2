import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Levels from "./routes/Levels";
import "./styles/App.css";

function App() {
	useEffect(() => {
		document.title = "Wordle 2.0";
	});
	return (
		<div>
			<div className="pages">
				<BrowserRouter>
					<Routes>
						<Route element={<Homepage />} path="/" />
						<Route
							element={<Levels />}
							path="/difficulty-selection"
						/>
					</Routes>
				</BrowserRouter>
			</div>
			<div className="credits">
				<p>Made by Varun Kedia</p>
				<a href="https://github.com/purplevarun">Github</a>
			</div>
		</div>
	);
}
export default App;
