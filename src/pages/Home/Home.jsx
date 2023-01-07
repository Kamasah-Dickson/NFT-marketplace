import React from "react";
import Hero from "../../components/Hero/Hero";
import Collections from "../../components/collections/collections";
import Creators from "../../components/creators/creators";
import Categories from "../../components/Categories/Categories";
import Discover from "../../components/Discover-More/Discover";
import Mushroom from "../../assets/Mushroom/Mushroom";
import "./home.scss";

export default function Home() {
	return (
		<main>
			<Hero />
			<Collections />
			<Creators />
			<Categories />
			<Discover />
			<Mushroom />
		</main>
	);
}
