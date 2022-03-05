import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./routes/Homepage";
import Levels from "./routes/Levels";
import Rules from "./routes/Rules";
import About from "./routes/About";
import "./styles/App.css";
import Game from "./routes/Game";

function App() {
	useEffect(() => {
		document.title = "Wordle 2.0";
	});
	return (
		<div>
			<div className="pages-wrapper">
				<div className="pages">
					<BrowserRouter>
						<div className="settingsbtn">
							<Sidebar />
						</div>
						<Routes>
							<Route element={<Homepage />} path="/" />
							<Route
								element={<Levels />}
								path="/difficulty-selection"
							/>
							<Route element={<Rules />} path="/rules" />
							<Route element={<About />} path="/about" />
							<Route element={<Game />} path="/play" />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
			<div className="credits">
				<p>Made by Varun Kedia</p>
				<a href="https://github.com/purplevarun">Github</a>
			</div>
		</div>
	);
}
export default App;
