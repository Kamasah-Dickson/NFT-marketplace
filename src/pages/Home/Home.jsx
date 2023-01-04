import React from "react";
import Hero from "../../components/Hero/Hero";
import Collections from "../../components/collections/collections";
import "./home.scss";

export default function Home() {
	return (
		<main>
			<Hero />
			<Collections />
		</main>
	);
}
