import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import "./styles/App.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Homepage />} path="/" />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
