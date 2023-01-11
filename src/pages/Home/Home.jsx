import React from "react";
import Hero from "../../components/Hero/Hero";
import Collections from "../../components/collections/collections";
import Creators from "../../components/creators/creators";
import Categories from "../../components/Categories/Categories";
import Discover from "../../components/Discover-More/Discover";
import Mushroom from "../../components/Mushroom/Mushroom";
import HowITWork from "../../components/How-it-works/HowITWork";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
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
			<HowITWork />
			<NewsLetter />
			<Footer />
		</main>
	);
}
