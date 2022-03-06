import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./routes/Homepage";
import Levels from "./routes/Levels";
import Rules from "./routes/Rules";
import About from "./routes/About";
import "./styles/App.css";
import Game from "./routes/Game";
import Error from "./routes/Error";

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
							<Route
								path="/wordle2/"
								exact
								element={<Homepage />}
							/>
							<Route
								path="/wordle2/difficulty-selection"
								exact
								element={<Levels />}
							/>
							<Route
								path="/wordle2/rules"
								exact
								element={<Rules />}
							/>
							<Route
								path="/wordle2/wordle2"
								exact
								element={<Homepage />}
							/>
							<Route
								path="/wordle2/about"
								exact
								element={<About />}
							/>
							<Route
								path="/wordle2/play"
								exact
								element={<Game />}
							/>
							<Route
								path="/wordle2/notFound"
								exact
								element={<Error />}
							/>
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
