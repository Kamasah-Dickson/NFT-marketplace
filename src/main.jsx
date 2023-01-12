import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/profile" />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
