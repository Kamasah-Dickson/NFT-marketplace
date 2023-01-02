import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
