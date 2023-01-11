import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import NFT from "./pages/NFTprofile/NFT";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="/profile"></Route>
				<Route path="/profile/:id" element={<NFT />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
