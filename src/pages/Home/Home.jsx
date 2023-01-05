import React from "react";
import Hero from "../../components/Hero/Hero";
import Collections from "../../components/collections/collections";
import Creators from "../../components/creators/creators";
import Categories from "../../components/Categories/Categories";
import "./home.scss";

export default function Home() {
	return (
		<main>
			<Hero />
			<Collections />
			<Creators />
			<Categories />
		</main>
	);
}
