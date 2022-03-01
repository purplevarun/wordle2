import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import "./styles/App.css";

function App() {
	return (
		<div>
			<div className="pages">
				<BrowserRouter>
					<Routes>
						<Route element={<Homepage />} path="/" />
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
